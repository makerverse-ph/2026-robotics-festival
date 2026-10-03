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
import { HALLOWEEN_ARTICLE, HALLOWEEN_FACEBOOK_POST_URL } from './halloweenArticleData';
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
        <p className="text-lg font-black text-slate-950">Watch the Halloween reveal</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          See our Trick-or-Treat 3D Thermoformed treats in the reel on the Makerverse Facebook page, and follow us
          for more maker products and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={HALLOWEEN_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('halloween_watch_video_top', HALLOWEEN_FACEBOOK_POST_URL)}
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
        onClick={() => trackFacebook('halloween_follow_page_top', FACEBOOK_PAGE_URL)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const HalloweenArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {HALLOWEEN_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {HALLOWEEN_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {HALLOWEEN_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {HALLOWEEN_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound size={17} className="text-orange-300" aria-hidden="true" />
              {HALLOWEEN_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-orange-300" aria-hidden="true" />
              <time dateTime={HALLOWEEN_ARTICLE.publishedDate}>{HALLOWEEN_ARTICLE.publishedDateLabel}</time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-orange-300" aria-hidden="true" />
              {HALLOWEEN_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={HALLOWEEN_ARTICLE.coverImage}
            alt={HALLOWEEN_ARTICLE.coverImageAlt}
            width={HALLOWEEN_ARTICLE.coverImageWidth}
            height={HALLOWEEN_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="halloween-season">
          <h2 id="halloween-season" className={headingClassName}>
            It’s Halloween Season, Makers!
          </h2>
          <p className={paragraphClassName}>
            We’ve got something spook-tacular for you! Our <strong>Trick-or-Treat 3D Thermoformed treats</strong> are
            ready, just in time for Halloween in <strong>Dipolog City</strong>. If you have been looking for Halloween
            3D Thermoformed treats in Dipolog that are a little different from the usual candy bag, this one is for
            you.
          </p>
          <p className={paragraphClassName}>
            And guess what? <strong>Something delicious is hiding inside!</strong> Wanna know what it is? We are not
            telling here. You will have to see it for yourself.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="where-to-find">
          <h2 id="where-to-find" className={headingClassName}>
            Where to Find Our Halloween 3D Thermoformed Treats in Dipolog
          </h2>
          <p className={paragraphClassName}>
            Come and visit… if you dare! Here is everything we have shared so far:
          </p>
          <ArticleBulletList
            items={[
              'What: Makerverse Trick-or-Treat 3D Thermoformed treats',
              'Where: Get N’ Go, Dipolog City Boulevard Gateway',
              'Price: available at a very affordable SRP',
              'Surprise: something delicious is hiding inside',
            ]}
          />
          <p className={paragraphClassName}>
            The Dipolog City Boulevard is already a favorite stop for families, barkadas and visitors from around
            Zamboanga del Norte, so it is an easy place to drop by. Look for <strong>Get N’ Go</strong> at the
            Boulevard Gateway and ask for the Makerverse Halloween treats.
          </p>
          <h3 className={subheadingClassName}>Ideas for sharing them this Halloween</h3>
          <p className={paragraphClassName}>
            Because they come at a very affordable SRP, these treats are easy to share. A few ideas from our team:
          </p>
          <ArticleBulletList
            items={[
              'A trick-or-treat surprise for the kids at home',
              'Small Halloween gifts for classmates and friends',
              'A fun extra for a Halloween party table',
              'A pasalubong for young makers in the family',
            ]}
          />
          <p className={paragraphClassName}>
            However you share them, half the fun is finding out what is hiding inside. No spoilers from us!
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Trick or treat? You decide!
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="what-is-thermoforming">
          <h2 id="what-is-thermoforming" className={headingClassName}>
            What Does “3D Thermoformed” Mean?
          </h2>
          <p className={paragraphClassName}>
            Thermoforming is a way of shaping plastic with heat. In general, a thin plastic sheet is warmed until it
            becomes soft, then formed over a mold so it takes on a three-dimensional shape. Once it cools, the sheet
            keeps that shape. Many everyday items, such as clear packaging and trays, are made this way.
          </p>
          <ArticlePhoto image={HALLOWEEN_ARTICLE.supportingImages.thermoforming} />
          <p className={paragraphClassName}>
            The diagram above shows the general idea, not the exact steps behind this product. What matters for our
            Halloween treats is the result: a fun, shaped piece that makes opening a treat feel like a tiny surprise.
          </p>

          <h3 className={subheadingClassName}>Why makers love processes like this</h3>
          <p className={paragraphClassName}>
            Thermoforming belongs to the same family of skills as 3D design, 3D printing and laser cutting: you start
            with an idea, turn it into a design, and then use a tool to make a real object you can hold. That journey
            from idea to object is at the heart of what we do at Makerverse.
          </p>
          <ArticleBulletList
            items={[
              'Design thinking: planning a shape before making it',
              'Materials: seeing how heat changes plastic',
              'Problem solving: testing, adjusting and trying again',
              'Creativity: turning a seasonal idea into a product',
            ]}
          />
          <p className={paragraphClassName}>
            Want to see more of the design-and-build side of Makerverse? Visit our{' '}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{' '}
            page.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="more-than-a-treat">
          <h2 id="more-than-a-treat" className={headingClassName}>
            More Than a Treat: Learn, Create, Innovate
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center in Dipolog City where curious minds explore robotics, coding, AI
            and creative technology. Seasonal projects like this one are a playful reminder that technology is not
            only for competitions and classrooms. It can also be something you share with family and friends.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If your child picks up one of these treats and starts asking “How did they make this?”, that curiosity is
            exactly where learning starts. Explore our{' '}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{' '}
            or start on our{' '}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{' '}
            to see how learners build real skills with us.
          </p>
          <h3 className={subheadingClassName}>For schools, creators and partners</h3>
          <p className={paragraphClassName}>
            Have an idea for a custom project, a school activity or a collaboration?{' '}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{' '}
            and tell us what you have in mind. You can also see student robotics projects and showcases from the{' '}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            .
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            LEARN. CREATE. INNOVATE.
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Come and visit… if you dare</p>
          <h2 id="follow-makerverse" className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share new maker products, student projects and event announcements on our Facebook page first. Follow{' '}
            <strong className="text-white">Makerverse</strong> for updates, watch the Halloween reel, and share it
            with a friend who loves a good trick-or-treat surprise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('halloween_follow_page_bottom', FACEBOOK_PAGE_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={HALLOWEEN_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('halloween_watch_video_bottom', HALLOWEEN_FACEBOOK_POST_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PlayCircle size={18} aria-hidden="true" />
              Watch the Halloween Reel
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={ROUTES.contact}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail size={18} aria-hidden="true" />
              Contact Makerverse
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
            {HALLOWEEN_ARTICLE.tags.map((tag) => (
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

export default HalloweenArticle;
