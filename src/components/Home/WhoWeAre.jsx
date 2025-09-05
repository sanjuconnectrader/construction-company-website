import React from "react";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <section className="who" aria-labelledby="who-title">
      <div className="who__container">
        {/* LEFT */}
        <div className="who__left">
          <div className="who__eyebrow" aria-hidden="true">
            <span className="who__rule" />
            <span className="who__eyebrow-text">WHO WE ARE</span>
          </div>

          <h2 id="who-title" className="who__title">
            Built to Last. Ready for What’s Next.
          </h2>

          <div className="who__body">
            <p>
              We’re a full-service construction partner delivering ground-up builds,
              tenant improvements, and renovations across residential, commercial, and
              light-industrial projects. From pre-construction to closeout, we align
              scope, schedule, and budget to remove risk and deliver certainty.
            </p>
            <p>
              Our field-first approach pairs experienced superintendents with an
              integrated project team. That means clear communication, proactive
              coordination with trades and inspectors, and clean, safe jobsites that
              keep work moving.
            </p>
            <p>
              We self-perform key trades where it adds value—select demolition,
              concrete, framing, and finish work—backed by a trusted subcontractor
              network. Value engineering, material lead-time planning, and
              just-in-time delivery help us keep your project on track.
            </p>
            <p>
              Quality and safety are non-negotiable. Our QA/QC checklists, daily
              safety huddles, and documented inspections ensure code compliance and a
              durable finish—so your building performs on day one and for years to come.
            </p>
          </div>

          <a href="#about" className="who__btn" aria-label="Learn more about us">
            About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33325 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* RIGHT */}
        <aside className="who__right" aria-label="Key figures">
          <div className="stats__decoration">
            <div className="stats__circle stats__circle--1"></div>
            <div className="stats__circle stats__circle--2"></div>
            <div className="stats__circle stats__circle--3"></div>
          </div>
          <dl className="stats">
            <div className="stat">
              <div className="stat__content">
                <dt className="stat__value">15+</dt>
                <dd className="stat__label">Years Building</dd>
              </div>
              <div className="stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="stat">
              <div className="stat__content">
                <dt className="stat__value">800+</dt>
                <dd className="stat__label">Projects Delivered</dd>
              </div>
              <div className="stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="stat">
              <div className="stat__content">
                <dt className="stat__value">97%</dt>
                <dd className="stat__label">On-Time Completion</dd>
              </div>
              <div className="stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7L12 3L21 7L12 11L3 7Z M3 12L12 16L21 12M3 17L12 21L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="stat">
              <div className="stat__content">
                <dt className="stat__value">L • B • I</dt>
                <dd className="stat__label">Licensed • Bonded • Insured</dd>
              </div>
              <div className="stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
