import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Facebook,
  Mail,
  Images,
  UserRound,
} from 'lucide-react';
import { trackMarketingEvent } from './analytics';
import {
  LOOTBAGS_ARTICLE,
  LOOTBAGS_FACEBOOK_POST_URL,
  LOOTBAGS_LAUNCH_FACEBOOK_POST_URL,
} from './lootBagsArticleData';
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
    aria-label="See the original Facebook post"
    className="flex flex-col gap-5 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
  >
    <div className="flex gap-4">
      <Images size={40} className="flex-none text-[#FF6321]" aria-hidden="true" />
      <div>
        <p className="text-lg font-black text-slate-950">See the loot bags on Facebook</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
          See the photos of our Trick-or-Treat Mini Fun Loot Bags on the Makerverse Facebook page, and follow us
          for new designs, maker products and stories.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 sm:flex-none">
      <a
        href={LOOTBAGS_FACEBOOK_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('lootbags_view_post_top', LOOTBAGS_FACEBOOK_POST_URL)}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6321]"
      >
        <Images size={18} aria-hidden="true" />
        View on Facebook
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFacebook('lootbags_follow_page_top', FACEBOOK_PAGE_URL)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#0056B3] hover:text-[#0056B3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056B3]"
      >
        <Facebook size={17} aria-hidden="true" />
        Follow Makerverse
      </a>
    </div>
  </aside>
);

export const LootBagsArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {LOOTBAGS_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {LOOTBAGS_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {LOOTBAGS_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {LOOTBAGS_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound size={17} className="text-orange-300" aria-hidden="true" />
              {LOOTBAGS_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-orange-300" aria-hidden="true" />
              <time dateTime={LOOTBAGS_ARTICLE.publishedDate}>{LOOTBAGS_ARTICLE.publishedDateLabel}</time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-orange-300" aria-hidden="true" />
              {LOOTBAGS_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[600px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={LOOTBAGS_ARTICLE.coverImage}
            alt={LOOTBAGS_ARTICLE.coverImageAlt}
            width={LOOTBAGS_ARTICLE.coverImageWidth}
            height={LOOTBAGS_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="loot-bags-are-here">
          <h2 id="loot-bags-are-here" className={headingClassName}>
            Trick-or-Treat Mini Fun Loot Bags Are Here
          </h2>
          <p className={paragraphClassName}>
            Make Halloween extra sweet and spooky! Our <strong>Trick-or-Treat Mini Fun Loot Bags</strong> are now
            available in <strong>Dipolog City</strong>, and each set comes with mini chocolates inside. They are
            cute, fun and ready to give, so all you have to do is pick them up and hand them out.
          </p>
          <p className={paragraphClassName}>
            And there is already an update: <strong>more designs have been added!</strong> The loot bags now come in
            even more spooky-cute designs, perfect for classroom treats, parties and little Halloween surprises.
          </p>
          <div className="mt-9">
            <WatchOnFacebook />
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="price-and-where">
          <h2 id="price-and-where" className={headingClassName}>
            Price and Where to Buy the Mini Fun Loot Bags in Dipolog
          </h2>
          <p className={paragraphClassName}>Here is everything we have shared so far, in one place:</p>
          <ArticleBulletList
            items={[
              'What: Trick-or-Treat Mini Fun Loot Bags',
              'Price: only ₱99 per set',
              'Inside: mini chocolates in every set',
              'Where: available now at Get N Go Boulevard',
              'Bulk: wholesale pre-order for 10 sets and up',
              'How to order: send Makerverse a message',
            ]}
          />
          <ArticlePhoto image={LOOTBAGS_ARTICLE.supportingImages.quickFacts} />
          <p className={paragraphClassName}>
            One small note from us: the actual chocolate contents may vary from set to set. The surprise is part of
            the fun!
          </p>
          <p className={paragraphClassName}>
            Sets are limited, so get yours before they disappear. If you are coming from elsewhere in Zamboanga del
            Norte, the Boulevard is an easy stop to add to a Dipolog trip.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Cute • Fun • Ready to Give
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="more-designs">
          <h2 id="more-designs" className={headingClassName}>
            More Designs Added
          </h2>
          <p className={paragraphClassName}>
            A day after we introduced the loot bags, we added more designs to the lineup. That means more choices
            when you are putting together treats for a group, and more chances to find a favorite.
          </p>
          <p className={paragraphClassName}>
            To see the designs that are out now, open our Facebook posts. The photos there show the current lineup
            better than words can.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={LOOTBAGS_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('lootbags_more_designs_post', LOOTBAGS_FACEBOOK_POST_URL)}
              className={inlineLinkClassName}
            >
              See the “More Designs Added” post
            </a>
            <a
              href={LOOTBAGS_LAUNCH_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('lootbags_launch_post', LOOTBAGS_LAUNCH_FACEBOOK_POST_URL)}
              className={inlineLinkClassName}
            >
              See the first loot bag post
            </a>
          </div>

          <h3 className={subheadingClassName}>Who are they perfect for?</h3>
          <ArticleBulletList
            items={[
              'Trick-or-treaters knocking at your door',
              'Classroom treats for classmates and pupils',
              'Halloween parties at home, school or the office',
              'Little surprises for someone who needs a smile',
            ]}
          />
          <h3 className={subheadingClassName}>Simple ways to share them</h3>
          <p className={paragraphClassName}>
            Because each set already comes with mini chocolates inside, there is nothing left to pack. Keep a few by
            the door for the kids in your neighborhood, bring a batch to school for the class Halloween program, or
            tuck one into a lunch bag as a surprise. For a party, a pile of loot bags on the table doubles as
            decoration until it is time for guests to take one home.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="wholesale-pre-order">
          <h2 id="wholesale-pre-order" className={headingClassName}>
            Wholesale Pre-Order for Parties, Classes and Big Groups
          </h2>
          <p className={paragraphClassName}>
            Planning a Halloween party or giving treats to a crowd? We are accepting pre-orders at wholesale price
            for <strong>10 sets and up</strong>. This is a good fit for teachers preparing classroom treats, parents
            hosting a party, and organizers planning a trick-or-treat activity.
          </p>
          <h3 className={subheadingClassName}>How to pre-order</h3>
          <ArticleBulletList
            items={[
              'Count how many sets you need (10 or more)',
              'Send Makerverse a message on Facebook',
              'Tell us your quantity and when you need them',
              'Order early, because sets are limited',
            ]}
          />
          <p className={paragraphClassName}>
            Buying just a few? You do not need to pre-order. Drop by Get N Go Boulevard and pick up a set for ₱99.
            For other questions, you can also{' '}
            <a href={ROUTES.contact} className={inlineLinkClassName}>
              contact Makerverse
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="more-than-a-treat">
          <h2 id="more-than-a-treat" className={headingClassName}>
            More Than a Treat: Learn, Create, Innovate
          </h2>
          <p className={paragraphClassName}>
            Makerverse is a hands-on learning center in Dipolog City where curious minds explore robotics, coding, AI
            and creative technology. Seasonal maker products like these loot bags are a playful way to share that
            creative spirit with families, schools and friends around the city.
          </p>
          <p className={paragraphClassName}>
            These are not our only Halloween goodies this year. Read about our{' '}
            <a href={ROUTES.halloweenBlog} className={inlineLinkClassName}>
              Trick-or-Treat 3D Thermoformed treats
            </a>
            , also available at the Dipolog City Boulevard.
          </p>
          <h3 className={subheadingClassName}>For parents and students</h3>
          <p className={paragraphClassName}>
            If your child loves making things as much as receiving them, explore our{' '}
            <a href={ROUTES.programs} className={inlineLinkClassName}>
              programs
            </a>{' '}
            or start on our{' '}
            <a href={ROUTES.home} className={inlineLinkClassName}>
              homepage
            </a>{' '}
            to see how learners build real skills with us. You can also visit our{' '}
            <a href={ROUTES.makerLab} className={inlineLinkClassName}>
              3D printing and prototyping
            </a>{' '}
            page to see the design-and-build side of Makerverse.
          </p>
          <h3 className={subheadingClassName}>For schools and partners</h3>
          <p className={paragraphClassName}>
            Have an idea for a school activity, a custom project or a collaboration?{' '}
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
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Limited sets available</p>
          <h2 id="follow-makerverse" className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Follow Makerverse on Facebook
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We share new maker products, student projects and event announcements on our Facebook page first. Follow{' '}
            <strong className="text-white">Makerverse</strong> for updates, see the loot bag designs, and message us
            there to pre-order 10 sets and up.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('lootbags_follow_page_bottom', FACEBOOK_PAGE_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={LOOTBAGS_FACEBOOK_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFacebook('lootbags_view_post_bottom', LOOTBAGS_FACEBOOK_POST_URL)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Images size={18} aria-hidden="true" />
              View the Facebook Post
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
            {LOOTBAGS_ARTICLE.tags.map((tag) => (
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

export default LootBagsArticle;
