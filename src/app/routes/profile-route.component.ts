import { Component } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';

@Component({
  standalone: true,
  imports: [ProfileComponent],
  template: ` <app-profile></app-profile> `,
})
export class ProfileRouteComponent {}
