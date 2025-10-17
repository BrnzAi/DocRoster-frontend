import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BoxComponent } from '../components/box/box.component';

@Component({
  standalone: true,
  imports: [BoxComponent],
  template: `
    <app-box (forgotPassword)="openRecover()" (signInCompleted)="goToSearch()"></app-box>
  `,
})
export class BoxRouteComponent {
  private readonly router = inject(Router);

  protected openRecover(): void {
    void this.router.navigate(['/recover']);
  }

  protected goToSearch(): void {
    void this.router.navigate(['/search']);
  }
}
