import type { Metadata } from "next";
import { CtaBand, PageHero, ProcessRail, SectionIntro } from "../components";
import { imageAssets, transitions } from "../data";

export const metadata: Metadata = {
  title: "Coaching",
};

const formats = [
  {
    title: "Private coaching",
    copy: "Focused one-on-one sessions for clients who want confidential support, decision clarity, and a personalized plan.",
  },
  {
    title: "Group coaching",
    copy: "Structured cohorts for shared reflection, values work, accountability, and guided conversation.",
  },
  {
    title: "Purpose planning intensives",
    copy: "A concentrated experience for clients who need a reset before a major decision, launch, or life shift.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Coaching"
        title="Support for people becoming someone new."
        copy="Coaching at ALP is for clients who are ready to stop circling the same question and start building a next chapter that matches their values."
        image={imageAssets.journal}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Who it helps"
          title="For transition seasons that carry both practical decisions and identity questions."
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
          copy="This page gives ALP a sales-ready path for paid clients while leaving room to refine pricing, session length, and package names later."
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
