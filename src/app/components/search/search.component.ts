import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpecialistService, SpecialistSearchResult } from '../../services/specialist.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public profileRequested = new EventEmitter<number>();

  private readonly specialistService = inject(SpecialistService);

  protected query = '';
  protected readonly defaultQuery =
    'Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments';

  private readonly results = signal<SpecialistSearchResult[]>([]);
  private readonly loading = signal(false);
  private readonly hasLoaded = signal(false);
  private searchToken = 0;

  protected readonly filteredResults = computed(() => this.results());

  protected readonly isLoading = computed(() => this.loading());

  protected readonly showEmptyState = computed(
    () => this.hasLoaded() && !this.loading() && this.filteredResults().length === 0,
  );

  constructor() {
    this.performSearch('');
  }

  protected openHighlightedProfile(): void {
    const [firstResult] = this.filteredResults();

    if (!firstResult) {
      return;
    }

    this.profileRequested.emit(firstResult.id);
  }

  protected requestProfile(id: number): void {
    this.profileRequested.emit(id);
  }

  protected handleQueryChange(value: string): void {
    this.query = value;
    this.performSearch(value);
  }

  protected trackByResultId(_: number, result: SpecialistSearchResult): number {
    return result.id;
  }

  private async performSearch(term: string): Promise<void> {
    const currentToken = ++this.searchToken;

    this.loading.set(true);

    const results = await this.specialistService.search(term);

    if (currentToken !== this.searchToken) {
      return;
    }

    this.results.set(results);
    this.loading.set(false);
    this.hasLoaded.set(true);
  }
}
