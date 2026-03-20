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
              Get everything. Pay less. Forever.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="alpha-card">
            <div className="alpha-card-inner">
              <div className="alpha-card-left">
                <span className="alpha-badge">Alpha Rate</span>
                <div className="alpha-price">
                  <span className="alpha-amount">$10</span>
                  <span className="alpha-period">/user/mo</span>
                </div>
                <p className="alpha-note">
                  Every feature. No limits. This rate is locked in
                  forever &mdash; it won&apos;t increase at launch.
                </p>
                <CTAButton className="btn btn-primary btn-lg">
                  Join the Alpha
                </CTAButton>
              </div>
              <div className="alpha-card-right">
                <h4 className="alpha-includes-title">Everything included:</h4>
                <ul className="alpha-features">
                  <li>Unlimited projects &amp; team members</li>
                  <li>Property data lookup</li>
                  <li>Team dashboard &amp; workload view</li>
                  <li>Advanced milestones &amp; urgency tracking</li>
                  <li>Real-time notifications &amp; @mentions</li>
                  <li>Client management</li>
                  <li>SSO / Microsoft login</li>
                  <li>Mobile app access (coming soon)</li>
                  <li>Direct input on the roadmap</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="launch-pricing">
            <p className="launch-pricing-label">
              At launch, these features will be split across tiers:
            </p>
            <div className="launch-tiers">
              <div className="launch-tier">
                <span className="launch-tier-name">Starter</span>
                <span className="launch-tier-price">$12/user/mo</span>
                <span className="launch-tier-desc">Up to 12 projects, basic milestones</span>
              </div>
              <div className="launch-tier">
                <span className="launch-tier-name">Pro</span>
                <span className="launch-tier-price">$29/user/mo</span>
                <span className="launch-tier-desc">Unlimited projects, property lookup, SSO</span>
              </div>
              <div className="launch-tier">
                <span className="launch-tier-name">Enterprise</span>
                <span className="launch-tier-price">Custom</span>
                <span className="launch-tier-desc">Custom integrations, CMMC compliance support, audit logs, SLA</span>
              </div>
            </div>
            <p className="launch-pricing-note">
              Alpha members keep $10/user/mo with full access. No matter what.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
