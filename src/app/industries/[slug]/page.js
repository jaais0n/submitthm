import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

const industryData = {
  technology: {
    title: "Technology & SaaS",
    description: "Accelerating growth for tech platforms through targeted account-based marketing and specialized lead generation pipelines.",
    image: "/industry_tech.png",
    details: [
      "Targeted Account-Based Marketing (ABM)",
      "High-intent lead generation for SaaS",
      "Competitor benchmarking & analysis",
      "Decision-maker outreach across engineering & IT",
    ]
  },
  healthcare: {
    title: "Healthcare",
    description: "Connecting medical device manufacturers and health tech companies with key decision-makers across hospital networks.",
    image: "/industry_health.png",
    details: [
      "B2B medical device marketing",
      "Healthcare professional (HCP) databases",
      "Hospital procurement intelligence",
      "Compliance-first outreach strategies",
    ]
  },
  finance: {
    title: "Financial Services",
    description: "Delivering high-intent prospects and actionable market intelligence for fintech, wealth management, and banking institutions.",
    image: "/industry_finance.png",
    details: [
      "Fintech lead generation",
      "Institutional investor databases",
      "Wealth management prospect intelligence",
      "Regulatory & market trend reporting",
    ]
  },
  manufacturing: {
    title: "Manufacturing",
    description: "Building specialized buyer databases and outreach campaigns for industrial automation, robotics, and manufacturing equipment providers.",
    image: "/industry_manufacturing.png",
    details: [
      "Industrial buyer identification",
      "Supply chain decision-maker data",
      "Equipment & machinery marketing",
      "Trade show & event follow-up strategies",
    ]
  },
  retail: {
    title: "Retail & E-commerce",
    description: "Optimizing digital customer acquisition, retail audits, and competitive benchmarking for leading commercial brands.",
    image: "/industry_retail.png",
    details: [
      "E-commerce performance marketing",
      "Retail mystery shopping & audits",
      "Brand sentiment & market research",
      "B2B vendor & distributor outreach",
    ]
  },
  logistics: {
    title: "Logistics & Transportation",
    description: "Identifying logistics managers, supply chain directors, and key fleet operators for B2B transportation services.",
    image: "/industry_logistics.png",
    details: [
      "Fleet operator lead generation",
      "Supply chain & logistics databases",
      "Freight & shipping market intelligence",
      "Global logistics network marketing",
    ]
  },
  education: {
    title: "Education",
    description: "Empowering EdTech platforms and institutional suppliers to connect with higher education decision-makers.",
    image: "/industry_education.png",
    details: [
      "EdTech vendor lead generation",
      "University procurement intelligence",
      "K-12 & Higher Ed administrative databases",
      "Institutional funding & grant analysis",
    ]
  },
  professional: {
    title: "Professional Services",
    description: "Driving qualified leads for consulting, legal, and accounting firms through precision-targeted outreach.",
    image: "/industry_professional.png",
    details: [
      "B2B professional networking",
      "Corporate leadership (C-suite) databases",
      "Consulting client acquisition",
      "Specialized legal & accounting outreach",
    ]
  },
  realestate: {
    title: "Real Estate",
    description: "Providing high-intent commercial prospect data and market analytics for enterprise property groups.",
    image: "/industry_realestate.png",
    details: [
      "Commercial real estate (CRE) lead generation",
      "Property management contact databases",
      "Construction & development market intelligence",
      "High-net-worth investor outreach",
    ]
  },
  hospitality: {
    title: "Hospitality",
    description: "Connecting vendors and B2B services with decision-makers at luxury resorts, hotel chains, and event venues.",
    image: "/industry_hospitality.png",
    details: [
      "Hotel & resort procurement databases",
      "Event management vendor lead generation",
      "Hospitality tech & software marketing",
      "Food & beverage supplier outreach",
    ]
  },
  telecom: {
    title: "Telecommunications",
    description: "Enabling telecom providers to identify and engage enterprise clients needing robust network solutions.",
    image: "/industry_telecom.png",
    details: [
      "Enterprise telecom lead generation",
      "IT & infrastructure decision-maker outreach",
      "5G and fiber network expansion intelligence",
      "B2B cloud communication marketing",
    ]
  },
  government: {
    title: "Government",
    description: "Navigating public sector procurement by connecting government contractors with municipal and federal buyers.",
    image: "/industry_government.png",
    details: [
      "B2G (Business-to-Government) lead generation",
      "Municipal and federal procurement databases",
      "GovTech software marketing",
      "Public sector contract intelligence",
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = industryData[slug];
  
  if (!data) return { title: 'Industry Not Found | Submitthm' };
  
  return {
    title: `${data.title} Solutions | Submitthm`,
    description: data.description,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const data = industryData[slug];

  if (!data) {
    return (
      <div className="container section-padding" style={{ paddingTop: "calc(var(--header-height) + 4rem)" }}>
        <h1>Industry not found</h1>
        <Link href="/industries" className="btn btn-secondary" style={{ marginTop: "2rem" }}>Return to Industries</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "var(--header-height)", paddingBottom: "4rem" }}>
      <section className="hero container" style={{ gridTemplateColumns: "1fr", minHeight: "unset", paddingBottom: "2rem" }}>
        <div className="hero-content" style={{ maxWidth: "none" }}>
          <Reveal>
            <Link href="/industries" className="btn btn-secondary btn-sm" style={{ marginBottom: "2rem", display: "inline-flex", gap: "0.5rem", borderRadius: "100px" }}>
              <ArrowLeft size={16} />
              <span>Back to Industries</span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="headline-xl" style={{ marginBottom: "1.5rem" }}>
              {data.title}
            </h1>
            <p className="text-secondary" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
              {data.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal delay={200}>
          <div style={{ 
            width: "100%", 
            height: "400px", 
            borderRadius: "32px", 
            overflow: "hidden", 
            marginBottom: "4rem",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(5, 38, 39, 0.05)"
          }}>
            <img src={data.image} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </Reveal>
      </section>

      <section className="container">
        <div className="grid-2">
          <Reveal delay={100}>
            <div className="premium-card">
              <h2 className="headline-md" style={{ marginBottom: "1.5rem" }}>Our {data.title} Solutions</h2>
              <p className="text-secondary" style={{ marginBottom: "2rem" }}>
                We understand the unique challenges and buying cycles within the {data.title} sector. Our tailored data and marketing solutions are engineered to connect you directly with key decision-makers and drive verifiable ROI.
              </p>
              <ul style={{ listStyle: "none" }}>
                {data.details.map((detail, idx) => (
                  <li key={idx} style={{ padding: "1rem 0", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem", color: "var(--primary)", fontWeight: 500 }}>
                    <span style={{ color: "var(--accent)", fontSize: "1.2rem" }}>✓</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
             <div className="premium-card" style={{ backgroundColor: "var(--bg-dark)", color: "white", borderColor: "var(--bg-dark)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 className="headline-md" style={{ marginBottom: "1.5rem", color: "white" }}>Ready to scale your {data.title} pipeline?</h2>
              <p style={{ color: "var(--muted)", marginBottom: "3rem", lineHeight: 1.6, fontSize: "1.05rem" }}>
                Get a custom proposal detailing how our verified database and intelligence services can accelerate your growth.
              </p>
              <Link href="/contact" className="btn btn-accent" style={{ width: "100%" }}>
                Request Custom Strategy
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
