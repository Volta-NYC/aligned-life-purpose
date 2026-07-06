import Link from "next/link";
import Image from "next/image";
import {
  CtaBand,
  OfferingGrid,
  ProcessRail,
  SectionIntro,
  TransitionMap,
} from "./components";
import { imageAssets, transitions } from "./data";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Life coaching for professionals in transition</p>
          <h1>Find your footing in the season that is reshaping your life.</h1>
          <p className="hero-lede">
            Aligned Life Purpose supports professionals pursuing promotions, changing careers,
            starting businesses, growing families, facing health crises, becoming empty nesters, or
            stepping into a new chapter with clarity, confidence, and purposeful action.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Book a consult
            </Link>
          <Link className="button button-secondary" href="/partners">
              Explore groups
            </Link>
          </div>
        </div>
        <TransitionMap image={imageAssets.conversation} />
      </section>

      <section className="ticker-band" aria-label="Transitions supported">
        <div>
          {[...transitions, ...transitions].map((transition, index) => (
            <span key={`${transition}-${index}`}>{transition}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="What ALP supports"
          title="Guidance for chosen changes, unexpected changes, and the space in between."
          copy="Aligned Life Purpose offers individual and group life coaching for professionals navigating meaningful transitions in work, family, health, and identity."
        />
        <OfferingGrid />
      </section>

      <section className="split-section">
        <div className="image-panel reveal">
          <Image
            src={imageAssets.journal}
            alt="Journal, pen, and planning notes on a desk"
            width={900}
            height={675}
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className="split-copy reveal delay-1">
          <p className="eyebrow">For individual clients</p>
          <h2>Turn uncertainty into a plan you can actually live with.</h2>
          <p>
            Career change, business creation, marriage, family planning, divorce, illness
            recovery, new parenthood, empty nesting, and promotion seasons all ask the same deeper
            question: who am I becoming now? ALP gives clients room to answer that question and move
            forward with structure.
          </p>
          <Link className="text-link" href="/coaching">
            Explore coaching
          </Link>
        </div>
      </section>

      <section className="section dark-section">
        <SectionIntro
          eyebrow="Process"
          title="A clear rhythm for navigating life change with care and momentum."
        />
        <ProcessRail />
      </section>

      <section className="split-section reverse">
        <div className="split-copy reveal">
          <p className="eyebrow">For groups and organizations</p>
          <h2>Group coaching for people moving through life change together.</h2>
          <p>
            ALP can support teams, cohorts, community groups, and professional networks with
            structured coaching conversations that help people name what is changing and move
            forward with purpose.
          </p>
          <Link className="text-link" href="/partners">
            See group options
          </Link>
        </div>
        <div className="image-panel reveal delay-1">
          <Image
            src={imageAssets.care}
            alt="Caregiver and older adult holding hands"
            width={900}
            height={675}
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
