import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewStateService } from '../../services/review-state.service';

interface ReviewSpecialist {
  id: number;
  name: string;
  speciality: string;
  location: string;
  languages: string;
  averageFees: string;
  email: string;
  phone: string;
  status: 'missing' | 'ready' | 'new';
  missing: string[];
  notes: string;
}

const INITIAL_SPECIALISTS: ReviewSpecialist[] = [
  {
    id: 1,
    name: 'Dr. Emily Carter',
    speciality: 'Physiatrist',
    location: 'Toronto, ON',
    languages: 'English, French',
    averageFees: '$375',
    email: 'emily.carter@abcmedical.ca',
    phone: '+1 (416) 555-0198',
    status: 'missing',
    missing: ['Clinic / hospital', 'Languages'],
    notes: 'Confirm updated schedule for summer availability.',
  },
  {
    id: 2,
    name: 'Dr. Michael Thompson',
    speciality: 'Gynecologist',
    location: 'Ottawa, ON',
    languages: 'English, Spanish',
    averageFees: '$210',
    email: 'mthompson@capitalcare.org',
    phone: '+1 (613) 555-0126',
    status: 'ready',
    missing: [],
    notes: 'Reviewed and verified on May 12.',
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    speciality: 'Occupational Medicine',
    location: 'Thunder Bay, ON',
    languages: 'English',
    averageFees: '',
    email: 'sjohnson@tbmed.ca',
    phone: '+1 (807) 555-0174',
    status: 'missing',
    missing: ['Languages', 'Average fees'],
    notes: 'Awaiting updated fee schedule from clinic administrator.',
  },
  {
    id: 4,
    name: 'Dr. David Lee',
    speciality: 'Neurologist',
    location: 'Mississauga, ON',
    languages: 'English, Korean',
    averageFees: '$450',
    email: 'dlee@neurohub.ca',
    phone: '+1 (905) 555-0193',
    status: 'new',
    missing: ['Clinic / hospital'],
    notes: 'New specialist imported from roster.',
  },
];

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly reviewState = inject(ReviewStateService);

  protected readonly specialists: ReviewSpecialist[] = INITIAL_SPECIALISTS.map((specialist) => ({
    ...specialist,
    missing: [...specialist.missing],
  }));

  protected selectedSpecialistId: number | null = this.specialists[0]?.id ?? null;
  protected activeSpecialist: ReviewSpecialist | undefined = this.specialists[0];
  protected searchTerm = '';
  protected formModel = {
    email: '',
    phone: '',
    languages: '',
    averageFees: '',
    location: '',
    notes: '',
  };

  private readonly defaultFileName = 'health-solutions-may-2025.csv';
  private readonly fileUpdatedOn = 'May 16, 2025 at 09:45 AM';
  private readonly fileSize = '428 KB';

  protected readonly uploadedFileName = computed(
    () => this.reviewState.uploadedFile() ?? this.defaultFileName,
  );

  ngOnInit(): void {
    this.syncFormWithActive();
    this.updatePendingCount();
  }

  protected get pendingCount(): number {
    return this.reviewState.pendingSpecialists();
  }

  protected get hasFile(): boolean {
    return Boolean(this.reviewState.uploadedFile());
  }

  protected get pendingSummary(): string {
    const count = this.pendingCount;

    if (count === 0) {
      return 'All specialists look good. You can publish when ready.';
    }

    return `${count} specialist${count === 1 ? '' : 's'} need attention before publishing.`;
  }

  protected get fileMeta(): string {
    if (!this.hasFile) {
      return 'Upload a CSV file to populate this review.';
    }

    return `${this.fileSize} • Updated ${this.fileUpdatedOn}`;
  }

  protected get filteredSpecialists(): ReviewSpecialist[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.specialists;
    }

    return this.specialists.filter((specialist) => {
      return (
        specialist.name.toLowerCase().includes(term) ||
        specialist.speciality.toLowerCase().includes(term) ||
        specialist.location.toLowerCase().includes(term)
      );
    });
  }

  protected selectSpecialist(id: number): void {
    this.selectedSpecialistId = id;
    this.activeSpecialist = this.specialists.find((specialist) => specialist.id === id);
    this.syncFormWithActive();
  }

  protected trackBySpecialistId(_: number, specialist: ReviewSpecialist): number {
    return specialist.id;
  }

  protected statusLabel(status: ReviewSpecialist['status']): string {
    if (status === 'missing') {
      return 'Missing info';
    }

    if (status === 'ready') {
      return 'Ready';
    }

    return 'New';
  }

  protected publishNow(): void {
    if (this.pendingCount > 0) {
      window.alert('Complete all missing information before publishing.');
      return;
    }

    window.alert('Roster published to DocRoster.');
    this.reviewState.clearUploadedFile();
    void this.router.navigate(['/profile']);
  }

  protected saveDraft(): void {
    window.alert('Draft saved. You can return to it from your profile.');
  }

  protected openMissingInfo(): void {
    const nextMissing = this.specialists.find((specialist) => specialist.status === 'missing');

    if (nextMissing) {
      this.selectSpecialist(nextMissing.id);
    }
  }

  protected replaceFile(): void {
    void this.router.navigate(['/upload/edit']);
  }

  protected clearFile(): void {
    this.reviewState.clearUploadedFile();
  }

  protected closeReview(): void {
    void this.router.navigate(['/profile']);
  }

  protected backToUpload(): void {
    void this.router.navigate(['/upload/edit']);
  }

  protected saveChanges(): void {
    if (!this.activeSpecialist) {
      return;
    }

    this.activeSpecialist.email = this.formModel.email.trim();
    this.activeSpecialist.phone = this.formModel.phone.trim();
    this.activeSpecialist.languages = this.formModel.languages.trim();
    this.activeSpecialist.averageFees = this.formModel.averageFees.trim();
    this.activeSpecialist.location = this.formModel.location.trim();
    this.activeSpecialist.notes = this.formModel.notes.trim();

    this.refreshMissingState(this.activeSpecialist);
    this.updatePendingCount();
  }

  protected markAsReviewed(): void {
    if (!this.activeSpecialist) {
      return;
    }

    this.activeSpecialist.missing = [];
    this.activeSpecialist.status = 'ready';
    this.updatePendingCount();
  }

  protected flagAsMissing(): void {
    if (!this.activeSpecialist) {
      return;
    }

    if (!this.activeSpecialist.missing.includes('Manual review required')) {
      this.activeSpecialist.missing = [
        ...this.activeSpecialist.missing,
        'Manual review required',
      ];
    }

    this.activeSpecialist.status = 'missing';
    this.updatePendingCount();
  }

  private syncFormWithActive(): void {
    if (!this.activeSpecialist) {
      return;
    }

    this.formModel.email = this.activeSpecialist.email;
    this.formModel.phone = this.activeSpecialist.phone;
    this.formModel.languages = this.activeSpecialist.languages;
    this.formModel.averageFees = this.activeSpecialist.averageFees;
    this.formModel.location = this.activeSpecialist.location;
    this.formModel.notes = this.activeSpecialist.notes;
  }

  private refreshMissingState(specialist: ReviewSpecialist): void {
    const manualFlag = specialist.missing.includes('Manual review required');
    const missing: string[] = [];

    if (!specialist.languages.trim()) {
      missing.push('Languages');
    }

    if (!specialist.location.trim()) {
      missing.push('Clinic / hospital');
    }

    if (!specialist.averageFees.trim()) {
      missing.push('Average fees');
    }

    if (!specialist.email.trim()) {
      missing.push('Email');
    }

    if (manualFlag) {
      missing.push('Manual review required');
    }

    specialist.missing = Array.from(new Set(missing));
    specialist.status = specialist.missing.length ? 'missing' : 'ready';
  }

  private updatePendingCount(): void {
    const pending = this.specialists.filter((specialist) => specialist.status === 'missing').length;
    this.reviewState.setPendingSpecialists(pending);
  }
}
