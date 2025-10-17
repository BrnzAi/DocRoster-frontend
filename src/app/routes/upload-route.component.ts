import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadComponent } from '../components/upload/upload.component';

type Mode = 'create' | 'edit';

@Component({
  standalone: true,
  imports: [UploadComponent],
  template: ` <app-upload [mode]="mode"></app-upload> `,
})
export class UploadRouteComponent {
  protected readonly mode: Mode =
    (inject(ActivatedRoute).snapshot.data['mode'] as Mode | undefined) ?? 'create';
}
