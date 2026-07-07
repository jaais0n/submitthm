import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { ArrowLeft } from "lucide-react";
export const metadata = {
  title: "Market Intelligence Services | Submitthm",
  description: "Turn market data into business decisions with mystery shopping, retail audits, and customer analytics.",
};

export default function MarketIntelligencePage() {
  return (
    <div id="page-market-intelligence" className="bg-grid-mesh" style={{ paddingTop: "var(--header-height)" }}>
      {/* Subpage Hero */}
      <section className="hero container" style={{ gridTemplateColumns: "1fr", minHeight: "unset", paddingBottom: "2rem" }}>
        <div className="hero-content" style={{ maxWidth: "none" }}>
          <Reveal>
            <Link href="/" className="btn btn-secondary btn-sm" style={{ marginBottom: "2rem", display: "inline-flex", gap: "0.5rem", borderRadius: "100px" }}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={100}>

            <h1 className="headline-xl">Market Intelligence Services</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-secondary" style={{ maxWidth: "900px", marginTop: "2rem" }}>
              Turn Market Data into Business Decisions — Understanding your customers and competitors is essential for sustainable growth. Our market intelligence solutions provide valuable insights into customer experiences, market dynamics, and retail performance, helping businesses make informed strategic decisions.
            </p>
          </Reveal>

          {/* Premium Subpage Statistics Grid */}
          <Reveal delay={250}>
            <div className="service-stats-grid">
              <div className="service-stat-card">
                <div className="service-stat-val">200K+</div>
                <div className="service-stat-lbl">Completed Mystery Audits</div>
                <div className="service-stat-desc">verified mystery shops conducted across locations</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">98.5%</div>
                <div className="service-stat-lbl">Quality Assurance Score</div>
                <div className="service-stat-desc">compliance score maintained across mystery shopper audits</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">100%</div>
                <div className="service-stat-lbl">Unbiased Reporting</div>
                <div className="service-stat-desc">unbiased independent feedback for accurate operations analysis</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subservices Accordion Grid */}
      <section className="section-padding border-top">
        <div className="container">
          <Reveal>
            <h2 className="headline-lg">Our Methodologies</h2>
            <p className="text-secondary" style={{ marginTop: "1rem", maxWidth: "600px" }}>
              Independent research that delivers actionable insights for strategic decisions.
            </p>
          </Reveal>

          <div className="subservices-grid" style={{ marginTop: "3.5rem" }}>
            <Reveal delay={100}>
              <Accordion
                title="Mystery Shopping"
                summary="Mystery Shopping helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our Assessments Include"
                items={[
                  "In-Store Visits",
                  "Telephone Evaluations",
                  "Website & Online Experience Reviews",
                  "Customer Service Assessments",
                  "Compliance Audits",
                  "Brand Standards Evaluation",
                  "Detailed Performance Reports"
                ]}
              />
            </Reveal>

            <Reveal delay={150}>
              <Accordion
                title="Customer Intelligence"
                summary="Customer Intelligence helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Key Solutions"
                items={[
                  "Customer Segmentation",
                  "Customer Journey Mapping",
                  "Customer Satisfaction Analysis",
                  "Voice of Customer Programs",
                  "Loyalty Analysis",
                  "Customer Experience Reporting"
                ]}
              />
            </Reveal>

            <Reveal delay={200}>
              <Accordion
                title="Market Analysis"
                summary="Market Analysis helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Services Include"
                items={[
                  "Industry Analysis",
                  "Competitor Benchmarking",
                  "Market Size & Growth Assessment",
                  "SWOT Analysis",
                  "Pricing Intelligence",
                  "Market Trend Analysis",
                  "Strategic Recommendations"
                ]}
              />
            </Reveal>

            <Reveal delay={250}>
              <Accordion
                title="Retail Market Audits"
                summary="Retail Market Audits helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Audit Services"
                items={[
                  "Store Compliance Audits",
                  "Product Availability Checks",
                  "Shelf Placement Reviews",
                  "Pricing Audits",
                  "Promotional Compliance",
                  "Competitor Store Analysis",
                  "Retail Performance Reports"
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding border-top">
        <div className="container">
          <div className="grid-2">
            <Reveal>
              <h2 className="headline-lg" style={{ marginTop: "1rem", marginBottom: "2rem" }}>Why Choose Us for Market Intelligence</h2>
              <p className="text-secondary" style={{ maxWidth: "550px" }}>
                Making the right business decisions starts with having the right insights. Our market intelligence services provide accurate, actionable information that helps businesses understand customers, evaluate competitors, and identify new opportunities for growth.
              </p>
            </Reveal>
            
            <div className="stats-grid">
              <Reveal delay={100}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Reliable Research</h4>
                    <p>Comprehensive market research backed by reliable data</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Industry Experts</h4>
                    <p>Experienced analysts with industry-specific expertise</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Actionable Output</h4>
                    <p>Actionable insights that support strategic decision-making</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Customized Methodologies</h4>
                    <p>Customized research methodologies to meet your objectives</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Independent Audits</h4>
                    <p>Independent and unbiased reporting</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={350}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Detailed Analytics</h4>
                    <p>Detailed analytics with practical recommendations</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Fast Turnaround</h4>
                    <p>Fast turnaround times without compromising quality</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={450}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Proven Experience</h4>
                    <p>Proven experience across multiple industries and markets</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-top" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 className="headline-md" style={{ marginBottom: "1.5rem" }}>Need Deeper Insights into Your Market?</h2>
            <Link href="/contact" className="btn btn-accent">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
