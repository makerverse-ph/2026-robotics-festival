import React, { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  ChevronRight,
  ExternalLink,
  Facebook,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import FestivalPage from './FestivalPage';
import SoccerbotBracketPage from './SoccerbotBracketPage';
import SumobotBracketPage from './SumobotBracketPage';
import { initGoogleAnalytics, trackMarketingEvent, trackPageView } from './analytics';
import {
  ASSETS,
  FEATURE_BADGES,
  FESTIVAL_DETAILS,
  FESTIVAL_FAQS,
  FESTIVAL_KEYWORDS,
  HOMEPAGE_CREDIBILITY,
  HOMEPAGE_KEYWORDS,
  MAKER_LAB_SERVICES,
  MAKERVERSE,
  MAKERVERSE_BENEFITS,
  MAKERVERSE_FAQS,
  MAKERVERSE_PILLARS,
  PROGRAM_TRACKS,
  ROUTES,
  SECTION_PATHS,
  SITE_URL,
} from './siteData';

type PageKind = 'home' | 'festival' | 'soccerbot' | 'sumobot';

interface RouteState {
  page: PageKind;
  section?: string;
  redirectedPath?: string;
}

const normalizePath = (path: string) => {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '');
};

const absoluteUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
};

const getRouteState = (): RouteState => {
  if (typeof window === 'undefined') return { page: 'home' };

  const params = new URLSearchParams(window.location.search);
  const redirectedPath = params.get('redirect') || undefined;
  const rawPath = redirectedPath || window.location.pathname;
  const path = normalizePath(rawPath);
  const hash = window.location.hash;
  const pageParam = params.get('page');

  if (path === '/soccerbot-bracket' || hash === '#/soccerbot-bracket' || pageParam === 'soccerbot-bracket') {
    return { page: 'soccerbot', redirectedPath };
  }

  if (path === '/sumobot-bracket' || hash === '#/sumobot-bracket' || pageParam === 'sumobot-bracket') {
    return { page: 'sumobot', redirectedPath };
  }

  if (
    path === normalizePath(ROUTES.festival) ||
    path === normalizePath(ROUTES.festivalAlt) ||
    hash === '#/robotics-festival-2026' ||
    pageParam === 'robotics-festival-2026'
  ) {
    return { page: 'festival', redirectedPath };
  }

  return {
    page: 'home',
    section: SECTION_PATHS[rawPath] || SECTION_PATHS[path] || undefined,
    redirectedPath,
  };
};

const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setCanonical = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = 'canonical';
    document.head.appendChild(tag);
  }
  tag.href = href;
};

const faqSchema = (items: typeof MAKERVERSE_FAQS) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const pageMeta = {
  home: {
    title: 'Makerverse Dipolog | Robotics, Coding, AI & 3D Printing',
    description:
      'Makerverse is a hands-on learning center in Dipolog for robotics, coding, AI, electronics, 3D printing, and creative technology.',
    keywords: HOMEPAGE_KEYWORDS,
    canonical: absoluteUrl('/'),
    image: absoluteUrl('/social-card.jpg'),
  },
  festival: {
    title: 'Dipolog Robotics Festival 2026 | Makerverse',
    description:
      'Join the 1st Dipolog Robotics Festival & Competition 2026 by Makerverse, an advocacy-driven STEM event for robotics, innovation, and future creators.',
    keywords: FESTIVAL_KEYWORDS,
    canonical: absoluteUrl(ROUTES.festival),
    image: absoluteUrl('/social-card.jpg'),
  },
};

const buildHomeSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: MAKERVERSE.name,
      url: SITE_URL,
      logo: absoluteUrl('/makerverse-logo.jpg'),
      image: absoluteUrl('/social-card.jpg'),
      slogan: MAKERVERSE.tagline,
      description:
        'Makerverse is a hands-on innovation and learning hub in Dipolog City for robotics, coding, AI, electronics, 3D printing, creative technology, and project-based STEM learning.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, EJ Agri-vet Trading Building, Barra',
        addressLocality: 'Dipolog City',
        addressRegion: 'Zamboanga del Norte',
        addressCountry: 'PH',
      },
      sameAs: [MAKERVERSE.facebookUrl],
      email: MAKERVERSE.email,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: MAKERVERSE.name,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Makerverse Learning Tracks',
      itemListElement: PROGRAM_TRACKS.map((track, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: track.name,
          description: track.description,
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
        },
      })),
    },
    faqSchema(MAKERVERSE_FAQS),
  ],
});

const buildFestivalSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': `${SITE_URL}${ROUTES.festival}#event`,
      name: FESTIVAL_DETAILS.name,
      description: FESTIVAL_DETAILS.description,
      image: absoluteUrl('/social-card.jpg'),
      startDate: FESTIVAL_DETAILS.startDate,
      endDate: FESTIVAL_DETAILS.endDate,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: FESTIVAL_DETAILS.venue,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'General Luna, Estaka',
          addressLocality: 'Dipolog City',
          addressRegion: 'Zamboanga del Norte',
          addressCountry: 'PH',
        },
      },
      organizer: {
        '@type': 'EducationalOrganization',
        name: MAKERVERSE.name,
        url: SITE_URL,
      },
      offers: {
        '@type': 'Offer',
        url: absoluteUrl(ROUTES.festival),
        price: '0',
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
      },
    },
    faqSchema(FESTIVAL_FAQS),
  ],
});

const usePageMeta = (page: PageKind) => {
  useEffect(() => {
    if (page !== 'home' && page !== 'festival') return;

    const meta = pageMeta[page];
    const schema = page === 'home' ? buildHomeSchema() : buildFestivalSchema();

    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords.join(', '));
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:image', meta.image);
    setMetaTag('property', 'og:type', page === 'festival' ? 'event' : 'website');
    setMetaTag('property', 'og:url', meta.canonical);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', meta.image);
    setCanonical(meta.canonical);

    let jsonLd = document.getElementById('page-schema') as HTMLScriptElement | null;
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.id = 'page-schema';
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(schema);
  }, [page]);
};

const MakerverseLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <img src={ASSETS.logo} alt="Makerverse logo" className={`${className} rounded-full object-cover`} />
);

const CtaLink = ({
  href,
  children,
  variant = 'primary',
  external = false,
  analyticsLabel,
  analyticsAction = 'cta_click',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  external?: boolean;
  analyticsLabel?: string;
  analyticsAction?: string;
}) => {
  const classes = {
    primary:
      'bg-[#FF6321] text-white hover:bg-[#e85a1e] shadow-lg shadow-orange-500/20 focus-visible:outline-[#FF6321]',
    secondary:
      'bg-white text-slate-950 border border-slate-200 hover:border-[#FF6321] hover:text-[#FF6321] focus-visible:outline-[#0056B3]',
    dark:
      'bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-[#FF6321]',
    light:
      'bg-white/10 text-white border border-white/20 hover:bg-white/15 focus-visible:outline-white',
  };

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() =>
        trackMarketingEvent(analyticsAction, {
          category: 'cta',
          label: analyticsLabel ?? href,
          destination: href,
        })
      }
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${classes[variant]}`}
    >
      {children}
    </a>
  );
};

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '#programs' },
    { label: 'Maker Lab', href: '#maker-lab' },
    { label: 'Events', href: '#events' },
    { label: 'Robotics Festival', href: ROUTES.festival },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all ${
        scrolled ? 'bg-white/95 py-3 shadow-sm backdrop-blur-md' : 'bg-slate-950/45 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6321]">
          <MakerverseLogo className="h-11 w-11" />
          <span className={`text-lg font-black tracking-tight ${scrolled ? 'text-slate-950' : 'text-white'}`}>
            MAKERVERSE
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6321] ${
                scrolled ? 'text-slate-700 hover:text-[#FF6321]' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <CtaLink href="#contact" analyticsLabel="nav_book_visit" analyticsAction="generate_lead">
            <MessageCircle size={18} />
            Book a Visit
          </CtaLink>
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6321] lg:hidden ${
            scrolled ? 'border-slate-200 text-slate-950' : 'border-white/20 text-white'
          }`}
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="absolute left-0 top-full w-full border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#FF6321]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white"
              onClick={() => {
                setIsOpen(false);
                trackMarketingEvent('generate_lead', {
                  category: 'cta',
                  label: 'mobile_nav_book_visit',
                  destination: '#contact',
                });
              }}
            >
              <MessageCircle size={18} />
              Book a Visit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HomeHero = () => (
  <section className="relative flex min-h-screen items-end overflow-hidden bg-slate-950 text-white">
    <img
      src={ASSETS.mainBackground}
      alt="Friendly Makerverse robots and student-built robotics projects inside a modern maker lab"
      className="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-center"
    />
    <div className="absolute inset-0 bg-slate-950/25" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.62),rgba(2,6,23,0.18))]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.05)_42%,rgba(2,6,23,0.72)_100%)]" />

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 px-4 pb-14 pt-36 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-orange-200">
          <Zap size={14} />
          Learn, Create, Innovate
        </div>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.98] text-balance sm:text-6xl lg:text-7xl">
          Where Curiosity Becomes Skill
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
          Makerverse is a hands-on learning center in Dipolog City empowering future innovators through immersive programs in robotics, coding, AI, electronics, 3D printing, and creative technology.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="#contact" analyticsLabel="hero_start_learning" analyticsAction="generate_lead">
            <MessageCircle size={18} />
            Start Learning
          </CtaLink>
          <CtaLink href="#programs" variant="light" analyticsLabel="hero_explore_programs">
            <BookOpen size={18} />
            Explore Programs
          </CtaLink>
          <a
            href={ROUTES.festival}
            onClick={() =>
              trackMarketingEvent('cta_click', {
                category: 'cta',
                label: 'hero_view_robotics_festival',
                destination: ROUTES.festival,
              })
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-2 py-3 text-sm font-bold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4"
          >
            View Robotics Festival 2026
            <ChevronRight size={18} />
          </a>
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-300">
          Beginner-friendly • Project-based • Built for kids, students, schools, and makers
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="ml-auto max-w-sm border-l-4 border-[#FF6321] bg-slate-950/55 p-6 backdrop-blur-sm">
          <img src={ASSETS.mascot} alt="Makerverse robot mascot" className="mb-5 h-32 w-auto" />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Technology learning for the countryside</p>
          <p className="mt-3 text-lg font-semibold leading-7 text-white">
            Build real projects with real tools, guided by mentors who help curious minds become confident makers.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CredibilityStrip = () => (
  <section aria-label="Makerverse credibility" className="border-b border-slate-200 bg-white">
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
      {HOMEPAGE_CREDIBILITY.map((item) => (
        <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF6321]" />
          {item}
        </div>
      ))}
    </div>
  </section>
);

const SectionIntro = ({
  eyebrow,
  title,
  copy,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
}) => (
  <div className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-12 max-w-3xl'}>
    <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#FF6321]">{eyebrow}</p>
    <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
    {copy && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{copy}</p>}
  </div>
);

const MakerverseLocationMap = () => (
  <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
    <div>
      <div className="overflow-hidden rounded-[3rem] shadow-2xl aspect-video lg:aspect-square">
        <iframe
          src={MAKERVERSE.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Makerverse location map"
          className="h-full w-full"
        />
      </div>
    </div>

    <div>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#FF6321]">Visit Makerverse</p>
      <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
        Find us in Barra, Dipolog City
      </h3>

      <div className="mt-8 space-y-6">
        <div className="flex gap-6">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6321]">
            <MapPin size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Makerverse</h4>
            <p className="text-slate-600 leading-relaxed">{MAKERVERSE.location}</p>
          </div>
        </div>

        <a
          href={MAKERVERSE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackMarketingEvent('cta_click', {
              category: 'location',
              label: 'about_open_google_maps',
              destination: MAKERVERSE.mapsUrl,
            })
          }
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0056B3] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#00458f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
        >
          Open in Google Maps
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </div>
);

const WhatIsMakerverse = () => (
  <section id="about" className="bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="What is Makerverse?"
            title="A creative technology lab where learners turn ideas into working projects."
            copy="From first-time coders to young roboticists and aspiring inventors, Makerverse provides a space to learn by building with real tools, real hardware, and real-world challenges."
          />
          <div className="flex flex-wrap gap-3">
            {FEATURE_BADGES.map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Icon size={16} className="text-[#0056B3]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {MAKERVERSE_PILLARS.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FF6321]">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
      <MakerverseLocationMap />
    </div>
  </section>
);

const Programs = () => (
  <section id="programs" className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionIntro
        eyebrow="Programs"
        title="Learning tracks built for steady, hands-on progress"
        copy="Makerverse programs help learners start from guided fundamentals, build confidence through projects, and grow into more capable robotics, AI, IoT, and maker work."
        align="center"
      />

      <div className="grid gap-5 lg:grid-cols-4">
        {PROGRAM_TRACKS.map((track) => (
          <article key={track.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0056B3]">
                {track.label}
              </span>
              {track.status && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-600">
                  {track.status}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-black text-slate-950">{track.name}</h3>
            <p className="mt-1 text-sm font-bold text-[#FF6321]">{track.level}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{track.description}</p>
            <ul className="mt-5 space-y-2">
              {track.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-[#FF6321]" />
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Pricing and schedule available on inquiry
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <CtaLink href="#contact" analyticsLabel="programs_ask_about" analyticsAction="generate_lead">
          <MessageCircle size={18} />
          Ask About Programs
        </CtaLink>
        <CtaLink
          href={MAKERVERSE.facebookUrl}
          variant="secondary"
          external
          analyticsLabel="programs_message_facebook"
          analyticsAction="generate_lead"
        >
          <Facebook size={18} />
          Message Us
        </CtaLink>
      </div>
    </div>
  </section>
);

const MakerLab = () => (
  <section id="maker-lab" className="bg-slate-950 py-20 text-white sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-orange-300">Maker Lab</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            More Than a Classroom, A Place to Build
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            At Makerverse, learners get access to tools, mentors, kits, machines, and project challenges that turn abstract technology into something they can touch, test, and improve.
          </p>
          <div className="mt-8">
            <CtaLink href="#contact" variant="primary" analyticsLabel="maker_lab_book_visit" analyticsAction="generate_lead">
              <MessageCircle size={18} />
              Book a Visit
            </CtaLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {MAKER_LAB_SERVICES.map(({ title, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-black text-white">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FeaturedEvent = () => (
  <section id="events" className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-xl lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[320px]">
          <img
            src={ASSETS.socialCard}
            alt="1st Dipolog Robotics Festival and Competition 2026 event graphic"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-7 sm:p-10 lg:p-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-orange-300">Featured Event</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">{FESTIVAL_DETAILS.name}</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{FESTIVAL_DETAILS.description}</p>

          <dl className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ['Tagline', FESTIVAL_DETAILS.tagline],
              ['Date', FESTIVAL_DETAILS.date],
              ['Venue', FESTIVAL_DETAILS.venue],
              ['Location', FESTIVAL_DETAILS.location],
            ].map(([label, value]) => (
              <div key={label} className="border-l-2 border-[#FF6321] pl-4">
                <dt className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</dt>
                <dd className="mt-1 text-sm font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={ROUTES.festival} analyticsLabel="featured_event_view_festival">
              <Trophy size={18} />
              View Festival Page
            </CtaLink>
            <CtaLink href="#programs" variant="light" analyticsLabel="featured_event_explore_programs">
              <BookOpen size={18} />
              Explore Programs
            </CtaLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyMakerverse = () => (
  <section className="bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
      <div>
        <SectionIntro
          eyebrow="Why Makerverse?"
          title="From curious minds to confident makers"
          copy="The goal is not just to expose learners to technology. The goal is to help them build skill, confidence, and a practical mindset they can carry into school, competitions, prototypes, and future careers."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {MAKERVERSE_BENEFITS.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <Check size={18} className="mt-0.5 flex-shrink-0 text-[#FF6321]" />
              <p className="text-sm font-bold leading-6 text-slate-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img
          src={ASSETS.studentLearning[3]}
          alt="Young learner holding a controller during a robotics activity"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
        />
        <div className="absolute bottom-5 left-5 right-5 bg-white/92 p-5 shadow-lg backdrop-blur-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0056B3]">Hands-on learning</p>
          <p className="mt-2 text-lg font-black leading-6 text-slate-950">Build real projects with real tools.</p>
        </div>
      </div>
    </div>
  </section>
);

const HomeFAQ = () => (
  <section className="bg-white py-20 sm:py-24" aria-labelledby="faq-title">
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#FF6321]">FAQ</p>
        <h2 id="faq-title" className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Questions Before You Start
        </h2>
      </div>

      <div className="space-y-3">
        {MAKERVERSE_FAQS.map((faq, index) => (
          <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6321]">
              {faq.question}
              <ChevronRight size={18} className="flex-shrink-0 transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="contact" className="bg-[#003366] py-20 text-white sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-center">
      <div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-orange-300">Start here</p>
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Ready to Build Something Real?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          Whether you are a student, parent, teacher, school, hobbyist, or aspiring innovator, Makerverse gives you the space, tools, and guidance to start creating.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink
            href={MAKERVERSE.facebookUrl}
            external
            analyticsLabel="final_message_facebook"
            analyticsAction="generate_lead"
          >
            <Facebook size={18} />
            Message Makerverse
          </CtaLink>
          <CtaLink
            href={`mailto:${MAKERVERSE.email}`}
            variant="light"
            analyticsLabel="final_book_visit_email"
            analyticsAction="generate_lead"
          >
            <Mail size={18} />
            Book a Visit
          </CtaLink>
          <CtaLink href="#programs" variant="light" analyticsLabel="final_explore_programs">
            <BookOpen size={18} />
            Explore Programs
          </CtaLink>
        </div>
      </div>

      <address className="not-italic">
        <div className="rounded-3xl border border-white/15 bg-white/8 p-6">
          <div className="flex gap-4">
            <MapPin className="mt-1 flex-shrink-0 text-orange-300" size={24} />
            <div>
              <p className="font-black">Makerverse</p>
              <p className="mt-2 text-sm leading-7 text-blue-100">{MAKERVERSE.location}</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <Facebook className="mt-1 flex-shrink-0 text-orange-300" size={24} />
            <div>
              <p className="font-black">Follow Makerverse</p>
              <a href={MAKERVERSE.facebookUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 hover:text-white">
                facebook.com/makerverse.ph
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </address>
    </div>
  </section>
);

const SiteFooter = () => {
  const year = new Date().getFullYear();
  const quickLinks = [
    ['Programs', '#programs'],
    ['Maker Lab', '#maker-lab'],
    ['Events', '#events'],
    ['Robotics Festival', ROUTES.festival],
    ['Contact', '#contact'],
  ];

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <MakerverseLogo className="h-12 w-12" />
            <div>
              <p className="text-xl font-black">Makerverse</p>
              <p className="text-sm font-semibold text-slate-400">{MAKERVERSE.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            A hands-on innovation and learning hub in {MAKERVERSE.location}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-300">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-sm font-semibold text-slate-400 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-300">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>{MAKERVERSE.shortLocation}, Zamboanga del Norte</li>
            <li>
              <a href={`mailto:${MAKERVERSE.email}`} className="font-semibold hover:text-white">
                {MAKERVERSE.email}
              </a>
            </li>
            <li>
              <a href={MAKERVERSE.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-slate-500 sm:px-6">
        © {year} Makerverse. All rights reserved.
      </div>
    </footer>
  );
};

const HomePage = ({ section }: { section?: string }) => {
  useEffect(() => {
    if (!section) return;
    const timer = window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [section]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <SiteHeader />
      <main>
        <HomeHero />
        <CredibilityStrip />
        <WhatIsMakerverse />
        <Programs />
        <MakerLab />
        <FeaturedEvent />
        <WhyMakerverse />
        <HomeFAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default function App() {
  const route = useMemo(getRouteState, []);
  usePageMeta(route.page);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    initGoogleAnalytics();
    const path = route.redirectedPath
      ? `${route.redirectedPath}${window.location.hash}`
      : `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const location = route.redirectedPath ? `${window.location.origin}${path}` : window.location.href;
    trackPageView(path, document.title, location);
  }, [route.page, route.section, route.redirectedPath]);

  useEffect(() => {
    if (!route.redirectedPath || typeof window === 'undefined') return;
    window.history.replaceState(null, '', `${route.redirectedPath}${window.location.hash}`);
  }, [route.redirectedPath]);

  if (route.page === 'soccerbot') {
    return <SoccerbotBracketPage />;
  }

  if (route.page === 'sumobot') {
    return <SumobotBracketPage />;
  }

  if (route.page === 'festival') {
    return <FestivalPage />;
  }

  return <HomePage section={route.section} />;
}
