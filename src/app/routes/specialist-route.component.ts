import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { SpecialistComponent } from '../components/specialist/specialist.component';

@Component({
  standalone: true,
  imports: [SpecialistComponent],
  template: `
    <app-specialist
      [specialistId]="specialistId() ?? null"
      (close)="closeProfile()"
    ></app-specialist>
  `,
})
export class SpecialistRouteComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly specialistId = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const value = Number(params.get('id'));
        return Number.isFinite(value) ? value : null;
      }),
    ),
    {
      initialValue: (() => {
        const raw = this.route.snapshot.paramMap.get('id');
        const value = raw === null ? NaN : Number(raw);
        return Number.isFinite(value) ? value : null;
      })(),
    },
  );

  protected closeProfile(): void {
    void this.router.navigate(['/search']);
  }
}
