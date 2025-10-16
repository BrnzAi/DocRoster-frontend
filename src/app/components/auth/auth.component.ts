import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @Output() public registerRequested = new EventEmitter<void>();
  @Output() public recoverRequested = new EventEmitter<void>();
  @Output() public authenticated = new EventEmitter<void>();

  protected email = '';
  protected password = '';
  protected showPassword = false;
  protected isLoading = false;

  protected async submitForm(): Promise<void> {
    if (!this.email || !this.password || this.isLoading) {
      return;
    }

    this.isLoading = true;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.isLoading = false;
    this.authenticated.emit();
  }

  protected triggerRegister(): void {
    if (!this.isLoading) {
      this.registerRequested.emit();
    }
  }

  protected triggerRecover(): void {
    if (!this.isLoading) {
      this.recoverRequested.emit();
    }
  }

  protected togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  protected async signInWith(provider: 'Google' | 'Apple'): Promise<void> {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.isLoading = false;
    alert(`${provider} Sign-In would be implemented here.`);
  }
}
