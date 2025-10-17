import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface FilterSelectableOption {
  readonly id: string;
  readonly selected: boolean;
}

interface FilterChipOption extends FilterSelectableOption {
  readonly label: string;
}

interface FilterListOption extends FilterSelectableOption {
  readonly label: string;
  readonly badge?: string;
  readonly count?: number;
  readonly disabled?: boolean;
  readonly meta?: string;
}

interface FilterToggleOption extends FilterSelectableOption {
  readonly label: string;
  readonly description: string;
}

export interface FilterSelection {
  readonly locations: string[];
  readonly fields: string[];
  readonly specialties: string[];
  readonly assessments: string[];
  readonly otherOptions: string[];
}

@Component({
  selector: 'app-filter-overlay',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './filter-overlay.component.html',
  styleUrls: ['./filter-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterOverlayComponent {
  @Input() public open = false;
  @Output() public apply = new EventEmitter<FilterSelection>();
  @Output() public reset = new EventEmitter<void>();
  @Output() public close = new EventEmitter<void>();

  private readonly baseLocationOptions: readonly FilterChipOption[] = [
    { id: 'montreal', label: 'Montreal', selected: true },
    { id: 'quebec-city', label: 'Quebec City', selected: false },
    { id: 'ottawa', label: 'Ottawa', selected: false },
  ];

  private readonly baseFieldOptions: readonly FilterListOption[] = [
    { id: 'family-medicine', label: 'Family medicine', badge: 'Top pick', count: 24, selected: true },
    { id: 'orthopedics', label: 'Orthopedics', count: 8, selected: false },
    { id: 'cardiology', label: 'Cardiology', count: 12, selected: false },
  ];

  private readonly baseSpecialtyOptions: readonly FilterListOption[] = [
    { id: 'knee', label: 'Knee', badge: 'New', count: 6, selected: false },
    { id: 'spine', label: 'Spine', count: 10, selected: false },
    { id: 'sports-medicine', label: 'Sports medicine', count: 4, disabled: true, selected: false },
  ];

  private readonly baseAssessmentOptions: readonly FilterListOption[] = [
    { id: 'in-person', label: 'In person', badge: 'Popular', meta: '2-3 days', selected: true },
    { id: 'virtual', label: 'Virtual', meta: 'Next day', selected: false },
    { id: 'hybrid', label: 'Hybrid', meta: 'Up to 1 week', selected: false },
  ];

  private readonly baseOtherOptions: readonly FilterToggleOption[] = [
    {
      id: 'offers-weekend',
      label: 'Offers weekend appointments',
      description: 'Filter specialists who provide weekend availability.',
      selected: false,
    },
    {
      id: 'accepting-new-patients',
      label: 'Accepting new patients',
      description: 'Only show specialists taking on new cases.',
      selected: true,
    },
  ];

  private locationBaseline: readonly string[] = this.extractSelection(this.baseLocationOptions);
  private fieldBaseline: readonly string[] = this.extractSelection(this.baseFieldOptions);
  private specialtyBaseline: readonly string[] = this.extractSelection(this.baseSpecialtyOptions);
  private assessmentBaseline: readonly string[] = this.extractSelection(this.baseAssessmentOptions);
  private otherBaseline: readonly string[] = this.extractSelection(this.baseOtherOptions);

  protected locationOptions = this.cloneOptions(this.baseLocationOptions);
  protected fieldOptions = this.cloneOptions(this.baseFieldOptions);
  protected specialtyOptions = this.cloneOptions(this.baseSpecialtyOptions);
  protected assessmentOptions = this.cloneOptions(this.baseAssessmentOptions);
  protected otherOptions = this.cloneOptions(this.baseOtherOptions);

  protected get hasChanges(): boolean {
    return !(
      this.compareSelection(this.locationOptions, this.locationBaseline) &&
      this.compareSelection(this.fieldOptions, this.fieldBaseline) &&
      this.compareSelection(this.specialtyOptions, this.specialtyBaseline) &&
      this.compareSelection(this.assessmentOptions, this.assessmentBaseline) &&
      this.compareSelection(this.otherOptions, this.otherBaseline)
    );
  }

  protected toggleLocation(id: string): void {
    this.locationOptions = this.toggleOption(this.locationOptions, id);
  }

  protected toggleField(id: string): void {
    this.fieldOptions = this.toggleOption(this.fieldOptions, id);
  }

  protected toggleSpecialty(id: string): void {
    this.specialtyOptions = this.toggleOption(this.specialtyOptions, id, true);
  }

  protected toggleAssessment(id: string): void {
    this.assessmentOptions = this.toggleOption(this.assessmentOptions, id);
  }

  protected toggleOtherOption(id: string): void {
    this.otherOptions = this.toggleOption(this.otherOptions, id);
  }

  protected requestClose(): void {
    this.close.emit();
  }

  protected handleReset(): void {
    this.resetFilters();
    const selection = this.createSelection();
    this.updateBaselines(selection);
    this.reset.emit();
  }

  protected handleApply(): void {
    const selection = this.createSelection();
    this.updateBaselines(selection);
    this.apply.emit(selection);
  }

  private resetFilters(): void {
    this.locationOptions = this.cloneOptions(this.baseLocationOptions);
    this.fieldOptions = this.cloneOptions(this.baseFieldOptions);
    this.specialtyOptions = this.cloneOptions(this.baseSpecialtyOptions);
    this.assessmentOptions = this.cloneOptions(this.baseAssessmentOptions);
    this.otherOptions = this.cloneOptions(this.baseOtherOptions);
  }

  private createSelection(): FilterSelection {
    return {
      locations: this.getSelectedIds(this.locationOptions),
      fields: this.getSelectedIds(this.fieldOptions),
      specialties: this.getSelectedIds(this.specialtyOptions),
      assessments: this.getSelectedIds(this.assessmentOptions),
      otherOptions: this.getSelectedIds(this.otherOptions),
    };
  }

  private updateBaselines(selection: FilterSelection): void {
    this.locationBaseline = [...selection.locations];
    this.fieldBaseline = [...selection.fields];
    this.specialtyBaseline = [...selection.specialties];
    this.assessmentBaseline = [...selection.assessments];
    this.otherBaseline = [...selection.otherOptions];
  }

  private cloneOptions<T extends FilterSelectableOption>(options: readonly T[]): T[] {
    return options.map((option) => ({ ...option }));
  }

  private extractSelection<T extends FilterSelectableOption>(options: readonly T[]): string[] {
    return options.filter((option) => option.selected).map((option) => option.id);
  }

  private toggleOption<T extends FilterSelectableOption>(
    options: readonly T[],
    id: string,
    respectDisabled = false,
  ): T[] {
    return options.map((option) => {
      if (option.id !== id) {
        return option;
      }

      if (respectDisabled && 'disabled' in option && option.disabled) {
        return option;
      }

      return { ...option, selected: !option.selected };
    });
  }

  private getSelectedIds<T extends FilterSelectableOption>(options: readonly T[]): string[] {
    return options.filter((option) => option.selected).map((option) => option.id);
  }

  private compareSelection<T extends FilterSelectableOption>(options: readonly T[], defaults: readonly string[]): boolean {
    const selectedIds = this.getSelectedIds(options);
    if (selectedIds.length !== defaults.length) {
      return false;
    }

    const sortedSelected = [...selectedIds].sort();
    const sortedDefaults = [...defaults].sort();

    return sortedSelected.every((id, index) => id === sortedDefaults[index]);
  }
}
