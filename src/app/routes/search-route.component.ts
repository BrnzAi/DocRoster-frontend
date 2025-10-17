import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';

@Component({
  standalone: true,
  imports: [SearchComponent],
  template: `
    <app-search
      (profileRequested)="openProfile($event)"
      (profilePageRequested)="openProfilePage()"
      (filterRequested)="openFilters()"
    ></app-search>
  `,
})
export class SearchRouteComponent {
  private readonly router = inject(Router);

  protected openProfile(id: number): void {
    void this.router.navigate(['/specialist', id]);
  }

  protected openProfilePage(): void {
    void this.router.navigate(['/profile']);
  }

  protected openFilters(): void {
    // Placeholder for upcoming filter functionality
  }
}
