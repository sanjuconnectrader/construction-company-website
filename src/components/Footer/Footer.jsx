import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "Our Company", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Our Projects", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const policies = [
    { label: "Fraud Alert", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ];

  const services = [
    { label: "Construction", href: "#" },
    { label: "Design", href: "#" },
    { label: "Consulting", href: "#" },
    { label: "Management", href: "#" },
  ];

  return (
    <footer className="Footer">
      {/* Main Footer Content */}
      <div className="Footer__main">
        <div className="Footer__container">
          {/* Brand & Description */}
          <div className="Footer__brand">
            <a href="#" className="Footer__logo" aria-label="Homepage">
              <span className="Footer__logo-text">Construction</span>
              <span className="Footer__logo-badge">Est. 1888</span>
            </a>
            <p className="Footer__description">
              Building excellence through innovation, quality, and dedication to our clients' success.
            </p>
            <div className="Footer__social">
              <a className="Footer__social-link" href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a className="Footer__social-link" href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a className="Footer__social-link" href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a className="Footer__social-link" href="#" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60512 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a className="Footer__social-link" href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.991235 13.5237 1.14521 15.2944 1.46 17.04C1.59096 17.5158 1.8383 17.9507 2.17814 18.3003C2.51798 18.6499 2.93884 18.9022 3.4 19.04C5.12 19.5 12 19.5 12 19.5C12 19.5 18.88 19.5 20.6 19.04C21.0708 18.9068 21.498 18.6518 21.8387 18.3006C22.1793 17.9494 22.4212 17.5146 22.54 17.04C22.8528 15.2944 23.0068 13.5237 22.999 11.75C23.0068 9.97631 22.8528 8.20556 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.75L15.75 11.75L9.75 7.75V15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="Footer__nav-section">
            <h3 className="Footer__nav-title">Navigation</h3>
            <nav className="Footer__nav" aria-label="Footer navigation">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="Footer__nav-link">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="Footer__nav-section">
            <h3 className="Footer__nav-title">Services</h3>
            <nav className="Footer__nav" aria-label="Services navigation">
              {services.map((s) => (
                <a key={s.label} href={s.href} className="Footer__nav-link">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="Footer__contact">
            <h3 className="Footer__nav-title">Contact Us</h3>
            <address className="Footer__address">
              <p className="Footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                123 Construction Ave, New York, NY 10001
              </p>
              <p className="Footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0005 20.1986 21.9181 20.4713 21.7628 20.7025C21.6075 20.9337 21.3862 21.1132 21.126 21.218C20.8658 21.3228 20.5783 21.3482 20.303 21.2909C20.0277 21.2336 19.7767 21.0963 19.58 20.896L17.3 18.606C14.9283 19.9336 12.1115 20.3301 9.41319 19.7062C6.71486 19.0823 4.3404 17.4839 2.74 15.206C2.04146 14.1274 1.56653 12.9189 1.345 11.656C1.12347 10.3931 1.15992 9.10356 1.452 7.86001C1.55132 7.41215 1.80284 7.01181 2.16244 6.728C2.52204 6.44419 2.96766 6.29472 3.424 6.30601L6.319 6.36601C6.7529 6.37864 7.15603 6.59143 7.414 6.94501L9.706 10.016C9.95053 10.3512 10.0513 10.7733 9.98299 11.1831C9.91467 11.5929 9.68341 11.9541 9.344 12.181C8.859 12.514 8.404 12.986 8.404 12.986C9.20812 14.3077 10.3754 15.3892 11.773 16.105C11.773 16.105 12.294 15.7 12.695 15.281C12.9588 14.9585 13.3592 14.7595 13.792 14.733C14.2248 14.7065 14.6484 14.8548 14.962 15.141L17.954 17.853C18.2878 18.1238 18.5233 18.499 18.622 18.918L18.852 20.033C18.9268 20.3572 18.8973 20.6979 18.7675 21.0044C18.6377 21.3109 18.4146 21.5674 18.131 21.735" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                (555) 123-4567
              </p>
              <p className="Footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@construction.com
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="Footer__bottom">
        <div className="Footer__container">
          <div className="Footer__bottom-content">
            <div className="Footer__copyright">
              <p>© {year}  Construction Company. All rights reserved.</p>
              <p className="Footer__statement">
               construction is an Equal Opportunity Employer – race, color, religion, sex, sexual
                orientation, gender identity, national origin, disability, status as a
                protected veteran, or other characteristics protected by applicable law.
              </p>
            </div>
            
            <div className="Footer__policies">
              <a href="#" className="Footer__policy-link">Human Rights Policy</a>
              <nav className="Footer__policy-nav" aria-label="Policy links">
                {policies.map((p, i) => (
                  <a key={p.label} href={p.href} className="Footer__policy-link">
                    {p.label}
                    {i < policies.length - 1 && <span className="Footer__policy-separator" aria-hidden> | </span>}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}