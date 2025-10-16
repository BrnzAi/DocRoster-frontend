import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SearchComponent } from './components/search/search.component';

type Page = 'auth' | 'register' | 'recover' | 'search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AuthComponent, RegisterComponent, RecoverComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected currentPage = signal<Page>('auth');

  protected navigateTo(page: Page): void {
    this.currentPage.set(page);
  }

  protected handleAuthenticated(): void {
    this.currentPage.set('search');
  }
}
