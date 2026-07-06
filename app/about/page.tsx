import type { Metadata } from "next";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "About",
};

const facts = [
  "Self-owned company founded in 2025",
  "Professional Training and Coaching",
  "Life coaching, consulting, group coaching, and elder care advising",
  "Designed for people in seasons of personal, professional, family, and health transition",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About ALP"
        title="A coaching practice for the human side of change."
        copy="Aligned Life Purpose helps people name what is changing, reconnect with what matters, and choose the next step with steadiness."
        image={imageAssets.coaching}
      />

      <section className="content-section">
        <SectionIntro
          eyebrow="What is known"
          title="The public footprint points to a young, founder-led practice with a clear transition niche."
          copy="The LinkedIn company page identifies Aligned Life Purpose as a 2025 self-owned Professional Training and Coaching company with one employee. Its public description centers life-change coaching and elder care advisory."
        />
        <div className="story-grid">
          {facts.map((fact) => (
            <article className="story-card reveal" key={fact}>
              <h3>{fact}</h3>
              <p>
                This draft translates that public positioning into a full website architecture for
                individual clients, families, and partner organizations.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy reveal">
          <p className="eyebrow">Founder point of view</p>
          <h2>Built around clarity, compassion, purpose, and practical action.</h2>
          <p>
            A public Uplift2Thrive search snippet describes the brand as born from Rachael&apos;s faith
            and vision. Until a full founder bio is confirmed, this site keeps the founder story
            respectful and flexible: warm enough to feel personal, but not overclaiming credentials
            that are not public yet.
          </p>
        </div>
        <div className="story-card reveal delay-1">
          <p className="eyebrow">Draft bio angle</p>
          <h3>Rachael works with people standing at the threshold of a new life chapter.</h3>
          <p>
            Her work can be positioned as reflective, action-oriented coaching for people navigating
            identity shifts, caregiving decisions, work reinvention, family transitions, and recovery
            seasons.
          </p>
        </div>
      </section>

      <CtaBand
        title="Bring the founder story into focus."
        copy="When a fuller biography, photo, credentials, and testimonials are available, this page is ready to become a stronger trust-building About page."
      />
    </main>
  );
}
