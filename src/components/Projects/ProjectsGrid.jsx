import React from "react";
import "./ProjectsGrid.css";

const projects = [
  {
    id: 1,
    sector: "Healthcare",
    city: "Baltimore, Maryland",
    title: "Maryland Public Health Laboratory",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    sector: "Healthcare",
    city: "St. Petersburg, Florida",
    title: "Bayfront Health Medical Pavilion",
    img: "https://images.pexels.com/photos/280015/pexels-photo-280015.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    sector: "Healthcare",
    city: "St. Petersburg, Florida",
    title: "Bayfront Health Women's Center",
    img: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    sector: "Cultural/Entertainment",
    city: "New Delhi",
    title: "Serendipity Arts Live Museum (The Brij)",
    img: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    sector: "Data Center",
    city: "Johor Bahru",
    title: "Confidential Client Data Center Facility",
    img: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    sector: "Government/Public",
    city: "Auburn, California",
    title: "Placer County Health & Human Services",
    img: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    sector: "Aviation/Transportation",
    city: "New Delhi",
    title: "Indira Gandhi International Airport",
    img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    sector: "Government/Public",
    city: "Des Moines, Iowa",
    title: "Allen Hazen Water Tower",
    img: "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
