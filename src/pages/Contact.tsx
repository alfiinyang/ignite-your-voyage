import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Pre-select service if coming from services page
  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData(prev => ({
        ...prev,
        service: location.state.selectedService
      }));
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@unborderedpath.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
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
              
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input 
                          id="firstName"
                          placeholder="John"
                          className="bg-background border-border"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input 
                          id="lastName"
                          placeholder="Smith"
                          className="bg-background border-border"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background border-border"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background border-border"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select 
                        id="service"
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a service</option>
                        <option value="1on1">1-on-1 Career Coaching</option>
                        <option value="group">Group Coaching</option>
                        <option value="bootcamp">Career Bootcamp</option>
                        <option value="resume">Resume Optimization</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your current situation, career goals, and any specific challenges you're facing..."
                        rows={5}
                        className="bg-background border-border"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" variant="hero">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
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

      <Footer />
    </div>
  );
};

export default Contact;