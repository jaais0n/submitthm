"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) {
      newErrors.email = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = true;
    }
    if (!formData.message.trim()) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="premium-card" style={{ position: "relative" }}>
      {/* Success Overlay */}
      <div className={`success-overlay ${isSuccess ? "active" : ""}`} style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        display: isSuccess ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        textAlign: "center",
        padding: "2rem"
      }}>
        <div className="success-icon" style={{ 
          width: "64px", height: "64px", borderRadius: "50%", 
          backgroundColor: "var(--accent-light)", color: "var(--accent-hover)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2rem", marginBottom: "1.5rem"
        }}>✓</div>
        <h3 className="headline-sm" style={{ marginBottom: "1rem" }}>Thank You!</h3>
        <p className="text-secondary" style={{ marginBottom: "2rem" }}>
          Your message has been sent successfully. One of our experts will contact you within 24 hours.
        </p>
        <button onClick={handleReset} className="btn btn-primary btn-sm">
          Send Another Message
        </button>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="form-name">Name</label>
          <input
            type="text"
            id="form-name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={errors.name ? { borderColor: "#ff4d4f" } : {}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-email">Email</label>
          <input
            type="email"
            id="form-email"
            className="form-control"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={errors.email ? { borderColor: "#ff4d4f" } : {}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-company">Company</label>
          <input
            type="text"
            id="form-company"
            className="form-control"
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-message">Message</label>
          <textarea
            id="form-message"
            className="form-control"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={errors.message ? { borderColor: "#ff4d4f" } : {}}
            required
          />
        </div>
        <button type="submit" className="btn btn-accent" style={{ marginTop: "1rem", width: "100%" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
