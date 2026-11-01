import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Facebook,
  Mail,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { trackMarketingEvent } from "./analytics";
import {
  CLICKERS_ARTICLE,
  CLICKERS_FACEBOOK_POST_URL,
} from "./clickersArticleData";
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
    aria-label="Watch the original Facebook reel"
    className="flex flex-col gap-5 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
  >
    <div className="flex gap-4">
      <MessageCircle
        size={40}
        className="flex-none text-[#FF6321]"
        aria-hidden="true"
      />
      <div>
        <p className="text-lg font-black text-slate-950">
          Watch the clicker reel on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          See the original Makerverse Toy Lab reel, and follow our page for booth updates and what&apos;s coming next.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={CLICKERS_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("clickers_view_post_top", CLICKERS_FACEBOOK_POST_URL)
        }
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6321]"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Watch the Reel
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("clickers_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const ClickersArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {CLICKERS_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {CLICKERS_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {CLICKERS_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {CLICKERS_ARTICLE.hero.subheadline}
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
              {CLICKERS_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={CLICKERS_ARTICLE.publishedDate}>
                {CLICKERS_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {CLICKERS_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={CLICKERS_ARTICLE.coverImage}
            alt={CLICKERS_ARTICLE.coverImageAlt}
            width={CLICKERS_ARTICLE.coverImageWidth}
            height={CLICKERS_ARTICLE.coverImageHeight}
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
          aria-labelledby="whats-that-sound"
        >
          <h2 id="whats-that-sound" className={headingClassName}>
            3D-Printed Clickers: Click… Click… What&apos;s That Sound?
          </h2>
          <p className={paragraphClassName}>
            👀 <strong>Click… Click… What&apos;s that sound?</strong> On October
            29, 2026, we shared a short reel on our Facebook page with a sneak
            peek of what is coming next: <strong>3D-printed clickers</strong>{" "}
            and more from <strong>Makerverse Toy Lab</strong> in Dipolog City.
          </p>
          <p className={paragraphClassName}>
            In our words: &quot;Something exciting is taking shape at Makerverse
            Toy Lab! From 3D-printed clickers to creative builds, robotics, and
            endless customization… we&apos;re just getting started.&quot; 🛠️🤖
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="whats-taking-shape">
          <h2 id="whats-taking-shape" className={headingClassName}>
            What&apos;s Taking Shape at Makerverse Toy Lab
          </h2>
          <p className={paragraphClassName}>
            The reel points to four things our makers are busy with right now:
          </p>
          <ArticleBulletList
            items={[
              "3D-printed clickers",
              "Creative builds",
              "Robotics",
              "Endless customization",
            ]}
          />
          <ArticlePhoto image={CLICKERS_ARTICLE.supportingImages.steps} />
          <h3 className={subheadingClassName}>Why clickers?</h3>
          <p className={paragraphClassName}>
            A clicker is a small object with a big personality. That satisfying
            click comes from parts that have to fit and move just right, which
            makes clickers a fun way to see how careful design and precise 3D
            printing come together. They are small enough to carry around and
            easy to make your own.
          </p>
          <h3 className={subheadingClassName}>Endless customization</h3>
          <p className={paragraphClassName}>
            &quot;Endless customization&quot; is a promise that 3D printing is
            made for. Because every piece is printed from a digital file, a
            design can be changed in color, shape or detail and printed again
            without new molds or tooling. That flexibility is what lets a small
            maker space in Dipolog City create one-of-a-kind pieces, and it is
            the same flexibility our students use when they design, test and
            improve their own projects.
          </p>
          <h3 className={subheadingClassName}>
            Creative builds and robotics, too
          </h3>
          <p className={paragraphClassName}>
            Toy Lab is not only about clickers. The teaser also mentions
            creative builds and robotics, the same hands-on areas we teach at
            Makerverse. If you have followed our{" "}
            <a href={ROUTES.spiderRobotBlog} className={inlineLinkClassName}>
              spider robot build
            </a>{" "}
            or our{" "}
            <a href={ROUTES.toyLabBlog} className={inlineLinkClassName}>
              first Toy Lab announcement
            </a>
            , you know we love turning ideas into things you can hold.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="click-create-customize">
          <h2 id="click-create-customize" className={headingClassName}>
            Click. Create. Customize. See You Soon, Dipolog!
          </h2>
          <p className={paragraphClassName}>
            Curious what&apos;s clicking? Stay tuned and get ready to explore,
            create and customize! 📍 <strong>See you soon, Dipolog!</strong>{" "}
            Catch us at the <strong>Makerverse Toy Lab booth</strong> and
            discover what&apos;s next. We will post booth updates on our
            Facebook page, so follow Makerverse to know where to find us.
          </p>
          <h3 className={subheadingClassName}>
            From a fun toy to real STEM skills
          </h3>
          <p className={paragraphClassName}>
            Every Toy Lab item starts the same way our students&apos; projects
            do: as a digital design that is sliced into layers and printed one
            thin line at a time. For a curious child, picking up a 3D-printed
            clicker can lead straight to the next question: &quot;How was this
            made, and can I make one myself?&quot; That question is where STEM
            learning begins.
          </p>
          <p className={paragraphClassName}>
            Learn how we use these tools on our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page, or go behind the scenes on{" "}
            <a href={ROUTES.productionDayBlog} className={inlineLinkClassName}>
              production day at our printers
            </a>
            .
          </p>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="explore-makerverse"
        >
          <h2 id="explore-makerverse" className={headingClassName}>
            Explore More at Makerverse
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center in Dipolog City,
            Zamboanga del Norte, with programs in robotics, coding, AI and
            creative technology. Learn. Create. Innovate.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If a clicker or a creative build gets your child excited about
            making things, explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{" "}
            or start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>
            .
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Want hands-on making at your school or event?{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>
            , and check out the{" "}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            .
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Click. Create. Customize. More is coming! ✨ #makerversetoylab
            #makerverse #3dprinted #STEMEducation
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            More is coming
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Watch the clicker reel, then follow{" "}
            <strong className="text-white">Makerverse</strong> on Facebook for
            Toy Lab booth updates and the next things coming off our printers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("clickers_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={CLICKERS_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "clickers_view_post_bottom",
                  CLICKERS_FACEBOOK_POST_URL,
                )
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle size={18} aria-hidden="true" />
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
            {CLICKERS_ARTICLE.tags.map((tag) => (
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

export default ClickersArticle;
