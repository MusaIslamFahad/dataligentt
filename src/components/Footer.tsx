import { Link } from "react-router-dom";
import { Database, Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Youtube, ShieldCheck, Award } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { to: "/services", label: "Data Cleaning & Prep" },
    { to: "/services", label: "Machine Learning" },
    { to: "/services", label: "Data Analysis" },
    { to: "/services", label: "Business Intelligence" },
  ];

  const hiringLinks = [
    { to: "/contact", label: "Hire a Data Scientist" },
    { to: "/contact", label: "Hire an ML Engineer" },
    { to: "/contact", label: "Hire a Data Analyst" },
    { to: "/contact", label: "Hire a BI Developer" },
  ];

  const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Database className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground font-display">
                dataligent
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your data partner for cleaning, analysis, visualization, and machine learning —
              built for businesses that want decisions backed by evidence, not guesswork.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="social link"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-foreground mb-4">For Hiring</h3>
            <ul className="space-y-3 text-sm">
              {hiringLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>contact@dataligent.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications / trust row */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
            Trusted &amp; Secure
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> GDPR Ready
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
            <Award className="h-3.5 w-3.5 text-primary" /> ISO-Aligned Process
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> NDA on Request
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} Dataligent. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
