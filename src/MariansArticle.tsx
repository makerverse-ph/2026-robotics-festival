import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Facebook,
  Mail,
  PlayCircle,
  UserRound,
} from 'lucide-react';
import { trackMarketingEvent } from './analytics';
import { MARIANS_ARTICLE, MARIANS_FACEBOOK_POST_URL } from './mariansArticleData';
import type { MiraQuestArticleImage } from './miraquestArticleData';
import { ROUTES } from './siteData';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/makerverse.ph';

const sectionClassName = 'scroll-mt-28 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14';
const headingClassName = 'text-2xl font-black leading-tight text-slate-950 sm:text-3xl';
const subheadingClassName = 'mt-9 text-xl font-black leading-snug text-[#003366] sm:text-2xl';
const paragraphClassName = 'mt-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9';
const listClassName =
  'mt-6 grid gap-3 text-base leading-7 text-slate-700 sm:grid-cols-2 sm:text-lg sm:leading-8';
const inlineLinkClassName =
  'font-bold text-[#0056B3] underline decoration-[#FF6321]/40 underline-offset-4 hover:decoration-[#FF6321]';

const trackFacebook = (label: string, destination: string) =>
  trackMarketingEvent('facebook_click', { category: 'social', label, destination });

const ArticleBulletList = ({ items }: { items: readonly string[] }) => (
  <ul className={listClassName}>
    {items.map((item) => (
      <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3">
        <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-[#FF6321]" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ArticlePhoto = ({ image }: { image: MiraQuestArticleImage }) => (
  <figure className="mx-auto mt-9 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60">
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      className="h-auto w-full object-contain"
    />
    <figcaption className="border-t border-slate-200 px-5 py-4 text-sm font-medium leading-6 text-slate-600 sm:px-6">
      {image.caption}
    </figcaption>
  </figure>
);

const WatchOnFacebook = () => (
  <aside
    aria-label="Watch the original Facebook video"
    className="flex flex-col gap-5 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
  >
    <div className="flex gap-4">
      <PlayCircle size={40} className="flex-none text-[#FF6321]" aria-hidden="true" />
      <div>
        <p className="text-lg font-black text-slate-950">Watch the Marians’ visit</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          See the video from the Saint Mary’s Academy of Dipolog Trial Class on the Makerverse Facebook page, and
          follow us for more school visits and maker stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={MARIANS_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('marians_watch_video_top', MARIANS_FACEBOOK_POST_URL)}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6321]"
      >
        <PlayCircle size={18} aria-hidden="true" />
        Watch on Facebook
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('marians_follow_page_top', FACEBOOK_PAGE_URL)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const MariansArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {MARIANS_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {MARIANS_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {MARIANS_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {MARIANS_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound size={17} className="text-orange-300" aria-hidden="true" />
              {MARIANS_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-orange-300" aria-hidden="true" />
              <time dateTime={MARIANS_ARTICLE.publishedDate}>{MARIANS_ARTICLE.publishedDateLabel}</time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-orange-300" aria-hidden="true" />
              {MARIANS_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={MARIANS_ARTICLE.coverImage}
            alt={MARIANS_ARTICLE.coverImageAlt}
            width={MARIANS_ARTICLE.coverImageWidth}
            height={MARIANS_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="thank-you-marians">
          <h2 id="thank-you-marians" className={headingClassName}>
            A Big Thank You to the Marians
          </h2>
          <p className={paragraphClassName}>
            On behalf of Makerverse, we would like to thank the students of{' '}
            <strong>Saint Mary’s Academy of Dipolog</strong> for visiting us and taking part in our{' '}
            <strong>Makerverse Trial Class</strong>! Hosting the Marians at our hands-on technology learning center in{' '}
            <strong>Dipolog City</strong> was a highlight for our team, and we are grateful for the energy they brought
            into the room.
          </p>
          <p className={paragraphClassName}>
            It was great seeing their curiosity and enthusiasm as they explored technology and experienced what
            Makerverse has to offer. We hope every student went home with a fun and meaningful experience, and maybe a
            few new questions they cannot wait to answer.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="engr-papeth">
          <h2 id="engr-papeth" className={headingClassName}>
            A Special Thank You to Engr. Papeth
          </h2>
          <p className={paragraphClassName}>
            A visit like this does not happen without someone who believes students deserve the chance to explore. A
            special thank you to <strong>Engr. Papeth</strong> for bringing the Marians to Makerverse and giving them
            the opportunity to explore with us.
          </p>
          <p className={paragraphClassName}>
            Teachers and school leaders play a big role in opening that first door. When a class steps out of the
            usual classroom routine and into a maker space, learners get to see that science, math and technology are
            not only lessons to study but tools they can use to build real things.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="what-is-trial-class">
          <h2 id="what-is-trial-class" className={headingClassName}>
            What Is the Makerverse Trial Class?
          </h2>
          <p className={paragraphClassName}>
            The Makerverse Trial Class is a hands-on first look at the kind of learning we do every day. Instead of
            only listening, participants get a chance to explore technology up close and experience what learning at
            Makerverse feels like.
          </p>
          <p className={paragraphClassName}>
            It is a simple, low-pressure way for students, parents and schools to discover whether our approach fits
            their goals before joining a longer program. You can read more about our learning pathways on our{' '}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs page
            </a>
            .
          </p>

          <h3 className={subheadingClassName}>Curiosity is where innovation begins</h3>
          <p className={paragraphClassName}>
            At Makerverse, we believe that curiosity is where innovation begins. Sometimes, all it takes is the
            opportunity to explore, the right tools, and a space where ideas can come to life. That is what we try to
            give every learner who walks through our doors, whether they arrive with a school group or on their own.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="doors-are-open">
          <h2 id="doors-are-open" className={headingClassName}>
            Our Doors Are Open: Technology You Can Explore in Dipolog
          </h2>
          <p className={paragraphClassName}>
            To everyone who is curious about technology, our doors are open for you too! These are the areas learners
            can explore at Makerverse:
          </p>
          <ArticlePhoto image={MARIANS_ARTICLE.supportingImages.explore} />
          <ArticleBulletList
            items={[
              'Robotics: building and programming robots',
              'Coding: turning ideas into instructions',
              'Electronics: circuits, sensors and components',
              'AI: how smart machines learn and decide',
              '3D printing: from a digital design to a real object',
              'Creative technology: mixing art, design and tech',
            ]}
          />
          <p className={paragraphClassName}>
            Interested in the design-and-build side? Visit our{' '}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{' '}
            page. Curious about competitions? See the robotics projects and showcases from the{' '}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="bring-your-school">
          <h2 id="bring-your-school" className={headingClassName}>
            Bring Your School or Child to Makerverse
          </h2>
          <h3 className={subheadingClassName}>For schools and teachers</h3>
          <p className={paragraphClassName}>
            If your school in Dipolog City or anywhere in Zamboanga del Norte would like to give students a similar
            hands-on experience, we would love to hear from you.{' '}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{' '}
            to ask about school visits, trial classes and partnerships.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            You do not need any experience to start. If your child loves asking how things work, taking gadgets apart,
            or dreaming up inventions, Makerverse is a place to turn that curiosity into real skills. Start on our{' '}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{' '}
            to learn more about what we do.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            LEARN. CREATE. INNOVATE.
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Don’t miss the next visit</p>
          <h2 id="follow-makerverse" className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share school visits, trial classes, student projects and event announcements on our Facebook page
            first. Follow <strong className="text-white">Makerverse</strong> for updates, and share the Marians’ video
            with a teacher or parent who would love to bring their learners to explore with us.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('marians_follow_page_bottom', FACEBOOK_PAGE_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={MARIANS_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('marians_watch_video_bottom', MARIANS_FACEBOOK_POST_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PlayCircle size={18} aria-hidden="true" />
              Watch the Trial Class Video
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={ROUTES.contact}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail size={18} aria-hidden="true" />
              Plan a School Visit
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={ROUTES.programs}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <BookOpen size={18} aria-hidden="true" />
              See Programs
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>

      <aside aria-label="Article topics">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0056B3]">Article topics</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {MARIANS_ARTICLE.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </article>
);

export default MariansArticle;
