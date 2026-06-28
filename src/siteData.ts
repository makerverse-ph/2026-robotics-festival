import {
  Bot,
  Brain,
  Code2,
  Cpu,
  Lightbulb,
  Printer,
  Rocket,
  School,
  Trophy,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

export const SITE_URL = 'https://makerverse.ph';
export const BASE = import.meta.env.BASE_URL;

export const ROUTES = {
  home: '/',
  programs: '/programs/',
  makerLab: '/3d-printing/',
  events: '/events/',
  contact: '/contact/',
  festival: '/robotics-festival-2026/',
  festivalAlt: '/events/robotics-festival-2026/',
};

export const MAKERVERSE = {
  name: 'Makerverse',
  tagline: 'Learn, Create, Innovate.',
  location: '2nd Floor, EJ Agri-vet Trading Building, Barra, Dipolog City, Zamboanga del Norte, Philippines',
  shortLocation: 'Dipolog City',
  facebookUrl: 'https://www.facebook.com/makerverse.ph',
  email: 'contact@simriventures.com',
  mapsUrl: 'https://maps.app.goo.gl/unwFu5XpDx7k5M9C6',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d493.1339334216984!2d123.3409062!3d8.5891275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325497503b1fc93f%3A0x56b26f4d3b700f92!2sMakerverse!5e0!3m2!1sen!2sph!4v1782639651813!5m2!1sen!2sph',
};

export const BRAND_COLORS = {
  orange: '#FF6321',
  blue: '#0056B3',
  navy: '#003366',
};

export const REGISTRATION_URL = 'https://forms.gle/6W3upEFHpdKqzuJv6';
export const GAME_RULES_URL = '/game-rules-and-details.pdf';
export const FESTIVAL_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=1st+Dipolog+Robotics+Festival+%26+Competition+2026&dates=20260411T010000Z/20260411T090000Z&details=Not+joining+a+game+category%3F+You%E2%80%99re+still+invited.+Explore+live+demos%2C+robotics+exhibits%2C+drone+and+UAV%2FUGV+showcases%2C+communication+technologies+like+LoRa%2C+product+displays%2C+and+hands-on+tech+experiences+for+all+ages.&location=Zamboanga+del+Norte+Cultural+and+Sports+Center%2C+Dipolog+City';

export const ASSETS = {
  logo: `${BASE}makerverse-logo.jpg`,
  mascot: `${BASE}mascot.png`,
  mainBackground: `${BASE}makerverse-robots-hero.png`,
  socialCard: `${BASE}social-card.jpg`,
  programFlow: `${BASE}program-flow-2026.jpg`,
  studentLearning: [
    `${BASE}student-learning-1.jpg`,
    `${BASE}student-learning-2.jpg`,
    `${BASE}student-learning-3.jpg`,
    `${BASE}student-learning-4.jpg`,
    `${BASE}student-learning-5.jpg`,
  ],
};

export interface ProgramTrack {
  name: string;
  label: string;
  description: string;
  level: string;
  status?: string;
  topics: string[];
  price?: string;
}

export const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    name: 'Ignition Track',
    label: 'Beginner',
    level: 'First steps',
    description: 'A beginner-friendly introduction to robotics, coding, electronics, and maker skills.',
    topics: ['Robotics basics', 'Visual coding', 'Simple circuits', 'Guided builds'],
  },
  {
    name: 'Blast Off',
    label: 'Intermediate',
    level: 'Project builder',
    description: 'Project-based learning for students ready to build more capable systems.',
    topics: ['Sensors and motors', 'Microcontrollers', 'Robot behavior', 'Team challenges'],
  },
  {
    name: 'Lift Off',
    label: 'Advanced',
    level: 'Real-world builds',
    description: 'Advanced hands-on learning for robotics, IoT, AI, and working prototypes.',
    topics: ['IoT systems', 'AI and vision', 'Automation', 'Competition prep'],
  },
  {
    name: 'Ascent',
    label: 'Coming Soon',
    level: 'Future track',
    description: 'A future advanced pathway for learners pursuing larger innovation and engineering projects.',
    topics: ['Advanced robotics', 'Applied AI', 'Research builds', 'Capstone projects'],
    status: 'Coming Soon',
  },
];

export const MAKERVERSE_PILLARS = [
  {
    title: 'Learn',
    icon: Rocket,
    copy: 'Start with guided lessons in robotics, coding, electronics, AI, and 3D printing.',
  },
  {
    title: 'Create',
    icon: Wrench,
    copy: 'Build working projects using sensors, microcontrollers, motors, design tools, and fabrication equipment.',
  },
  {
    title: 'Innovate',
    icon: Lightbulb,
    copy: 'Apply your skills to competitions, prototypes, community problems, and future-ready technology projects.',
  },
];

export const MAKER_LAB_SERVICES = [
  { title: 'Robotics Workshops', icon: Bot },
  { title: 'Coding for Kids and Teens', icon: Code2 },
  { title: 'AI and Computer Vision Learning', icon: Brain },
  { title: 'Electronics and IoT Projects', icon: Cpu },
  { title: '3D Printing and Prototyping', icon: Printer },
  { title: 'Laser Cutting and Fabrication', icon: Wrench },
  { title: 'School Partnerships and STEM Training', icon: School },
  { title: 'Events, Competitions, and Showcases', icon: Trophy },
];

export const HOMEPAGE_CREDIBILITY = [
  'Hands-on STEM learning in Dipolog City',
  'Robotics, AI, coding, electronics, and 3D printing',
  'Home of the Dipolog Robotics Festival',
  'Built for schools, learners, hobbyists, and future innovators',
];

export const MAKERVERSE_BENEFITS = [
  'Project-based learning, not just lectures',
  'Beginner-friendly pathways',
  'Real tools and real hardware',
  'Mentorship from makers and technologists',
  'A local innovation hub in Dipolog',
  'Designed for kids, teens, schools, hobbyists, and future engineers',
  'Builds confidence, creativity, and problem-solving skills',
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const MAKERVERSE_FAQS: FaqItem[] = [
  {
    question: 'What is Makerverse?',
    answer:
      'Makerverse is a hands-on learning center and creative technology lab in Dipolog City where learners build real projects in robotics, coding, AI, electronics, 3D printing, and maker education.',
  },
  {
    question: 'Where is Makerverse located?',
    answer:
      'Makerverse is located on the 2nd Floor of EJ Agri-vet Trading Building, Barra, Dipolog City, Zamboanga del Norte, Philippines.',
  },
  {
    question: 'Is Makerverse beginner-friendly?',
    answer:
      'Yes. Makerverse programs are designed with beginner-friendly pathways, guided lessons, and project challenges that help learners grow step by step.',
  },
  {
    question: 'What age groups can join?',
    answer:
      'Makerverse serves kids, students, schools, hobbyists, interns, lifelong learners, and future innovators. Specific workshops may have recommended age ranges.',
  },
  {
    question: 'What programs does Makerverse offer?',
    answer:
      'Programs cover robotics, coding, AI, electronics, IoT, 3D printing, creative technology, and project-based STEM learning.',
  },
  {
    question: 'Do students need prior coding or robotics experience?',
    answer:
      'No. Many sessions start from the basics and help students learn through guided builds, experiments, and real tools.',
  },
  {
    question: 'Does Makerverse offer 3D printing services?',
    answer:
      'Makerverse supports 3D printing and prototyping as part of its maker lab and learning programs. Message Makerverse for current availability.',
  },
  {
    question: 'Can schools partner with Makerverse?',
    answer:
      'Yes. Makerverse works with schools and learning communities for STEM training, workshops, events, and hands-on innovation activities.',
  },
  {
    question: 'How can I join a workshop?',
    answer:
      'Send Makerverse a message through Facebook or email to ask about current workshop schedules, enrollment, and visit options.',
  },
  {
    question: 'Where can I learn more about the Dipolog Robotics Festival?',
    answer:
      'Visit the dedicated Robotics Festival page for event details, competition categories, rules, program flow, and venue information.',
  },
];

export interface GameEvent {
  name: string;
  type: 'Autonomous' | 'RC' | 'Theme-based';
  players: string;
  levels: string[];
}

export const GAME_EVENTS: GameEvent[] = [
  { name: 'Line Tracing (Programmable)', type: 'Autonomous', players: '1 Player', levels: ['Grade 1 - 3', 'Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
  { name: 'Shoot the Ball / MakerBall', type: 'Autonomous', players: '1 Player', levels: ['Grade 1 - 3', 'Grade 4 - 8'] },
  { name: 'Sumobot / Robo Push (Autonomous)', type: 'Autonomous', players: '1-2 Players', levels: ['Open'] },
  { name: 'Sumobot / Robo Push (RC)', type: 'RC', players: '1-2 Players', levels: ['Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
  { name: 'SoccerBot (RC)', type: 'RC', players: '3 Players + 1 Coach', levels: ['Open'] },
  { name: 'Track Mania (RC)', type: 'RC', players: '1-2 Players', levels: ['Open'] },
  { name: 'Innovation / Future Makers', type: 'Theme-based', players: '1-3 Participants', levels: ['Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
];

export const FESTIVAL_DETAILS = {
  name: '1st Dipolog Robotics Festival & Competition 2026',
  tagline: 'Learn, Create, Innovate',
  date: 'April 11, 2026',
  startDate: '2026-04-11T07:30:00+08:00',
  endDate: '2026-04-11T17:00:00+08:00',
  venue: 'Zamboanga del Norte Cultural and Sports Center',
  location: 'Dipolog City',
  description:
    'The Dipolog Robotics Festival is Makerverse’s advocacy-driven STEM event bringing together students, schools, makers, and innovators for robotics competitions, showcases, and future-ready learning.',
};

export const FESTIVAL_FAQS: FaqItem[] = [
  {
    question: 'Is there a registration fee?',
    answer:
      'No, the Dipolog Robotics Festival is completely free of charge. The goal is to make STEM accessible to interested learners, especially students from public schools.',
  },
  {
    question: 'Who can participate in the competitions?',
    answer:
      'The event is open to students from Grade 1 to Grade 12, with an Open Category for older participants, teachers, mentors, and hobbyists.',
  },
  {
    question: 'How many games can I join?',
    answer:
      'Participants can join all game clusters, but are limited to 1 game per cluster, or 2 games in selected clusters. Check the schedule to avoid conflicts.',
  },
  {
    question: 'What should participants bring?',
    answer:
      'Participants must bring their fully assembled robot, measuring tools, a stopwatch or timer, and tools for minor adjustments. Some games require ping-pong balls, extra batteries, or a remote controller.',
  },
  {
    question: 'Where is the venue located?',
    answer:
      'The event will be held at the Zamboanga del Norte Cultural and Sports Center, located at General Luna, Estaka, Dipolog City.',
  },
  {
    question: 'What time should I arrive?',
    answer:
      'Doors open at 7:30 AM for registration and robot inspection. Participants are encouraged to arrive early before the opening program.',
  },
  {
    question: 'How can I get more information?',
    answer:
      'Send a message through the Makerverse Facebook page or email contact@simriventures.com for event, registration, and competition questions.',
  },
];

export const HOMEPAGE_KEYWORDS = [
  'Makerverse Dipolog',
  'robotics classes Dipolog',
  'coding classes Dipolog',
  'AI learning Philippines',
  '3D printing Dipolog',
  'maker lab Philippines',
  'STEM learning Dipolog',
  'robotics for kids Philippines',
  'maker community Philippines',
];

export const FESTIVAL_KEYWORDS = [
  'Dipolog Robotics Festival',
  'robotics competition Dipolog',
  'robotics competition Philippines',
  'STEM event Dipolog',
  'maker event Philippines',
  'student robotics competition',
];

export const SECTION_PATHS: Record<string, string> = {
  '/programs': 'programs',
  '/programs/': 'programs',
  '/3d-printing': 'maker-lab',
  '/3d-printing/': 'maker-lab',
  '/events': 'events',
  '/events/': 'events',
  '/contact': 'contact',
  '/contact/': 'contact',
  '/blog': 'contact',
  '/blog/': 'contact',
};

export const FEATURE_BADGES = [
  { label: 'Beginner-friendly', icon: Users },
  { label: 'Project-based', icon: Zap },
  { label: 'Real tools', icon: Wrench },
  { label: 'Local maker hub', icon: School },
];
