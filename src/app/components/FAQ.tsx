'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Under 5 minutes. Create your workspace, invite your team, and start adding projects. No complex configuration needed.',
  },
  {
    q: 'Can I import from other tools?',
    a: 'Yes. We support imports from spreadsheets, and have migration guides for Asana, Trello, Monday, and Basecamp.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. Your data is encrypted at rest and in transit. We use PostgreSQL with enterprise-grade security, and all sessions are secured with industry-standard encryption.',
  },
  {
    q: 'What happens after the trial ends?',
    a: "You choose a plan that fits your team. No surprise charges, no data loss, no pressure. Your workspace stays exactly as you left it.",
  },
  {
    q: 'Can I use Projeckt on mobile?',
    a: 'Yes. Projeckt has a full REST API with native mobile app support. Manage projects, tasks, and team communication from anywhere.',
  },
  {
    q: "What if Projeckt isn't right for us?",
    a: 'All annual plans come with a 30-day money-back guarantee. Monthly plans can be cancelled anytime with no questions asked.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <ScrollReveal>
          <div className="faq-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-heading">Questions? Answers.</h2>
          </div>
        </ScrollReveal>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
