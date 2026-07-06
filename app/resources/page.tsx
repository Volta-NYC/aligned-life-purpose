import type { Metadata } from "next";
import { CtaBand, PageHero, SectionIntro } from "../components";
import { imageAssets, resourceCards } from "../data";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Tools for the questions that surface during change."
        copy="A resource library gives ALP a useful content engine for SEO, email capture, workshops, and partner conversations."
        image={imageAssets.journal}
      />

      <section className="section">
        <SectionIntro
          eyebrow="Starter library"
          title="Draft resources to convert visitors into consults and partnership conversations."
        />
        <div className="resource-grid">
          {resourceCards.map((resource) => (
            <article className="resource-card reveal" key={resource.title}>
              <span>{resource.type}</span>
              <h3>{resource.title}</h3>
              <p>{resource.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionIntro
          eyebrow="Content themes"
          title="Recommended article categories for the finished site."
        />
        <div className="story-grid">
          {["Life transitions", "Elder care planning", "Career and business purpose"].map((theme) => (
            <article className="story-card reveal" key={theme}>
              <h3>{theme}</h3>
              <p>
                Publish practical, empathetic pieces that answer real transition questions and
                invite readers into a consult.
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
