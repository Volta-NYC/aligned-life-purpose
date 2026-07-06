import type { Metadata } from "next";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "About",
};

const facts = [
  "Self-owned company founded in 2025",
  "Professional Training and Coaching",
  "Individual life coaching and group coaching",
  "Led by Rachael Samuel, LMSW, MSEd",
  "Designed for professionals in seasons of work, family, health, and identity transition",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About ALP"
        title="A coaching practice for the human side of change."
        copy="Aligned Life Purpose helps professionals name what is changing, reconnect with what matters, and choose the next step with steadiness."
        image={imageAssets.coaching}
      />

      <section className="content-section">
        <SectionIntro
          eyebrow="What is known"
          title="A credentialed helping professional bringing coaching principles into transition work."
          copy="Rachael Samuel, LMSW, MSEd, brings experience as a social worker and helping professional into Aligned Life Purpose. Her coaching work supports professionals navigating life transitions and seeking purpose-driven success."
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
          <h2>Rachael Samuel brings a social work lens and a coaching mindset to purpose work.</h2>
          <p>
            With LMSW and MSEd credentials, Rachael can be introduced as a guide who understands
            people, systems, stress, resilience, and change. Her decision to study the principles of
            coaching gives ALP a forward-looking approach: not therapy, but purposeful support for
            people ready to clarify goals and take aligned action.
          </p>
        </div>
        <div className="story-card reveal delay-1">
          <p className="eyebrow">Draft positioning</p>
          <h3>Rachael works with people standing at the threshold of a new life chapter.</h3>
          <p>
            The site positions Aligned Life Purpose as reflective, action-oriented coaching for job
            promotions, career changes, business launches, newly married life, new parenthood,
            health crises, empty nesting, and other major transition seasons.
          </p>
        </div>
      </section>

      <CtaBand
        title="Bring Rachael's story into focus."
        copy="When a fuller biography, founder photo, coaching credentials detail, and testimonials are available, this page is ready to become a stronger trust-building About page."
      />
    </main>
  );
}
