import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SearchComponent } from './components/search/search.component';

type ScreenKey = 'box' | 'recover' | 'search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxComponent, RecoverComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected activeScreen: ScreenKey = this.resolveScreen();

  @HostListener('window:hashchange')
  protected onHashChange(): void {
    this.activeScreen = this.resolveScreen();
  }

  protected handleSignIn(): void {
    this.setScreen('search');
  }

  protected openRecover(): void {
    this.setScreen('recover');
  }

  protected closeRecover(): void {
    this.setScreen('box');
  }

  protected goToBox(): void {
    this.setScreen('box');
  }

  protected goToSearch(): void {
    this.setScreen('search');
  }

  private setScreen(screen: ScreenKey): void {
    this.activeScreen = screen;

    if (typeof window !== 'undefined') {
      const hash = screen === 'box' ? '' : `#${screen}`;
      const targetUrl = `${window.location.pathname}${hash}${window.location.search}`;
      window.history.replaceState(null, '', targetUrl);
    }
  }

  private resolveScreen(): ScreenKey {
    if (typeof window === 'undefined' || typeof window.location?.hash !== 'string') {
      return 'box';
    }

    const hash = window.location.hash.replace('#', '').toLowerCase();

    if (hash === 'recover') {
      return 'recover';
    }

    if (hash === 'search') {
      return 'search';
    }

    return 'box';
  }
}
