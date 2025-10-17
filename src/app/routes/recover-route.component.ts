import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RecoverComponent } from '../components/recover/recover.component';

@Component({
  standalone: true,
  imports: [RecoverComponent],
  template: ` <app-recover (close)="returnToSignIn()"></app-recover> `,
})
export class RecoverRouteComponent {
  private readonly router = inject(Router);

  protected returnToSignIn(): void {
    void this.router.navigate(['/']);
  }
}
