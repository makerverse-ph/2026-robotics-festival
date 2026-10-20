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
  CURIOSITY_ARTICLE,
  CURIOSITY_FACEBOOK_POST_URL,
} from "./curiosityArticleData";
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
          See the original comic on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Laugh along with the full &quot;no passport needed&quot; comic on our
          Facebook page, and follow us for more updates and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={CURIOSITY_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("curiosity_view_post_top", CURIOSITY_FACEBOOK_POST_URL)
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
          trackFacebook("curiosity_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const CuriosityArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {CURIOSITY_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {CURIOSITY_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {CURIOSITY_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {CURIOSITY_ARTICLE.hero.subheadline}
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
              {CURIOSITY_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={CURIOSITY_ARTICLE.publishedDate}>
                {CURIOSITY_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {CURIOSITY_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={CURIOSITY_ARTICLE.coverImage}
            alt={CURIOSITY_ARTICLE.coverImageAlt}
            width={CURIOSITY_ARTICLE.coverImageWidth}
            height={CURIOSITY_ARTICLE.coverImageHeight}
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
          aria-labelledby="welcome-to-makerverse"
        >
          <h2 id="welcome-to-makerverse" className={headingClassName}>
            Welcome to Makerverse: No Passport Required
          </h2>
          <p className={paragraphClassName}>
            &quot;Bro brought every document except his common sense 😭
            HAHAHA 😁&quot; That is how our newest Facebook post opens, and it
            sums up a very real feeling. Starting something new can make you
            think you need to prepare everything first. The good news: when it
            comes to <strong>curiosity-driven learning</strong> at Makerverse in
            Dipolog City, you do not need a passport, a ticket or a visa. You
            only need your curiosity.
          </p>
          <p className={paragraphClassName}>
            Our comic follows a student who shows up ready for a trip abroad,
            complete with a suitcase, documents and finally, his visa. The
            punchline? <strong>You&apos;re entering Makerverse, not another
            country!</strong>
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="the-comic">
          <h2 id="the-comic" className={headingClassName}>
            The Joke Behind the Comic
          </h2>
          <p className={paragraphClassName}>
            In the comic, our eager visitor asks to come in, then lists
            everything he brought for the journey: a valid ID, an application
            form, travel insurance and emergency contacts. He even asks if he
            can keep his suitcase. The answer from the Makerverse team is
            simple. You don&apos;t need a passport, ticket or visa. You only
            need <strong>your curiosity</strong>.
          </p>
          <h3 className={subheadingClassName}>
            &quot;This really is another universe!&quot;
          </h3>
          <p className={paragraphClassName}>
            Once he steps inside, he discovers what we already know: Makerverse
            feels like another universe, a space full of robots, tools and
            ideas waiting to be built. And that is the real point of the joke.
            The only thing that should cross our door with you is a question
            you want to explore.
          </p>
          <ArticlePhoto image={CURIOSITY_ARTICLE.supportingImages.checklist} />
          <h3 className={subheadingClassName}>Your entry checklist</h3>
          <ArticleBulletList
            items={[
              "No passport",
              "No ticket",
              "No special requirements",
              "Just your curiosity!",
            ]}
          />
        </section>

        <section className={sectionClassName} aria-labelledby="why-curiosity">
          <h2 id="why-curiosity" className={headingClassName}>
            Why Curiosity Is the Best Starting Point for STEM
          </h2>
          <p className={paragraphClassName}>
            Behind the humor is a message we care about. Many students and
            parents wonder whether they need to be &quot;good at math&quot; or
            already know how to code before trying robotics. At Makerverse, we
            believe curiosity comes first and skills follow. Our tagline says it
            well: <strong>Where Curiosity Becomes Skill.</strong>
          </p>
          <h3 className={subheadingClassName}>
            From questions to hands-on projects
          </h3>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center with immersive programs in
            robotics, coding, AI and creative technology. A curious question,
            like &quot;How does a robot know where to go?&quot;, becomes a
            project you can build, test and improve. Step by step, curious
            minds become confident makers.
          </p>
          <ArticleBulletList
            items={[
              "Robotics: building and programming machines that move",
              "Coding: telling computers and robots what to do",
              "AI: exploring how smart systems learn and decide",
              "Creative technology and 3D printing: turning ideas into real objects",
            ]}
          />
          <h3 className={subheadingClassName}>A clear pathway to grow</h3>
          <p className={paragraphClassName}>
            New learners can begin with the beginner-friendly Ignition Track,
            then level up through Blast Off and Lift Off. See the details on our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs page
            </a>
            , or read how one student{" "}
            <a href={ROUTES.blastOffBlog} className={inlineLinkClassName}>
              completed Blast Off with her own RFID attendance system
            </a>
            .
          </p>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="start-your-journey"
        >
          <h2 id="start-your-journey" className={headingClassName}>
            Start Your Makerverse Journey in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            Makerverse offers in-person classes for curious learners in Dipolog
            City, Zamboanga del Norte. Your next big idea starts here.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            Ready to step into the Makerverse? Explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>
            , start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>
            , or see what our makers build on the{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page. You can also send us a direct message on Facebook to start
            your Makerverse journey.
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Want to bring hands-on STEM learning to your students?{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              Contact us
            </a>{" "}
            and tell us what you have in mind, and check out the student
            showcases from the{" "}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>
            .
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            WELCOME TO MAKERVERSE, where ideas come to life!
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Come on in
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share student milestones, robotics builds, funny comics and
            event announcements on our Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> for updates,
            and DM us now to start your Makerverse journey!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("curiosity_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={CURIOSITY_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "curiosity_view_post_bottom",
                  CURIOSITY_FACEBOOK_POST_URL,
                )
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle size={18} aria-hidden="true" />
              View the Comic
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
            {CURIOSITY_ARTICLE.tags.map((tag) => (
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

export default CuriosityArticle;
