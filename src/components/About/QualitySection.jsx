import React from "react";
import "./QualitySection.css";

const items = [
  {
    title: "Marketing",
    sub: "High Quality Standards",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="40" width="18" height="10" />
          <path d="M23 45h8l9-7 8 3 8-6" />
          <circle cx="13" cy="53" r="2" fill="var(--accent)" stroke="none"/>
          <rect x="34" y="26" width="8" height="12" fill="var(--accent)" stroke="none"/>
          <path d="M6 40l9-16 12 7 9-6 13 11" />
        </g>
      </svg>
    ),
  },
  {
    title: "Planning",
    sub: "Attention To Detail",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="30" width="20" height="18"/>
          <path d="M6 30l10-8 10 8v18M18 22v-6h8v10" />
          <rect x="30" y="24" width="28" height="24"/>
          <rect x="34" y="28" width="6" height="6" fill="var(--accent)" stroke="none"/>
          <path d="M42 28h12M34 38h20M34 44h12"/>
        </g>
      </svg>
    ),
  },
  {
    title: "Assistance",
    sub: "Premium Experience",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 36v-8c0-6 5-11 11-11h4c6 0 11 5 11 11v8" />
          <path d="M14 36h26" />
          <path d="M40 36v10H14V36" />
          <path d="M45 42h7" />
          <circle cx="52" cy="42" r="6"/>
          <path d="M20 22h14v10H20z" fill="var(--accent)" stroke="none"/>
          <path d="M24 12h6" />
        </g>
      </svg>
    ),
  },
  {
    title: "Management",
    sub: "Trusted Expert Support",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="38" width="18" height="12"/>
          <path d="M6 38l8-10h6l8 10"/>
          <rect x="28" y="26" width="30" height="24"/>
          <path d="M28 38h30"/>
          <rect x="34" y="32" width="10" height="6" fill="var(--accent)" stroke="none"/>
          <circle cx="15" cy="52" r="2" fill="var(--accent)" stroke="none"/>
        </g>
      </svg>
    ),
  },
  {
    title: "Coordination",
    sub: "Exceptional Customer Care",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="40" width="28" height="10"/>
          <path d="M10 40l10-8h8l10 8" />
          <rect x="22" y="24" width="10" height="6"/>
          <path d="M22 24l6-6M32 24l6-6M16 46h26" />
          <rect x="14" y="44" width="10" height="4" fill="var(--accent)" stroke="none"/>
        </g>
      </svg>
    ),
  },
  {
    title: "Scheduling",
    sub: "Reliable Service",
    Icon: () => (
      <svg viewBox="0 0 64 64" className="qs-ic" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="26" width="20" height="20"/>
          <path d="M10 26v-6h12v6M10 34h12M10 40h8"/>
          <path d="M36 46V28l12-8 12 8v18z"/>
          <path d="M36 34h24M44 34v12" />
          <rect x="44" y="22" width="8" height="6" fill="var(--accent)" stroke="none"/>
        </g>
      </svg>
    ),
  },
];

export default function QualitySection() {
  return (
    <section className="qs-wrap">
      {/* top row */}
      <div className="qs-top">
        <div className="qs-left">
          <p className="qs-eyebrow">Inspired by you</p>
          <h2 className="qs-title">
            Experience Quality
            <br /> At Its Best
          </h2>
        </div>
        <div className="qs-right">
          <p>
            Every client is unique, and so are our services designed with care.
            We combine industry knowledge with a commitment to excellence to
            create tailored solutions that work best for you. Our focus is on
            delivering consistent quality and fostering trust through clear
            communication.
          </p>
        </div>
      </div>

      {/* grid */}
      <div className="qs-grid">
        {items.map(({ title, sub, Icon }) => (
          <article className="qs-item" key={title}>
            <div className="qs-icon-wrap">
              <Icon />
            </div>
            <h3 className="qs-item-title">{title}</h3>
            <p className="qs-item-sub">{sub}</p>
          </article>
        ))}
      </div>
    </section>
  );
}