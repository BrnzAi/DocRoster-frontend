import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type IconOffsets = {
  top: string;
  left: string;
  width: string;
  height: string;
};

type Specialization = {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  tint: 'midnight' | 'mist' | 'clear';
  offsets: IconOffsets;
};

type ContactItem = {
  id: number;
  text: string;
  icon: string;
  offsets: IconOffsets;
};

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss'],
})
export class SpecialistComponent {
  @Output() public close = new EventEmitter<void>();
  @Input() public specialistId: number | null = null;

  protected readonly intro = {
    name: 'Dr. Emily Carter',
    biography:
      'Dr. Emily Carter is a licensed Physiatrist practicing at ABC Medical Center in Toronto, Ontario. She is fluent in both English and French and has completed over 500 Independent Medical Examinations (IMEs).\nDr. Carter specializes in assessments related to catastrophic impairment (CAT), chronic pain, motor vehicle accidents (MVAs), long-term disability (LTD), return-to-work (RTW), and post-concussion syndromes. Her expertise also includes neurological rehabilitation and functional capacity evaluations. She offers both in-person and virtual assessments and is available to travel within the GTA.',
  } as const;

  protected readonly specializations: Specialization[] = [
    {
      id: 1,
      title: 'Physiatrist',
      subtitle: 'Field of practice',
      icon: 'assets/anima/specialist/vector-2.svg',
      tint: 'midnight',
      offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
    },
    {
      id: 2,
      title: 'CAT (Catastrophic Assessment)',
      subtitle: 'Speciality',
      icon: 'assets/anima/specialist/vector-3.svg',
      tint: 'mist',
      offsets: { top: '4.17%', left: '12.50%', width: '75%', height: '83.33%' },
    },
    {
      id: 3,
      title: 'Paper, Chart, File\nReview Only',
      subtitle: 'Assessment type',
      icon: 'assets/anima/specialist/vector-4.svg',
      tint: 'clear',
      offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '79.17%' },
    },
  ];

  protected readonly contactInfo: ContactItem[] = [
    {
      id: 1,
      text: 'English, Hispanic, French',
      icon: 'assets/anima/specialist/vector-7.svg',
      offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
    },
    {
      id: 2,
      text: '1234 Elm St, Springfield, IL 62704',
      icon: 'assets/anima/specialist/vector-8.svg',
      offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
    },
    {
      id: 3,
      text: 'hello@vivocell.org',
      icon: 'assets/anima/specialist/vector-9.svg',
      offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
    },
    {
      id: 4,
      text: '+1 423 890 1567',
      icon: 'assets/anima/specialist/vector-10.svg',
      offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
    },
  ];

  protected readonly availability = [
    'MON – FRI, 09:00 – 14:00',
    'SAT, 10:00 – 12:00',
    'at VivoCell Clinic',
  ];

  protected handleClose(): void {
    this.close.emit();
  }

  protected splitLines(value: string): string[] {
    return value.split('\n');
  }
}
