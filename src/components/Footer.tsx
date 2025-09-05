import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Unbordered Path</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering young adults to navigate their career journey with confidence and clarity.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-smooth">
                Testimonials
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                1:1 Coaching
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                Group Coaching
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                Ignite Your Future Bootcamp
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} />
                <a 
                  href="mailto:hello@unborderedpath.com"
                  className="hover:text-primary transition-smooth"
                >
                  hello@unborderedpath.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={16} />
                <a 
                  href="tel:+1234567890"
                  className="hover:text-primary transition-smooth"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Virtual sessions available<br />
                  Serving clients nationwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Unbordered Path. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;