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
          Stop managing chaos.
          <br />
          <span className="hero-headline-accent">Start shipping.</span>
        </h1>

        <p className="hero-sub">
          One workspace for your projects, tasks, milestones, and team &mdash;
          so nothing falls through the cracks.
        </p>

        <div className="hero-cta-group">
          <a href="#" className="btn btn-primary btn-lg">
            Start Free Trial
          </a>
          <a href="#features" className="btn btn-ghost btn-lg">
            See How It Works <span className="arrow">&rarr;</span>
          </a>
        </div>

        <p className="hero-microcopy">
          No credit card required &middot; 14-day free trial
        </p>

        {/* Product Mockup */}
        <div className="mockup-wrapper">
          <div className="mockup-glow-bg" />
          <div className="mockup">
            {/* Browser Chrome */}
            <div className="mockup-chrome">
              <div className="mockup-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-url">app.projeckt.com</div>
            </div>

            {/* App Body */}
            <div className="mockup-body">
              {/* Sidebar */}
              <div className="mockup-sidebar">
                <div className="mockup-sidebar-logo">P</div>
                <div className="mockup-sidebar-nav">
                  <div className="mockup-nav-item active">
                    <span className="mockup-nav-icon">&#9638;</span>
                    <span>Dashboard</span>
                  </div>
                  <div className="mockup-nav-item">
                    <span className="mockup-nav-icon">&#9707;</span>
                    <span>Projects</span>
                  </div>
                  <div className="mockup-nav-item">
                    <span className="mockup-nav-icon">&#9783;</span>
                    <span>Tasks</span>
                  </div>
                  <div className="mockup-nav-item">
                    <span className="mockup-nav-icon">&#9673;</span>
                    <span>Clients</span>
                  </div>
                  <div className="mockup-nav-item">
                    <span className="mockup-nav-icon">&#9782;</span>
                    <span>Team</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="mockup-main">
                <div className="mockup-header">
                  <h3>Dashboard</h3>
                  <div className="mockup-search">&#8981; Search&hellip;</div>
                </div>

                <div className="mockup-stats-row">
                  <div className="mockup-stat-card">
                    <span className="mockup-stat-label">Active Projects</span>
                    <span className="mockup-stat-value">12</span>
                  </div>
                  <div className="mockup-stat-card">
                    <span className="mockup-stat-label">Tasks Due</span>
                    <span className="mockup-stat-value">5</span>
                  </div>
                  <div className="mockup-stat-card">
                    <span className="mockup-stat-label">On Track</span>
                    <span className="mockup-stat-value accent">89%</span>
                  </div>
                </div>

                <div className="mockup-task-list">
                  <div className="mockup-task-header">Recent Tasks</div>
                  <div className="mockup-task">
                    <span className="mockup-check checked">&check;</span>
                    <span className="mockup-task-title">
                      Update client presentation
                    </span>
                    <span className="mockup-badge high">HIGH</span>
                  </div>
                  <div className="mockup-task">
                    <span className="mockup-check" />
                    <span className="mockup-task-title">
                      Review site blueprints
                    </span>
                    <span className="mockup-badge medium">MED</span>
                  </div>
                  <div className="mockup-task">
                    <span className="mockup-check" />
                    <span className="mockup-task-title">
                      Submit permit application
                    </span>
                    <span className="mockup-badge critical">CRIT</span>
                  </div>
                  <div className="mockup-task">
                    <span className="mockup-check checked">&check;</span>
                    <span className="mockup-task-title">
                      Schedule site inspection
                    </span>
                    <span className="mockup-badge low">LOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
