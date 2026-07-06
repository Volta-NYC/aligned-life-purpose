import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "Elder Care Advisory",
};

const careTopics = [
  "Care options and decision mapping",
  "Family role clarity",
  "Caregiver stress and emotional support",
  "Medical appointment preparation",
  "Senior living conversation planning",
  "Transition support after illness or hospitalization",
];

export default function ElderCarePage() {
  return (
    <main>
      <PageHero
        eyebrow="Elder care advisory"
        title="Clearer decisions for families caring for someone they love."
        copy="Elder care often arrives with urgency, emotion, and a maze of options. ALP can help families slow the process down enough to understand what comes next."
        image={imageAssets.care}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Care support"
          title="Advisory help for practical questions and emotional complexity."
          copy="This service lane is a strong differentiator for ALP because it connects personal transition coaching with one of the most stressful transitions families face."
        />
        <div className="feature-grid">
          {careTopics.map((topic) => (
            <article className="feature-card reveal" key={topic}>
              <h3>{topic}</h3>
              <p>
                Organize information, prepare conversations, and support healthier decisions under
                pressure.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="image-panel reveal">
          <Image
            src={imageAssets.conversation}
            alt="Two people in a thoughtful planning conversation"
            width={900}
            height={675}
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className="split-copy reveal delay-1">
          <p className="eyebrow">For caregivers</p>
          <h2>You do not have to become the family project manager alone.</h2>
          <p>
            This draft positions ALP as a calm guide for adult children, spouses, relatives, and
            support networks who need to make care decisions while also managing fear, grief,
            conflict, and responsibility.
          </p>
        </div>
      </section>

      <CtaBand
        title="Talk through the care decision in front of you."
        copy="Share what your family is navigating and what decisions feel most urgent."
      />
    </main>
  );
}
