import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Target, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "1-on-1 Career Coaching",
      description: "Personalized guidance to discover your career path and achieve your professional goals.",
      features: ["Career assessment", "Goal setting", "Action planning", "Ongoing support"],
      price: "Starting at $150/session",
      duration: "60-90 minutes",
      serviceId: "1on1",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Group Coaching Sessions",
      description: "Connect with peers while receiving professional guidance in a supportive environment.",
      features: ["Peer networking", "Group exercises", "Shared learning", "Cost-effective"],
      price: "Starting at $75/session",
      duration: "90 minutes",
      serviceId: "group",
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Career Bootcamp",
      description: "Intensive 8-week program designed to transform your career trajectory completely.",
      features: ["Weekly workshops", "Personal action plan", "Resume optimization", "Interview prep"],
      price: "$997 (8 weeks)",
      duration: "2 hours/week",
      serviceId: "bootcamp",
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Resume & LinkedIn Optimization",
      description: "Professional review and enhancement of your resume and LinkedIn profile.",
      features: ["ATS optimization", "Keyword research", "Professional branding", "Cover letter"],
      price: "Starting at $299",
      duration: "1-2 weeks delivery",
      serviceId: "resume",
    },
  ];

  const handleBookNow = (serviceId: string) => {
    navigate("/contact#contact-form", { state: { selectedService: serviceId } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              What we offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Career Coaching <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the perfect coaching solution to accelerate your career
              growth. From personalized 1-on-1 sessions to intensive bootcamps.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our process
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground">
              Our proven process ensures you get maximum value from every session
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Assessment", desc: "We start with a comprehensive evaluation of your current situation and goals." },
              { step: "2", title: "Strategy", desc: "Together, we create a personalized action plan tailored to your unique path." },
              { step: "3", title: "Execution", desc: "We work together to implement your plan with ongoing support and accountability." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border shadow-soft hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2.5 bg-primary/8 rounded-xl text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><Clock size={12} />{service.duration}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} />{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group" onClick={() => handleBookNow(service.serviceId)}>
                    Book Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
