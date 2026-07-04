const offerings = [
  {
    title: "Purpose Mapping",
    copy: "Clarify the values, patterns, and possibilities that are already shaping your next season.",
  },
  {
    title: "Life Alignment",
    copy: "Turn insight into sustainable rhythms for work, relationships, wellness, and personal growth.",
  },
  {
    title: "Guided Reflection",
    copy: "Create space for honest questions, grounded decisions, and the confidence to move forward.",
  },
];

const steps = ["Discover", "Align", "Practice", "Integrate"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aligned Life Purpose home">
          Aligned Life Purpose
        </a>
        <nav aria-label="Main navigation">
          <a href="#offerings">Offerings</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="intro">Coaching for clarity, direction, and grounded change.</p>
          <h1>Live in closer alignment with the life you are here to build.</h1>
          <p className="lede">
            A calm, reflective starting point for a site centered on purpose, personal growth,
            and practical next steps.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">
              Start a Conversation
            </a>
            <a className="button secondary" href="#offerings">
              Explore Offerings
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="center-mark">ALP</div>
        </div>
      </section>

      <section id="offerings" className="section">
        <div className="section-heading">
          <p className="intro">Offerings</p>
          <h2>Support for the inner work and the everyday work.</h2>
        </div>
        <div className="card-grid">
          {offerings.map((offering) => (
            <article className="card" key={offering.title}>
              <h3>{offering.title}</h3>
              <p>{offering.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <p className="intro">Process</p>
          <h2>A simple rhythm for moving from reflection into lived change.</h2>
        </div>
        <div className="process-list">
          {steps.map((step, index) => (
            <div className="process-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="intro">Contact</p>
          <h2>Ready for a more aligned next step?</h2>
          <p>
            Replace this starter block with the final intake form, scheduling link, or preferred
            contact details when the content is ready.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@alignedlifepurpose.com">
          hello@alignedlifepurpose.com
        </a>
      </section>

      <footer>
        <p>Aligned Life Purpose</p>
        <p>Website by Volta</p>
      </footer>
    </main>
  );
}
