import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  availability: string;
  about: string;
  tags: string[];
  experience: string;
  languages: string[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  protected readonly filters = ['Терапия', 'Педиатрия', 'Кардиология', 'Эндокринология', 'Онкология'];
  protected readonly doctorList: Doctor[] = [
    {
      id: 1,
      name: 'Анна Кузнецова',
      specialty: 'Кардиолог',
      location: 'Москва, Клиника "Здоровое сердце"',
      rating: 4.9,
      reviews: 212,
      price: '3 500 ₽',
      availability: 'Ближайшее время: 12 июня, 10:30',
      about:
        'Специализируется на профилактике сердечно-сосудистых заболеваний, наблюдении пациентов после операций и подборе индивидуальных программ терапии.',
      tags: ['Профилактика', 'Оперативное лечение', 'Индивидуальные программы'],
      experience: '12 лет',
      languages: ['Русский', 'Английский'],
    },
    {
      id: 2,
      name: 'Игорь Серов',
      specialty: 'Невролог',
      location: 'Санкт-Петербург, Центр неврологии',
      rating: 4.8,
      reviews: 184,
      price: '4 200 ₽',
      availability: 'Доступно завтра, 09:00',
      about:
        'Проводит диагностику и лечение заболеваний центральной и периферической нервной системы. Акцент на современные методики реабилитации.',
      tags: ['Диагностика', 'Реабилитация', 'Современные методики'],
      experience: '15 лет',
      languages: ['Русский', 'Немецкий'],
    },
    {
      id: 3,
      name: 'Мария Литвинова',
      specialty: 'Дерматолог',
      location: 'Екатеринбург, DocRoster Clinic',
      rating: 4.7,
      reviews: 132,
      price: '2 800 ₽',
      availability: 'Есть запись на пятницу, 14:30',
      about:
        'Занимается лечением заболеваний кожи и волос, использует комбинированные программы терапии и аппаратные методики.',
      tags: ['Аппаратная терапия', 'Комбинированные программы'],
      experience: '9 лет',
      languages: ['Русский', 'Французский'],
    },
  ];

  protected readonly notifications = [
    {
      title: 'Подтверждение записи',
      content: 'Ваша запись к Анне Кузнецовой на 12 июня подтверждена. Мы напомним за сутки до визита.',
      time: '5 мин назад',
    },
    {
      title: 'Новые рекомендации',
      content: 'Добавлены персональные рекомендации по профилактике для вашего профиля.',
      time: '1 ч назад',
    },
  ];

  protected query = '';
  protected city = '';
  protected selectedDoctor = signal<Doctor>(this.doctorList[0]);

  protected selectDoctor(doctor: Doctor): void {
    this.selectedDoctor.set(doctor);
  }
}
