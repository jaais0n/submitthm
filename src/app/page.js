import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import AnimatedMetrics from "@/components/AnimatedMetrics";
import { User, ArrowRight, BarChart, Globe, Database } from "lucide-react";
export default function HomePage() {
  return (
    <div id="page-home" style={{ paddingTop: "var(--header-height)" }}>
      
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <Reveal>
            <h1 className="headline-xl">
              Grow Smarter.<br />
              Reach Faster.<br />
              <span className="text-accent">Convert Better.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-secondary" style={{ marginTop: "2rem", maxWidth: "600px" }}>
              From digital marketing and market intelligence to verified B2B databases, we deliver solutions that help businesses generate leads, improve customer engagement, and make better business decisions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="btn-group" style={{ marginTop: "3rem" }}>
              <Link href="#services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-secondary">Request a Consultation</Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <AnimatedMetrics />
        </Reveal>

        {/* Panoramic Banner Image */}
        <Reveal delay={250}>
          <div className="hero-banner-container">
            <img src="/hero_dashboard_v2.png" alt="Submitthm Growth Team" className="hero-banner-img" />
          </div>
        </Reveal>

        {/* Right Side Content for Hero Banner */}
        <Reveal delay={300}>
          <div style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(5,38,39,0.02)" }}>
            <h3 className="headline-md" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The Growth Engine</h3>
            <p className="text-secondary" style={{ marginBottom: "1.5rem" }}>
              Our proprietary platforms utilize advanced analytics to identify high-intent prospects and automatically optimize your outreach.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-light)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>✓</div>
                Automated Lead Scoring
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-light)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>✓</div>
                Real-Time Intent Data
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-light)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>✓</div>
                Cross-Channel Execution
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Partner Logos Strip */}
      <section className="container">
        <div className="partner-logos">
          <span className="partner-logo">COLOSSUS</span>
          <span className="partner-logo">HUSTLECO</span>
          <span className="partner-logo">EPICSKINS</span>
          <span className="partner-logo">SOCIETE</span>
          <span className="partner-logo">NEXUS</span>
          <span className="partner-logo">VERTICES</span>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="grid-2 about-grid">
            <Reveal>
              <h2 className="headline-lg" style={{ lineHeight: "1.2", marginBottom: "2rem" }}>
                Most agencies deliver lists. We design relationships between data, marketing, and business growth.
              </h2>
              <p className="text-secondary" style={{ maxWidth: "580px", marginBottom: "1.5rem" }}>
                We are a full-service business solutions company specializing in Digital Marketing, Market Intelligence, and Database Services. Our mission is to help organizations make informed decisions, connect with qualified prospects, and achieve sustainable growth through innovative strategies and accurate business intelligence.
              </p>
              
              <ul style={{ listStyle: "none", marginBottom: "2.5rem", maxWidth: "580px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ color: "var(--accent)", marginRight: "12px", fontSize: "1.2rem" }}>✦</span>
                  <span className="text-secondary"><strong>Precision Market Intelligence:</strong> Data-backed insights to outmaneuver competitors.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ color: "var(--accent)", marginRight: "12px", fontSize: "1.2rem" }}>✦</span>
                  <span className="text-secondary"><strong>High-Converting Databases:</strong> Vetted B2B lists customized for your exact ICP.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ color: "var(--accent)", marginRight: "12px", fontSize: "1.2rem" }}>✦</span>
                  <span className="text-secondary"><strong>Full-Funnel Digital Marketing:</strong> End-to-end execution that drives pipeline growth.</span>
                </li>
              </ul>

              <Link href="/about" className="btn btn-secondary">Learn More About Us</Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="about-image-mask">
                <div className="mask-circle-1">
                  <img src="/about_leaf.png" alt="Organic Growth" className="mask-img" />
                </div>
                <div className="mask-circle-2">
                  <div style={{ padding: "3rem", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                    <span className="rating-stars" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>★★★★★</span>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--primary)" }}>"Submitthm verified B2B lists accelerate lead pipeline by 4x."</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding border-top" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 className="headline-lg" style={{ marginTop: "1rem" }}>Why Choose Us</h2>
            </div>
          </Reveal>
          
          <div className="grid-2" style={{ alignItems: "center", marginBottom: "6rem" }}>
            <Reveal>
              <div>
                <h3 className="headline-md" style={{ marginBottom: "1.5rem" }}>Data-Driven Intelligence</h3>
                <p style={{ color: "var(--secondary)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                  We don't rely on guesswork. Our strategies are powered by real-time analytics and verified B2B databases to ensure every decision drives measurable growth and pipeline expansion.
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> Real-time analytics dashboards</li>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> Verified prospect databases</li>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> AI-driven market intelligence</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(5,38,39,0.05)", boxShadow: "0 20px 40px rgba(5,38,39,0.08)" }}>
                <img src="/feature_data.png" alt="Data Intelligence" style={{ width: "100%", display: "block" }} />
              </div>
            </Reveal>
          </div>

          <div className="grid-2" style={{ alignItems: "center" }}>
            <Reveal delay={150}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(5,38,39,0.05)", boxShadow: "0 20px 40px rgba(5,38,39,0.08)" }}>
                <img src="/feature_strategy.png" alt="Strategic Marketing" style={{ width: "100%", display: "block" }} />
              </div>
            </Reveal>
            <Reveal>
              <div style={{ paddingLeft: "2rem" }}>
                <h3 className="headline-md" style={{ marginBottom: "1.5rem" }}>Strategic Execution</h3>
                <p style={{ color: "var(--secondary)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                  Strategy without execution is just theory. Our team of digital marketing experts and growth hackers implement multi-channel campaigns that convert high-intent prospects into loyal clients.
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> Multi-channel ABM campaigns</li>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> High-conversion sales funnels</li>
                  <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)", marginRight: "10px" }}>✓</span> Continuous ROI optimization</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section (What We Grow For You) */}
      <section id="services" className="section-padding border-top" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid-2" style={{ marginBottom: "5rem", alignItems: "flex-end" }}>
            <Reveal>
              <h2 className="headline-lg" style={{ marginTop: "1rem" }}>What We Grow For You.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-secondary" style={{ maxWidth: "480px" }}>
                Core B2B growth and intelligence programs engineered to connect you to high-intent opportunities.
              </p>
            </Reveal>
          </div>

          <div className="grid-3">
            {/* Service 1 */}
            <Reveal>
              <Link href="/digital-marketing" className="pillar-card">
                <div className="pillar-illustration" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)", flexDirection: "column", gap: "1rem" }}>
                  <Globe size={48} color="#0284c7" strokeWidth={1.5} />
                  <div className="frosted-glass-element" style={{ color: "#0284c7", width: "auto", padding: "0 1rem", height: "40px" }}>DIGITAL MARKETING</div>
                </div>
                <h3>Digital Marketing</h3>
                <p>Accelerate your reach and conversions through data-driven search, PPC, content, and social media campaigns.</p>
                <div className="pillar-link">
                  Explore Marketing Capabilities
                  <ArrowRight size={16} />
                </div>
              </Link>
            </Reveal>

            {/* Service 2 */}
            <Reveal delay={100}>
              <Link href="/market-intelligence" className="pillar-card">
                <div className="pillar-illustration" style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)", flexDirection: "column", gap: "1rem" }}>
                  <BarChart size={48} color="var(--accent-hover)" strokeWidth={1.5} />
                  <div className="frosted-glass-element" style={{ color: "var(--accent-hover)", width: "auto", padding: "0 1rem", height: "40px" }}>MARKET INTELLIGENCE</div>
                </div>
                <h3>Market Intelligence</h3>
                <p>Turn market data into business decisions with in-depth mystery shopping, customer research, and competitor benchmarking.</p>
                <div className="pillar-link">
                  Explore Market Insights
                  <ArrowRight size={16} />
                </div>
              </Link>
            </Reveal>

            {/* Service 3 */}
            <Reveal delay={200}>
              <Link href="/database-services" className="pillar-card">
                <div className="pillar-illustration" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", flexDirection: "column", gap: "1rem" }}>
                  <Database size={48} color="#d97706" strokeWidth={1.5} />
                  <div className="frosted-glass-element" style={{ color: "#d97706", width: "auto", padding: "0 1rem", height: "40px" }}>DATABASE SERVICES</div>
                </div>
                <h3>Database Services</h3>
                <p>Power your campaigns with verified, custom-built B2B databases, appends, and high-accuracy cleansing services.</p>
                <div className="pillar-link">
                  Explore Database Services
                  <ArrowRight size={16} />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Teaser Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Reveal>
            <h2 className="headline-lg" style={{ marginTop: "1rem" }}>Industries We Power</h2>
          </Reveal>
        </div>
        
        <div className="container">
          <div className="grid-3" style={{ marginBottom: "3rem" }}>
            <Reveal delay={100}>
              <Link href="/industries/technology" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper" style={{ height: "160px" }}>
                  <img src="/industry_tech.png" alt="Technology & SaaS" className="industry-img" />
                </div>
                <div className="industry-content" style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem" }}>Technology & SaaS</h3>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link href="/industries/healthcare" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper" style={{ height: "160px" }}>
                  <img src="/industry_health.png" alt="Healthcare" className="industry-img" />
                </div>
                <div className="industry-content" style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem" }}>Healthcare</h3>
                </div>
              </Link>
            </Reveal>
            
            <Reveal delay={200}>
              <Link href="/industries/finance" className="industry-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="industry-img-wrapper" style={{ height: "160px" }}>
                  <img src="/industry_finance.png" alt="Financial Services" className="industry-img" />
                </div>
                <div className="industry-content" style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem" }}>Financial Services</h3>
                </div>
              </Link>
            </Reveal>
          </div>
          <div style={{ textAlign: "center" }}>
            <Reveal delay={250}>
              <Link href="/industries" className="btn btn-secondary">View All 12 Industries</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Process Section (Asymmetric Methodologies) */}
      <section className="section-padding border-top" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <Reveal>
              <div style={{ backgroundColor: "var(--bg-dark)", color: "#ffffff", padding: "4rem", borderRadius: "28px" }}>
                <h2 className="headline-lg" style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "2rem" }}>From Seed to System.</h2>
                <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  We don't believe in one-off leads or static data. We design a continuous, scalable system tailored to your exact business objectives.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="about-image-mask" style={{ height: "300px" }}>
                <div className="mask-circle-1" style={{ width: "240px", height: "240px", left: "20%" }}>
                  <img src="/about_leaf.png" alt="Seed to System" className="mask-img" style={{ filter: "hue-rotate(45deg)" }} />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              <Reveal delay={100}>
                <div className="timeline-step">
                  <div className="step-number">01</div>
                  <div className="step-title">Discovery</div>
                  <div className="step-desc">Understand your business objectives, pipelines, and target profiles.</div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="timeline-step">
                  <div className="step-number">02</div>
                  <div className="step-title">Strategy</div>
                  <div className="step-desc">Build a customized execution plan and list validation criteria.</div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="timeline-step">
                  <div className="step-number">03</div>
                  <div className="step-title">Implementation</div>
                  <div className="step-desc">Launch cross-channel marketing campaigns or deliver intelligence reports.</div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="timeline-step">
                  <div className="step-number">04</div>
                  <div className="step-title">Optimization</div>
                  <div className="step-desc">Continuously improve data hygiene, list matching, and campaign conversion yields.</div>
                </div>
              </Reveal>
              <Reveal delay={500}>
                <div className="timeline-step">
                  <div className="step-number">05</div>
                  <div className="step-title">Reporting</div>
                  <div className="step-desc">Provide transparent insights, analytics Dashboards, and strategic proposals.</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Voices From The Ecosystem (Testimonial Grid) */}
      <section className="section-padding border-top" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Reveal>
              <h2 className="headline-lg" style={{ marginTop: "1rem" }}>Voices From The Ecosystem.</h2>
            </Reveal>
          </div>

          <div className="ecosystem-grid">
            {/* Dark Card (Metric) */}
            <Reveal>
              <div className="eco-card eco-card-dark">
                <h3>120%</h3>
                <p className="eco-quote" style={{ fontSize: "1.1rem" }}>
                  Average pipeline growth achieved across B2B clients in their first 6 months.
                </p>
                <div className="eco-author">
                  <div className="eco-author-info">
                    <h5>Submitthm Performance Indicator</h5>
                    <p>Verified Client Aggregates</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 1 */}
            <Reveal delay={100}>
              <div className="eco-card">
                <span style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: "0" }}>“</span>
                <p className="eco-quote">
                  "Submitthm transformed our lead generation pipeline. We connected with verified decision-makers within weeks."
                </p>
                <div className="eco-author">
                  <div className="eco-author-info">
                    <h5>Sarah Miller</h5>
                    <p>VP of Sales, TechCorp</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 2 */}
            <Reveal delay={150}>
              <div className="eco-card eco-card-accent">
                <span style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: "0" }}>“</span>
                <p className="eco-quote">
                  "Their database services are incredibly accurate. Data cleansing and appends reduced our bounce rates to under 1%."
                </p>
                <div className="eco-author">
                  <div className="eco-author-info">
                    <h5>David Chen</h5>
                    <p>Marketing Director, SaaSify</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 3 */}
            <Reveal delay={200}>
              <div className="eco-card">
                <span style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: "0" }}>“</span>
                <p className="eco-quote">
                  "Mystery shopping and retail audits gave us complete visibility into our brand standard consistency."
                </p>
                <div className="eco-author">
                  <div className="eco-author-info">
                    <h5>Elena Rostova</h5>
                    <p>Operations Lead, RetailGroup</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding border-top" style={{ backgroundColor: "var(--bg-secondary)", paddingBottom: "8rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="headline-lg" style={{ maxWidth: "900px", margin: "0 auto 3rem auto", lineHeight: "1.15" }}>
              The Best Products Don't Ask Prospects to Search.
            </h2>
            <div className="btn-group" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn btn-primary">Request a Free Consultation</Link>
              <Link href="/contact" className="btn btn-secondary">Get a Custom Proposal</Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
