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
      rating: 5
    },
    {
      name: "Maria S.",
      age: 21,
      outcome: "Marketing Coordinator at StartupXYZ", 
      quote: "Sarah's coaching gave me the confidence to pursue marketing. The 1:1 sessions were exactly what I needed to clarify my goals.",
      rating: 5
    },
    {
      name: "Jordan K.",
      age: 23,
      outcome: "Nonprofit Program Manager",
      quote: "The group coaching sessions connected me with amazing peers. Together we figured out how to turn our values into meaningful careers.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Success Stories from 
            <span className="text-primary"> Young Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our coaching has transformed the career journeys of recent graduates just like you.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden shadow-card border-2 border-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <Quote className="text-primary mx-auto mb-6" size={48} />
              
              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </blockquote>
              
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent">⭐</div>
                ))}
              </div>
              
              {/* Author Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">{currentTestimonial.name}, age {currentTestimonial.age}</h4>
                <p className="text-muted-foreground font-medium">{currentTestimonial.outcome}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-background border border-border hover:border-primary transition-smooth shadow-soft hover:shadow-card"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-primary" size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-background border border-border hover:border-primary transition-smooth shadow-soft hover:shadow-card"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-primary" size={20} />
            </button>
          </div>
        </div>

        {/* Additional Mini Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { stat: "94%", description: "Find career clarity within 6 weeks" },
            { stat: "89%", description: "Report increased confidence" },
            { stat: "87%", description: "Land opportunities within 3 months" }
          ].map((stat, index) => (
            <Card key={index} className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.stat}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/testimonials">
              Read More Success Stories
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;