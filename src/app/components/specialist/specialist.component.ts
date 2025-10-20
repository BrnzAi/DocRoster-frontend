import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject, signal } from '@angular/core';
import { Specialist, SpecialistGender } from '../../data/specialists';
import { SpecialistService } from '../../services/specialist.service';

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss'],
})
export class SpecialistComponent implements OnChanges {
  @Output() public close = new EventEmitter<void>();
  @Input() public specialistId: number | null = null;

  private readonly specialistService = inject(SpecialistService);

  protected readonly specialist = signal<Specialist | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly notFound = signal(false);

  private readonly genderIcons: Record<SpecialistGender, { icon: string; label: string }> = {
    female: { icon: 'assets/icons/gender-female.svg', label: 'Female specialist' },
    male: { icon: 'assets/icons/gender-male.svg', label: 'Male specialist' },
  };

  private requestToken = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    if ('specialistId' in changes) {
      this.loadSpecialist(this.specialistId);
    }
  }

  protected handleClose(): void {
    this.close.emit();
  }

  protected splitLines(value: string): string[] {
    return value.split('\n');
  }

  protected genderIcon(gender: SpecialistGender): { icon: string; label: string } {
    return this.genderIcons[gender];
  }

  private async loadSpecialist(id: number | null): Promise<void> {
    const token = ++this.requestToken;

    if (id == null) {
      this.specialist.set(null);
      this.isLoading.set(false);
      this.notFound.set(false);
      return;
    }

    this.isLoading.set(true);
    this.notFound.set(false);

    const specialist = await this.specialistService.getSpecialistById(id);

    if (token !== this.requestToken) {
      return;
    }

    this.isLoading.set(false);

    if (!specialist) {
      this.specialist.set(null);
      this.notFound.set(true);
      return;
    }

    this.specialist.set(specialist);
  }
}
