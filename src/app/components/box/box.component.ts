import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Output() public forgotPassword = new EventEmitter<void>();
  @Output() public signInCompleted = new EventEmitter<void>();

  protected email = '';
  protected password = '';

  protected submitForm(event: Event): void {
    event.preventDefault();

    if (!this.email || !this.password) {
      return;
    }

    this.signInCompleted.emit();
  }

  protected handleForgotPassword(event: Event): void {
    event.preventDefault();
    this.forgotPassword.emit();
  }
}
