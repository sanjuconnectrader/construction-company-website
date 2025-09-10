import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const SOLID_PAGES = ["/contact", "/about-us", "/services", "/projects", "/excavation", "/construction", "/renovation", "/demolition"];
const SCROLL_THRESHOLD = 100;

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(SOLID_PAGES.includes(pathname));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navRef = useRef(null);
  const mobileRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (SOLID_PAGES.includes(pathname)) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        if (!e.target.closest(".mobile-menu-button")) {
          setMobileOpen(false);
        }
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAllMenus = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`navbar ${scrolled || mobileOpen ? "navbar--solid" : "navbar--transparent"}`}
        role="banner"
      >
        <div className="navbar__container container">
          {/* Logo */}
          <Link to="/" className="navbar__brand" onClick={closeAllMenus}>
            <img
              src={scrolled || mobileOpen ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="BuildMaster Construction Logo"
              width={180}
              height={50}
              className="navbar__logo"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__desktop" aria-label="Primary navigation">
            <div className="navbar__links">
              <Link to="/" className="navbar__link" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about-us" className="navbar__link" onClick={closeAllMenus}>
                About Us
              </Link>
              
              {/* Services Dropdown */}
            

              <Link to="/projects" className="navbar__link" onClick={closeAllMenus}>
                Our Projects
              </Link>
              <Link to="/contact" className="navbar__link" onClick={closeAllMenus}>
                Contact
              </Link>
            </div>

            <Link to="/contact" className="navbar__cta" onClick={closeAllMenus}>
              <span>Get a Quote</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-button ${mobileOpen ? "mobile-menu-button--open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="mobile-menu-button__line"></span>
            <span className="mobile-menu-button__line"></span>
            <span className="mobile-menu-button__line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        ref={mobileRef}
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="navbar__mobile-header">
          <img
            src="/logo-dark.svg"
            alt="BuildMaster Construction Logo"
            width={160}
            height={45}
            className="navbar__mobile-logo"
          />
          <button
            className="navbar__mobile-close"
            onClick={closeAllMenus}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="navbar__mobile-nav">
          <Link to="/" className="navbar__mobile-link" onClick={closeAllMenus}>
            <span>Home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/about-us" className="navbar__mobile-link" onClick={closeAllMenus}>
            <span>About Us</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
        

          <Link to="/projects" className="navbar__mobile-link" onClick={closeAllMenus}>
            <span>Our Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/contact" className="navbar__mobile-link" onClick={closeAllMenus}>
            <span>Contact</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </nav>

        <div className="navbar__mobile-footer">
          <Link to="/contact" className="navbar__mobile-cta" onClick={closeAllMenus}>
            Get a Free Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`navbar__mobile-overlay ${mobileOpen ? "navbar__mobile-overlay--visible" : ""}`} 
        onClick={closeAllMenus}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;