import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewStateService } from '../../services/review-state.service';

type Mode = 'create' | 'edit';

type UploadForm = {
  fullName: string;
  description: string;
  gender: string;
  languages: string;
  fieldOfPractice: string;
  speciality: string;
  assessmentType: string;
  workingHours: string;
  workingDays: string;
  averageFees: string;
  clinicHospital: string;
};

type SelectField = {
  key: keyof UploadForm;
  placeholder: string;
  options: string[];
};

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  private readonly router = inject(Router);
  private readonly reviewState = inject(ReviewStateService);

  @Input({ required: false })
  mode: Mode = 'create';

  protected selectedFile: File | null = null;

  protected readonly form: UploadForm = {
    fullName: '',
    description: '',
    gender: '',
    languages: '',
    fieldOfPractice: '',
    speciality: '',
    assessmentType: '',
    workingHours: '',
    workingDays: '',
    averageFees: '',
    clinicHospital: '',
  };

  protected readonly genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

  protected readonly languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Mandarin',
    'Arabic',
    'Portuguese',
    'Russian',
    'Japanese',
    'Hindi',
  ];

  protected readonly workSelectFields: SelectField[] = [
    {
      key: 'fieldOfPractice',
      placeholder: 'Field of practice',
      options: ['General practice', 'Pediatrics', 'Cardiology', 'Dermatology'],
    },
    {
      key: 'speciality',
      placeholder: 'Speciality',
      options: ['Primary care', 'Surgery', 'Neurology', 'Psychiatry'],
    },
    {
      key: 'assessmentType',
      placeholder: 'Assessment type',
      options: ['In-person', 'Remote', 'Hybrid'],
    },
  ];

  protected readonly workTextFields: SelectField[] = [
    {
      key: 'workingHours',
      placeholder: 'Working hours',
      options: [],
    },
    {
      key: 'workingDays',
      placeholder: 'Working days',
      options: [],
    },
  ];

  protected readonly workSingleFields: SelectField[] = [
    {
      key: 'averageFees',
      placeholder: 'Average fees',
      options: [],
    },
    {
      key: 'clinicHospital',
      placeholder: 'Clinic / hospital',
      options: [],
    },
  ];

  protected get heading(): string {
    return this.mode === 'edit' ? 'Edit specialist' : 'Add specialists';
  }

  protected get subheading(): string {
    return this.mode === 'edit'
      ? 'Update the details for the selected specialist or upload a new roster file.'
      : 'Add a new specialist by uploading a roster file or filling in the details manually.';
  }

  protected get backAriaLabel(): string {
    return this.mode === 'edit' ? 'Back to profile' : 'Back to profile overview';
  }

  protected handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    if (file && file.type !== 'text/csv') {
      this.selectedFile = null;
      this.reviewState.clearUploadedFile();
      input.value = '';
      return;
    }

    this.selectedFile = file;

    if (file) {
      this.reviewState.setUploadedFile(file.name);
    } else {
      this.reviewState.clearUploadedFile();
    }
  }

  protected uploadData(): void {
    if (!this.selectedFile) {
      return;
    }

    console.info('Uploading file:', this.selectedFile.name);
    this.reviewState.setUploadedFile(this.selectedFile.name);
    void this.router.navigate(['/review']);
  }

  protected close(): void {
    this.reviewState.clearUploadedFile();
    void this.router.navigate(['/profile']);
  }

  protected goBack(): void {
    this.reviewState.clearUploadedFile();
    void this.router.navigate(['/profile']);
  }

  protected trackByPlaceholder(_: number, field: SelectField): string {
    return field.placeholder;
  }
}
