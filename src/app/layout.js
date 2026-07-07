import Link from "next/link";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata = {
  title: "Digital Marketing, Market Intelligence & B2B Database Services | Submitthm",
  description: "Grow your business with expert marketing, research, and verified B2B database solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Dynamic Cursor Glow (Interactive Background Effect) */}
        <CursorGlow />

        {/* Sticky Top Navigation */}
        <header id="main-header">
          <div className="container nav-container">
            <Link href="/" className="logo">
              <img src="/Submitthm.png" alt="Submitthm Logo" style={{ height: "32px", width: "auto" }} />
            </Link>
            
            <ul className="nav-links">
              <li><Link href="/" className="nav-item">Home</Link></li>
              <li className="dropdown">
                <span className="nav-item" style={{ cursor: "pointer" }}>Services</span>
                <ul className="dropdown-menu">
                  <li><Link href="/digital-marketing">Digital Marketing</Link></li>
                  <li><Link href="/market-intelligence">Market Intelligence</Link></li>
                  <li><Link href="/database-services">Database Services</Link></li>
                </ul>
              </li>
              <li><Link href="/industries" className="nav-item">Industries</Link></li>
              <li><Link href="/about" className="nav-item">About</Link></li>
              <li><Link href="/contact" className="nav-item">Contact</Link></li>
              <li><Link href="/contact" className="btn btn-accent btn-sm">Get a Custom Quote</Link></li>
            </ul>
          </div>
        </header>

        {/* Dynamic Page Views */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-top">
              
              <div className="footer-brand">
                <Link href="/" className="logo">
                  <img src="/Submitthm.png" alt="Submitthm Logo" style={{ height: "32px", width: "auto" }} />
                </Link>
                <p style={{ marginTop: "1rem" }}>
                  Helping businesses grow through Digital Marketing, Market Intelligence, and Database Services.
                </p>
              </div>

              <div className="footer-links-col">
                <h4>Navigation</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/#services">Services</Link></li>
                  <li><Link href="/industries">Industries</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/#privacy">Privacy Policy</Link></li>
                  <li><Link href="/#terms">Terms & Conditions</Link></li>
                </ul>
              </div>

            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                Copyright © 2026 Submitthm B2B Solutions. All Rights Reserved.
              </p>
              <div className="footer-socials">
                <Link href="/#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                <Link href="/#facebook" target="_blank" rel="noopener noreferrer">Facebook</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
