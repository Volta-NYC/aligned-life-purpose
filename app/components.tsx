import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { navItems, offerings, processSteps, site } from "./data";

function delayStyle(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Aligned Life Purpose home">
        <span className="brand-mark">ALP</span>
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">
        Book a consult
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-brand" href="/">
          {site.name}
        </Link>
        <p>
          Coaching and advisory support for adults, families, and organizations navigating
          meaningful life transitions.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/coaching">Coaching</Link>
        <Link href="/coaching#pricing">Pricing</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/partners">Partners</Link>
        <a href={site.linkedin}>LinkedIn</a>
      </div>
      <p className="credit">Website by Volta</p>
    </footer>
  );
}

export function PageHero({
  title,
  copy,
  eyebrow,
  image,
}: {
  title: string;
  copy: string;
  eyebrow?: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero-copy reveal">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="hero-lede">{copy}</p>
      </div>
      <TransitionMap image={image} />
    </section>
  );
}

export function TransitionMap({ image }: { image?: string }) {
  return (
    <div className="transition-map reveal delay-1">
      {image ? <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" /> : null}
      <div className="map-overlay">
        <span className="node node-a" />
        <span className="node node-b" />
        <span className="node node-c" />
        <span className="node node-d" />
        <svg viewBox="0 0 420 420" aria-hidden="true">
          <path d="M70 285 C130 170 190 340 250 205 S340 120 360 245" />
          <path d="M90 138 C150 98 210 112 258 170 S322 268 350 304" />
        </svg>
      </div>
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function OfferingGrid() {
  return (
    <div className="feature-grid">
      {offerings.map((offering, index) => (
        <Link className="feature-card reveal" style={delayStyle(index * 90)} href={offering.href} key={offering.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{offering.title}</h3>
          <p>{offering.copy}</p>
        </Link>
      ))}
    </div>
  );
}

export function ProcessRail() {
  return (
    <div className="process-rail">
      {processSteps.map((step, index) => (
        <article className="process-card reveal" style={delayStyle(index * 100)} key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Start with a conversation.",
  copy = "Share the transition you are navigating, the people you want to support, or the partnership you are exploring.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="cta-band reveal">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button button-light" href="/contact">
        Request a consult
      </Link>
    </section>
  );
}
