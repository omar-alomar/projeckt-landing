'use client';

import ScrollReveal from './ScrollReveal';
import CTAButton from './CTAButton';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <ScrollReveal>
          <div className="pricing-header">
            <p className="section-label">Alpha pricing</p>
            <h2 className="section-heading">
              Every feature. One price.
            </h2>
            <p className="pricing-sub">
              Alpha members get the full platform &mdash; everything that
              will be split across tiers at launch &mdash; for one flat
              rate. Locked in forever.
            </p>
          </div>
        </ScrollReveal>

        <div className="pricing-grid pricing-grid-single">
          <ScrollReveal>
            <div className="pricing-card pricing-card-launch">
              <div className="pricing-card-header-muted">At launch</div>
              <div className="pricing-plan-name">Starter</div>
              <div className="pricing-price">
                <span className="pricing-amount muted">$12</span>
                <span className="pricing-period">/user/mo</span>
              </div>
              <ul className="pricing-features">
                <li>5 projects</li>
                <li>10 team members</li>
                <li>Basic milestones</li>
                <li className="pricing-feature-missing">No property lookup</li>
                <li className="pricing-feature-missing">No team dashboard</li>
                <li className="pricing-feature-missing">No real-time notifications</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="pricing-card featured">
              <span className="pricing-badge">Alpha Rate</span>
              <div className="pricing-plan-name">Alpha</div>
              <div className="pricing-price">
                <span className="pricing-amount">$10</span>
                <span className="pricing-period">/user/mo</span>
              </div>
              <p className="pricing-alpha-note">
                Everything. No limits. Locked in forever.
              </p>
              <ul className="pricing-features">
                <li>Unlimited projects</li>
                <li>Unlimited team members</li>
                <li>Property data lookup</li>
                <li>Team dashboard</li>
                <li>Advanced milestones &amp; urgency</li>
                <li>Real-time notifications</li>
                <li>Client management</li>
                <li>Priority support</li>
                <li>Shape the roadmap</li>
              </ul>
              <CTAButton className="btn btn-primary btn-md">
                Join the Alpha
              </CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="pricing-card pricing-card-launch">
              <div className="pricing-card-header-muted">At launch</div>
              <div className="pricing-plan-name">Pro</div>
              <div className="pricing-price">
                <span className="pricing-amount muted">$29</span>
                <span className="pricing-period">/user/mo</span>
              </div>
              <ul className="pricing-features">
                <li>Unlimited projects</li>
                <li>Unlimited team members</li>
                <li>Property data lookup</li>
                <li>Team dashboard</li>
                <li>Advanced milestones &amp; urgency</li>
                <li>Real-time notifications</li>
                <li>Client management</li>
                <li>Priority support</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="pricing-guarantee">
            Alpha members pay $10/user/mo for what will cost $29+
            at launch. Your rate never changes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
