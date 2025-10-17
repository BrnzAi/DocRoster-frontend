import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BoxRouteComponent } from './app/routes/box-route.component';
import { RecoverRouteComponent } from './app/routes/recover-route.component';
import { SearchRouteComponent } from './app/routes/search-route.component';
import { SpecialistRouteComponent } from './app/routes/specialist-route.component';

const routes: Routes = [
  { path: '', component: BoxRouteComponent },
  { path: 'recover', component: RecoverRouteComponent },
  { path: 'search', component: SearchRouteComponent },
  { path: 'specialist/:id', component: SpecialistRouteComponent },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(RouterModule),
    importProvidersFrom(FormsModule),
  ],
}).catch((err) => console.error(err));
