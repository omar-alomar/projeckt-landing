import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import ScrollReveal from './components/ScrollReveal';
import Lightbox from './components/Lightbox';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      {/* Property Lookup — the differentiator */}
      <section className="property-showcase">
        <div className="container">
          <ScrollReveal>
            <div className="property-grid">
              <div className="property-text">
                <p className="section-label">Built-in property data</p>
                <h2 className="property-heading">
                  Pull property records
                  <br />
                  in seconds.
                </h2>
                <p className="property-desc">
                  Type an address. Get owner info, assessment values, zoning,
                  environmental reports, floodplain status, and scanned
                  plats &mdash; aggregated from county and state databases,
                  right inside your project.
                </p>
                <p className="property-sub">
                  No more switching between SDAT, county GIS, and
                  DataExplorer. It&apos;s all here.*
                </p>
                <p className="property-note">
                  * Additional data sources and jurisdictions available on
                  request.
                </p>
              </div>
              <div className="property-visual">
                <Lightbox
                  src="/screenshots/property-lookup.gif"
                  alt="Property lookup pulling owner data, zoning, and environmental info from an address"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features — real screenshots */}
      <section className="features" id="features">
        <div className="container">
          <div className="bento-row">
            <ScrollReveal>
              <div className="bento-card">
                <h3 className="bento-title">Dashboard at a glance</h3>
                <p className="bento-desc">
                  Active tasks, urgent items, completion rate, upcoming
                  milestones, and recent activity &mdash; one view.
                </p>
                <div className="bento-visual">
                  <Lightbox
                    src="/screenshots/dashboard.png"
                    alt="Dashboard with KPIs, milestones, and activity feed"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bento-card">
                <h3 className="bento-title">See your team&apos;s workload</h3>
                <p className="bento-desc">
                  Task cards grouped by team member. Who&apos;s overloaded,
                  who&apos;s available &mdash; at a glance.
                </p>
                <div className="bento-visual">
                  <Lightbox
                    src="/screenshots/team-board.png"
                    alt="Team board showing tasks per person"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bento-card">
                <h3 className="bento-title">Your tasks, organized</h3>
                <p className="bento-desc">
                  In progress, completed, and assigned to others &mdash;
                  resizable panels, one view.
                </p>
                <div className="bento-visual">
                  <Lightbox
                    src="/screenshots/my-tasks.png"
                    alt="My tasks view with resizable panels"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Pricing />

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <span className="footer-logo">
              Projeck<span className="nav-logo-accent">t</span>
            </span>
            <div className="footer-links-row">
              <a href="#features" className="footer-link">
                Features
              </a>
              <a href="#pricing" className="footer-link">
                Pricing
              </a>
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Projeckt</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
