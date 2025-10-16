import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SearchComponent } from './components/search/search.component';
import { SpecialistComponent } from './components/specialist/specialist.component';

type ScreenKey = 'box' | 'recover' | 'search' | 'specialist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxComponent, RecoverComponent, SearchComponent, SpecialistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected activeScreen: ScreenKey = this.resolveScreen();
  protected selectedSpecialistId: number | null = null;

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

  protected handleProfileRequest(specialistId: number | null = null): void {
    this.selectedSpecialistId = specialistId;
    this.setScreen('specialist');
  }

  protected closeSpecialist(): void {
    this.setScreen('search');
  }

  protected handleBackClick(): void {
    if (this.activeScreen === 'specialist') {
      this.setScreen('search');
      return;
    }

    this.setScreen('box');
  }

  protected get backButtonLabel(): string {
    return this.activeScreen === 'specialist' ? '← Results' : '← Back';
  }

  protected get backButtonAriaLabel(): string {
    if (this.activeScreen === 'specialist') {
      return 'Back to search results';
    }

    if (this.activeScreen === 'search') {
      return 'Back to sign in';
    }

    return 'Back';
  }

  private setScreen(screen: ScreenKey): void {
    if (screen !== 'specialist') {
      this.selectedSpecialistId = null;
    }

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

    if (hash === 'specialist') {
      return 'specialist';
    }

    return 'box';
  }
}
