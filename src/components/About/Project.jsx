import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    title: "G+4 Residential Complex — Phase II",
    year: "2024",
    img: `${process.env.PUBLIC_URL}/construction1.jpg`,
    description:
      "Cast-in-place RCC structure with raft foundation, seismic detailing, full MEP integration, and premium finishes—delivered under a 10-month schedule.",
    location: "Tacoma, Washington, United States",
    type: "Residential Construction",
    tags: ["RCC Structure", "MEP", "Finishing", "On-Time Delivery"]
  },
  {
    title: "Steel Warehouse & Office (120,000 sq ft)",
    year: "2023",
    img: `${process.env.PUBLIC_URL}/construction2.jpg`,
    description:
      "PEB steel frame with slab-on-grade, dock levellers, ESFR fire suppression, insulated envelope, and complete site utilities—handed over operational.",
    location: "Kent, Washington, United States",
    type: "Industrial Construction",
    tags: ["PEB Steel", "Slab-on-Grade", "Fire Safety", "Energy-Efficient"]
  }
];

const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
    }
  };

  return (
    <section className="projects-section">
      <div className="proj-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="proj-header"
        >
          <p className="proj-eyebrow">RECENT BUILDS</p>
          <h1 className="proj-title">Showcase of craftsmanship</h1>
          <p className="proj-sub">Take a look at our latest construction projects</p>
        </motion.div>

        <motion.div
          className="proj-grid"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, idx) => (
            <motion.article
              key={idx}
              className="proj-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="proj-card-head">
                <div className="proj-card-head-inner">
                  <h3 className="proj-card-name">{p.title}</h3>
                  <span className="proj-dot" aria-hidden="true">•</span>
                  <span className="proj-year">{p.year}</span>
                </div>
              </div>

              <figure className="proj-figure">
                <img
                  src={p.img}
                  alt={p.title}
                  className="proj-img"
                  loading="lazy"
                />
                <div className="proj-img-overlay"></div>
                <div className="proj-img-accent"></div>
              </figure>

              <p className="proj-desc">{p.description}</p>

              <div className="proj-tags">
                {p.tags.map((tag, i) => (
                  <span key={i} className="proj-tag">{tag}</span>
                ))}
              </div>

              <div className="proj-meta">
                <div className="proj-chip">
                  <span className="proj-chip-label">Location:</span>
                  <span className="proj-chip-value">{p.location}</span>
                </div>
                <div className="proj-chip">
                  <span className="proj-chip-label">Scope:</span>
                  <span className="proj-chip-value">{p.type}</span>
                </div>
              </div>
              
              <div className="proj-card-hover-effect"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="proj-bg-pattern" aria-hidden="true"></div>
      <div className="proj-bg-accent" aria-hidden="true"></div>
    </section>
  );
};

export default Project;