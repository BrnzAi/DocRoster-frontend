import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() public back = new EventEmitter<void>();
  @Output() public registered = new EventEmitter<void>();

  protected formData: RegisterForm = {
    name: '',
    email: '',
    phone: '',
  };

  protected agreedToTerms = false;
  protected isLoading = false;

  protected async submitForm(): Promise<void> {
    if (!this.agreedToTerms || !this.formData.name || !this.formData.email || this.isLoading) {
      return;
    }

    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    this.isLoading = false;
    this.registered.emit();
  }

  protected async signUpWith(provider: 'Google' | 'Apple'): Promise<void> {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.isLoading = false;
    alert(`${provider} registration would be implemented here.`);
  }

  protected showTerms(): void {
    window.alert('Terms and Conditions would open here.');
  }

  protected handleBack(): void {
    this.back.emit();
  }
}
