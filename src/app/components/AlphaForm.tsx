'use client';

import { useState } from 'react';

export default function AlphaForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mouseDownOnOverlay, setMouseDownOnOverlay] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      size: (form.elements.namedItem('size') as HTMLSelectElement).value,
    };

    try {
      await fetch('/api/alpha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // Still show success — we'll get the data from the form
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div
      className="alpha-overlay"
      onMouseDown={(e) => setMouseDownOnOverlay(e.target === e.currentTarget)}
      onMouseUp={(e) => { if (mouseDownOnOverlay && e.target === e.currentTarget) onClose(); }}
    >
      <div className="alpha-modal">
        {submitted ? (
          <div className="alpha-success">
            <div className="alpha-check">&#10003;</div>
            <h3>You&apos;re on the list.</h3>
            <p>
              We&apos;ll reach out within 24 hours to get you set up.
            </p>
            <button className="btn btn-ghost btn-md" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <button className="alpha-close" onClick={onClose}>
              &times;
            </button>
            <h3 className="alpha-title">Join the Alpha</h3>
            <p className="alpha-desc">
              $10/user/mo &mdash; every feature, locked in forever.
            </p>
            <form onSubmit={handleSubmit} className="alpha-form">
              <div className="alpha-field">
                <label htmlFor="alpha-name">Name</label>
                <input
                  id="alpha-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="alpha-field">
                <label htmlFor="alpha-email">Work email</label>
                <input
                  id="alpha-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="alpha-field">
                <label htmlFor="alpha-company">Company</label>
                <input
                  id="alpha-company"
                  name="company"
                  type="text"
                  required
                  placeholder="Your firm's name"
                />
              </div>
              <div className="alpha-field">
                <label htmlFor="alpha-size">Team size</label>
                <select id="alpha-size" name="size" required>
                  <option value="">Select...</option>
                  <option value="1-5">1–5</option>
                  <option value="6-15">6–15</option>
                  <option value="16-50">16–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
                style={{ width: '100%' }}
              >
                {loading ? 'Submitting...' : 'Request Access'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
