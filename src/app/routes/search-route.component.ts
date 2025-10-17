import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FilterOverlayComponent, FilterSelection } from '../components/filter-overlay/filter-overlay.component';
import { SearchComponent } from '../components/search/search.component';

@Component({
  standalone: true,
  imports: [SearchComponent, FilterOverlayComponent],
  template: `
    <app-search
      (profileRequested)="openProfile($event)"
      (profilePageRequested)="openProfilePage()"
      (filterRequested)="openFilters()"
    ></app-search>
    <app-filter-overlay
      [open]="filtersOpen"
      (apply)="handleFiltersApplied($event)"
      (reset)="handleFiltersReset()"
      (close)="closeFilters()"
    ></app-filter-overlay>
  `,
})
export class SearchRouteComponent {
  private readonly router = inject(Router);

  protected filtersOpen = false;
  protected appliedFilters?: FilterSelection;

  protected openProfile(id: number): void {
    void this.router.navigate(['/specialist', id]);
  }

  protected openProfilePage(): void {
    void this.router.navigate(['/profile']);
  }

  protected openFilters(): void {
    this.filtersOpen = true;
  }

  protected closeFilters(): void {
    this.filtersOpen = false;
  }

  protected handleFiltersApplied(selection: FilterSelection): void {
    this.appliedFilters = selection;
    this.filtersOpen = false;
  }

  protected handleFiltersReset(): void {
    this.appliedFilters = undefined;
  }
}
