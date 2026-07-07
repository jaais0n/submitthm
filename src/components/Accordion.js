"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ title, summary, listTitle, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`service-accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title-block">
          <h3>{title}</h3>
          <div className="accordion-summary">{summary}</div>
        </div>
        <div className="accordion-chevron">
          <ChevronDown size={24} />
        </div>
      </div>
      <div
        className="accordion-content"
        style={{ maxHeight }}
      >
        <div ref={contentRef} className="accordion-inner">
          <h4 style={{ marginBottom: "1rem", fontSize: "0.95rem", textTransform: "uppercase", color: "var(--accent)", letterSpacing: "0.05em" }}>
            {listTitle}
          </h4>
          <div className="bullet-grid">
            {items.map((item, index) => (
              <div key={index} className="bullet-item">
                <span className="bullet-dot"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
