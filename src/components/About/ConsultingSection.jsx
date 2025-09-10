import React from "react";
import "./ConsultingSection.css";

export default function ConsultingSection() {
  return (
    <section className="cs-section">
      {/* Top row: heading + copy + CTA */}
      <div className="cs-top">
        <div className="cs-left">
          <p className="cs-eyebrow">Explore our world</p>
          <h2 className="cs-title">Consulting</h2>
        </div>

        <div className="cs-middle">
          <p>
            Every service we offer is designed with your needs in mind.
            With a strong focus on quality, consistency, and trust, we aim
            to build lasting relationships and deliver results.
          </p>
        </div>

        <div className="cs-right">
          <button className="cs-btn">View Details</button>
        </div>
      </div>

      {/* Cards */}
      <div className="cs-grid">
        <article className="cs-card">
          <div className="cs-photo">
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Construction team collaborating on site"
            />
          </div>
          <h3 className="cs-card-title">Support</h3>
          <p className="cs-card-sub">Commitment To Excellence</p>
        </article>

        <article className="cs-card">
          <div className="cs-photo">
            <img
              src="https://images.pexels.com/photos/280015/pexels-photo-280015.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Tower crane at construction project"
            />
          </div>
          <h3 className="cs-card-title">Maintenance</h3>
          <p className="cs-card-sub">Tailored Quality Solutions</p>
        </article>

        <article className="cs-card">
          <div className="cs-photo">
            <img
              src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Engineers planning with documents"
            />
          </div>
          <h3 className="cs-card-title">Marketing</h3>
          <p className="cs-card-sub">Carefully Crafted Results</p>
        </article>

        <article className="cs-card">
          <div className="cs-photo">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Modern building facade with glass"
            />
          </div>
          <h3 className="cs-card-title">Planning</h3>
          <p className="cs-card-sub">Outstanding Work Ethic</p>
        </article>
      </div>

      {/* Bottom curve */}
      <div className="cs-curve" aria-hidden="true" />
    </section>
  );
}