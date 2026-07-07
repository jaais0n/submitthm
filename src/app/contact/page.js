import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Submitthm",
  description: "Get in touch for a consultation or customized business solution.",
};

export default function ContactPage() {
  return (
    <div id="page-contact" style={{ paddingTop: "var(--header-height)" }}>
      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <Reveal>
              <p className="text-accent" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Get In Touch</p>
              <h1 className="headline-lg">Contact Us</h1>
              <p className="text-secondary" style={{ marginTop: "1rem", maxWidth: "600px" }}>
                Have a project in mind or looking for a reliable growth partner? Contact our team today for a personalized consultation.
              </p>
            </Reveal>
          </div>

          <div className="contact-grid">
            <Reveal>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-item-icon"><Phone size={24} /></div>
                  <div className="contact-item-content">
                    <h4>Phone Number</h4>
                    <p><a href="tel:+18005550199">+1 (800) 555-0199</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><Mail size={24} /></div>
                  <div className="contact-item-content">
                    <h4>Email Address</h4>
                    <p><a href="mailto:solutions@submitthm.com">solutions@submitthm.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><MapPin size={24} /></div>
                  <div className="contact-item-content">
                    <h4>Office Address</h4>
                    <p>
                      100 Infinite Loop, Suite 400<br />
                      Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><Clock size={24} /></div>
                  <div className="contact-item-content">
                    <h4>Business Hours</h4>
                    <p>
                      Monday – Friday<br />
                      9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
