import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Alex M.",
      age: 22,
      outcome: "Software Developer at TechCorp",
      quote: "I was completely lost after graduation. The bootcamp helped me discover my passion for coding and landed me a job I love within 2 months!",
      rating: 5,
    },
    {
      name: "Maria S.",
      age: 21,
      outcome: "Marketing Coordinator at StartupXYZ",
      quote: "Sarah's coaching gave me the confidence to pursue marketing. The 1:1 sessions were exactly what I needed to clarify my goals.",
      rating: 5,
    },
    {
      name: "Jordan K.",
      age: 23,
      outcome: "Nonprofit Program Manager",
      quote: "The group coaching sessions connected me with amazing peers. Together we figured out how to turn our values into meaningful careers.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Success Stories from{" "}
            <span className="text-primary">Young Professionals</span>
          </h2>
          <p className="text-muted-foreground">
            See how our coaching has transformed the career journeys of recent
            graduates just like you.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto mb-14">
          <Card className="border-border shadow-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="text-primary/20 mx-auto mb-6" size={40} />

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex justify-center gap-1 mb-5">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-tertiary text-lg">★</span>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground">
                  {currentTestimonial.name}, age {currentTestimonial.age}
                </h4>
                <p className="text-sm text-muted-foreground">{currentTestimonial.outcome}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-foreground" size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-foreground" size={18} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {[
            { stat: "94%", description: "Find career clarity within 6 weeks" },
            { stat: "89%", description: "Report increased confidence" },
            { stat: "87%", description: "Land opportunities within 3 months" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-muted border border-border">
              <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild className="group">
            <Link to="/testimonials">
              Read More Success Stories
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
