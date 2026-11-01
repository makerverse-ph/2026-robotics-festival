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
  PEEK_A_POP_ARTICLE,
  PEEK_A_POP_FACEBOOK_POST_URL,
} from "./peekAPopArticleData";
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
          See PEEK A POP on Facebook
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          Check out the original PEEK A POP post, message us to order, and follow our page for new designs.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={PEEK_A_POP_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackFacebook("peekapop_view_post_top", PEEK_A_POP_FACEBOOK_POST_URL)
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
          trackFacebook("peekapop_follow_page_top", FACEBOOK_PAGE_URL)
        }
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const PeekAPopArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {PEEK_A_POP_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {PEEK_A_POP_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {PEEK_A_POP_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {PEEK_A_POP_ARTICLE.hero.subheadline}
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
              {PEEK_A_POP_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              <time dateTime={PEEK_A_POP_ARTICLE.publishedDate}>
                {PEEK_A_POP_ARTICLE.publishedDateLabel}
              </time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3
                size={17}
                className="text-orange-300"
                aria-hidden="true"
              />
              {PEEK_A_POP_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={PEEK_A_POP_ARTICLE.coverImage}
            alt={PEEK_A_POP_ARTICLE.coverImageAlt}
            width={PEEK_A_POP_ARTICLE.coverImageWidth}
            height={PEEK_A_POP_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="say-hello-peek-a-pop">
          <h2 id="say-hello-peek-a-pop" className={headingClassName}>
            Say Hello to PEEK A POP: 3D-Printed Party Favors and Gifts
          </h2>
          <p className={paragraphClassName}>
            👀 <strong>PEEK, PEEK… POP!</strong> 💥 Something FUN is here! 🎉
            On October 30, 2026, we introduced <strong>PEEK A POP</strong> on
            our Facebook page, a new line of 3D-printed party favors and gifts
            from <strong>Makerverse Toy Lab</strong> in Dipolog City.
          </p>
          <p className={paragraphClassName}>
            PEEK A POP is where shapes meet surprises. From adorable treat
            containers and colorful party favors to festive ornaments and
            personalized gifts, we make little things that bring wide smiles.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="what-we-make">
          <h2 id="what-we-make" className={headingClassName}>
            What PEEK A POP Makes
          </h2>
          <p className={paragraphClassName}>
            Here is what PEEK A POP by Makerverse Toy Lab offers, straight from
            our announcement:
          </p>
          <ArticleBulletList
            items={[
              "Adorable treat containers",
              "Colorful party favors",
              "Festive ornaments",
              "Personalized gifts",
              "Customized designs on request",
            ]}
          />
          <h3 className={subheadingClassName}>
            Pick your colors. Choose your shapes. Make it YOURS!
          </h3>
          <p className={paragraphClassName}>
            🎨 Every PEEK A POP piece can be made your way. You pick the colors
            and choose the shapes, so the final piece matches your party theme,
            your brand, or the person you are giving it to. That is one of the
            best things about 3D printing: a design can be adjusted and printed
            again without starting from scratch.
          </p>
          <ArticlePhoto image={PEEK_A_POP_ARTICLE.supportingImages.occasions} />
        </section>

        <section className={sectionClassName} aria-labelledby="every-celebration">
          <h2 id="every-celebration" className={headingClassName}>
            For Birthdays, Christmas, Giveaways and Keepsakes
          </h2>
          <ul className={listClassName}>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">
              🎂 <strong>Birthdays?</strong> YES!
            </li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">
              🎄 <strong>Christmas?</strong> ABSOLUTELY!
            </li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3 sm:col-span-2">
              🎁 <strong>Giveaways, keepsakes, and little surprises?</strong>{" "}
              YOU BET!
            </li>
          </ul>
          <p className={paragraphClassName}>
            Because every celebration deserves a little extra POP! With the
            holidays coming, festive ornaments and personalized gifts are an
            easy way to make a present feel one of a kind, and colorful party
            favors and treat containers add a fun surprise to any birthday
            table.
          </p>
          <h3 className={subheadingClassName}>🚚 We ship nationwide</h3>
          <p className={paragraphClassName}>
            PEEK A POP is made in Dipolog City, Zamboanga del Norte, and{" "}
            <strong>we ship nationwide</strong> across the Philippines. 📩{" "}
            <strong>Message us to order or request a customized design!</strong>{" "}
            Send us a message on our Facebook page, or reach us through our{" "}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              contact page
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="made-by-makers">
          <h2 id="made-by-makers" className={headingClassName}>
            Made by Makers in Dipolog City
          </h2>
          <p className={paragraphClassName}>
            PEEK A POP comes from the same 3D printers and design tools we use
            in our classes. Each piece starts as a digital model, is sliced into
            thin layers, and is printed one line at a time. It is a fun, everyday
            example of what our students learn: turning an idea into something
            real that people can hold, use and enjoy.
          </p>
          <p className={paragraphClassName}>
            3D printing is a great fit for party favors and gifts because it
            works well in small batches. A shape can be resized, recolored or
            personalized in the design file and printed again, so a birthday
            set, a Christmas ornament or a one-off keepsake does not need a
            factory run. For parents and students, PEEK A POP is also a friendly
            reminder that the skills behind it, design thinking, digital
            modeling and fabrication, are skills young makers can learn too.
          </p>
          <p className={paragraphClassName}>
            See more on our{" "}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{" "}
            page, read about the{" "}
            <a href={ROUTES.toyLabBlog} className={inlineLinkClassName}>
              Makerverse Toy Lab pop-up
            </a>{" "}
            and our{" "}
            <a href={ROUTES.clickersBlog} className={inlineLinkClassName}>
              3D-printed clickers
            </a>
            , or explore our{" "}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{" "}
            in robotics, coding, AI and creative technology. New here? Start on
            our{" "}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{" "}
            or visit the{" "}
            <a href={ROUTES.festival} className={inlineLinkClassName}>
              Dipolog Robotics Festival 2026
            </a>{" "}
            page.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            PEEK A POP by Makerverse Toy Lab: your partner in all things fun!
            #PeekAPop #MakerverseToyLab #3DPrintedCreations #PartyFavorsPH
            #PersonalizedGiftsPH #WeShipNationwide
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-makerverse"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Your partner in all things fun
          </p>
          <h2
            id="follow-makerverse"
            className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
          >
            Order or Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            See the PEEK A POP post, message us to order or request a customized
            design, and follow{" "}
            <strong className="text-white">Makerverse</strong> for new designs
            and Toy Lab updates.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook("peekapop_follow_page_bottom", FACEBOOK_PAGE_URL)
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={PEEK_A_POP_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFacebook(
                  "peekapop_view_post_bottom",
                  PEEK_A_POP_FACEBOOK_POST_URL,
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
            {PEEK_A_POP_ARTICLE.tags.map((tag) => (
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

export default PeekAPopArticle;
