import React, { useState, useEffect } from "react";
import "./Abouthero.css";

export default function Abouthero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="about-hero">
      {/* Background Image with Parallax Effect */}
      <div className="about-hero-bg">
        <img
          src="./abhero.jpeg"
          alt="Construction professionals collaborating on site"
          className={`about-hero-img ${isLoaded ? 'loaded' : ''}`}
        />
        <div className="overlay"></div>
        
        {/* Gradient overlay for depth */}
        <div className="gradient-overlay"></div>
      </div>

      {/* Animated Content */}
      <div className={`about-hero-content ${isLoaded ? 'loaded' : ''}`}>
        <h1 className="about-hero-title">
          <span className="title-line">Building with Integrity</span>
          <span className="title-line">& Innovation</span>
        </h1>
        <p className="about-hero-description">
          Trusted Construction Solutions for Modern Infrastructure
        </p>
        
        {/* CTA Button */}
        <div className="about-hero-actions">
          <button className="cta-button primary">Our Projects</button>
          <button className="cta-button secondary">Contact Us</button>
        </div>
      </div>

      {/* Bottom Curve with Gradient */}
      <div className="about-hero-curve">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="curve-svg"
        >
        
        </svg>
      </div>
    </section>
  );
}