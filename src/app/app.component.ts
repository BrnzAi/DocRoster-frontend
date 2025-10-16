import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { RecoverComponent } from './components/recover/recover.component';

type ScreenKey = 'box' | 'recover';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxComponent, RecoverComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected activeScreen: ScreenKey = this.resolveScreen();

  @HostListener('window:hashchange')
  protected onHashChange(): void {
    this.activeScreen = this.resolveScreen();
  }

  private resolveScreen(): ScreenKey {
    if (typeof window === 'undefined' || typeof window.location?.hash !== 'string') {
      return 'box';
    }

    return window.location.hash.replace('#', '').toLowerCase() === 'recover' ? 'recover' : 'box';
  }
}
