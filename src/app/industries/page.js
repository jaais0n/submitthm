import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Submitthm",
  description: "Explore the global industries we partner with, from Tech & SaaS to Healthcare and Government.",
};

export default function IndustriesPage() {
  return (
    <div id="page-industries" style={{ paddingTop: "var(--header-height)" }}>
      {/* Industries We Serve Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "3rem" }}>
            <Reveal>
              <p className="text-accent" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Global Expertise</p>
              <h1 className="headline-lg">Industries We Serve</h1>
            </Reveal>
          </div>
          
          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            <Reveal delay={100}>
              <Link href="/industries/technology" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_tech.png" alt="Technology & SaaS" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Technology & SaaS</h3>
                  <p>Accelerating growth for tech platforms through targeted account-based marketing and specialized lead generation pipelines.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link href="/industries/healthcare" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_health.png" alt="Healthcare" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Healthcare</h3>
                  <p>Connecting medical device manufacturers and health tech companies with key decision-makers across hospital networks.</p>
                </div>
              </Link>
            </Reveal>
            
            <Reveal delay={200}>
              <Link href="/industries/finance" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_finance.png" alt="Financial Services" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Financial Services</h3>
                  <p>Delivering high-intent prospects and actionable market intelligence for fintech, wealth management, and banking institutions.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={250}>
              <Link href="/industries/manufacturing" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_manufacturing.png" alt="Manufacturing" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Manufacturing</h3>
                  <p>Building specialized buyer databases and outreach campaigns for industrial automation, robotics, and manufacturing equipment providers.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={300}>
              <Link href="/industries/retail" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_retail.png" alt="Retail & E-commerce" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Retail & E-commerce</h3>
                  <p>Optimizing digital customer acquisition, retail audits, and competitive benchmarking for leading commercial brands.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={350}>
              <Link href="/industries/logistics" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_logistics.png" alt="Logistics & Transportation" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Logistics & Transportation</h3>
                  <p>Identifying logistics managers, supply chain directors, and key fleet operators for B2B transportation services.</p>
                </div>
              </Link>
            </Reveal>
          </div>

          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            <Reveal delay={100}>
              <Link href="/industries/education" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_education.png" alt="Education" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Education</h3>
                  <p>Empowering EdTech platforms and institutional suppliers to connect with higher education decision-makers.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link href="/industries/professional" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_professional.png" alt="Professional Services" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Professional Services</h3>
                  <p>Driving qualified leads for consulting, legal, and accounting firms through precision-targeted outreach.</p>
                </div>
              </Link>
            </Reveal>
            
            <Reveal delay={200}>
              <Link href="/industries/realestate" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_realestate.png" alt="Real Estate" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Real Estate</h3>
                  <p>Providing high-intent commercial prospect data and market analytics for enterprise property groups.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={250}>
              <Link href="/industries/hospitality" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_hospitality.png" alt="Hospitality" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Hospitality</h3>
                  <p>Connecting vendors and B2B services with decision-makers at luxury resorts, hotel chains, and event venues.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={300}>
              <Link href="/industries/telecom" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_telecom.png" alt="Telecommunications" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Telecommunications</h3>
                  <p>Enabling telecom providers to identify and engage enterprise clients needing robust network solutions.</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={350}>
              <Link href="/industries/government" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper">
                  <img src="/industry_government.png" alt="Government" className="industry-img" />
                </div>
                <div className="industry-content">
                  <h3>Government</h3>
                  <p>Navigating public sector procurement by connecting government contractors with municipal and federal buyers.</p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
