import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { ArrowLeft } from "lucide-react";
export const metadata = {
  title: "Database Services | Submitthm",
  description: "Power your sales campaigns with verified B2B databases, appends, custom lists, and cleansing.",
};

export default function DatabaseServicesPage() {
  return (
    <div id="page-database-services" className="bg-grid-mesh" style={{ paddingTop: "var(--header-height)" }}>
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

            <h1 className="headline-xl">Database Services</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-secondary" style={{ maxWidth: "900px", marginTop: "2rem" }}>
              Accurate Business Data That Powers Sales & Marketing — Reliable data is the foundation of successful sales and marketing campaigns. We provide verified, high-quality business databases and data enhancement services that help organizations connect with the right decision-makers, improve campaign performance, and accelerate business growth.
            </p>
          </Reveal>

          {/* Premium Subpage Statistics Grid */}
          <Reveal delay={250}>
            <div className="service-stats-grid">
              <div className="service-stat-card">
                <div className="service-stat-val">99.8%</div>
                <div className="service-stat-lbl">Data Accuracy SLA</div>
                <div className="service-stat-desc">email deliverability and contact match guarantee rate</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">5M+</div>
                <div className="service-stat-lbl">B2B Executive Records</div>
                <div className="service-stat-desc">verified contacts in GDPR & CCPA compliant database directory</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">24h</div>
                <div className="service-stat-lbl">Extraction Turnaround</div>
                <div className="service-stat-desc">custom B2B data extractions generated and verified in 24 hours</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subservices Accordion Grid */}
      <section className="section-padding border-top">
        <div className="container">
          <Reveal>
            <h2 className="headline-lg">Our Data Services</h2>
            <p className="text-secondary" style={{ marginTop: "1rem", maxWidth: "600px" }}>
              Cleanse, enrich, and scale your databases with target B2B intelligence.
            </p>
          </Reveal>

          <div className="subservices-grid" style={{ marginTop: "3.5rem" }}>
            <Reveal delay={100}>
              <Accordion
                title="B2B Database"
                summary="B2B Database helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Database Includes"
                items={[
                  "Decision Maker Contacts",
                  "Company Profiles",
                  "Executive Contacts",
                  "Industry-Specific Lists",
                  "Geographic Targeting",
                  "Technology User Lists",
                  "Company Firmographics",
                  "Business Email Addresses"
                ]}
              />
            </Reveal>

            <Reveal delay={150}>
              <Accordion
                title="Data Appending"
                summary="Data Appending helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Data Enhancement Services"
                items={[
                  "Contact Information Updates",
                  "Company Information Appending",
                  "Revenue & Employee Data",
                  "Industry Classification",
                  "Phone Number Appending",
                  "Firmographic Enrichment",
                  "Geographic Data Enhancement"
                ]}
              />
            </Reveal>

            <Reveal delay={200}>
              <Accordion
                title="Email Appending"
                summary="Email Appending helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Services Include"
                items={[
                  "Business Email Discovery",
                  "Corporate Email Appending",
                  "Email Verification",
                  "Domain Validation",
                  "Deliverability Testing",
                  "Database Hygiene",
                  "Duplicate Removal"
                ]}
              />
            </Reveal>

            <Reveal delay={250}>
              <Accordion
                title="Custom Built Lists"
                summary="Custom Built Lists helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Custom Targeting Options"
                items={[
                  "Industry",
                  "Job Title",
                  "Company Size",
                  "Revenue Range",
                  "Geographic Location",
                  "Technologies Used",
                  "Department",
                  "Seniority Level"
                ]}
              />
            </Reveal>

            <Reveal delay={300}>
              <Accordion
                title="Data Cleansing"
                summary="Data Cleansing helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our Process"
                items={[
                  "Duplicate Removal",
                  "Email Validation",
                  "Phone Number Verification",
                  "Address Standardization",
                  "Record Standardization",
                  "Data Quality Audits",
                  "Ongoing Database Maintenance"
                ]}
              />
            </Reveal>

            <Reveal delay={350}>
              <Accordion
                title="Telemarketing Lists"
                summary="Telemarketing Lists helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Available Lists"
                items={[
                  "Business Telephone Numbers",
                  "Direct Dial Contacts",
                  "Executive Decision Makers",
                  "Industry-Specific Calling Lists",
                  "Geographic Target Lists",
                  "Company Contact Lists",
                  "Appointment Setting Lists",
                  "Sales Prospect Lists"
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
              <h2 className="headline-lg" style={{ marginTop: "1rem", marginBottom: "2rem" }}>Why Choose Us for Database Services</h2>
              <p className="text-secondary" style={{ maxWidth: "550px" }}>
                Your sales and marketing success depends on the quality of your data. We deliver verified, accurate, and customized business databases that help you connect with the right decision-makers while improving campaign performance and reducing acquisition costs.
              </p>
            </Reveal>
            
            <div className="stats-grid">
              <Reveal delay={100}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>High-Quality Data</h4>
                    <p>High-quality, verified B2B business databases</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Maximum Accuracy</h4>
                    <p>Regularly updated records to ensure maximum accuracy</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Custom Criteria</h4>
                    <p>Customized prospect lists based on your exact targeting criteria</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Global Reach</h4>
                    <p>Global coverage across industries, company sizes, and job functions</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Data Quality Assurance</h4>
                    <p>Email verification and data quality assurance</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={350}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Flexible Solutions</h4>
                    <p>Flexible solutions for businesses of every size</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Fast Turnaround</h4>
                    <p>Fast turnaround on custom database requests</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={450}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Ongoing Enrichment</h4>
                    <p>Dedicated support with ongoing data maintenance and enrichment</p>
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
            <h2 className="headline-md" style={{ marginBottom: "1.5rem" }}>Need Clean, Accurate Prospects?</h2>
            <Link href="/contact" className="btn btn-accent">Request a Custom Database Proposal</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
