import React from "react";
import "./GrowthShowcase.css";

export default function GrowthShowcase() {
  return (
    <section className="GrowthShowcase" aria-label="Business growth showcase">
      <div className="GrowthShowcase__container">
        <div className="GrowthShowcase__grid">
          {/* Top-Left: Copy Block */}
          <div className="GrowthShowcase__lead">
            <div className="GrowthShowcase__eyebrow-container">
              <span className="GrowthShowcase__eyebrow">Tailored for you</span>
              <div className="GrowthShowcase__eyebrow-line"></div>
            </div>
            <h1 className="GrowthShowcase__title">
              We Help Your Business <span className="GrowthShowcase__title-accent">Grow</span>
            </h1>

            {/* Paragraph 1 (original) */}
            <p className="GrowthShowcase__subtitle">
              We pride ourselves on offering personalized support that helps you reach your
              goals. Every project is approached with dedication and attention to detail,
              ensuring the best possible outcome. Our focus is always on quality, reliability,
              and client satisfaction.
            </p>

            {/* Paragraph 2 (added) */}
            <p className="GrowthShowcase__subtitle">
              From discovery to delivery, we collaborate closely with you to clarify priorities,
              remove bottlenecks, and keep momentum high. Clear communication, transparent
              timelines, and measurable milestones ensure you always know where things stand.
            </p>

            {/* Paragraph 3 (added) */}
            <p className="GrowthShowcase__subtitle">
              Whether you’re scaling an existing product or launching something new, our team
              brings proven processes and modern tooling to drive consistent, predictable
              results—without compromising on creativity or craft.
            </p>

            <div className="GrowthShowcase__btn-container">
              <a className="GrowthShowcase__btn" href="#read-more">
                Read More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33325 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="GrowthShowcase__btn-decoration"></div>
            </div>
          </div>

          {/* Top-Right: Hero with Play */}
          <figure className="GrowthShowcase__hero">
            <div className="GrowthShowcase__hero-container">
              <img
                src="./img6.jpeg"
                alt="Team discussing plans at a table near a window"
                className="GrowthShowcase__hero-img"
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 680px"
                srcSet={[
                  "./img6.jpeg",
                  "./img6.jpeg",
                  "./img6.jpeg",
                ].join(", ")}
              />
              <div className="GrowthShowcase__hero-overlay" aria-hidden="true"></div>
              <button className="GrowthShowcase__play" aria-label="Play video">
                <div className="GrowthShowcase__play-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="GrowthShowcase__play-text">Watch Overview</span>
              </button>
            </div>
            <figcaption className="GrowthShowcase__hero-caption">
              Project overview video • Photo via Pexels
            </figcaption>
          </figure>

          {/* Bottom-Left: Photo Tile */}
          <figure className="GrowthShowcase__tile">
            <div className="GrowthShowcase__tile-container">
              <img
                src="./img6.jpeg"
                alt="Amber-toned modern glass building facade"
                className="GrowthShowcase__tile-img"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                srcSet={[
                  "./img6.jpeg",
                  "./img6.jpeg",
                  "./img6.jpeg",
                ].join(", ")}
              />
              <div className="GrowthShowcase__tile-overlay" aria-hidden="true">
                <div className="GrowthShowcase__tile-content">
                  <span className="GrowthShowcase__tile-badge">Featured Project</span>
                  <h3 className="GrowthShowcase__tile-title">Modern Architecture</h3>
                </div>
              </div>
            </div>
          </figure>

          {/* Bottom-Right: Dark Feature Panel */}
          <aside className="GrowthShowcase__panel" aria-label="Highlights">
            <div className="GrowthShowcase__panel-decoration" aria-hidden="true">
              <div className="GrowthShowcase__panel-dot GrowthShowcase__panel-dot--1"></div>
              <div className="GrowthShowcase__panel-dot GrowthShowcase__panel-dot--2"></div>
              <div className="GrowthShowcase__panel-dot GrowthShowcase__panel-dot--3"></div>
            </div>
            <div className="GrowthShowcase__panel-content">
              <div className="GrowthShowcase__feature">
                <div className="GrowthShowcase__feature-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="GrowthShowcase__feature-content">
                  <h3 className="GrowthShowcase__feature-title">Exceptional Customer Care</h3>
                  <p className="GrowthShowcase__feature-text">
                    Professional consulting tailored to meet your unique business challenges and goals.
                  </p>
                </div>
              </div>

              <div className="GrowthShowcase__feature">
                <div className="GrowthShowcase__feature-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="GrowthShowcase__feature-content">
                  <h3 className="GrowthShowcase__feature-title">Reliable Service</h3>
                  <p className="GrowthShowcase__feature-text">
                    Reliable customer support designed to provide fast and effective solutions.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
