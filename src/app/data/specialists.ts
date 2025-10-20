type IconTint = 'midnight' | 'mist' | 'clear';

export type SpecialistSearchResultBorder = 'top-bottom' | 'bottom' | 'none';

export type SpecialistGender = 'female' | 'male';

export type IconOffsets = {
  top: string;
  left: string;
  width: string;
  height: string;
};

export interface SpecialistSpecialization {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  tint: IconTint;
  offsets: IconOffsets;
}

export interface SpecialistContactItem {
  id: number;
  text: string;
  icon: string;
  offsets: IconOffsets;
}

export interface SpecialistSearchSummary {
  details: string[];
  border: SpecialistSearchResultBorder;
  keywords: string[];
}

export interface Specialist {
  id: number;
  name: string;
  gender: SpecialistGender;
  accentIcon: string;
  avatar: string;
  avatarAlt: string;
  biography: string;
  specializations: SpecialistSpecialization[];
  availability: string[];
  contactInfo: SpecialistContactItem[];
  searchSummary: SpecialistSearchSummary;
}

export const SPECIALISTS: Specialist[] = [
  {
    id: 1,
    name: 'Dr. Emily Carter',
    gender: 'female',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-8.png',
    avatarAlt: 'Portrait of Dr. Emily Carter',
    biography:
      'Dr. Emily Carter is a licensed Physiatrist practicing at ABC Medical Center in Toronto, Ontario. She is fluent in both English and French and has completed over 500 Independent Medical Examinations (IMEs).\nDr. Carter specializes in assessments related to catastrophic impairment (CAT), chronic pain, motor vehicle accidents (MVAs), long-term disability (LTD), return-to-work (RTW), and post-concussion syndromes. Her expertise also includes neurological rehabilitation and functional capacity evaluations. She offers both in-person and virtual assessments and is available to travel within the GTA.',
    specializations: [
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
    ],
    availability: ['MON – FRI, 09:00 – 14:00', 'SAT, 10:00 – 12:00', 'at ABC Medical Center'],
    contactInfo: [
      {
        id: 1,
        text: 'English, French',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '1234 Elm St, Toronto, ON M4B 1B4',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 'emily.carter@abcmedical.ca',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (416) 555-0198',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: [
        'Physiatrist, catastrophic assessments',
        'ABC Medical Center',
        'Toronto, Ontario, Canada',
      ],
      border: 'top-bottom',
      keywords: ['physiatrist', 'catastrophic', 'toronto', 'french', 'neurological rehabilitation'],
    },
  },
  {
    id: 2,
    name: 'Dr. Michael Thompson',
    gender: 'male',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-7.png',
    avatarAlt: 'Portrait of Dr. Michael Thompson',
    biography:
      'Dr. Michael Thompson is a board-certified OB/GYN with over 15 years of experience supporting complex pregnancies and pelvic health in Ottawa. He is a frequent lecturer on minimally invasive procedures and supports patients both in clinic and via telemedicine.\nDr. Thompson collaborates closely with rehabilitation teams to deliver comprehensive care for patients recovering from traumatic injuries.',
    specializations: [
      {
        id: 1,
        title: 'Gynecologist',
        subtitle: 'Field of practice',
        icon: 'assets/anima/specialist/vector-3.svg',
        tint: 'midnight',
        offsets: { top: '8%', left: '12%', width: '76%', height: '80%' },
      },
      {
        id: 2,
        title: 'High-Risk Pregnancy\nSupport',
        subtitle: 'Focus area',
        icon: 'assets/anima/specialist/vector-2.svg',
        tint: 'mist',
        offsets: { top: '14%', left: '10%', width: '80%', height: '72%' },
      },
      {
        id: 3,
        title: 'Telemedicine Consults',
        subtitle: 'Visit type',
        icon: 'assets/anima/specialist/vector-4.svg',
        tint: 'clear',
        offsets: { top: '10%', left: '12%', width: '78%', height: '78%' },
      },
    ],
    availability: ['MON – THU, 08:00 – 16:00', 'FRI, 09:00 – 13:00', 'Hybrid appointments'],
    contactInfo: [
      {
        id: 1,
        text: 'English, Spanish',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '200 Laurier Ave W, Ottawa, ON K1P 5J4',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 'mthompson@capitalcare.org',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (613) 555-0126',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: ['Gynecology, fee $200', "Capital Women's Health", 'Ottawa, Ontario, Canada'],
      border: 'bottom',
      keywords: ['gynecology', 'pelvic', 'ottawa', 'telemedicine', 'pregnancy'],
    },
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    gender: 'female',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-6.png',
    avatarAlt: 'Portrait of Dr. Sarah Johnson',
    biography:
      'Dr. Sarah Johnson is a family physician and occupational health consultant based in Thunder Bay. Her practice focuses on integrating primary care with workplace rehabilitation and return-to-work planning for injured workers.\nShe routinely collaborates with insurers and employers to create sustainable recovery plans tailored to each patient\'s goals.',
    specializations: [
      {
        id: 1,
        title: 'Occupational Medicine',
        subtitle: 'Field of practice',
        icon: 'assets/anima/specialist/vector-2.svg',
        tint: 'midnight',
        offsets: { top: '12%', left: '10%', width: '80%', height: '76%' },
      },
      {
        id: 2,
        title: 'Return-to-Work\nPlanning',
        subtitle: 'Focus area',
        icon: 'assets/anima/specialist/vector-3.svg',
        tint: 'mist',
        offsets: { top: '10%', left: '14%', width: '72%', height: '82%' },
      },
      {
        id: 3,
        title: 'In-person &\nTravel Clinics',
        subtitle: 'Assessment type',
        icon: 'assets/anima/specialist/vector-4.svg',
        tint: 'clear',
        offsets: { top: '8%', left: '10%', width: '84%', height: '80%' },
      },
    ],
    availability: ['MON – FRI, 08:30 – 17:00', 'Travel clinics by request', 'Thunder Bay & GTA'],
    contactInfo: [
      {
        id: 1,
        text: 'English',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '89 Bay St, Thunder Bay, ON P7B 1K5',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 's.johnson@northshoremed.ca',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (807) 555-0142',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: ['General Medicine, fee $175', 'North Shore Occupational Clinic', 'Thunder Bay, Ontario, Canada'],
      border: 'bottom',
      keywords: ['occupational', 'thunder bay', 'return to work', 'travel'],
    },
  },
  {
    id: 4,
    name: 'Dr. David Lee',
    gender: 'male',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-9.png',
    avatarAlt: 'Portrait of Dr. David Lee',
    biography:
      'Dr. David Lee is a medical microbiologist and laboratory diagnostics specialist based in Vancouver. He leads innovation projects focused on rapid testing workflows for post-acute care programs and supports clinical teams with evidence-based recommendations.\nDr. Lee consults with rehabilitation facilities to streamline lab requisitions and interpretation for complex cases.',
    specializations: [
      {
        id: 1,
        title: 'Medical Microbiologist',
        subtitle: 'Field of practice',
        icon: 'assets/anima/specialist/vector-4.svg',
        tint: 'midnight',
        offsets: { top: '12%', left: '12%', width: '78%', height: '76%' },
      },
      {
        id: 2,
        title: 'Rapid Diagnostic\nPanels',
        subtitle: 'Focus area',
        icon: 'assets/anima/specialist/vector-2.svg',
        tint: 'mist',
        offsets: { top: '12%', left: '10%', width: '82%', height: '78%' },
      },
      {
        id: 3,
        title: 'Virtual Lab\nConsults',
        subtitle: 'Assessment type',
        icon: 'assets/anima/specialist/vector-3.svg',
        tint: 'clear',
        offsets: { top: '8%', left: '14%', width: '72%', height: '82%' },
      },
    ],
    availability: ['TUE – SAT, 07:00 – 15:00', 'On-call reporting 24/7', 'Virtual consults available'],
    contactInfo: [
      {
        id: 1,
        text: 'English, Mandarin',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '450 W 10th Ave, Vancouver, BC V5Z 1L7',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 'd.lee@pacificlabs.ca',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (604) 555-0173',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: ['Laboratory Diagnostics, fee $75', 'Pacific Diagnostic Centre', 'Vancouver, British Columbia, Canada'],
      border: 'bottom',
      keywords: ['laboratory', 'diagnostics', 'vancouver', 'virtual lab'],
    },
  },
  {
    id: 5,
    name: 'Dr. Emily Greenfield',
    gender: 'female',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-10.png',
    avatarAlt: 'Portrait of Dr. Emily Greenfield',
    biography:
      'Dr. Emily Greenfield is an internal medicine specialist in Halifax with a focus on chronic disease management and interdisciplinary rehabilitation planning. She is known for building strong patient education programs and coordinating care pathways for complex cases transitioning from hospital to community settings.',
    specializations: [
      {
        id: 1,
        title: 'Internal Medicine',
        subtitle: 'Field of practice',
        icon: 'assets/anima/specialist/vector-2.svg',
        tint: 'midnight',
        offsets: { top: '10%', left: '12%', width: '80%', height: '78%' },
      },
      {
        id: 2,
        title: 'Chronic Disease\nPrograms',
        subtitle: 'Focus area',
        icon: 'assets/anima/specialist/vector-4.svg',
        tint: 'mist',
        offsets: { top: '14%', left: '10%', width: '82%', height: '76%' },
      },
      {
        id: 3,
        title: 'Care Pathway\nDesign',
        subtitle: 'Assessment type',
        icon: 'assets/anima/specialist/vector-3.svg',
        tint: 'clear',
        offsets: { top: '8%', left: '14%', width: '70%', height: '82%' },
      },
    ],
    availability: ['MON – FRI, 10:00 – 18:00', 'Virtual follow-ups available', 'Halifax & Atlantic region'],
    contactInfo: [
      {
        id: 1,
        text: 'English',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '50 University Ave, Halifax, NS B3H 1M1',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 'e.greenfield@harbourhealth.ca',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (902) 555-0158',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: ['General Medicine, fee $175', 'Harbour Health Collective', 'Halifax, Nova Scotia, Canada'],
      border: 'bottom',
      keywords: ['internal medicine', 'halifax', 'care pathways', 'education'],
    },
  },
  {
    id: 6,
    name: 'Dr. Sarah Ecohart',
    gender: 'female',
    accentIcon: 'assets/anima/specialist/vector-11.svg',
    avatar: 'assets/anima/search/ellipse-5-11.png',
    avatarAlt: 'Portrait of Dr. Sarah Ecohart',
    biography:
      "Dr. Sarah Ecohart is a women's health physician in Calgary with dual training in gynecology and lifestyle medicine. She partners with rehabilitation teams to optimize hormonal health during recovery and leads community outreach initiatives focused on preventative care.",
    specializations: [
      {
        id: 1,
        title: "Women's Health Physician",
        subtitle: 'Field of practice',
        icon: 'assets/anima/specialist/vector-3.svg',
        tint: 'midnight',
        offsets: { top: '10%', left: '12%', width: '76%', height: '80%' },
      },
      {
        id: 2,
        title: 'Lifestyle Medicine\nPrograms',
        subtitle: 'Focus area',
        icon: 'assets/anima/specialist/vector-2.svg',
        tint: 'mist',
        offsets: { top: '12%', left: '10%', width: '82%', height: '78%' },
      },
      {
        id: 3,
        title: 'Community Outreach\nClinics',
        subtitle: 'Assessment type',
        icon: 'assets/anima/specialist/vector-4.svg',
        tint: 'clear',
        offsets: { top: '8%', left: '14%', width: '72%', height: '82%' },
      },
    ],
    availability: ['TUE – SAT, 11:00 – 19:00', 'Community clinics twice monthly', 'Calgary & online'],
    contactInfo: [
      {
        id: 1,
        text: 'English, French',
        icon: 'assets/anima/specialist/vector-7.svg',
        offsets: { top: '8.33%', left: '8.33%', width: '83.33%', height: '83.33%' },
      },
      {
        id: 2,
        text: '610 8 Ave SW, Calgary, AB T2P 1G5',
        icon: 'assets/anima/specialist/vector-8.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
      {
        id: 3,
        text: 'secohart@prairiehealth.ca',
        icon: 'assets/anima/specialist/vector-9.svg',
        offsets: { top: '16.67%', left: '8.33%', width: '83.33%', height: '66.67%' },
      },
      {
        id: 4,
        text: '+1 (403) 555-0184',
        icon: 'assets/anima/specialist/vector-10.svg',
        offsets: { top: '12.5%', left: '12.5%', width: '75%', height: '75%' },
      },
    ],
    searchSummary: {
      details: ['Gynecology, fee $200', 'Prairie Health Collaborative', 'Calgary, Alberta, Canada'],
      border: 'none',
      keywords: ['women', 'calgary', 'lifestyle medicine', 'community'],
    },
  },
];
