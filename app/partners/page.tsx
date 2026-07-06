import type { Metadata } from "next";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "Partners",
};

const partners = [
  {
    title: "Hospitals and clinics",
    copy: "Support patients and caregivers as they adjust to diagnosis, recovery, caregiving, discharge, or lifestyle change.",
  },
  {
    title: "Senior service organizations",
    copy: "Offer families a coaching pathway for elder care conversations, role clarity, and transition planning.",
  },
  {
    title: "Workforce and career programs",
    copy: "Help participants navigate career pivots, entrepreneurship, and identity shifts with confidence.",
  },
  {
    title: "Community wellness groups",
    copy: "Bring group coaching and reflection workshops to people facing major personal or family transitions.",
  },
];

const models = [
  "Referral partner",
  "Group workshop series",
  "Client coaching package",
  "Caregiver support cohort",
  "Transition readiness program",
  "Custom organization pilot",
];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnerships"
        title="A coaching partner for organizations serving people in transition."
        copy="ALP can help health and community organizations extend support beyond clinical, case management, or program touchpoints."
        image={imageAssets.coaching}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Partner fit"
          title="Built for organizations whose clients need clarity between appointments."
          copy="The client population may be facing illness recovery, caregiving, family change, career disruption, or an identity shift that affects wellbeing and follow-through."
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
          title="Partnerships can start small, prove value, and scale."
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
        title="Explore a pilot partnership."
        copy="Use the contact page to describe the population you serve, the transition they face, and the support gap you want to close."
      />
    </main>
  );
}
