import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Target, BookOpen, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "1-on-1 Career Coaching",
      description: "Personalized guidance to discover your career path and achieve your professional goals.",
      features: ["Career assessment", "Goal setting", "Action planning", "Ongoing support"],
      price: "Starting at $150/session",
      duration: "60-90 minutes"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Coaching Sessions",
      description: "Connect with peers while receiving professional guidance in a supportive environment.",
      features: ["Peer networking", "Group exercises", "Shared learning", "Cost-effective"],
      price: "Starting at $75/session",
      duration: "90 minutes"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Career Bootcamp",
      description: "Intensive 8-week program designed to transform your career trajectory completely.",
      features: ["Weekly workshops", "Personal action plan", "Resume optimization", "Interview prep"],
      price: "$997 (8 weeks)",
      duration: "2 hours/week"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Resume & LinkedIn Optimization",
      description: "Professional review and enhancement of your resume and LinkedIn profile.",
      features: ["ATS optimization", "Keyword research", "Professional branding", "Cover letter"],
      price: "Starting at $299",
      duration: "1-2 weeks delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-navy">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Career Coaching <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose the perfect coaching solution to accelerate your career growth. 
              From personalized 1-on-1 sessions to intensive bootcamps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-foreground">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="hero">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              How It Works
            </h2>
            <p className="text-lg text-navy italic">
              Our proven process ensures you get maximum value from every session
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Assessment</h3>
              <p className="text-navy italic">We start with a comprehensive evaluation of your current situation and goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Strategy</h3>
              <p className="text-navy italic">Together, we create a personalized action plan tailored to your unique path.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Execution</h3>
              <p className="text-navy italic">We work together to implement your plan with ongoing support and accountability.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;