import React, { useState } from "react";
import "./ProjectHero.css";

const SLIDES = [
  {
    city: "Memphis, Tennessee",
    title: "City of Memphis, Lester Community Center",
    img: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    city: "Seattle, Washington",
    title: "Northlake Innovation Hub & Waterfront Plaza",
    img: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    city: "Austin, Texas",
    title: "Eastside Transit Terminal & Mixed-Use Campus",
    img: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function ProjectHero() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const s = SLIDES[i];

  return (
    <section className="ph-hero" aria-label="Featured construction projects">
      {/* background */}
      <div className="ph-bg">
        <img src={s.img} alt={s.title} />
        <div className="ph-dim" />
        <div className="ph-lines" aria-hidden="true" />
      </div>

      {/* content */}
      <div className="ph-inner">
        <div className="ph-top">
          <span className="ph-eyebrow">OUR PROJECTS</span>

          <h1 className="ph-title">
            Delivering On What
            <br />
            <span className="ph-script">
              Matters
              <svg
                className="ph-underline"
                viewBox="0 0 220 24"
                aria-hidden="true"
              >
                <path
                  d="M3 18 C60 18, 120 6, 217 12"
                  fill="none"
                  stroke="#ff5a1f"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <button className="ph-link" type="button">
            OUR MARKET SECTORS
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 12h12M12 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* bottom meta */}
        <div className="ph-bottom">
          <button className="ph-arrow ph-prev" onClick={prev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="ph-meta">
            <div className="ph-city">{s.city}</div>
            <a href="#" className="ph-project" onClick={(e)=>e.preventDefault()}>
              {s.title}
            </a>
          </div>

          <button className="ph-arrow ph-next" onClick={next} aria-label="Next slide">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
