import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterSelection } from '../../models/filter-selection';
import { SpecialistService, SpecialistSearchResult } from '../../services/specialist.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input()
  public set filters(selection: FilterSelection | undefined) {
    if (this.areFiltersEqual(this.appliedFilters(), selection)) {
      return;
    }

    this.appliedFilters.set(selection);
    void this.runSearch(this.activeQuery(), selection);
  }

  public get filters(): FilterSelection | undefined {
    return this.appliedFilters();
  }

  @Output() public profileRequested = new EventEmitter<number>();
  @Output() public profilePageRequested = new EventEmitter<void>();
  @Output() public filterRequested = new EventEmitter<void>();

  private readonly specialistService = inject(SpecialistService);

  protected query = '';
  protected readonly defaultQuery =
    'Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments';

  private readonly activeQuery = signal('');
  private readonly results = signal<SpecialistSearchResult[]>([]);
  private readonly loading = signal(false);
  private readonly hasLoaded = signal(false);
  private readonly appliedFilters = signal<FilterSelection | undefined>(undefined);
  private searchToken = 0;

  protected readonly filteredResults = computed(() => this.results());

  protected readonly isLoading = computed(() => this.loading());

  protected readonly showEmptyState = computed(
    () => this.hasLoaded() && !this.loading() && this.filteredResults().length === 0,
  );

  protected readonly displayedQuery = computed(() => {
    const query = this.activeQuery().trim();
    return query ? this.activeQuery() : this.defaultQuery;
  });

  constructor() {
    void this.runSearch('', this.appliedFilters());
  }

  protected openProfilePage(): void {
    this.profilePageRequested.emit();
  }

  protected openFilters(): void {
    this.filterRequested.emit();
  }

  protected requestProfile(id: number): void {
    this.profileRequested.emit(id);
  }

  protected handleQueryChange(value: string): void {
    this.query = value;
  }

  protected handleSubmit(event: Event): void {
    event.preventDefault();

    const submittedQuery = this.query.trim();
    this.activeQuery.set(submittedQuery);
    void this.runSearch(submittedQuery, this.appliedFilters());
  }

  protected trackByResultId(_: number, result: SpecialistSearchResult): number {
    return result.id;
  }

  private async runSearch(term: string, filters?: FilterSelection): Promise<void> {
    const currentToken = ++this.searchToken;

    this.loading.set(true);

    const results = await this.specialistService.search(term, filters);

    if (currentToken !== this.searchToken) {
      return;
    }

    this.results.set(results);
    this.loading.set(false);
    this.hasLoaded.set(true);
  }

  private areFiltersEqual(
    previous: FilterSelection | undefined,
    next: FilterSelection | undefined,
  ): boolean {
    if (!previous && !next) {
      return true;
    }

    if (!previous || !next) {
      return false;
    }

    return (
      this.haveMatchingValues(previous.locations, next.locations) &&
      this.haveMatchingValues(previous.fields, next.fields) &&
      this.haveMatchingValues(previous.specialties, next.specialties) &&
      this.haveMatchingValues(previous.assessments, next.assessments) &&
      this.haveMatchingValues(previous.otherOptions, next.otherOptions)
    );
  }

  private haveMatchingValues(first: readonly string[], second: readonly string[]): boolean {
    if (first.length !== second.length) {
      return false;
    }

    const sortedFirst = [...first].sort();
    const sortedSecond = [...second].sort();

    return sortedFirst.every((value, index) => value === sortedSecond[index]);
  }
}
