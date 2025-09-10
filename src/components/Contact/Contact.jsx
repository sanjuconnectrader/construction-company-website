import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    city: "",
    zipCode: "",
    address: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your submission! We'll be in touch soon.");
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form on final step
      document.querySelector(".ct-form").requestSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="ct-wrap">
      {/* decorative elements */}
      <div className="ct-dots" aria-hidden="true" />
      <div className="ct-bg-accent" aria-hidden="true" />
      
      {/* header */}
      <motion.header 
        className="ct-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="ct-eyebrow">Get in touch</p>
        <h1 className="ct-title">
          Simple Tools For Big
          <br />
          Goals
        </h1>
        <p className="ct-sub">
          At the core of our mission is a deep commitment to excellence and
          client satisfaction. Our team works tirelessly to provide thoughtful
          solutions, ensuring that every detail reflects care.
        </p>
      </motion.header>

      {/* steps */}
      <motion.div 
        className="ct-steps"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className={`ct-step ${currentStep >= 1 ? 'active' : ''}`}>
          <span className="ct-step-badge">1</span>
          <div className="ct-step-text">
            <strong>Personal</strong>
            <span>Informations</span>
          </div>
        </div>

        <div className={`ct-step ${currentStep >= 2 ? 'active' : ''}`}>
          <span className="ct-step-badge">2</span>
          <div className="ct-step-text">
            <strong>Service</strong>
            <span>Requested</span>
          </div>
        </div>

        <div className={`ct-step ${currentStep >= 3 ? 'active' : ''}`}>
          <span className="ct-step-badge">3</span>
          <div className="ct-step-text">
            <strong>Contact</strong>
            <span>Informations</span>
          </div>
        </div>
      </motion.div>

      {/* form */}
      <motion.form 
        className="ct-form" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Step 1: Personal Information */}
        <div className={`ct-form-step ${currentStep === 1 ? 'active' : ''}`}>
          <label className="ct-field">
            <span className="ct-label">
              Name <em>*</em>
            </span>
            <input 
              type="text" 
              name="name"
              placeholder="Insert your name" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="ct-field">
            <span className="ct-label">
              Surname <em>*</em>
            </span>
            <input 
              type="text" 
              name="surname"
              placeholder="Insert your surname" 
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="ct-field">
            <span className="ct-label">
              Email <em>*</em>
            </span>
            <input 
              type="email" 
              name="email"
              placeholder="Insert your email" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        {/* Step 2: Service Requested */}
        <div className={`ct-form-step ${currentStep === 2 ? 'active' : ''}`}>
          <label className="ct-field ct-span-2">
            <span className="ct-label">
              Service Needed <em>*</em>
            </span>
            <div className="ct-select">
              <select name="service" required>
                <option value="" disabled selected>Select a service</option>
                <option value="consulting">Consulting</option>
                <option value="construction">Construction</option>
                <option value="design">Design & Planning</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>
          </label>

          <label className="ct-field ct-span-2">
            <span className="ct-label">
              Project Description
            </span>
            <textarea 
              rows="4" 
              name="projectDescription"
              placeholder="Tell us about your project" 
            />
          </label>

          <label className="ct-field">
            <span className="ct-label">
              Timeline <em>*</em>
            </span>
            <div className="ct-select">
              <select name="timeline" required>
                <option value="" disabled selected>Select timeline</option>
                <option value="urgent">Urgent (within 1 month)</option>
                <option value="short">Short term (1-3 months)</option>
                <option value="medium">Medium term (3-6 months)</option>
                <option value="long">Long term (6+ months)</option>
              </select>
            </div>
          </label>

          <label className="ct-field">
            <span className="ct-label">
              Budget Range
            </span>
            <div className="ct-select">
              <select name="budget">
                <option value="" disabled selected>Select budget range</option>
                <option value="small">$5,000 - $20,000</option>
                <option value="medium">$20,000 - $50,000</option>
                <option value="large">$50,000 - $100,000</option>
                <option value="enterprise">$100,000+</option>
              </select>
            </div>
          </label>
        </div>

        {/* Step 3: Contact Information */}
        <div className={`ct-form-step ${currentStep === 3 ? 'active' : ''}`}>
          <label className="ct-field">
            <span className="ct-label">
              Your country <em>*</em>
            </span>
            <div className="ct-select">
              <select name="country" value={formData.country} onChange={handleInputChange} required>
                <option value="" disabled>Not Set</option>
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </label>

          <label className="ct-field">
            <span className="ct-label">
              City <em>*</em>
            </span>
            <input 
              className="ct-city" 
              type="text" 
              name="city"
              placeholder="Your City" 
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="ct-field">
            <span className="ct-label">
              Zip Code <em>*</em>
            </span>
            <input 
              type="text" 
              name="zipCode"
              placeholder="Type your Zip Code" 
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="ct-field ct-span-2">
            <span className="ct-label">
              Address <em>*</em>
            </span>
            <input 
              type="text" 
              name="address"
              placeholder="Insert your address" 
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="ct-field ct-span-2">
            <span className="ct-label">Message</span>
            <textarea 
              rows="4" 
              name="message"
              placeholder="Write your message" 
              value={formData.message}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <hr className="ct-divider" />

        <div className="ct-form-nav">
          {currentStep > 1 && (
            <button type="button" className="ct-prev" onClick={prevStep}>
              Previous
            </button>
          )}
          <button type="button" className="ct-next" onClick={nextStep}>
            {currentStep === 3 ? 'Submit' : 'Next'}
          </button>
        </div>
      </motion.form>
    </section>
  );
}