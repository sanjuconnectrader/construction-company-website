import React from "react";
import "./ProjectsGrid.css";

const projects = [
  {
    id: 1,
    sector: "Healthcare",
    city: "Baltimore, Maryland",
    title: "Maryland Public Health Laboratory",
    img: "./ab.webp",
  },
  {
    id: 2,
    sector: "Healthcare",
    city: "St. Petersburg, Florida",
    title: "Bayfront Health Medical Pavilion",
    img: "./ab1.webp",
  },
  {
    id: 3,
    sector: "Healthcare",
    city: "St. Petersburg, Florida",
    title: "Bayfront Health Women's Center",
    img: "./ab3.jpeg",
  },
  {
    id: 4,
    sector: "Cultural/Entertainment",
    city: "New Delhi",
    title: "Serendipity Arts Live Museum (The Brij)",
    img: "./ab4.webp",
  },
  {
    id: 5,
    sector: "Data Center",
    city: "Johor Bahru",
    title: "Confidential Client Data Center Facility",
    img: "./abb.webp",
  },
  {
    id: 6,
    sector: "Government/Public",
    city: "Auburn, California",
    title: "Placer County Health & Human Services",
    img: "./about-showcase.jpg",
  },
  {
    id: 7,
    sector: "Aviation/Transportation",
    city: "New Delhi",
    title: "Indira Gandhi International Airport",
    img: "./about-showcase2.jpg",
  },
  {
    id: 8,
    sector: "Government/Public",
    city: "Des Moines, Iowa",
    title: "Allen Hazen Water Tower",
    img: "./construction2.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="pg-wrap">
      <div className="pg-grid">
        {projects.map((p) => (
          <article key={p.id} className="pg-card">
            <div className="pg-cat">{p.sector}</div>
            <a className="pg-thumb" href="#" aria-label={p.title}>
              <img src={p.img} alt={p.title} loading="lazy" />
            </a>
            <div className="pg-meta">{p.city}</div>
            <h3 className="pg-title">{p.title}</h3>
          </article>
        ))}
      </div>

      {/* Footer pagination UI (static demo) */}
      <div className="pg-footer">
        <nav className="pg-pages" aria-label="Project pages">
          {[1,2,3,4,5,6,7,8,9].map((n) => (
            <button
              key={n}
              className={`pg-page ${n === 1 ? "is-active" : ""}`}
              type="button"
            >
              {n}
            </button>
          ))}
        </nav>

        <button className="pg-next" type="button">
          NEXT PAGE
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 12h10M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
