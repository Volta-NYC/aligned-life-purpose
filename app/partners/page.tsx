import type { Metadata } from "next";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "Programs",
};

const partners = [
  {
    title: "Professional associations",
    copy: "Offer members a coaching space for promotion readiness, career pivots, purpose resets, and leadership transitions.",
  },
  {
    title: "Workforce and career programs",
    copy: "Help participants navigate job growth, career change, entrepreneurship, and identity shifts with confidence.",
  },
  {
    title: "Employee wellness programs",
    copy: "Bring coaching support to professionals facing health crises, family change, burnout, or a major life transition.",
  },
  {
    title: "Community and faith-based groups",
    copy: "Bring group coaching and reflection workshops to people facing meaningful personal, family, or professional change.",
  },
];

const models = [
  "Group workshop series",
  "Professional transition cohort",
  "New parent support group",
  "Career change coaching circle",
  "Transition readiness program",
  "Custom organization pilot",
];

export default function PartnersPage() {
  return (
    <main className="page-programs">
      <PageHero
        eyebrow="Programs"
        title="Group coaching programs for people moving through change together."
        copy="This page is useful if ALP wants to sell group coaching, workshops, and organization-ready transition programs. If that is not a near-term focus, it can be removed later without hurting the core site."
        image={imageAssets.coaching}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Program fit"
          title="Built for groups whose people need clarity during life change."
          copy="Participants may be seeking a promotion, changing careers, starting a business, becoming newly married, becoming a new parent, facing a health crisis, or entering an empty-nester season."
        />
        <div className="feature-grid">
          {partners.map((partner) => (
            <article className="feature-card reveal" key={partner.title}>
              <h3>{partner.title}</h3>
              <p>{partner.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionIntro
          eyebrow="Program models"
          title="Program formats can start small, prove value, and scale."
        />
        <div className="resource-grid">
          {models.map((model, index) => (
            <article className="resource-card reveal" key={model}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{model}</h3>
              <p>
                A practical format that can be adapted to the organization&apos;s population, budget,
                staffing, and referral workflow.
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Explore a pilot program."
        copy="Use the contact page to describe the population you serve, the transition they face, and the support gap you want to close."
      />
    </main>
  );
}
