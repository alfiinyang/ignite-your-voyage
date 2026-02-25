// services snapshot component for homepage
// services snapshot component for homepage
import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Zap, Clock, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BookingModal = lazy(() => import("./BookingModal"));

const ServicesSnapshot = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const services = [
    {
      title: "1:1 Coaching",
      price: "$70",
      period: "per hour",
      icon: User,
      description: "Personalized guidance tailored to your unique goals and challenges.",
      features: ["One-on-one sessions", "Customized action plans", "Career assessment", "Resume & interview prep"],
      popular: false,
      ctaLabel: "Get Started",
    },
    {
      title: "Ignite Your Future Bootcamp",
      price: "$250",
      period: "6-week program",
      icon: Zap,
      description: "Comprehensive 6-week program to discover and launch your career path.",
      features: ["Complete career blueprint", "Skills assessment", "Industry insights", "Job search strategy", "Lifetime alumni support"],
      popular: true,
      ctaLabel: "Join Bootcamp",
    },
    {
      title: "Group Coaching",
      price: "$40",
      period: "per person/hr",
      icon: Users,
      description: "Learn alongside peers facing similar career transitions.",
      features: ["Small group sessions", "Peer learning", "Shared experiences", "Collaborative problem-solving"],
      popular: false,
      ctaLabel: "Join a Group",
    },
  ];

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your <span className="text-primary">Path Forward</span>
            </h2>
            <p className="text-muted-foreground">
              Whether you prefer individual attention, peer support, or
              comprehensive training, we have the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    service.popular
                      ? "border-primary shadow-glow ring-1 ring-primary/20"
                      : "border-border shadow-soft hover:shadow-card"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1.5 text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className={`text-center space-y-4 ${service.popular ? "pt-12" : "pt-8"}`}>
                    <div className={`w-12 h-12 mx-auto rounded-xl ${
                      service.popular ? "bg-primary" : "bg-muted"
                    } flex items-center justify-center`}>
                      <IconComponent
                        className={service.popular ? "text-primary-foreground" : "text-primary"}
                        size={22}
                      />
                    </div>

                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>

                    <div>
                      <span className="text-3xl font-bold text-foreground">{service.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">/{service.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 pb-8">
                    <p className="text-center text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-sm">
                          <Check className="text-secondary flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={service.popular ? "default" : "outline"}
                      className="w-full group"
                      onClick={() => openModal(service.title)}
                    >
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <p className="text-sm text-muted-foreground mb-4">
              Not sure which option is right for you?
            </p>
            <Button variant="ghost" size="default" asChild className="group">
              <Link to="/contact">
                <Clock className="mr-2" size={16} />
                Schedule a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <Suspense fallback={null}>
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            serviceName={selectedService}
          />
        </Suspense>
      )}
    </>
  );
};

export default ServicesSnapshot;
