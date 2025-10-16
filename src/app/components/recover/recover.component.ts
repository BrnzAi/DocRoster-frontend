import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  @Output() public close = new EventEmitter<void>();

  protected email = '';

  protected handleSubmit(event: Event): void {
    event.preventDefault();

    if (!this.email) {
      return;
    }

    alert('A recovery link would be sent to ' + this.email);
  }

  protected handleClose(): void {
    this.close.emit();
  }
}
