import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BusinessSupport.css";

const items = [
  {
    id: 1,
    title: "Support",
    desc: "Your success is our mission",
    img: "./img1.jpeg", // Business support team
  },
  {
    id: 2,
    title: "Maintenance",
    desc: "Get inspired and stay ahead",
    img: "./img2.jpeg", // Maintenance worker
  },
  {
    id: 3,
    title: "Marketing",
    desc: "Simple tools for big goals",
    img: "./img3.jpeg", // Marketing team
  },
  {
    id: 4,
    title: "Planning",
    desc: "Discover more about our work",
    img: "./img4.webp", // Planning meeting
  },
];

export default function BusinessSupport() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const collageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bs" aria-labelledby="bs-title">
      <div className="bs__container">
        {/* LEFT */}
        <div className="bs__left">
          <motion.div 
            className="bs__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tailored for you
          </motion.div>
          
          <motion.h1 
            id="bs-title" 
            className="bs__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Help Your
            <br />
            Business Grow
          </motion.h1>

          {/* Collage */}
          <motion.figure 
            className="bs__collage"
            variants={collageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bs__collage-container">
              <img
                className="bs__collage-bg"
                src="./img.jpeg" 
                alt="Architectural curve"
              />
       
              <img
                className="bs__collage-fore"
                src="./img1.jpeg"
                alt="Team at site"
              />
              <div className="bs__collage-overlay"></div>
            </div>
          </motion.figure>
        </div>

        {/* RIGHT */}
        <motion.div 
          className="bs__right"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p 
            className="bs__intro"
            variants={itemVariants}
          >
            Guided by passion and driven by purpose, our professionals bring skill
            and empathy to every project. We value clear communication, honest
            collaboration, and your long-term success.
          </motion.p>
          
          <motion.a 
            className="bs__cta" 
            href="#read-more"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33325 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <div className="bs__divider" />

          <ul className="bs__list" role="list">
            {items.map((it) => (
              <motion.li 
                className="bs__row" 
                key={it.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredItem(it.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ x: 5 }}
              >
                <div className="bs__row-start">
                  <div className="bs__row-img-container">
                    <img 
                      className={`bs__row-img ${hoveredItem === it.id ? 'bs__row-img--active' : ''}`} 
                      src={it.img} 
                      alt={it.title} 
                    />
                    <div className="bs__row-img-overlay"></div>
                  </div>
                  <div className="bs__row-texts">
                    <span className="bs__row-title">{it.title}</span>
                    <span className="bs__row-desc">{it.desc}</span>
                  </div>
                </div>

                <svg
                  className={`bs__chev ${hoveredItem === it.id ? 'bs__chev--active' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.li>
            ))}
          </ul>

          <div className="bs__divider bs__divider--end" />
          
          {/* Huge watermark word */}
          <span aria-hidden className="bs__watermark">
            Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
