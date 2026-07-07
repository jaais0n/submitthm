"use client";

import { useEffect, useState, useRef } from "react";
import { User } from "lucide-react";

export default function AnimatedMetrics() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2000;
    const target = 1000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth slowdown at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <div className="hero-sidebar" ref={containerRef} style={{
      animation: isVisible ? "pulse-border 3s infinite" : "none"
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.1); }
          50% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); border-color: rgba(16, 185, 129, 0.4); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); border-color: rgba(5, 38, 39, 0.06); }
        }
        @keyframes avatar-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}} />
      <h2 className="headline-lg" style={{ fontSize: "3rem", margin: "0.5rem 0", display: "flex", alignItems: "center" }}>
        {count.toLocaleString()}+
      </h2>
      <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
        Qualified opportunities and databases delivered for modern B2B businesses.
      </p>
      <div className="avatar-group" style={{ marginTop: "1rem" }}>
        <div className="avatar-stack">
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3, border: "2px solid var(--bg)", animation: isVisible ? "avatar-bounce 3s infinite ease-in-out" : "none" }}>
            <User size={20} color="white" />
          </div>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#062B2C", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-12px", zIndex: 2, border: "2px solid var(--bg)", animation: isVisible ? "avatar-bounce 3s infinite ease-in-out 0.2s" : "none" }}>
            <User size={20} color="white" />
          </div>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-12px", zIndex: 1, border: "2px solid var(--bg)", animation: isVisible ? "avatar-bounce 3s infinite ease-in-out 0.4s" : "none" }}>
            <User size={20} color="white" />
          </div>
        </div>
        <div className="rating-info" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in 1s" }}>
          <span className="rating-stars">★★★★★ 5.0</span>
          <span className="text-muted" style={{ fontSize: "0.8rem" }}>from 94 B2B reviews</span>
        </div>
      </div>
    </div>
  );
}
