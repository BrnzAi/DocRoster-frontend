import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';

@Component({
  standalone: true,
  imports: [RegisterComponent],
  template: `
    <app-register (back)="goBack()" (registered)="handleRegistered()"></app-register>
  `,
})
export class RegisterRouteComponent {
  private readonly router = inject(Router);

  protected goBack(): void {
    void this.router.navigate(['/']);
  }

  protected handleRegistered(): void {
    void this.router.navigate(['/search']);
  }
}
