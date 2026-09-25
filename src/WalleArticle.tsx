import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Facebook,
  PlayCircle,
  Printer,
  UserRound,
} from 'lucide-react';
import { trackMarketingEvent } from './analytics';
import type { MiraQuestArticleImage } from './miraquestArticleData';
import { ROUTES } from './siteData';
import { WALLE_ARTICLE, WALLE_FACEBOOK_POST_URL } from './walleArticleData';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/makerverse.ph';

const sectionClassName = 'scroll-mt-28 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14';
const headingClassName = 'text-2xl font-black leading-tight text-slate-950 sm:text-3xl';
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
        <p className="text-lg font-black text-slate-950">See the finished model in action</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Watch the 1-minute video of Liam’s WALL-E build on the Makerverse Facebook page, and follow us for more
          maker stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={WALLE_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('walle_watch_video_top', WALLE_FACEBOOK_POST_URL)}
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
        onClick={() => trackFacebook('walle_follow_page_top', FACEBOOK_PAGE_URL)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const WalleArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {WALLE_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {WALLE_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {WALLE_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {WALLE_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound size={17} className="text-orange-300" aria-hidden="true" />
              {WALLE_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-orange-300" aria-hidden="true" />
              <time dateTime={WALLE_ARTICLE.publishedDate}>{WALLE_ARTICLE.publishedDateLabel}</time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-orange-300" aria-hidden="true" />
              {WALLE_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={WALLE_ARTICLE.coverImage}
            alt={WALLE_ARTICLE.coverImageAlt}
            width={WALLE_ARTICLE.coverImageWidth}
            height={WALLE_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="screen-to-real">
          <h2 id="screen-to-real" className={headingClassName}>
            A Robot That Started on a Screen
          </h2>
          <p className={paragraphClassName}>
            Some of the best projects start with a simple thought: <em>“I wish I could hold that.”</em> That is exactly
            the spirit behind our latest maker spotlight. Using <strong>3D printing</strong>, Liam brought a{' '}
            <strong>WALL-E model</strong> to life, turning a character that existed on a screen into a real robot model
            you can pick up and hold. It is the kind of build we love to celebrate at Makerverse, our hands-on
            technology learning center in <strong>Dipolog City</strong>.
          </p>
          <p className={paragraphClassName}>
            The finished model was featured in a short video on the Makerverse Facebook page, and the message behind it
            is one we believe in: you find something that inspires you, build it, experiment with it, and who knows?
            You might invent something no one has ever made before.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="how-3d-printing-works">
          <h2 id="how-3d-printing-works" className={headingClassName}>
            How 3D Printing Turns a Digital Design Into a Real Model
          </h2>
          <p className={paragraphClassName}>
            A 3D printer builds an object from a digital file, one thin layer at a time. For beginners, the process can
            feel like magic, but it follows a clear path that any curious learner can understand:
          </p>
          <ArticlePhoto image={WALLE_ARTICLE.supportingImages.workflow} />
          <p className={paragraphClassName}>
            First comes inspiration: a character, a gadget, or an idea you want to see in real life. Next is the
            digital model, a 3D file you design yourself or prepare on the computer. That file is then “sliced” by
            software into hundreds of thin layers the printer can follow. The printer lays down material layer by
            layer until the shape appears, and finally the maker cleans up, assembles and improves the result.
          </p>
          <p className={paragraphClassName}>
            Every step teaches something different. Along the way, makers practice skills such as:
          </p>
          <ArticleBulletList
            items={[
              'Reading and adjusting 3D models',
              'Thinking about size, scale and fit',
              'Planning a build step by step',
              'Patience while a print takes shape',
              'Troubleshooting when something does not print right',
              'Improving the design for the next version',
            ]}
          />
        </section>

        <section className={sectionClassName} aria-labelledby="where-making-begins">
          <h2 id="where-making-begins" className={headingClassName}>
            Why Building Something You Love Is Where Making Begins
          </h2>
          <p className={paragraphClassName}>
            Recreating a favorite robot or character is one of the most natural ways to get started with making. The
            goal is clear and exciting, so learners stay motivated through the less glamorous parts: checking settings,
            re-printing a part, or figuring out why two pieces do not fit together yet.
          </p>
          <p className={paragraphClassName}>
            It also builds confidence. Once you have turned something from a screen into something real, the next
            question comes easily: <em>What else could I make?</em> Maybe a custom part for a robot, a tool that solves a
            small problem at home, or an original design no one has seen before. That is how a fan project grows into
            real engineering thinking.
          </p>
          <p className={paragraphClassName}>
            This is the same path that connects 3D printing with our wider work in{' '}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              robotics, coding and AI programs
            </a>
            : start with curiosity, build something tangible, then keep experimenting.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="start-your-build">
          <h2 id="start-your-build" className={headingClassName}>
            Start Your Own 3D Printing Project in Dipolog
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a local maker hub in Dipolog City, Zamboanga del Norte, where kids, teens, schools, hobbyists
            and future engineers learn by building real projects with real tools. Our{' '}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{' '}
            space sits alongside robotics workshops, electronics projects and creative technology learning.
          </p>
          <p className={paragraphClassName}>
            Whether you already have a design in mind or you are still looking for inspiration, bring your idea and let
            us help you take the first step. You can also explore the robotics projects and showcases from the{' '}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            , or{' '}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              contact us
            </a>{' '}
            to ask about programs and school partnerships.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Visit Makerverse, bring your ideas to life, and start making something amazing.
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Don’t miss the next build</p>
          <h2 id="follow-makerverse" className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share new builds, student projects, workshop moments and event announcements on our Facebook page first.
            Follow <strong className="text-white">Makerverse</strong> so you never miss the next maker spotlight, and
            share Liam’s video with a friend who loves robots.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('walle_follow_page_bottom', FACEBOOK_PAGE_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={WALLE_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('walle_watch_video_bottom', WALLE_FACEBOOK_POST_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PlayCircle size={18} aria-hidden="true" />
              Watch the WALL-E Video
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={ROUTES.makerLab}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Printer size={18} aria-hidden="true" />
              Explore 3D Printing
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

        <p className="text-sm leading-6 text-slate-500">
          WALL-E is a character owned by Disney and Pixar. This fan-made model is featured for learning and inspiration
          and is not affiliated with or endorsed by the rights holders.
        </p>
      </div>

      <aside aria-label="Article topics">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0056B3]">Article topics</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {WALLE_ARTICLE.tags.map((tag) => (
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

export default WalleArticle;
