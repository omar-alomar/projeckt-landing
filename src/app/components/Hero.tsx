export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-mesh">
        <div className="mesh-layer mesh-1" />
        <div className="mesh-layer mesh-2" />
        <div className="mesh-layer mesh-3" />
      </div>

      <div className="container hero-content">
        <h1 className="hero-headline">
          Project management for
          <br />
          <span className="hero-headline-accent">teams that build.</span>
        </h1>

        <p className="hero-sub">
          Track projects, hit milestones, and pull property data &mdash; in one
          workspace built for engineering firms and land developers.
        </p>

        <div className="hero-cta-group">
          <a href="#" className="btn btn-primary btn-lg">
            Get Started Free
          </a>
          <a href="#pricing" className="btn btn-ghost btn-lg">
            See Pricing <span className="arrow">&rarr;</span>
          </a>
        </div>

        <p className="hero-microcopy">
          No credit card required &middot; 14-day trial
        </p>

        <div className="mockup-wrapper">
          <img
            src="/screenshots/projects.png"
            alt="Projeckt projects table with MBA numbers, CO files, and milestone urgency colors"
            className="hero-screenshot"
          />
        </div>
      </div>
    </section>
  );
}
