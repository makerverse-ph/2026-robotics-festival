import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Facebook,
  Handshake,
  UserRound,
} from 'lucide-react';
import { MIRAQUEST_ARTICLE, type MiraQuestArticleImage } from './miraquestArticleData';

const sectionClassName = 'scroll-mt-28 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14';
const headingClassName = 'text-2xl font-black leading-tight text-slate-950 sm:text-3xl';
const subheadingClassName = 'text-xl font-black leading-tight text-slate-950 sm:text-2xl';
const paragraphClassName = 'mt-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9';
const listClassName =
  'mt-6 grid gap-3 text-base leading-7 text-slate-700 sm:grid-cols-2 sm:text-lg sm:leading-8';

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
  <figure className="mx-auto mt-9 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60">
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

export const MiraQuestArticle = () => (
  <article className="bg-white text-slate-900">
    <header className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#0056B3]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF6321]/15 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_50%)] bg-[length:36px_36px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:pb-20 lg:pt-40">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              {MIRAQUEST_ARTICLE.hero.eyebrow}
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-sm">
              {MIRAQUEST_ARTICLE.hero.badge}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
            {MIRAQUEST_ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {MIRAQUEST_ARTICLE.hero.subheadline}
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-200"
            aria-label="Article details"
          >
            <li className="inline-flex items-center gap-2">
              <UserRound size={17} className="text-orange-300" aria-hidden="true" />
              {MIRAQUEST_ARTICLE.author}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-orange-300" aria-hidden="true" />
              <time dateTime={MIRAQUEST_ARTICLE.publishedDate}>{MIRAQUEST_ARTICLE.publishedDateLabel}</time>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-orange-300" aria-hidden="true" />
              {MIRAQUEST_ARTICLE.readingTime} read
            </li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[430px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-[#0056B3]/20 blur-2xl" />
          <img
            src={MIRAQUEST_ARTICLE.coverImage}
            alt={MIRAQUEST_ARTICLE.coverImageAlt}
            width={MIRAQUEST_ARTICLE.coverImageWidth}
            height={MIRAQUEST_ARTICLE.coverImageHeight}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border border-white/10 object-contain shadow-2xl shadow-black/35"
          />
        </figure>
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <section className={sectionClassName} aria-labelledby="workshop-to-deployment">
          <h2 id="workshop-to-deployment" className={headingClassName}>
            From Workshop Prototype to Real-World Deployment
          </h2>
          <p className={paragraphClassName}>
            Innovation becomes meaningful when it leaves the workshop and begins solving problems in the real world.
          </p>
          <p className={paragraphClassName}>
            For the Makerverse team, that moment arrived with the preliminary deployment of the{' '}
            <strong>MiraQuest Unmanned Surface Vehicle</strong>, or <strong>MiraQuest USV</strong>, on the Dipag River.
          </p>
          <p className={paragraphClassName}>
            Developed as a locally built unmanned research platform, MiraQuest represents Makerverse’s growing work in
            robotics, autonomous systems, engineering education, and applied environmental technology. Its deployment
            on the river marked an important transition from design, fabrication, and controlled testing toward actual
            field operations.
          </p>
          <p className={paragraphClassName}>
            The preliminary mission was conducted in collaboration with engineering interns from{' '}
            <strong>Andres Bonifacio College</strong>, who participated in the development, preparation, testing, and
            field deployment of the platform.
          </p>
          <p className={paragraphClassName}>
            This was not yet the final survey mission. Instead, it was a critical first step: understanding the river,
            evaluating the operating environment, identifying potential mission limits, and preparing MiraQuest for
            reliable autonomous data collection.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="what-is-miraquest">
          <h2 id="what-is-miraquest" className={headingClassName}>
            What Is the MiraQuest USV?
          </h2>
          <p className={paragraphClassName}>
            MiraQuest is an <strong>unmanned surface vehicle</strong>, a robotic vessel designed to operate on bodies of
            water without requiring a person to remain onboard.
          </p>
          <p className={paragraphClassName}>
            Built on a catamaran platform, the vessel is intended to provide a stable base for navigation equipment,
            communications systems, monitoring instruments, and future scientific payloads.
          </p>
          <ArticlePhoto image={MIRAQUEST_ARTICLE.supportingImages.vessel} />
          <p className={paragraphClassName}>
            Unlike a conventional boat, an unmanned surface vehicle can be remotely operated or configured to follow a
            planned route. This allows it to reach survey areas while reducing the need to expose personnel and
            equipment to difficult, shallow, or potentially unsafe water conditions.
          </p>
          <p className={paragraphClassName}>
            MiraQuest is being developed as a flexible research platform rather than a single-purpose machine. Its
            modular design can support future applications such as:
          </p>
          <ArticleBulletList
            items={[
              'River and waterway mapping',
              'Environmental monitoring',
              'Depth and terrain data collection',
              'Water-quality observation',
              'Disaster-response assessment',
              'Research and engineering demonstrations',
              'Autonomous navigation studies',
              'Educational training in robotics and marine systems',
            ]}
          />
          <p className={paragraphClassName}>
            The project reflects Makerverse’s approach to innovation: developing practical technologies that can be
            studied, tested, improved, and eventually deployed for real community and environmental needs.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="why-dipag-river">
          <h2 id="why-dipag-river" className={headingClassName}>
            Why the Dipag River?
          </h2>
          <p className={paragraphClassName}>
            A successful autonomous survey mission begins long before the vessel follows its first programmed route.
          </p>
          <p className={paragraphClassName}>
            Rivers are dynamic environments. Water depth, current, floating debris, vegetation, river width, signal
            availability, launching conditions, and nearby structures can all affect the performance of an unmanned
            vessel.
          </p>
          <p className={paragraphClassName}>The Dipag River deployment allowed the team to observe these conditions directly.</p>
          <p className={paragraphClassName}>During the preliminary activity, the team focused on three major objectives:</p>

          <div className="mt-9 space-y-9 border-l-2 border-orange-200 pl-5 sm:pl-8">
            <section aria-labelledby="initial-site-assessment">
              <h3 id="initial-site-assessment" className={subheadingClassName}>
                Initial Site Assessment
              </h3>
              <p className={paragraphClassName}>
                The team examined the river environment to better understand the conditions in which MiraQuest would
                operate.
              </p>
              <p className={paragraphClassName}>
                This included identifying suitable launch and recovery points, observing the water conditions, checking
                possible obstructions, and reviewing the areas that could be included in a future survey route.
              </p>
            </section>

            <section aria-labelledby="mission-boundaries">
              <h3 id="mission-boundaries" className={subheadingClassName}>
                Establishing Mission Boundaries
              </h3>
              <p className={paragraphClassName}>Before autonomous navigation can begin, the operating area must be clearly understood.</p>
              <p className={paragraphClassName}>
                The team assessed potential survey limits and identified sections of the river that could be used for
                controlled missions. This information will help guide route planning, safety procedures, and future
                waypoint configuration.
              </p>
            </section>

            <section aria-labelledby="mission-planning">
              <h3 id="mission-planning" className={subheadingClassName}>
                Mission Planning and System Preparation
              </h3>
              <p className={paragraphClassName}>
                The deployment also served as an opportunity to evaluate the vessel’s readiness for field operations.
              </p>
              <p className={paragraphClassName}>
                The team reviewed the relationship between the vessel, its propulsion system, onboard electronics,
                communications equipment, control systems, and the actual river environment. Observations from the
                deployment will be used to improve future missions and refine operating procedures.
              </p>
            </section>
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="real-world-engineering">
          <h2 id="real-world-engineering" className={headingClassName}>
            Engineering Through Real-World Experience
          </h2>
          <p className={paragraphClassName}>
            One of the most important aspects of the MiraQuest project is its role as a hands-on engineering platform.
          </p>
          <p className={paragraphClassName}>
            Engineering interns from Andres Bonifacio College contributed to different areas of the project, including
            mechanical development, electrical systems, communications, software, mission preparation, and field testing.
          </p>
          <p className={paragraphClassName}>
            Instead of working only with simulations or classroom exercises, the interns were able to experience the
            full development process of a real research and development project.
          </p>
          <p className={paragraphClassName}>
            They worked through challenges involving system integration, environmental conditions, hardware reliability,
            teamwork, documentation, safety, and operational planning.
          </p>
          <ArticlePhoto image={MIRAQUEST_ARTICLE.supportingImages.electronics} />
          <p className={paragraphClassName}>
            The project demonstrated that engineering education becomes more powerful when students are given the
            opportunity to help develop something that must function outside the laboratory.
          </p>
          <p className={paragraphClassName}>
            A river does not behave like a controlled test environment. It introduces uncertainty, changing conditions,
            and practical limitations. These challenges require engineers to observe carefully, communicate clearly,
            and improve their designs based on evidence.
          </p>
          <p className={paragraphClassName}>
            For the interns, the deployment was not simply a demonstration. It was an opportunity to take part in the
            transformation of an engineering concept into a working field platform.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="built-locally">
          <h2 id="built-locally" className={headingClassName}>
            Built Locally, Designed for Local Challenges
          </h2>
          <p className={paragraphClassName}>
            Many communities in the Philippines depend on rivers and coastal waterways for transportation, livelihood,
            agriculture, environmental resources, and disaster resilience.
          </p>
          <p className={paragraphClassName}>
            However, collecting reliable information from these environments can be time-consuming, expensive, and
            sometimes dangerous.
          </p>
          <p className={paragraphClassName}>Locally developed unmanned systems can help make this process more accessible.</p>
          <p className={paragraphClassName}>
            A platform such as MiraQuest could eventually support researchers, schools, local government units,
            environmental groups, disaster-response teams, and engineering organizations by providing a more flexible
            way to observe and study waterways.
          </p>
          <p className={paragraphClassName}>The value of MiraQuest is not limited to the vessel itself. The project is also developing local knowledge in:</p>
          <ArticleBulletList
            items={[
              'Marine robotics',
              'Autonomous navigation',
              'Embedded electronics',
              'Wireless communications',
              'Mechanical fabrication',
              'Sensor integration',
              'Mission planning',
              'Data collection',
              'Environmental technology',
              'Systems engineering',
            ]}
          />
          <p className={paragraphClassName}>Every deployment produces lessons that can strengthen the next version of the platform.</p>
          <p className={paragraphClassName}>
            This is how a local innovation ecosystem grows: not by importing finished solutions alone, but by allowing
            local engineers, educators, students, and institutions to design and improve technologies together.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="first-step">
          <h2 id="first-step" className={headingClassName}>
            The First Step Toward Autonomous River Surveying
          </h2>
          <p className={paragraphClassName}>
            The Dipag River activity was a preliminary deployment, but it represented a significant milestone for the
            MiraQuest team.
          </p>
          <p className={paragraphClassName}>
            It provided the real-world observations needed to prepare for more structured survey operations. The
            information gathered during the activity will guide future improvements to the vessel, its controls, mission
            procedures, and potential payload systems.
          </p>
          <p className={paragraphClassName}>
            Upcoming development stages may include more extensive navigation testing, improved mission planning,
            additional sensor integration, structured data collection, and repeatable survey routes.
          </p>
          <p className={paragraphClassName}>
            Each stage will be evaluated carefully before the platform is used for more demanding missions.
          </p>
          <p className={paragraphClassName}>
            The goal is not simply to make a robot move across the water. The goal is to build a reliable research
            vessel capable of collecting useful information while operating safely and consistently.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="collaboration">
          <h2 id="collaboration" className={headingClassName}>
            Collaboration as a Driver of Innovation
          </h2>
          <p className={paragraphClassName}>
            The MiraQuest project also demonstrates the importance of collaboration between education, industry,
            research, and the local innovation community.
          </p>
          <p className={paragraphClassName}>
            Makerverse extends its appreciation to Andres Bonifacio College, particularly its College of Engineering,
            for supporting the participation of its engineering interns in the project.
          </p>
          <p className={paragraphClassName}>
            Their contribution shows what students can accomplish when they are trusted with meaningful engineering
            responsibilities and provided with an environment where they can design, test, fail, improve, and succeed.
          </p>
          <p className={paragraphClassName}>
            Makerverse remains committed to building more opportunities for collaborative research, student development,
            prototyping, robotics, and applied engineering projects in the region.
          </p>
          <p className={paragraphClassName}>
            The Dipag River deployment is only one mission, but it represents a larger vision: creating a local
            innovation pipeline where people can learn, build, deploy, and produce measurable impact.
          </p>
        </section>

        <section className={sectionClassName} aria-labelledby="what-comes-next">
          <h2 id="what-comes-next" className={headingClassName}>
            What Comes Next for MiraQuest?
          </h2>
          <p className={paragraphClassName}>
            The next phase of the project will focus on transforming the observations from the preliminary deployment
            into technical and operational improvements.
          </p>
          <p className={paragraphClassName}>
            The team will continue refining the platform, validating its systems, improving mission readiness, and
            preparing for future river-survey and environmental-monitoring activities.
          </p>
          <p className={paragraphClassName}>
            As MiraQuest moves forward, Makerverse will continue documenting its development, field tests, engineering
            challenges, and future missions.
          </p>
          <p className={paragraphClassName}>The journey of MiraQuest is only beginning.</p>
          <p className={paragraphClassName}>
            From a locally fabricated catamaran platform to a potential tool for research and environmental observation,
            it represents what can happen when engineering education, collaboration, and community-focused innovation
            come together.
          </p>
          <p className="mt-8 border-l-4 border-[#FF6321] pl-5 text-xl font-black tracking-tight text-[#003366] sm:text-2xl">
            Learn. Build. Deploy. Impact.
          </p>
        </section>

        <section
          className="overflow-hidden rounded-3xl bg-[#003366] p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12"
          aria-labelledby="follow-miraquest"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Continue the journey</p>
          <h2 id="follow-miraquest" className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Follow the MiraQuest Journey
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Follow Makerverse as we continue developing and deploying locally built technologies for robotics education,
            scientific research, environmental monitoring, and community innovation.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Interested in collaborating on research, engineering education, environmental monitoring, or
            autonomous-system development? Connect with Makerverse to explore potential partnerships.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.facebook.com/makerverse.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e85a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              <Facebook size={18} aria-hidden="true" />
              Follow Makerverse
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href="/#programs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <BookOpen size={18} aria-hidden="true" />
              Explore Programs
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Handshake size={18} aria-hidden="true" />
              Collaborate With Us
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>

      <aside aria-label="Article topics">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0056B3]">Article topics</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {MIRAQUEST_ARTICLE.tags.map((tag) => (
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

export default MiraQuestArticle;
