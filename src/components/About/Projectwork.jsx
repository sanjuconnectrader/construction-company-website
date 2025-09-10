import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projectwork.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="pw__arrow">
    <path
      d="M5 12h12M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* --------- Construction-only content --------- */
const PROJECTS = [
  {
    title: "Reinforced Concrete Frame — Mid-Rise Housing",
    img: `${process.env.PUBLIC_URL}/project1.jpg`,
    alt: "Crew tying rebar and placing concrete slabs for a residential mid-rise frame",
    category: "Residential"
  },
  {
    title: "Steel Structure & Cladding — Distribution Warehouse",
    img: `${process.env.PUBLIC_URL}/project2.jpg`,
    alt: "Team fixing gutters and exterior metal cladding on an industrial warehouse",
    category: "Industrial"
  },
  {
    title: "Building Office Block",
    img: `${process.env.PUBLIC_URL}/project3.jpg`,
    alt: "Site team coordinating roof work and exterior finishing on a commercial building",
    category: "Commercial"
  }
];

export default function Projectwork() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }

    // Card animations
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="pw" ref={sectionRef}>
      <div className="pw__container">
        {/* Hero header */}
        <div className="pw__hero" ref={heroRef}>
          <div className="pw__heroInner">
            <div className="pw__eyebrow">
              <span className="pw__dash" aria-hidden="true" />
              <span className="pw__eyetext">Our Builds</span>
              <span className="pw__dot" aria-hidden="true" />
            </div>

            <h2 className="pw__title">Explore Recent Projects</h2>

            <a href="/projects" className="pw__cta">
              View All Projects
              <span className="pw__ctaArrow">
                <ArrowIcon />
              </span>
            </a>

            <div className="pw__watermark" aria-hidden="true">
              PROJECTS
            </div>
          </div>
        </div>

        {/* Grid of cards */}
        <div className="pw__grid">
          {PROJECTS.map((p, i) => (
            <figure
              className="pw__card"
              key={p.title}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="pw__imgWrapper">
                <img src={p.img} alt={p.alt} className="pw__img" loading="lazy" />
                <div className="pw__imgOverlay"></div>
              </div>
              <figcaption className="pw__overlay">
                <div className="pw__overlayBox">
                  <span className="pw__circle">
                    <ArrowIcon />
                  </span>
                  <span className="pw__category">{p.category}</span>
                  <h3 className="pw__cardTitle">{p.title}</h3>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
