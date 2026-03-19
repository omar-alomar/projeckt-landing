import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      {/* Stats */}
      <ScrollReveal>
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-number">2,847</span>
                <span className="stat-label">Projects shipped</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">12,000+</span>
                <span className="stat-label">Tasks completed</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">340</span>
                <span className="stat-label">Teams</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pain Points */}
      <ScrollReveal>
        <section className="pain-points">
          <div className="container container-narrow">
            <p className="section-label">Sound familiar?</p>
            <h2 className="section-heading">
              You&apos;ve been here before.
            </h2>
            <div className="pain-text">
              <p>
                Your projects live in spreadsheets. Your tasks are buried in
                email. Your deadlines are in someone&apos;s head &mdash; maybe
                yours, maybe not.
              </p>
              <p>Every Monday morning starts the same way:</p>
            </div>
            <ul className="pain-list">
              <li>&ldquo;Did anyone finish that?&rdquo;</li>
              <li>&ldquo;Which version is the latest?&rdquo;</li>
              <li>&ldquo;When was that deadline again?&rdquo;</li>
              <li>&ldquo;Who&apos;s working on what?&rdquo;</li>
            </ul>
            <p className="pain-resolve">
              It doesn&apos;t have to be this way.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section className="how-it-works">
          <div className="container">
            <p className="section-label" style={{ textAlign: 'center' }}>
              Simple by design
            </p>
            <h2
              className="section-heading"
              style={{ textAlign: 'center' }}
            >
              Three steps. That&apos;s it.
            </h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">01</div>
                <h3 className="step-title">Set up your workspace</h3>
                <p className="step-desc">
                  Create projects, invite your team, define milestones. Takes
                  under 5 minutes.
                </p>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <h3 className="step-title">Assign and prioritize</h3>
                <p className="step-desc">
                  Break work into tasks. Set urgency. Assign owners. Everyone
                  knows what to do next.
                </p>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <h3 className="step-title">Ship with confidence</h3>
                <p className="step-desc">
                  Your dashboard shows real-time status across every project and
                  every person.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <p className="section-label">What you get</p>
          <h2 className="section-heading">
            Everything your team needs.
            <br />
            Nothing it doesn&apos;t.
          </h2>

          <ScrollReveal>
            <div className="feature-row">
              <div className="feature-text">
                <h3 className="feature-title">Everything at a glance</h3>
                <p className="feature-desc">
                  See every project, task, and deadline in one view &mdash;
                  color-coded by urgency so you know what needs attention right
                  now. No more digging through spreadsheets or chasing status
                  updates.
                </p>
              </div>
              <div className="feature-visual">
                <div className="feature-card">
                  <div className="fc-row">
                    <div className="fc-stat">
                      <span className="fc-num">12</span>
                      <span className="fc-label">Active</span>
                    </div>
                    <div className="fc-stat">
                      <span className="fc-num">5</span>
                      <span className="fc-label">Due Today</span>
                    </div>
                    <div className="fc-stat accent">
                      <span className="fc-num">89%</span>
                      <span className="fc-label">On Track</span>
                    </div>
                  </div>
                  <div className="fc-bars">
                    <div className="fc-bar" style={{ width: '87%' }}>
                      <span>Riverside Complex</span>
                    </div>
                    <div className="fc-bar" style={{ width: '64%' }}>
                      <span>Harbor Bridge</span>
                    </div>
                    <div className="fc-bar" style={{ width: '42%' }}>
                      <span>Metro Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="feature-row reverse">
              <div className="feature-text">
                <h3 className="feature-title">Know who&apos;s doing what</h3>
                <p className="feature-desc">
                  See your team&apos;s capacity at a glance. Who&apos;s
                  overloaded. Who&apos;s available. Assign work with confidence,
                  not guesswork.
                </p>
              </div>
              <div className="feature-visual">
                <div className="feature-card">
                  <div className="fc-team">
                    <div className="fc-member">
                      <div
                        className="fc-avatar"
                        style={{ background: '#8B5CF6' }}
                      >
                        SC
                      </div>
                      <div className="fc-member-info">
                        <span className="fc-name">Sarah C.</span>
                        <span className="fc-tasks">6 tasks</span>
                      </div>
                      <div className="fc-load high">&#9679;&#9679;&#9679;</div>
                    </div>
                    <div className="fc-member">
                      <div
                        className="fc-avatar"
                        style={{ background: '#F97316' }}
                      >
                        MK
                      </div>
                      <div className="fc-member-info">
                        <span className="fc-name">Mike K.</span>
                        <span className="fc-tasks">3 tasks</span>
                      </div>
                      <div className="fc-load med">&#9679;&#9679;</div>
                    </div>
                    <div className="fc-member">
                      <div
                        className="fc-avatar"
                        style={{ background: '#10B981' }}
                      >
                        JR
                      </div>
                      <div className="fc-member-info">
                        <span className="fc-name">Jamie R.</span>
                        <span className="fc-tasks">1 task</span>
                      </div>
                      <div className="fc-load low">&#9679;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="feature-row">
              <div className="feature-text">
                <h3 className="feature-title">Nothing slips through</h3>
                <p className="feature-desc">
                  Instant notifications when tasks are assigned, completed, or
                  someone @mentions you. Milestone alerts before deadlines sneak
                  up on you.
                </p>
              </div>
              <div className="feature-visual">
                <div className="feature-card">
                  <div className="fc-notifications">
                    <div className="fc-notif">
                      <div className="fc-notif-dot purple" />
                      <div className="fc-notif-text">
                        <span className="fc-notif-title">
                          Sarah assigned you a task
                        </span>
                        <span className="fc-notif-sub">
                          Review updated site plans &mdash; HIGH
                        </span>
                      </div>
                      <span className="fc-notif-time">2m</span>
                    </div>
                    <div className="fc-notif">
                      <div className="fc-notif-dot green" />
                      <div className="fc-notif-text">
                        <span className="fc-notif-title">
                          Mike completed &ldquo;Submit permits&rdquo;
                        </span>
                        <span className="fc-notif-sub">
                          Harbor Bridge project
                        </span>
                      </div>
                      <span className="fc-notif-time">15m</span>
                    </div>
                    <div className="fc-notif">
                      <div className="fc-notif-dot orange" />
                      <div className="fc-notif-text">
                        <span className="fc-notif-title">
                          Milestone due in 5 days
                        </span>
                        <span className="fc-notif-sub">
                          Riverside Complex &mdash; Phase 2 deadline
                        </span>
                      </div>
                      <span className="fc-notif-time">1h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="feature-row reverse">
              <div className="feature-text">
                <h3 className="feature-title">Your clients, organized</h3>
                <p className="feature-desc">
                  Every client detail in one place. Contact info, associated
                  projects, full history &mdash; accessible to your whole team,
                  not trapped in someone&apos;s inbox.
                </p>
              </div>
              <div className="feature-visual">
                <div className="feature-card">
                  <div className="fc-client">
                    <div className="fc-client-header">
                      <div
                        className="fc-avatar large"
                        style={{ background: '#4F46E5' }}
                      >
                        AC
                      </div>
                      <div>
                        <span className="fc-client-name">
                          Acme Construction
                        </span>
                        <span className="fc-client-email">
                          j.martinez@acme.build
                        </span>
                      </div>
                    </div>
                    <div className="fc-client-projects">
                      <div className="fc-client-proj">
                        <span className="fc-proj-dot active" />
                        Riverside Complex
                      </div>
                      <div className="fc-client-proj">
                        <span className="fc-proj-dot active" />
                        Harbor Bridge
                      </div>
                      <div className="fc-client-proj">
                        <span className="fc-proj-dot archived" />
                        Metro Station (archived)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <ScrollReveal>
        <section className="testimonial">
          <div className="container container-narrow">
            <blockquote className="testimonial-quote">
              &ldquo;Before Projeckt, I spent every Monday morning chasing
              status updates across five different tools. Now my team opens one
              dashboard and we&apos;re all on the same page in
              seconds.&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SC</div>
              <div>
                <span className="testimonial-name">Sarah Chen</span>
                <span className="testimonial-title">
                  Director of Project Management, Meridian Engineering
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <ScrollReveal>
        <section className="final-cta">
          <div className="container container-narrow">
            <h2 className="final-cta-heading">
              Ready to stop managing chaos?
            </h2>
            <p className="final-cta-sub">
              Join 340+ teams who ship projects with confidence.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Start Your Free Trial
            </a>
            <p className="hero-microcopy">
              No credit card required &middot; 14-day free trial &middot; Cancel
              anytime
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">
                Projeck<span className="nav-logo-accent">t</span>
              </span>
              <p className="footer-tagline">
                Project management, sharpened.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Product</h4>
              <a href="#features" className="footer-link">
                Features
              </a>
              <a href="#pricing" className="footer-link">
                Pricing
              </a>
              <a href="#" className="footer-link">
                API
              </a>
              <a href="#" className="footer-link">
                Changelog
              </a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Projeckt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
