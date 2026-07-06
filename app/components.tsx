"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { navItems, offerings, processSteps, site } from "./data";

function delayStyle(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const syncHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 640px)").matches;

      if (!isMobile) {
        setIsHiddenOnMobile(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 80) {
        setIsHiddenOnMobile(false);
      } else {
        setIsHiddenOnMobile(currentScrollY > lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", syncHeaderVisibility, { passive: true });
    window.addEventListener("resize", syncHeaderVisibility);
    syncHeaderVisibility();

    return () => {
      window.removeEventListener("scroll", syncHeaderVisibility);
      window.removeEventListener("resize", syncHeaderVisibility);
    };
  }, []);

  const isActive = (href: string) => {
    if (pathname === "/") {
      return false;
    }

    const [path, targetHash] = href.split("#");

    if (targetHash) {
      return pathname === path && hash === `#${targetHash}`;
    }

    if (href === "/coaching" && pathname === "/coaching" && hash === "#pricing") {
      return false;
    }

    return pathname === href;
  };

  return (
    <header className={`site-header${isHiddenOnMobile ? " site-header--hidden-mobile" : ""}`}>
      <Link className="brand" href="/" aria-label="Aligned Life Purpose home">
        <Image
          className="brand-logo"
          src="/aligned-life-purpose-logo.jpg"
          alt="Aligned Life Purpose logo"
          width={48}
          height={48}
          priority
        />
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            className={isActive(item.href) ? "is-active" : undefined}
            href={item.href}
            key={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
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
      <div className="footer-main">
        <div>
          <Link className="footer-brand" href="/">
            <Image
              className="footer-logo"
              src="/aligned-life-purpose-logo.jpg"
              alt="Aligned Life Purpose logo"
              width={46}
              height={46}
            />
            {site.name}
          </Link>
          <p>
            Life coaching for professionals navigating transition, purpose, career, family, and
            personal change.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/coaching">Coaching</Link>
          <Link href="/coaching#pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/partners">Programs</Link>
          <a href={site.linkedin}>LinkedIn</a>
        </div>
        <address className="footer-contact">
          <span>Contact</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a>
          <small>Phone and email are placeholders.</small>
        </address>
        <div className="footer-credit">
          Website by{" "}
          <a href={site.volta}>
            Volta
          </a>
        </div>
      </div>
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
      {image ? <PlaceholderImage label={image} /> : null}
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

export function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="placeholder-image" role="img" aria-label={label}>
      <span>Placeholder Image</span>
      <strong>{label.replace("Placeholder image: ", "")}</strong>
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
  copy = "Share the transition you are navigating, the people you want to support, or the group program you are exploring.",
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
