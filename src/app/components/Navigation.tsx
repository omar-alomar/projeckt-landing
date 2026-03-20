'use client';

import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          Projeck<span className="nav-logo-accent">t</span>
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <CTAButton className="btn btn-primary btn-sm">
            Join the Alpha
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
