import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  protected email = '';

  protected handleSubmit(event: Event): void {
    event.preventDefault();
    console.log('Password recovery requested for:', this.email);
  }

  protected handleClose(): void {
    console.log('Close button clicked');
  }
}
