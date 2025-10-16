import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter([]),
    importProvidersFrom(RouterModule),
    importProvidersFrom(FormsModule),
  ],
}).catch((err) => console.error(err));
