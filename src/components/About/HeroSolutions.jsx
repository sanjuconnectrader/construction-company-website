import React from "react";
import "./HeroSolutions.css";

export default function HeroSolutions() {
  return (
    <section className="hs-hero" aria-label="Construction solutions hero">
      {/* Background */}
      <div className="hs-bg">
        <img
          src="./abb.webp"
          alt="Engineers reviewing building plans at a construction site"
          loading="eager"
        />
        <div className="hs-overlay" />
      </div>

      {/* Content (right) */}
      <div className="hs-content">
        {/* Truck icon */}
        <span className="hs-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="56" height="56">
            <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="26" width="30" height="16" rx="2" />
              <path d="M34 30h10l7 6h7v6H34z" />
              <circle cx="18" cy="48" r="5" fill="#fff" stroke="currentColor" />
              <circle cx="48" cy="48" r="5" fill="#fff" stroke="currentColor" />
              <path d="M8 42h20" />
            </g>
          </svg>
        </span>

        <h1 className="hs-title">
          Solutions made for
          <br />
          your needs
        </h1>

        <p className="hs-desc">
          We pride ourselves on offering personalized support that helps you reach your goals.
          Every project is approached with dedication and attention to detail, ensuring the best
          possible outcome. Our focus is always on quality, reliability, and client satisfaction.
        </p>

        <button className="hs-cta" type="button">View Details</button>
      </div>
    </section>
  );
}
