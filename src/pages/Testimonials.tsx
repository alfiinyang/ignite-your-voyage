import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact', { state: { selectedService: 'consultation' } });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Startup",
      image: "/placeholder.svg",
      rating: 5,
      text: "Working with this career coach completely transformed my professional trajectory. I went from feeling lost and unfulfilled to landing my dream job in just 3 months. The personalized approach and actionable strategies made all the difference.",
      result: "Landed dream job in 3 months"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      company: "Fortune 500",
      image: "/placeholder.svg",
      rating: 5,
      text: "The career bootcamp was exactly what I needed. The structured approach helped me identify my strengths and pivot into a role that truly aligns with my values. I'm now earning 40% more and actually excited about Mondays!",
      result: "40% salary increase"
    },
    {
      name: "Emily Rodriguez",
      role: "Recent Graduate",
      company: "Financial Services",
      image: "/placeholder.svg",
      rating: 5,
      text: "As a recent graduate, I was overwhelmed by the job market. The coaching sessions gave me clarity on my career path and the confidence to pursue opportunities I never thought possible. The resume optimization alone was worth the investment.",
      result: "First job within 6 weeks"
    },
    {
      name: "David Thompson",
      role: "Career Changer",
      company: "Healthcare",
      image: "/placeholder.svg",
      rating: 5,
      text: "After 10 years in one industry, I thought it was impossible to change careers. The coaching process helped me identify transferable skills and create a compelling narrative. I successfully transitioned to healthcare and couldn't be happier.",
      result: "Successful career pivot"
    },
    {
      name: "Jessica Park",
      role: "Project Manager",
      company: "Non-Profit",
      image: "/placeholder.svg",
      rating: 5,
      text: "The group coaching sessions were incredible. Not only did I get expert guidance, but I also built a network of peers going through similar challenges. The support system continues even after the program ended.",
      result: "Promoted to Senior PM"
    },
    {
      name: "Alex Kumar",
      role: "Entrepreneur",
      company: "Own Business",
      image: "/placeholder.svg",
      rating: 5,
      text: "I was stuck in analysis paralysis about starting my own business. The coaching helped me break down the overwhelming process into manageable steps. I launched my company 6 months later and it's thriving!",
      result: "Launched successful business"
    }
  ];

  const stats = [
    { number: "95%", label: "Job Placement Rate" },
    { number: "38%", label: "Average Salary Increase" },
    { number: "300+", label: "Careers Transformed" },
    { number: "4.9", label: "Average Rating" }
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
                Success <span className="text-primary">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real results from real people. See how career coaching has transformed 
                the professional lives of hundreds of young adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from the professionals who've 
              transformed their careers with our guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary mb-3" />
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary">
                      Result: {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of professionals who have transformed their careers. 
              Your success story could be next.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="px-8 py-3 font-semibold"
                onClick={handleScheduleConsultation}
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;