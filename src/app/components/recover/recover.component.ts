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
  @Output() public back = new EventEmitter<void>();

  protected email = '';
  protected isLoading = false;

  protected async submit(): Promise<void> {
    if (!this.email || this.isLoading) {
      return;
    }

    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    this.isLoading = false;
    alert(`Инструкции отправлены на ${this.email}`);
    this.back.emit();
  }
}
