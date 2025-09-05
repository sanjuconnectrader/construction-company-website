import React from "react";
import "./QualityHero.css";

export default function QualityHero() {
  return (
    <section className="QualityHero" role="banner" aria-label="Experience quality hero">
      {/* Background image with decorative elements */}
      <div className="QualityHero__media" aria-hidden="true">
        <img
          src="./hero-quality.jpg"
          alt=""
          loading="eager"
          fetchpriority="high"
          className="QualityHero__image"
        />
        <div className="QualityHero__media-overlay"></div>
        
        {/* Decorative elements */}
        <div className="QualityHero__decoration">
          <div className="QualityHero__shape QualityHero__shape--circle"></div>
          <div className="QualityHero__shape QualityHero__shape--triangle"></div>
          <div className="QualityHero__shape QualityHero__shape--square"></div>
        </div>
      </div>

      {/* Gradient overlay for readability */}
      <div className="QualityHero__scrim" aria-hidden="true" />

      {/* Centered content */}
      <div className="QualityHero__container">
        <div className="QualityHero__content">
          <div className="QualityHero__eyebrow">
            <span className="QualityHero__eyebrow-text">Premium Excellence</span>
            <div className="QualityHero__eyebrow-line"></div>
          </div>
          
          <h1 className="QualityHero__title">
            <span className="QualityHero__title-line">Experience Quality At</span>
            <span className="QualityHero__title-line QualityHero__title-line--accent">Its Best</span>
          </h1>

          <p className="QualityHero__subtitle">
            At the core of our mission is a deep commitment to excellence and client
            satisfaction. Our team works tirelessly to provide thoughtful solutions,
            ensuring that every detail reflects care.
          </p>

          <div className="QualityHero__cta">
            <a href="#learn-more" className="QualityHero__btn" aria-label="Find out more about our quality">
              Find Out
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33325 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
        
            <div className="QualityHero__secondary-cta">
              <button className="QualityHero__play-btn" aria-label="Watch our story">
                <div className="QualityHero__play-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>Our Story</span>
              </button> 
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
 
      </div>
    </section>
  );
}