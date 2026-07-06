import type { Metadata } from "next";
import { CtaBand, PageHero, ProcessRail, SectionIntro } from "../components";
import { imageAssets, pricing, transitions } from "../data";

export const metadata: Metadata = {
  title: "Coaching",
};

const formats = [
  {
    title: "Individual life coaching",
    copy: "Private 45-60 minute sessions for professionals who want confidential support, decision clarity, aligned goals, and a practical plan.",
  },
  {
    title: "Group coaching",
    copy: "Structured group sessions for shared reflection, values work, accountability, and guided conversation across common transition themes.",
  },
  {
    title: "Coaching packages",
    copy: "Four-session and twelve-session packages for clients who want a defined coaching arc and sustained support.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Coaching"
        title="Support for professionals becoming someone new."
        copy="Coaching at ALP is for professionals who are ready to stop circling the same question and start building a next chapter that matches their values."
        image={imageAssets.journal}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Who it helps"
          title="For transition seasons that carry both practical decisions and identity questions."
          copy="This work is designed for professionals seeking a job promotion, changing careers, starting a business, navigating marriage or new parenthood, facing a health crisis, becoming an empty nester, or rethinking what success should look like now."
        />
        <div className="feature-grid">
          {transitions.map((transition) => (
            <article className="feature-card reveal" key={transition}>
              <h3>{transition}</h3>
              <p>
                Clarify what matters, sort through choices, and create a grounded plan for the new
                season.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="group" className="content-section">
        <SectionIntro
          eyebrow="Formats"
          title="Flexible coaching containers for different levels of support."
          copy="Clients can begin with a single session, commit to a four-session arc, or choose a twelve-session package for a fuller season of coaching."
        />
        <div className="story-grid">
          {formats.map((format) => (
            <article className="story-card reveal" key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <SectionIntro
          eyebrow="Pricing"
          title="Simple coaching packages for a focused season of transition."
          copy="Each individual session is 45-60 minutes. Packages keep the work structured while giving clients room to clarify, practice, and integrate."
        />
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <article className="pricing-card reveal" key={plan.name}>
              <span>{index === 1 ? "Focused arc" : index === 2 ? "Best for depth" : "Start here"}</span>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="price-detail">{plan.detail}</p>
              <p>{plan.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <SectionIntro
          eyebrow="How coaching works"
          title="A practical path from reflection to movement."
        />
        <ProcessRail />
      </section>

      <CtaBand
        title="Make the next chapter less vague."
        copy="Use the consult request to share what is changing and what kind of support would feel most useful right now."
      />
    </main>
  );
}
