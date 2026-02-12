import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  // Load HubSpot form script
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js-eu1.hsforms.net/forms/embed/147618081.js"]'
    );
    if (existingScript) {
      // Script already loaded — re-trigger embed processing
      const container = document.querySelector('.hs-form-frame');
      if (container && (window as any).hsFormsOnReady) {
        (window as any).hsFormsOnReady();
      }
      return;
    }

    const hubspotScript = document.createElement("script");
    hubspotScript.src = "https://js-eu1.hsforms.net/forms/embed/147618081.js";
    hubspotScript.defer = true;
    document.body.appendChild(hubspotScript);

    // Don't remove script on unmount — it needs to stay for re-navigation
  }, []);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, title: "Email", details: "annieoous1@gmail.com", description: "Send us an email anytime" },
    { icon: <Phone className="h-5 w-5" />, title: "Phone", details: "+44 7730 466665", description: "Mon-Fri 9AM-6PM GMT" },
    { icon: <MapPin className="h-5 w-5" />, title: "Location", details: "Remote & Online", description: "Serving clients worldwide" },
    { icon: <Clock className="h-5 w-5" />, title: "Response Time", details: "Within 24 hours", description: "We'll get back to you quickly" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to start your career transformation? Let's talk about your
              goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <Card id="contact-form" className="border-border shadow-soft">
                <CardContent className="p-6">
                  <div
                    className="hs-form-frame"
                    data-region="eu1"
                    data-form-id="bd46be24-cabe-4408-836b-e98f284f29c0"
                    data-portal-id="147618081"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We're here to help you navigate your career journey.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="p-2.5 bg-primary/8 rounded-lg text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{info.title}</h3>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "How quickly can I start coaching?", a: "Most clients can start within 1-2 weeks of initial contact, depending on availability and service type." },
                    { q: "Do you offer free consultations?", a: "Yes! We offer a complimentary 30-minute consultation to discuss your goals and how we can help." },
                    { q: "What if I'm not sure which service is right for me?", a: "That's what the consultation is for! We'll assess your situation and recommend the best approach." },
                  ].map((faq, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-sm text-foreground mb-1">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full mb-5">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Schedule Online</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Book Your Free Consultation
            </h2>
            <p className="text-muted-foreground">
              Choose a time that works best for you. We'll discuss your career
              goals and create a personalized plan.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-soft overflow-hidden border border-border">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/annestlabelle?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
