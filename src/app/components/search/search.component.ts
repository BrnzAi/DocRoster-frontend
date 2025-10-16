import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Specialist {
  id: number;
  name: string;
  title: string;
  facility: string;
  description: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public profileRequested = new EventEmitter<number>();

  protected query = '';
  protected location = '';

  private readonly specialists = signal<Specialist[]>([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'General Medicine, MD | 15 years experience',
      facility: 'Health Advancement Center — Thunder Bay, ON',
      description: 'Specializes in community health programs and remote care for northern communities.',
    },
    {
      id: 2,
      name: 'Dr. Michael Thompson',
      title: 'Occupational Therapist',
      facility: 'Talent Growth Hub, 450 Sinclair St, Thunder Bay',
      description: 'Focus on workplace ergonomics and return-to-work planning.',
    },
    {
      id: 3,
      name: 'Dr. Emily Carter',
      title: 'Physical Medicine & Rehabilitation',
      facility: 'Community Wellness Institute — Winnipeg, MB',
      description: 'Provides long-term rehabilitation plans for catastrophic assessments.',
    },
  ]);

  protected readonly filteredResults = computed(() => {
    const query = this.query.trim().toLowerCase();
    const location = this.location.trim().toLowerCase();

    return this.specialists()
      .filter((specialist) => {
        const matchesQuery = !query || specialist.name.toLowerCase().includes(query) || specialist.title.toLowerCase().includes(query);
        const matchesLocation = !location || specialist.facility.toLowerCase().includes(location);
        return matchesQuery && matchesLocation;
      })
      .slice(0, 6);
  });

  protected openHighlightedProfile(): void {
    const [firstResult] = this.filteredResults();

    if (!firstResult) {
      return;
    }

    this.profileRequested.emit(firstResult.id);
  }

  protected requestProfile(id: number): void {
    this.profileRequested.emit(id);
  }
}
