import { Component } from '@angular/core';
import { ReviewComponent } from '../components/review/review.component';

@Component({
  standalone: true,
  imports: [ReviewComponent],
  template: ` <app-review></app-review> `,
})
export class ReviewRouteComponent {}
