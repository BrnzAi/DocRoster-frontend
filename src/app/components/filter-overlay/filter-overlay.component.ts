import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FilterSelection } from '../../models/filter-selection';

type FilterOption = { readonly id: string; readonly label: string };

type SelectionKey = keyof FilterSelection;

@Component({
  selector: 'app-filter-overlay',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-overlay.component.html',
  styleUrls: ['./filter-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterOverlayComponent {
  @Input() public open = false;
  @Output() public apply = new EventEmitter<FilterSelection>();
  @Output() public reset = new EventEmitter<void>();
  @Output() public close = new EventEmitter<void>();

  protected readonly sortingOptions: readonly FilterOption[] = [
    { id: 'fee', label: 'Fee' },
    { id: 'distance', label: 'Distance' },
    { id: 'availability', label: 'Availability' },
  ];

  protected readonly feeOptions: readonly FilterOption[] = [
    { id: 'low', label: 'Low' },
    { id: 'medium', label: 'Medium' },
    { id: 'high', label: 'High' },
  ];

  protected readonly genderOptions: readonly FilterOption[] = [
    { id: 'any', label: 'Any' },
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
  ];

  protected readonly locationOptions: readonly FilterOption[] = [
    { id: 'belleville', label: 'Belleville' },
    { id: 'sault-ste-marie', label: 'Sault Ste. Marie' },
    { id: 'thunder-bay', label: 'Thunder Bay' },
  ];

  protected readonly visitTypeOptions: readonly FilterOption[] = [
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'in-person', label: 'In-person' },
    { id: 'virtual', label: 'Virtual' },
  ];

  private readonly defaultSelection: FilterSelection = {
    sorting: 'availability',
    fee: 'low',
    gender: 'any',
    location: 'thunder-bay',
    visitType: 'hybrid',
  };

  protected selection: FilterSelection = { ...this.defaultSelection };
  private appliedSelection: FilterSelection = { ...this.defaultSelection };

  protected get hasChanges(): boolean {
    return !this.areSelectionsEqual(this.selection, this.appliedSelection);
  }

  protected requestClose(): void {
    this.close.emit();
  }

  protected select(key: SelectionKey, id: string): void {
    if (this.selection[key] === id) {
      return;
    }

    this.selection = { ...this.selection, [key]: id };
  }

  protected isSelected(key: SelectionKey, id: string): boolean {
    return this.selection[key] === id;
  }

  protected handleReset(): void {
    this.selection = { ...this.defaultSelection };
    this.appliedSelection = { ...this.defaultSelection };
    this.reset.emit();
  }

  protected handleApply(): void {
    const selection = { ...this.selection };
    this.appliedSelection = selection;
    this.apply.emit(selection);
  }

  private areSelectionsEqual(first: FilterSelection, second: FilterSelection): boolean {
    return (
      first.sorting === second.sorting &&
      first.fee === second.fee &&
      first.gender === second.gender &&
      first.location === second.location &&
      first.visitType === second.visitType
    );
  }
}
