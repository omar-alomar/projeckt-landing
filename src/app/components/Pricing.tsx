'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const plans = [
  {
    name: 'Starter',
    monthly: 15,
    annual: 12,
    features: [
      'Up to 5 projects',
      'Up to 10 team members',
      'Task management',
      'Basic milestones',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'btn btn-outline btn-md',
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 36,
    annual: 29,
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Team dashboard',
      'Advanced milestones & urgency',
      'Real-time notifications',
      'Client management',
      'Mobile API access',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'btn btn-primary btn-md',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthly: 99,
    annual: 79,
    features: [
      'Everything in Pro',
      'SSO / SAML authentication',
      'Audit log & compliance',
      'Custom onboarding',
      'SLA guarantee',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
    ctaClass: 'btn btn-outline btn-md',
    featured: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <ScrollReveal>
          <div className="pricing-header">
            <p className="section-label">Pricing</p>
            <h2 className="section-heading">
              Simple pricing. No surprises.
            </h2>
            <div className="pricing-toggle">
              <button
                className={`pricing-toggle-option ${!annual ? 'active' : ''}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`pricing-toggle-option ${annual ? 'active' : ''}`}
                onClick={() => setAnnual(true)}
              >
                Annual
                <span className="pricing-save-badge">Save 20%</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && (
                  <span className="pricing-badge">Most Popular</span>
                )}
                <div className="pricing-plan-name">{plan.name}</div>
                <div className="pricing-price">
                  <span className="pricing-amount">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="pricing-period">
                    /user/mo
                    {annual ? ', billed annually' : ''}
                  </span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#" className={plan.ctaClass} style={{ width: '100%' }}>
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="pricing-guarantee">
            <span>&#10003;</span> 30-day money-back guarantee on all annual
            plans. Monthly plans cancel anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
