import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  protected email = 'sarah@medicalcenter.com';
  protected password = '*********************';
  protected showPassword = false;

  protected submitForm(event: Event): void {
    event.preventDefault();
    console.log('Sign in submitted', {
      email: this.email,
      password: this.password,
    });
  }

  protected signInWith(provider: 'Apple' | 'Google'): void {
    console.log(`Sign in with ${provider}`);
  }

  protected togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
