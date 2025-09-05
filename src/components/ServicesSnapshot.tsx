import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Zap, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSnapshot = () => {
  const services = [
    {
      title: "1:1 Coaching",
      price: "$70",
      period: "per hour",
      icon: User,
      description: "Personalized guidance tailored to your unique goals and challenges.",
      features: [
        "One-on-one sessions",
        "Customized action plans",
        "Career assessment",
        "Resume & interview prep"
      ],
      gradient: "gradient-hero",
      popular: false
    },
    {
      title: "Group Coaching", 
      price: "$40",
      period: "per person/hr",
      icon: Users,
      description: "Learn alongside peers facing similar career transitions.",
      features: [
        "Small group sessions",
        "Peer learning",
        "Shared experiences",
        "Collaborative problem-solving"
      ],
      gradient: "gradient-success",
      popular: false
    },
    {
      title: "Ignite Your Future Bootcamp",
      price: "$250",
      period: "6-week program",
      icon: Zap,
      description: "Comprehensive 6-week program to discover and launch your career path.",
      features: [
        "Complete career blueprint",
        "Skills assessment",
        "Industry insights",
        "Job search strategy",
        "Lifetime alumni support"
      ],
      gradient: "gradient-accent",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your 
            <span className="text-primary"> Path Forward</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you prefer individual attention, peer support, or comprehensive training, 
            we have the perfect solution for your career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden shadow-card border-2 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${
                  service.popular ? 'border-accent scale-105' : 'border-border hover:border-primary/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    🌟 Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center space-y-4 ${service.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${service.gradient} flex items-center justify-center shadow-soft`}>
                    <IconComponent className="text-2xl" size={32} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <DollarSign className="text-primary" size={20} />
                      <span className="text-4xl font-bold text-primary">{service.price.replace('$', '')}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.period}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full group" 
                    asChild
                  >
                    <Link to="/services">
                      {service.popular ? "Join Bootcamp" : service.title.includes("1:1") ? "Book Session" : "Join Group"}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which option is right for you?
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              <Clock className="mr-2" size={20} />
              Schedule a Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;