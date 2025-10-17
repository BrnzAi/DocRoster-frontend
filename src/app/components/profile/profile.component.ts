import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

type ContactInfo = {
  icon: string;
  text: string;
  href: string;
  iconStyle: Record<string, string>;
};

type Statistic = {
  value: string;
  label: string;
};

type Specialist = {
  name: string;
  schedule: string;
  image: string;
  phoneIcon: string;
  messageIcon: string;
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private readonly router = inject(Router);

  protected readonly contactInfo: ContactInfo[] = [
    {
      icon: 'assets/profile/vector.svg',
      text: 'sarah@medicalcenter.com',
      href: 'mailto:sarah@medicalcenter.com',
      iconStyle: {
        width: '83.33%',
        height: '66.67%',
        top: '16.67%',
        left: '8.33%',
      },
    },
    {
      icon: 'assets/profile/vector-1.svg',
      text: '(416) 123-4567',
      href: 'tel:+14161234567',
      iconStyle: {
        width: '75%',
        height: '75%',
        top: '12.5%',
        left: '12.5%',
      },
    },
  ];

  protected readonly statistics: Statistic[] = [
    {
      value: '503',
      label: 'Total active pins',
    },
    {
      value: '11',
      label: 'Added in 30 d.',
    },
  ];

  protected readonly specialists: Specialist[] = [
    {
      name: 'Dr. Emily Carter',
      schedule: 'Mon-Fri  |  09:00-13:00',
      image: 'assets/profile/ellipse-5.png',
      phoneIcon: 'assets/profile/vector-3.svg',
      messageIcon: 'assets/profile/vector-8.svg',
    },
    {
      name: 'Dr. Sarah Johnson',
      schedule: 'Mon, Wed  |  09:00-18:00',
      image: 'assets/profile/ellipse-5-1.png',
      phoneIcon: 'assets/profile/vector-7.svg',
      messageIcon: 'assets/profile/vector-8.svg',
    },
    {
      name: 'Dr. David Lee',
      schedule: 'Thu  |  12:00-15:30',
      image: 'assets/profile/ellipse-5-2.png',
      phoneIcon: 'assets/profile/vector-7.svg',
      messageIcon: 'assets/profile/vector-8.svg',
    },
  ];

  protected closeProfile(): void {
    void this.router.navigate(['/search']);
  }

  protected openEditSpecialist(): void {
    void this.router.navigate(['/upload/edit']);
  }

  protected openAddSpecialist(): void {
    void this.router.navigate(['/upload/new']);
  }
}
