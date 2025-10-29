import React from "react";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Main CTA */}
        <h2 className="cta-title">Ready to Build Your Dream Resume?</h2>
        <p className="cta-description">
          Join thousands of professionals who've landed their dream jobs with
          our AI-powered resume builder
        </p>
        <button className="cta-button">Start Building Now</button>

        {/* Footer */}
        <div className="cta-footer">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <h3 className="footer-brand">Nebula AI CV Builder</h3>
            <p className="footer-tagline">
              Create a stellar resume that shines across every job universe.
            </p>
            <p className="footer-copyright">
              © 2025 Nebula AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
