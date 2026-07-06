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
  "Led by Rachael Samuel, LMSW, MSEd",
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
          title="The public footprint points to a young practice with a clear transition niche and a credentialed founder."
          copy="The LinkedIn company page identifies Aligned Life Purpose as a 2025 self-owned Professional Training and Coaching company with one employee. Rachael Samuel, LMSW, MSEd, publicly positions her work around helping people navigate life transitions and achieve purpose-driven success."
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
          <h2>Rachael Samuel brings a transition-centered lens to purpose work.</h2>
          <p>
            With LMSW and MSEd credentials, Rachael can be introduced as a guide for people in
            transformational moments: career changers, new business owners, growing families,
            people recovering from illness, couples navigating marriage or divorce, and caregivers
            making elder care decisions.
          </p>
        </div>
        <div className="story-card reveal delay-1">
          <p className="eyebrow">Draft positioning</p>
          <h3>Rachael works with people standing at the threshold of a new life chapter.</h3>
          <p>
            The site positions Aligned Life Purpose as reflective, action-oriented coaching for
            identity shifts, caregiving decisions, work reinvention, family transitions, and
            recovery seasons.
          </p>
        </div>
      </section>

      <CtaBand
        title="Bring Rachael's story into focus."
        copy="When a fuller biography, founder photo, credentials detail, and testimonials are available, this page is ready to become a stronger trust-building About page."
      />
    </main>
  );
}
