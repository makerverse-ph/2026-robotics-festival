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
  TOY_LAB_ARTICLE,
  TOY_LAB_FACEBOOK_POST_URL,
} from "./toyLabArticleData";
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
          See the Toy Lab announcement on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Check out the original Makerverse Toy Lab post, and follow our page
          so you won&apos;t miss the pop-up announcement.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={TOY_LAB_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("toylab_view_post_top", TOY_LAB_FACEBOOK_POST_URL)
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
          trackFacebook("toylab_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const ToyLabArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {TOY_LAB_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {TOY_LAB_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {TOY_LAB_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {TOY_LAB_ARTICLE.hero.subheadline}
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
              {TOY_LAB_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={TOY_LAB_ARTICLE.publishedDate}>
                {TOY_LAB_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {TOY_LAB_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={TOY_LAB_ARTICLE.coverImage}
            alt={TOY_LAB_ARTICLE.coverImageAlt}
            width={TOY_LAB_ARTICLE.coverImageWidth}
            height={TOY_LAB_ARTICLE.coverImageHeight}
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
          aria-labelledby="meet-makerverse-toy-lab"
        >
          <h2 id="meet-makerverse-toy-lab" className={headingClassName}>
            Meet Makerverse Toy Lab: Something Fun Is Printing
          </h2>
          <p className={paragraphClassName}>
            🚨 <strong>SOMETHING FUN IS PRINTING…</strong> 👀✨ Your next little
            obsession is loading! On October 24, 2026, we introduced{" "}
            <strong>Makerverse Toy Lab</strong> on our Facebook page: a place
            in Dipolog City where you <strong>PICK, CREATE, and take home
            something fun</strong>, all made with 3D printing.
          </p>
          <p className={paragraphClassName}>
            If you have ever watched a 3D printer at work, you know the magic
            of seeing a small object appear layer by layer. Toy Lab brings that
            magic to something you can choose, customize and carry home.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="toy-lab-lineup">
          <h2 id="toy-lab-lineup" className={headingClassName}>
            What You Can Pick and Create at Toy Lab
          </h2>
          <p className={paragraphClassName}>
            Here is the lineup we announced in our post, straight from the
            Makerverse printers:
          </p>
          <ArticleBulletList
            items={[
              "🪔 3D-printed lamps",
              "🎮 Make Your Own Clickers",
              "Fidgets",
              "Collectibles",
              "Keychains, charms & MORE!",
            ]}
          />
          <ArticlePhoto image={TOY_LAB_ARTICLE.supportingImages.lineup} />
          <h3 className={subheadingClassName}>Pick, create, take home</h3>
          <p className={paragraphClassName}>
            The idea behind Toy Lab is simple and hands-on. You pick what
            catches your eye, you create something that feels like yours, and
            you go home with it. It is the same spirit that runs through
            everything we do at Makerverse: learning by making, and enjoying
            the result.
          </p>
          <h3 className={subheadingClassName}>
            For the kids, the kids-at-heart, and everyone in between
          </h3>
          <p className={paragraphClassName}>
            Toy Lab is for the kids, the kids-at-heart, and everyone who says
            &quot;<em>tan-aw lang ko</em>&quot; but ends up bringing something
            home. We know the feeling. One look at a tiny printed collectible
            or a satisfying clicker, and &quot;just looking&quot; quickly
            becomes &quot;I&apos;ll take this one.&quot;
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="pop-up-soon">
          <h2 id="pop-up-soon" className={headingClassName}>
            Watch for the Toy Lab Pop-Up Soon in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            📣 <strong>WATCH FOR OUR POP-UP SOON!!!</strong> The Makerverse
            Toy Lab pop-up is on its way. We will share the details on our
            Facebook page first, so follow Makerverse so you won&apos;t miss
            the fun. Trust us, you&apos;ll want to see this.
          </p>
          <h3 className={subheadingClassName}>
            Tiny things, big happiness, and real STEM skills
          </h3>
          <p className={paragraphClassName}>
            Every item in Toy Lab comes from the same 3D printing and digital
            fabrication tools our students learn with. A lamp, a fidget or a
            keychain starts as a digital design, gets sliced into layers, and
            is printed one thin line at a time. For young makers, seeing that
            process up close can spark the question that leads to real
            learning: &quot;Can I make one myself?&quot;
          </p>
          <p className={paragraphClassName}>
            Learn more on our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page, read about a{" "}
            <a href={ROUTES.walleBlog} className={inlineLinkClassName}>
              3D-printed WALL-E robot model
            </a>
            , or see the behind-the-scenes{" "}
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
            creative technology.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If Toy Lab gets your child excited about making things, explore
            our{" "}
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
            Interested in bringing hands-on making to your school or event?{" "}
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
            #MakerverseToyLab #PickAndCreate #3DPrinted #PopUpComingSoon
            #TinyThingsBigHappiness
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Don't miss the pop-up
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            The Makerverse Toy Lab pop-up details will be announced on our
            Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> so you
            won&apos;t miss the fun. Trust us, you&apos;ll want to see this!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("toylab_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={TOY_LAB_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "toylab_view_post_bottom",
                  TOY_LAB_FACEBOOK_POST_URL,
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
            {TOY_LAB_ARTICLE.tags.map((tag) => (
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

export default ToyLabArticle;
