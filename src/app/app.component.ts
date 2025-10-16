import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box/box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
