import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';

@Component({
  standalone: true,
  imports: [SearchComponent],
  template: ` <app-search (profileRequested)="openProfile($event)"></app-search> `,
})
export class SearchRouteComponent {
  private readonly router = inject(Router);

  protected openProfile(id: number): void {
    void this.router.navigate(['/specialist', id]);
  }
}
