import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  // Load HubSpot form script
  useEffect(() => {
    const hubspotScript = document.createElement('script');
    hubspotScript.src = 'https://js-eu1.hsforms.net/forms/embed/147618081.js';
    hubspotScript.defer = true;
    document.body.appendChild(hubspotScript);

    return () => {
      document.body.removeChild(hubspotScript);
    };
  }, []);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "annieoous1@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+44 7730 466665",
      description: "Mon-Fri 9AM-6PM GMT"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Remote & Online",
      description: "Serving clients worldwide"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-12 section-navy">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6 mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your career transformation? Let's talk about your goals 
                and how we can help you achieve them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                Tell us about your career goals and challenges.
              </p>
              
              <Card id="contact-form" className="bg-card border-border shadow-elegant">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you navigate your career journey. 
                Reach out through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      How quickly can I start coaching?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Most clients can start within 1-2 weeks of initial contact, depending on availability and service type.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Do you offer free consultations?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Yes! We offer a complimentary 30-minute consultation to discuss your goals and how we can help.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      What if I'm not sure which service is right for me?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      That's what the consultation is for! We'll assess your situation and recommend the best approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Schedule Online</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose a time that works best for you. We'll discuss your career goals 
              and create a personalized plan for your success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-elegant overflow-hidden border border-border">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/annestlabelle?hide_landing_page_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;