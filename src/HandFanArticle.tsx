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
} from "lucide-react";
import { trackMarketingEvent } from "./analytics";
import {
  HANDFAN_ARTICLE,
  HANDFAN_FACEBOOK_POST_URL,
} from "./handFanArticleData";
import type { MiraQuestArticleImage } from "./miraquestArticleData";
import { ROUTES } from "./siteData";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/makerverse.ph";

const sectionClassName =
  "scroll-mt-28 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14";
const headingClassName =
  "text-2xl font-black leading-tight text-slate-950 sm:text-3xl";
const subheadingClassName =
  "mt-9 text-xl font-black leading-snug text-[#003366] sm:text-2xl";
const paragraphClassName =
  "mt-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9";
const listClassName =
  "mt-6 grid gap-3 text-base leading-7 text-slate-700 sm:grid-cols-2 sm:text-lg sm:leading-8";
const inlineLinkClassName =
  "font-bold text-[#0056B3] underline decoration-[#FF6321]/40 underline-offset-4 hover:decoration-[#FF6321]";

const trackFacebook = (label: string, destination: string) =>
  trackMarketingEvent("facebook_click", {
    category: "social",
    label,
    destination,
  });

const ArticleBulletList = ({ items }: { items: readonly string[] }) => (
  <ul className={listClassName}>
    {items.map((item) => (
      <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3">
        <span
          className="mt-2.5 h-2 w-2 flex-none rounded-full bg-[#FF6321]"
          aria-hidden="true"
        />
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
    aria-label="See the original Facebook post"
    className="flex flex-col gap-5 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
  >
    <div className="flex gap-4">
      <PlayCircle
        size={40}
        className="flex-none text-[#FF6321]"
        aria-hidden="true"
      />
      <div>
        <p className="text-lg font-black text-slate-950">
          Watch the hand fans on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Watch the reel of our Customized Hand Fans on our Facebook page, and
          follow us for more maker creations, updates and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={HANDFAN_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("handfan_watch_video_top", HANDFAN_FACEBOOK_POST_URL)
        }
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
        onClick={() =>
          trackFacebook("handfan_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const HandFanArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {HANDFAN_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {HANDFAN_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {HANDFAN_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {HANDFAN_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {HANDFAN_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={HANDFAN_ARTICLE.publishedDate}>
                {HANDFAN_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {HANDFAN_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={HANDFAN_ARTICLE.coverImage}
            alt={HANDFAN_ARTICLE.coverImageAlt}
            width={HANDFAN_ARTICLE.coverImageWidth}
            height={HANDFAN_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section
          className={sectionClassName}
          aria-labelledby="customized-hand-fan"
        >
          <h2 id="customized-hand-fan" className={headingClassName}>
            A Customized Hand Fan That&apos;s Uniquely You
          </h2>
          <p className={paragraphClassName}>
            Beat the heat with a fan that&apos;s uniquely you! At Makerverse in
            Dipolog City, you can turn an ordinary hand fan into something
            extraordinary with our <strong>Customized Hand Fan</strong>. Add your
            own style, creativity and personality to make a{" "}
            <strong>customized hand fan</strong> that is truly one of a kind.
          </p>
          <p className={paragraphClassName}>
            It is a small, practical item for warm Zamboanga del Norte days, and
            it is also a fun way to see what happens when creativity meets
            innovation. Watch the reel on our Facebook page to see the fans up
            close.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="ordinary-to-extraordinary">
          <h2 id="ordinary-to-extraordinary" className={headingClassName}>
            From Ordinary Fan to Extraordinary
          </h2>
          <p className={paragraphClassName}>
            Most hand fans look the same. A customized one does not. The idea
            behind the Makerverse Customized Hand Fan is simple: start with
            something everyday and make it yours. Three things turn a plain fan
            into a personal one:
          </p>
          <ArticleBulletList
            items={[
              "Your style: the look you want people to notice",
              "Your creativity: new ideas you want to try",
              "Your personality: details that say something about you",
              "One of a kind: a fan nobody else has",
            ]}
          />
          <ArticlePhoto image={HANDFAN_ARTICLE.supportingImages.oneOfAKind} />
          <h3 className={subheadingClassName}>
            A fun idea for students, families and groups
          </h3>
          <p className={paragraphClassName}>
            A fan that carries your own touch is easy to recognize, easy to
            carry and easy to share. If you are thinking about a personalized
            fan for yourself, your class, your family or an event, visit or{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              contact Makerverse
            </a>{" "}
            and ask us about designs and availability.
          </p>
          <h3 className={subheadingClassName}>
            Practical, personal and made to be used
          </h3>
          <p className={paragraphClassName}>
            The best maker projects are the ones people actually use. A hand fan
            goes everywhere: to school, to church, to the market and to family
            gatherings. When it carries your own design, it becomes a small,
            everyday reminder that you made something your own, and a
            conversation starter wherever you bring it.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="fun-of-making">
          <h2 id="fun-of-making" className={headingClassName}>
            Discover the Fun of Making at Makerverse
          </h2>
          <p className={paragraphClassName}>
            The Customized Hand Fan is part of a bigger idea at Makerverse:
            unleash your creativity, explore new ideas and discover the fun of
            making. We shared the reel with the tag #3dprinting, and our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            work is one of the ways we bring custom designs to life in our
            learning center.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Come create, customize, and make something amazing with us!
          </p>
          <h3 className={subheadingClassName}>
            Why making things matters for young learners
          </h3>
          <p className={paragraphClassName}>
            Personalizing an everyday object is a friendly first step into
            design thinking. Learners decide what they want, try an idea, look
            at the result and improve it. Those same habits power bigger maker
            projects, from 3D printed models to robots. You can see that
            progression in stories like our{" "}
            <a href={ROUTES.walleBlog} className={inlineLinkClassName}>
              3D printed WALL-E model
            </a>{" "}
            and our{" "}
            <a href={ROUTES.halloweenBlog} className={inlineLinkClassName}>
              Halloween 3D thermoformed treats
            </a>
            .
          </p>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="learn-create-innovate"
        >
          <h2 id="learn-create-innovate" className={headingClassName}>
            Learn, Create, Innovate in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center in Dipolog City, Zamboanga
            del Norte, where curious minds explore robotics, coding, AI, 3D
            printing and creative technology. Visit Makerverse and experience
            how creativity meets innovation.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If your child enjoys designing and building, explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{" "}
            or start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{" "}
            to see how learners grow from first projects to real-world builds.
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Planning a class activity, a school visit or an event?{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{" "}
            and tell us what you have in mind. You can also see student
            projects and showcases from the{" "}
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
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Come create with us
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share maker creations, student projects and event announcements
            on our Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> for new designs
            and updates, and watch the reel to see the hand fans up close.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("handfan_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={HANDFAN_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "handfan_watch_video_bottom",
                  HANDFAN_FACEBOOK_POST_URL,
                )
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PlayCircle size={18} aria-hidden="true" />
              Watch the Reel
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
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0056B3]">
            Article topics
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {HANDFAN_ARTICLE.tags.map((tag) => (
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

export default HandFanArticle;
