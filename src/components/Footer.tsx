import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="The Unbordered Path" className="h-8 w-auto brightness-200" />
              <span className="text-lg font-heading font-bold text-background">
                The Unbordered Path
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Empowering young adults to navigate career transitions with
              confidence, clarity, and purpose.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <h4 className="text-sm font-heading font-semibold text-background uppercase tracking-wider">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-semibold text-background uppercase tracking-wider">
              Services
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "1:1 Career Coaching",
                "Group Coaching",
                "Ignite Your Future Bootcamp",
                "Resume & LinkedIn Optimization",
                "Free Consultation",
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-semibold text-background uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@unborderedpath.com"
                className="flex items-center gap-2.5 text-sm text-background/60 hover:text-background transition-colors"
              >
                <Mail size={14} className="flex-shrink-0" />
                info@unborderedpath.com
              </a>
              <a
                href="tel:+447730466765"
                className="flex items-center gap-2.5 text-sm text-background/60 hover:text-background transition-colors"
              >
                <Phone size={14} className="flex-shrink-0" />
                +44 7730 466765
              </a>
              <div className="flex items-start gap-2.5 text-sm text-background/60">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Remote & worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} The Unbordered Path. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-background/40">
            <Link to="/privacy" className="hover:text-background/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
