import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoaded = () => {
      setVideoLoaded(true);
      attemptPlay();
    };

    const attemptPlay = () => {
      video.play()
        .then(() => {
          video.classList.add('loaded');
        })
        .catch(err => {
          console.log('Autoplay prevented:', err);
        });
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    
    // Fallback for autoplay restrictions
    const handleFirstInteraction = () => {
      attemptPlay();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

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
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const highlightVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: { delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <header className="hero" role="banner">
      {/* Background video with overlay */}
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero__video ${videoLoaded ? 'loaded' : ''}`}
          src="/header2.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay" />
        <div className="hero__gradient-overlay" />
        <div className="hero__particles" aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="hero__container">
        <motion.div 
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="hero__badge" 
            variants={itemVariants}
          >
            <span>Innovative Solutions</span>
            <div className="hero__badge-glow"></div>
          </motion.div>
          
          <motion.h1 
            className="hero__title" 
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <span className="hero__title-line">Helping you succeed with efficient </span>
            <span className="hero__title-line hero__title-line--highlight">
              modular construction
              <motion.span 
                className="hero__highlight"
                variants={highlightVariants}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="hero__subtitle" 
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            From concept to completion, we deliver efficient, high-quality
            modular solutions tailored to your needs. Our expertise ensures
            faster timelines, cost savings, and exceptional results every time.
          </motion.p>

          <motion.div 
            className="hero__cta" 
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="btn-pill" 
              aria-label="Get Started"
            >
              <span className="btn-pill__text">Get Started</span>
              <span className="btn-pill__circle" aria-hidden="true">
                <FiArrowUpRight className="btn-pill__icon" />
              </span>
              <span className="btn-pill__hover"></span>
            </Link>
            
            {!isMobile && (
              <div className="hero__scroll-indicator">
                <div className="scroll-indicator__line">
                  <div className="scroll-indicator__dot"></div>
                </div>
                <span>Scroll to explore</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;