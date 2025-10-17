import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReviewStateService {
  private readonly uploadedFileInternal = signal<string | null>(null);
  private readonly pendingSpecialistsInternal = signal<number>(3);

  public readonly uploadedFile = computed(() => this.uploadedFileInternal());
  public readonly pendingSpecialists = computed(() => this.pendingSpecialistsInternal());

  public setUploadedFile(name: string | null): void {
    this.uploadedFileInternal.set(name);
  }

  public clearUploadedFile(): void {
    this.uploadedFileInternal.set(null);
  }

  public setPendingSpecialists(count: number): void {
    this.pendingSpecialistsInternal.set(count);
  }
}
