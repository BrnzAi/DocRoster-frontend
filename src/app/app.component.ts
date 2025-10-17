import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type ScreenKey =
  | 'box'
  | 'recover'
  | 'search'
  | 'specialist'
  | 'profile'
  | 'upload'
  | 'register'
  | 'review';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly router = inject(Router);

  protected readonly activeScreen = signal<ScreenKey>('box');
  protected readonly showBackButton = computed(() => this.activeScreen() !== 'box');

  constructor() {
    this.updateActiveScreen();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateActiveScreen());
  }

  protected handleBackClick(): void {
    const screen = this.activeScreen();

    if (screen === 'specialist') {
      void this.router.navigate(['/search']);
      return;
    }

    if (screen === 'profile') {
      void this.router.navigate(['/search']);
      return;
    }

    if (screen === 'upload') {
      void this.router.navigate(['/profile']);
      return;
    }

    if (screen === 'review') {
      void this.router.navigate(['/upload/edit']);
      return;
    }

    if (screen === 'search' || screen === 'recover') {
      void this.router.navigate(['/']);
      return;
    }

    if (screen === 'register') {
      void this.router.navigate(['/']);
      return;
    }

    void this.router.navigate(['/']);
  }

  protected get backButtonAriaLabel(): string {
    const screen = this.activeScreen();

    if (screen === 'specialist') {
      return 'Back to search results';
    }

    if (screen === 'profile') {
      return 'Back to search results';
    }

    if (screen === 'upload') {
      return 'Back to profile';
    }

    if (screen === 'review') {
      return 'Back to upload';
    }

    if (screen === 'register') {
      return 'Back to sign in';
    }

    if (screen === 'search' || screen === 'recover') {
      return 'Back to sign in';
    }

    return 'Back';
  }

  private updateActiveScreen(): void {
    const url = this.router.url.split('?')[0];

    if (url.startsWith('/recover')) {
      this.activeScreen.set('recover');
      return;
    }

    if (url.startsWith('/search')) {
      this.activeScreen.set('search');
      return;
    }

    if (url.startsWith('/profile')) {
      this.activeScreen.set('profile');
      return;
    }

    if (url.startsWith('/upload')) {
      this.activeScreen.set('upload');
      return;
    }

    if (url.startsWith('/register')) {
      this.activeScreen.set('register');
      return;
    }

    if (url.startsWith('/review')) {
      this.activeScreen.set('review');
      return;
    }

    if (url.startsWith('/specialist/')) {
      this.activeScreen.set('specialist');
      return;
    }

    this.activeScreen.set('box');
  }
}
