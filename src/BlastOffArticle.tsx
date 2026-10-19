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
  BLASTOFF_ARTICLE,
  BLASTOFF_FACEBOOK_POST_URL,
} from "./blastOffArticleData";
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
          Watch Cassandra's project on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Watch the reel celebrating Cassandra's Smart Attendance RFID System,
          and follow us for more student projects, updates and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={BLASTOFF_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("blastoff_watch_video_top", BLASTOFF_FACEBOOK_POST_URL)
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
          trackFacebook("blastoff_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const BlastOffArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {BLASTOFF_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {BLASTOFF_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {BLASTOFF_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {BLASTOFF_ARTICLE.hero.subheadline}
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
              {BLASTOFF_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={BLASTOFF_ARTICLE.publishedDate}>
                {BLASTOFF_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {BLASTOFF_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={BLASTOFF_ARTICLE.coverImage}
            alt={BLASTOFF_ARTICLE.coverImageAlt}
            width={BLASTOFF_ARTICLE.coverImageWidth}
            height={BLASTOFF_ARTICLE.coverImageHeight}
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
          aria-labelledby="congratulations-cassandra"
        >
          <h2 id="congratulations-cassandra" className={headingClassName}>
            Congratulations, Cassandra!
          </h2>
          <p className={paragraphClassName}>
            BLAST OFF: level up your skills! Congratulations to{" "}
            <strong>Cassandra</strong> for completing our second program,{" "}
            <strong>BLAST OFF</strong>, and creating her very own{" "}
            <strong>Smart Attendance RFID System</strong>. Completing the{" "}
            <strong>Blast Off program</strong> with a working project of her own
            is a milestone worth celebrating, and we are proud to share it with
            our community in Dipolog City.
          </p>
          <p className={paragraphClassName}>
            Watch the reel on our Facebook page to see Cassandra&apos;s project
            and celebrate with us.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="smart-attendance">
          <h2 id="smart-attendance" className={headingClassName}>
            A Smart Attendance RFID System Built by a Student
          </h2>
          <p className={paragraphClassName}>
            Attendance is something every classroom, club and office deals with
            every day, which makes it a great real-world problem for a student
            project. A smart attendance system uses technology to help record
            who is present, and RFID is one popular way to do it.
          </p>
          <h3 className={subheadingClassName}>What is RFID?</h3>
          <p className={paragraphClassName}>
            RFID stands for radio-frequency identification. In general, an RFID
            reader can detect a nearby card or tag without plugging anything in,
            and a program decides what to do with that information. You see the
            same idea in ID cards and access cards. Projects like this bring
            together several skills at once:
          </p>
          <ArticleBulletList
            items={[
              "Electronics: connecting a reader and other parts correctly",
              "Coding: telling the system what to do when a card is detected",
              "Problem solving: testing, finding bugs and fixing them",
              "Design thinking: building something people can actually use",
            ]}
          />
          <p className={paragraphClassName}>
            Building a system like this from scratch, and making it your own, is
            exactly the kind of hands-on achievement Makerverse programs are
            designed to lead to.
          </p>
          <h3 className={subheadingClassName}>
            Why real-world projects matter
          </h3>
          <p className={paragraphClassName}>
            When students build something that solves an everyday problem, the
            learning sticks. They see why each wire, each line of code and each
            test matters, because the result has to work for real people. That
            sense of ownership is what turns a lesson into a skill, and a
            curious learner into a confident maker.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="dont-stop-there">
          <h2 id="dont-stop-there" className={headingClassName}>
            Finished the First Program? Don&apos;t Stop There!
          </h2>
          <p className={paragraphClassName}>
            If you have finished the first program, take your skills to the next
            level, explore advanced projects and turn your ideas into reality.
            At Makerverse, Blast Off is the second step in our program pathway,
            after the beginner-friendly Ignition Track. It is project-based
            learning for students who are ready to build more capable systems,
            with topics such as sensors and motors, microcontrollers, robot
            behavior and team challenges.
          </p>
          <ArticlePhoto image={BLASTOFF_ARTICLE.supportingImages.pathway} />
          <h3 className={subheadingClassName}>Where Blast Off can lead</h3>
          <p className={paragraphClassName}>
            After Blast Off comes Lift Off, our advanced track for robotics, IoT,
            AI and working prototypes, with Ascent coming soon as a future
            pathway for larger innovation and engineering projects. See the full
            details on our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs page
            </a>
            .
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Your next innovation starts with BLAST OFF!
          </p>
        </section>

        <section
          className={sectionClassName}
          aria-labelledby="learn-create-innovate"
        >
          <h2 id="learn-create-innovate" className={headingClassName}>
            STEM for Kids in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center in Dipolog City, Zamboanga
            del Norte, where curious minds explore robotics, coding, AI and
            creative technology. Stories like Cassandra&apos;s show what STEM
            education looks like in practice: students learning step by step
            and finishing with something they built themselves.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            Ready to start or continue the journey? Explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>
            , start on our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>
            , or check out our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page. For another behind-the-scenes build, read our{" "}
            <a href={ROUTES.spiderRobotBlog} className={inlineLinkClassName}>
              work-in-progress robot update
            </a>
            .
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Interested in robotics and coding for your learners?{" "}
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
            Celebrate with us
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share student milestones, robotics builds and event announcements
            on our Facebook page first. Follow{" "}
            <strong className="text-white">Makerverse</strong> for more
            stories like Cassandra&apos;s, and watch the reel to celebrate with us.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("blastoff_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={BLASTOFF_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "blastoff_watch_video_bottom",
                  BLASTOFF_FACEBOOK_POST_URL,
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
            {BLASTOFF_ARTICLE.tags.map((tag) => (
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

export default BlastOffArticle;
