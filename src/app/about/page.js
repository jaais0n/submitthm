import Reveal from "@/components/Reveal";
import { Star, Settings, Globe, BarChart2, PhoneCall } from "lucide-react";

export const metadata = {
  title: "About Our Company | Submitthm",
  description: "Learn about our mission, expertise, and commitment to helping businesses grow.",
};

export default function AboutPage() {
  return (
    <div id="page-about" style={{ paddingTop: "var(--header-height)" }}>
      {/* About Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2 about-grid" style={{ alignItems: "center" }}>
            <Reveal>
              <p className="text-accent" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>About Us</p>
              <h1 className="headline-lg" style={{ marginBottom: "2rem" }}>Connecting Strategy, Data, and Execution</h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-secondary about-text">
                We are a full-service business solutions company specializing in Digital Marketing, Market Intelligence, and Database Services. Our mission is to help organizations make informed decisions, connect with qualified prospects, and achieve sustainable growth through innovative strategies and accurate business intelligence.
              </p>
            </Reveal>
          </div>
          
          <div className="highlights-row" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <Reveal delay={100}>
              <div className="highlight-item">
                <div className="highlight-icon"><Star size={24} /></div>
                <div className="highlight-label">Experienced professionals</div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="highlight-item">
                <div className="highlight-icon"><Settings size={24} /></div>
                <div className="highlight-label">Customized solutions</div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="highlight-item">
                <div className="highlight-icon"><Globe size={24} /></div>
                <div className="highlight-label">Global market coverage</div>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="highlight-item">
                <div className="highlight-icon"><BarChart2 size={24} /></div>
                <div className="highlight-label">Data-driven approach</div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="highlight-item">
                <div className="highlight-icon"><PhoneCall size={24} /></div>
                <div className="highlight-label">Reliable customer support</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div style={{ padding: "4rem", backgroundColor: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)" }}>
              <h2 className="headline-md" style={{ marginBottom: "2rem", textAlign: "center" }}>Our Core Values</h2>
              <div className="grid-3" style={{ gap: "2rem" }}>
                <div>
                  <h3 style={{ color: "var(--accent)", marginBottom: "1rem", fontSize: "1.2rem" }}>Integrity First</h3>
                  <p className="text-secondary" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>We believe in absolute transparency with our clients. The data we provide and the metrics we report are always accurate, verifiable, and honest.</p>
                </div>
                <div>
                  <h3 style={{ color: "var(--accent)", marginBottom: "1rem", fontSize: "1.2rem" }}>Relentless Innovation</h3>
                  <p className="text-secondary" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>Digital marketing moves fast. We stay ahead by continuously adopting new technologies and optimizing our strategic approaches.</p>
                </div>
                <div>
                  <h3 style={{ color: "var(--accent)", marginBottom: "1rem", fontSize: "1.2rem" }}>Client-Centric Growth</h3>
                  <p className="text-secondary" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>Your success is our only benchmark. Every campaign we launch and database we curate is fundamentally designed to accelerate your revenue.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
