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
  PRODUCTION_DAY_ARTICLE,
  PRODUCTION_DAY_FACEBOOK_POST_URL,
} from "./productionDayArticleData";
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
      <MessageCircle
        size={40}
        className="flex-none text-[#FF6321]"
        aria-hidden="true"
      />
      <div>
        <p className="text-lg font-black text-slate-950">
          See the production day photo on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          See the original &quot;Production day!&quot; photo on our Facebook
          page, and follow us for more behind-the-scenes updates.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={PRODUCTION_DAY_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("production_day_view_post_top", PRODUCTION_DAY_FACEBOOK_POST_URL)
        }
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6321]"
      >
        <MessageCircle size={18} aria-hidden="true" />
        View the Post
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("production_day_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const ProductionDayArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {PRODUCTION_DAY_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {PRODUCTION_DAY_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {PRODUCTION_DAY_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {PRODUCTION_DAY_ARTICLE.hero.subheadline}
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
              {PRODUCTION_DAY_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={PRODUCTION_DAY_ARTICLE.publishedDate}>
                {PRODUCTION_DAY_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {PRODUCTION_DAY_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={PRODUCTION_DAY_ARTICLE.coverImage}
            alt={PRODUCTION_DAY_ARTICLE.coverImageAlt}
            width={PRODUCTION_DAY_ARTICLE.coverImageWidth}
            height={PRODUCTION_DAY_ARTICLE.coverImageHeight}
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
          aria-labelledby="production-day-at-makerverse"
        >
          <h2 id="production-day-at-makerverse" className={headingClassName}>
            Production Day at Our 3D Printing Lab in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            &quot;Production day!&quot; That was the whole caption of the
            photo we shared on Facebook on October 23, 2026, and the picture
            said the rest. Behind the scenes at Makerverse, our printers were
            busy turning out piece after piece, a reminder that{" "}
            <strong>3D printing in Dipolog City</strong> is not just a demo on
            a screen. It is real objects, made layer by layer, right here in
            Zamboanga del Norte.
          </p>
          <p className={paragraphClassName}>
            Production days are some of our favorite moments in the lab.
            Designs that started as files on a computer become things you can
            hold, stack, count and share.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="in-the-photo">
          <h2 id="in-the-photo" className={headingClassName}>
            What We Shared: Stacks of Fresh Prints
          </h2>
          <p className={paragraphClassName}>
            The photo shows a table filled with freshly printed pieces in
            white, each made with an open, lattice-style pattern and outlined
            in black. Some pieces are shaped like smiling teeth with little
            happy faces, stacked several high, while others are rounded,
            many-sided pieces stacked into neat towers behind them.
          </p>
          <h3 className={subheadingClassName}>Why the stacks matter</h3>
          <p className={paragraphClassName}>
            A single print shows what a design looks like. A stack of matching
            prints shows something more: that the design can be repeated
            consistently. Getting every piece to come out the same shape, with
            the same clean outline, takes careful setup, good printer
            settings and patient checking between runs. That is the quiet
            craft behind every production day.
          </p>
          <ArticlePhoto image={PRODUCTION_DAY_ARTICLE.supportingImages.steps} />
          <h3 className={subheadingClassName}>
            From digital file to finished batch
          </h3>
          <ArticleBulletList
            items={[
              "Design: a 3D model is drawn or prepared on the computer",
              "Slice: software turns the model into thin layers and printer paths",
              "Print: the printer builds each piece layer by layer",
              "Finish: pieces are cleaned, checked and grouped into a batch",
            ]}
          />
        </section>

        <section className={sectionClassName} aria-labelledby="why-3d-printing">
          <h2 id="why-3d-printing" className={headingClassName}>
            Why 3D Printing Matters for Makers in Zamboanga del Norte
          </h2>
          <p className={paragraphClassName}>
            3D printing and digital fabrication let ideas move quickly from
            imagination to reality. For students, that means a design
            assignment can end with a real object instead of a drawing. For
            families, schools and local businesses, it means custom pieces can
            be made close to home in Dipolog City.
          </p>
          <h3 className={subheadingClassName}>A skill students can grow into</h3>
          <p className={paragraphClassName}>
            At Makerverse, 3D printing sits alongside robotics, coding and AI
            as part of our hands-on approach to STEM. Learners see how a model
            on a screen becomes a part they can test, and they learn that
            iteration, trying, checking and improving, is how real makers work.
            Our tagline sums it up: <strong>Where Curiosity Becomes Skill.</strong>
          </p>
          <ArticleBulletList
            items={[
              "Turning sketches and ideas into physical prototypes",
              "Making replacement parts, models and custom pieces",
              "Printing parts for robotics and engineering projects",
              "Learning design thinking through build, test, improve",
            ]}
          />
          <h3 className={subheadingClassName}>See more of what we build</h3>
          <p className={paragraphClassName}>
            Curious about what else comes off our printers? Read about the{" "}
            <a href={ROUTES.walleBlog} className={inlineLinkClassName}>
              3D-printed WALL-E robot model
            </a>{" "}
            and our{" "}
            <a href={ROUTES.halloweenBlog} className={inlineLinkClassName}>
              Halloween 3D thermoformed treats
            </a>
            , or visit our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page.
          </p>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="work-with-makerverse"
        >
          <h2 id="work-with-makerverse" className={headingClassName}>
            Have a Project in Mind? Let&apos;s Print It in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            Whether you are a student with a design idea, a parent looking for
            a hands-on STEM activity, or a school or partner exploring digital
            fabrication, Makerverse is ready to help.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            Explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{" "}
            in robotics, coding, AI and creative technology, or start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{" "}
            to see what is happening at Makerverse.
          </p>
          <h3 className={subheadingClassName}>For schools, businesses and partners</h3>
          <p className={paragraphClassName}>
            Want to talk about a 3D printing project or bring hands-on
            fabrication to your students?{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{" "}
            and tell us what you have in mind. You can also see our students in
            action at the{" "}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            .
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Production day! Layer by layer, ideas become real.
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Behind the scenes
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share production days, student builds, 3D printing projects
            and event announcements on our Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> for updates,
            and message us about your next 3D printing idea!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("production_day_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={PRODUCTION_DAY_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "production_day_view_post_bottom",
                  PRODUCTION_DAY_FACEBOOK_POST_URL,
                )
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle size={18} aria-hidden="true" />
              View the Post
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
            {PRODUCTION_DAY_ARTICLE.tags.map((tag) => (
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

export default ProductionDayArticle;
