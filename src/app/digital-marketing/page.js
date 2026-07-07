import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { ArrowLeft } from "lucide-react";
export const metadata = {
  title: "Digital Marketing Services | Submitthm",
  description: "Accelerate your growth with data-driven search marketing, PPC advertising, and CRM direct outreach.",
};

export default function DigitalMarketingPage() {
  return (
    <div id="page-digital-marketing" className="bg-grid-mesh" style={{ paddingTop: "var(--header-height)" }}>
      {/* Subpage Hero */}
      <section className="hero container" style={{ gridTemplateColumns: "1fr", minHeight: "unset", paddingBottom: "2rem" }}>
        <div className="hero-content" style={{ maxWidth: "none" }}>
          <Reveal>
            <Link href="/" className="btn btn-secondary btn-sm" style={{ marginBottom: "2rem", display: "inline-flex", gap: "0.5rem", borderRadius: "100px" }}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </Reveal>
          <Reveal delay={100}>

            <h1 className="headline-xl">Digital Marketing Services</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-secondary" style={{ maxWidth: "900px", marginTop: "2rem" }}>
              Accelerate Your Growth with Data-Driven Digital Marketing — Your customers are searching for solutions every day. We help you reach them through strategic digital marketing campaigns that increase brand visibility, generate qualified leads, and maximize your return on investment. Our team combines market insights, creative strategies, and performance-driven execution to deliver measurable business results.
            </p>
          </Reveal>

          {/* Premium Subpage Statistics Grid */}
          <Reveal delay={250}>
            <div className="service-stats-grid">
              <div className="service-stat-card">
                <div className="service-stat-val">+350%</div>
                <div className="service-stat-lbl">Average ROI Increase</div>
                <div className="service-stat-desc">across performance PPC and search campaigns</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">12M+</div>
                <div className="service-stat-lbl">Managed Impressions</div>
                <div className="service-stat-desc">annual impressions optimized across SEO and social channels</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-val">4.8x</div>
                <div className="service-stat-lbl">Lead Volume Multiplier</div>
                <div className="service-stat-desc">compared to client baseline lead volume rates</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subservices Accordion Grid */}
      <section className="section-padding border-top">
        <div className="container">
          <Reveal>
            <h2 className="headline-lg">Our Capabilities</h2>
            <p className="text-secondary" style={{ marginTop: "1rem", maxWidth: "600px" }}>
              Explore our detailed sub-services to see how we build visibility and drive conversions.
            </p>
          </Reveal>

          <div className="subservices-grid" style={{ marginTop: "3.5rem" }}>
            <Reveal delay={100}>
              <Accordion
                title="Market Research"
                summary="Market Research helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="What We Offer"
                items={[
                  "Industry & Competitor Research",
                  "Customer & Buyer Persona Analysis",
                  "Market Opportunity Assessment",
                  "Consumer Behavior Studies",
                  "Survey Design & Analysis",
                  "Market Trend Identification"
                ]}
              />
            </Reveal>

            <Reveal delay={150}>
              <Accordion
                title="Search Marketing"
                summary="Search Marketing helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our Expertise"
                items={[
                  "Search Engine Optimization (SEO)",
                  "Technical SEO Audits",
                  "Keyword Research & Strategy",
                  "On-Page & Off-Page SEO",
                  "Local SEO",
                  "Link Building",
                  "Website Performance Optimization"
                ]}
              />
            </Reveal>

            <Reveal delay={200}>
              <Accordion
                title="Direct Marketing"
                summary="Direct Marketing helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our Services"
                items={[
                  "Email Marketing Campaigns",
                  "Lead Nurturing",
                  "Marketing Automation",
                  "CRM Campaign Management",
                  "Customer Retention Programs",
                  "Campaign Performance Reporting"
                ]}
              />
            </Reveal>

            <Reveal delay={250}>
              <Accordion
                title="Social Media Marketing"
                summary="Social Media Marketing helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Services Include"
                items={[
                  "Social Media Strategy",
                  "Content Planning & Creation",
                  "Community Management",
                  "Paid Social Advertising",
                  "Brand Awareness Campaigns",
                  "Lead Generation Campaigns",
                  "Analytics & Performance Reporting"
                ]}
              />
            </Reveal>

            <Reveal delay={300}>
              <Accordion
                title="Content Marketing"
                summary="Content Marketing helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our Solutions"
                items={[
                  "Content Strategy",
                  "Website Copywriting",
                  "Blog Articles",
                  "Landing Page Content",
                  "Email Content",
                  "Case Studies",
                  "Whitepapers",
                  "Content Distribution"
                ]}
              />
            </Reveal>

            <Reveal delay={350}>
              <Accordion
                title="PPC Services"
                summary="PPC Services helps businesses improve visibility, generate qualified opportunities, and make informed decisions through professional, measurable, and scalable solutions tailored to your objectives."
                listTitle="Our PPC Services"
                items={[
                  "Google Ads Management",
                  "Microsoft Ads",
                  "Display Advertising",
                  "Remarketing Campaigns",
                  "Shopping Ads",
                  "Conversion Tracking",
                  "Landing Page Optimization",
                  "Campaign Reporting"
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
              <h2 className="headline-lg" style={{ marginTop: "1rem", marginBottom: "2rem" }}>Why Choose Us for Digital Marketing</h2>
              <p className="text-secondary" style={{ maxWidth: "550px" }}>
                Digital marketing is more than generating traffic—it's about creating measurable business growth. We combine strategy, creativity, and analytics to deliver campaigns that attract the right audience, increase conversions, and maximize your marketing investment.
              </p>
            </Reveal>
            
            <div className="stats-grid">
              <Reveal delay={100}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Data-Driven Strategies</h4>
                    <p>Data-driven marketing strategies tailored to your business goals</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Multi-Channel Expertise</h4>
                    <p>Multi-channel expertise across SEO, PPC, social media, content, and email marketing</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Transparent Reporting</h4>
                    <p>Transparent reporting with measurable KPIs and ROI</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Experienced Team</h4>
                    <p>Experienced team focused on lead generation and brand growth</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Customized Campaigns</h4>
                    <p>Customized campaigns designed for your industry and target audience</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={350}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Continuous Optimization</h4>
                    <p>Continuous optimization for improved performance</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Scalable Solutions</h4>
                    <p>Scalable solutions for startups, SMEs, and enterprise businesses</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={450}>
                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-content">
                    <h4>Strategic Support</h4>
                    <p>Dedicated account managers and ongoing strategic support</p>
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
            <h2 className="headline-md" style={{ marginBottom: "1.5rem" }}>Ready to Accelerate Your Digital Marketing?</h2>
            <Link href="/contact" className="btn btn-accent">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
