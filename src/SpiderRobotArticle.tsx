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
  SPIDER_ARTICLE,
  SPIDER_FACEBOOK_POST_URL,
} from "./spiderRobotArticleData";
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
          Watch the spider robot on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Watch the reel of the Makerverse Spider Robot build on our Facebook
          page, and follow us for more robotics projects, updates and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={SPIDER_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("spider_watch_video_top", SPIDER_FACEBOOK_POST_URL)
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
          trackFacebook("spider_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const SpiderRobotArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {SPIDER_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {SPIDER_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {SPIDER_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {SPIDER_ARTICLE.hero.subheadline}
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
              {SPIDER_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={SPIDER_ARTICLE.publishedDate}>
                {SPIDER_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {SPIDER_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={SPIDER_ARTICLE.coverImage}
            alt={SPIDER_ARTICLE.coverImageAlt}
            width={SPIDER_ARTICLE.coverImageWidth}
            height={SPIDER_ARTICLE.coverImageHeight}
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
          aria-labelledby="spider-robot-update"
        >
          <h2 id="spider-robot-update" className={headingClassName}>
            A Spider Robot Is Coming to Life at Makerverse
          </h2>
          <p className={paragraphClassName}>
            Something with a lot of legs is taking shape in Dipolog City. Behind
            the scenes in our learning center, we are bringing the{" "}
            <strong>Makerverse Spider Robot</strong> to life, and this is our
            work-in-progress update on the <strong>spider robot</strong> build
            so far.
          </p>
          <p className={paragraphClassName}>
            The short version: we have gone from loose wires and random servo
            twitches to smooth, synchronized multi-jointed strides. As the cover
            of our reel puts it: eight legs, one epic robot. Built to crawl,
            born to innovate!
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="incredible-puzzle"
        >
          <h2 id="incredible-puzzle" className={headingClassName}>
            Building a Multi-Legged Robot Is an Incredible Puzzle
          </h2>
          <p className={paragraphClassName}>
            Building a custom multi-legged robot is an incredible puzzle. Every
            servo angle, linkage and movement pattern takes serious testing and
            relentless tuning to get right.
          </p>
          <ArticleBulletList
            items={[
              "Servo angles: every joint has to reach the right position",
              "Linkages: the parts that connect each joint have to move together",
              "Movement patterns: the legs have to step in a coordinated order",
              "Testing and tuning: repeated until the motion looks right",
            ]}
          />
          <ArticlePhoto image={SPIDER_ARTICLE.supportingImages.calibration} />
          <h3 className={subheadingClassName}>
            Why a walking robot is harder than a rolling one
          </h3>
          <p className={paragraphClassName}>
            A robot on wheels can move as soon as its motors spin. A robot on
            legs has to coordinate many joints at once, and one joint that is
            slightly off can throw off the whole stride. That is why the early
            stage of a build like this looks like twitching rather than walking,
            and why patience matters as much as parts.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="calibration">
          <h2 id="calibration" className={headingClassName}>
            Without Calibration, Coordinates Are Just Guesses
          </h2>
          <p className={paragraphClassName}>
            Here is the lesson we keep coming back to on this build: in
            robotics, without calibration, coordinates are just guesses! A
            program can tell a servo exactly where to go, but until the real
            hardware has been measured and adjusted, the leg may not end up
            where the numbers say it should.
          </p>
          <p className={paragraphClassName}>
            So we adjust, test and adjust again. Every adjustment brings us one
            step closer to flawless, natural insectoid movement.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Eight legs, one epic robot!
          </p>
          <h3 className={subheadingClassName}>
            What students can learn from calibration
          </h3>
          <p className={paragraphClassName}>
            Calibration is a habit worth learning early. It teaches young makers
            to check their assumptions, to change one thing at a time, and to
            treat a result that looks wrong as information rather than failure.
            Those habits carry over to coding, electronics, 3D design and
            schoolwork in general.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="whats-next">
          <h2 id="whats-next" className={headingClassName}>
            What Is Next for the Makerverse Spider Robot
          </h2>
          <p className={paragraphClassName}>
            This is a work in progress, not a finished robot. We will keep
            dialing in the mechanics and getting this spider ready to walk, so
            stay tuned for the next update.
          </p>
          <p className={paragraphClassName}>
            In the meantime, we would love to hear from you: what kind of robot
            are you building on your workbench right now? Tell us in the
            comments of the{" "}
            <a
              href={SPIDER_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("spider_inline_post", SPIDER_FACEBOOK_POST_URL)
              }
              className={inlineLinkClassName}
            >
              Facebook reel
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
            del Norte, where curious minds explore robotics, coding, AI and
            creative technology. Projects like this one show what STEM education
            looks like in practice: real builds, real problems and steady
            improvement.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If your child is curious about how robots move, explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{" "}
            or start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{" "}
            to see how learners build real skills with us. Our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page shows the design-and-build side of Makerverse, and you can read
            about another robot-themed build in our story on{" "}
            <a href={ROUTES.walleBlog} className={inlineLinkClassName}>
              a 3D printed WALL-E model
            </a>
            .
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Planning a robotics activity, a school visit or a collaboration?{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{" "}
            and tell us what you have in mind. You can also see student robotics
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
            Stay tuned for the next update
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share robotics builds, student projects and event announcements
            on our Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> for updates on
            the spider robot, and watch the reel to see the build in motion.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("spider_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={SPIDER_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "spider_watch_video_bottom",
                  SPIDER_FACEBOOK_POST_URL,
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
            {SPIDER_ARTICLE.tags.map((tag) => (
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

export default SpiderRobotArticle;
