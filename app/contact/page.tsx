import type { Metadata } from "next";
import { PageHero } from "../components";
import { imageAssets, site } from "../data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell ALP what transition you are navigating."
        copy="Use this contact flow for individual coaching inquiries, group coaching requests, and organization partnership conversations."
        image={imageAssets.conversation}
      />

      <section className="section">
        <div className="contact-grid">
          <article className="contact-card reveal">
            <p className="eyebrow">Best fit</p>
            <h2>Start here if you are looking for clarity, support, or a partner program.</h2>
            <p>
              This static form is ready to connect to a form provider later. For now, the primary
              contact path is email.
            </p>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </article>

          <form className="contact-card contact-form reveal delay-1">
            <label>
              Name
              <input name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              I am interested in
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Individual life coaching</option>
                <option>Group coaching</option>
                <option>Four-session package</option>
                <option>Twelve-session package</option>
                <option>Organization partnership</option>
              </select>
            </label>
            <label>
              What is changing?
              <textarea name="message" placeholder="Share a few lines about the transition." />
            </label>
            <a className="button button-primary" href={`mailto:${site.email}`}>
              Send by email
            </a>
          </form>
        </div>
      </section>
    </main>
  );
}
