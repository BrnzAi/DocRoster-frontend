import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SearchResultCard {
  id: number;
  name: string;
  details: string[];
  avatar: string;
  alt: string;
  border?: 'top-bottom' | 'bottom' | 'none';
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

  private readonly cards = signal<SearchResultCard[]>([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      details: [
        'General Medicine, fee $175',
        'Health Advancement Center',
        'Sunny Path Community Center, 123 Sunshine Ave, 90210',
      ],
      avatar: 'assets/anima/search/ellipse-5-6.png',
      alt: 'Portrait of Dr. Sarah Johnson',
      border: 'top-bottom',
    },
    {
      id: 2,
      name: 'Dr. Michael Thompson',
      details: [
        'Gynecology, fee $200',
        'Connection Point Center',
        'Talent Growth Hub, 456 Skill St, 90211',
      ],
      avatar: 'assets/anima/search/ellipse-5-7.png',
      alt: 'Portrait of Dr. Michael Thompson',
      border: 'bottom',
    },
    {
      id: 3,
      name: 'Dr. Emily Carter',
      details: [
        'Dermatology, fee $150',
        'Community Wellness Initiative',
        'Insight Development Center, 789 Awareness Blvd, 90212',
      ],
      avatar: 'assets/anima/search/ellipse-5-8.png',
      alt: 'Portrait of Dr. Emily Carter',
      border: 'bottom',
    },
    {
      id: 4,
      name: 'Dr. David Lee',
      details: [
        'Laboratory Diagnostics, fee $75',
        'Innovative Care Clinic',
        'Empowerment Academy, 321 Uplift Rd, 90213',
      ],
      avatar: 'assets/anima/search/ellipse-5-9.png',
      alt: 'Portrait of Dr. David Lee',
      border: 'bottom',
    },
    {
      id: 5,
      name: 'Dr. Emily Greenfield',
      details: [
        'General Medicine, fee $175',
        'Innovative Wellness Center',
        'Inspiration Institute, 789 Elevate Blvd, 90214',
      ],
      avatar: 'assets/anima/search/ellipse-5-10.png',
      alt: 'Portrait of Dr. Emily Greenfield',
      border: 'bottom',
    },
    {
      id: 6,
      name: 'Dr. Sarah Ecohart',
      details: [
        'Gynecology, fee $200',
        'Progressive Health Hub',
        'Creativity Academy, 456 Inspire Ave, 90214',
      ],
      avatar: 'assets/anima/search/ellipse-5-11.png',
      alt: 'Portrait of Dr. Sarah Ecohart',
      border: 'none',
    },
    {
      id: 7,
      name: 'Dr. Sarah Johnson',
      details: [
        'General Medicine, fee $175',
        'Health Advancement Center',
        'Sunny Path Community Center, 123 Sunshine Ave, 90210',
      ],
      avatar: 'assets/anima/search/ellipse-5-6.png',
      alt: 'Portrait of Dr. Sarah Johnson',
      border: 'top-bottom',
    },
    {
      id: 8,
      name: 'Dr. Michael Thompson',
      details: [
        'Gynecology, fee $200',
        'Connection Point Center',
        'Talent Growth Hub, 456 Skill St, 90211',
      ],
      avatar: 'assets/anima/search/ellipse-5-7.png',
      alt: 'Portrait of Dr. Michael Thompson',
      border: 'bottom',
    },
    {
      id: 9,
      name: 'Dr. Emily Carter',
      details: [
        'Dermatology, fee $150',
        'Community Wellness Initiative',
        'Insight Development Center, 789 Awareness Blvd, 90212',
      ],
      avatar: 'assets/anima/search/ellipse-5-8.png',
      alt: 'Portrait of Dr. Emily Carter',
      border: 'bottom',
    },
    {
      id: 10,
      name: 'Dr. David Lee',
      details: [
        'Laboratory Diagnostics, fee $75',
        'Innovative Care Clinic',
        'Empowerment Academy, 321 Uplift Rd, 90213',
      ],
      avatar: 'assets/anima/search/ellipse-5-9.png',
      alt: 'Portrait of Dr. David Lee',
      border: 'bottom',
    },
    {
      id: 11,
      name: 'Dr. Emily Greenfield',
      details: [
        'General Medicine, fee $175',
        'Innovative Wellness Center',
        'Inspiration Institute, 789 Elevate Blvd, 90214',
      ],
      avatar: 'assets/anima/search/ellipse-5-10.png',
      alt: 'Portrait of Dr. Emily Greenfield',
      border: 'bottom',
    },
    {
      id: 12,
      name: 'Dr. Sarah Ecohart',
      details: [
        'Gynecology, fee $200',
        'Progressive Health Hub',
        'Creativity Academy, 456 Inspire Ave, 90214',
      ],
      avatar: 'assets/anima/search/ellipse-5-11.png',
      alt: 'Portrait of Dr. Sarah Ecohart',
      border: 'none',
    },
  ]);

  protected readonly filteredResults = computed(() => {
    const term = this.query.trim().toLowerCase();

    if (!term) {
      return this.cards();
    }

    return this.cards().filter((card) =>
      [card.name, ...card.details].some((value) => value.toLowerCase().includes(term)),
    );
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
