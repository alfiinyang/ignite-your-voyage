import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
              <Sparkles size={14} />
              <span>Career coaching for young adults</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground">
                Ignite Your Future:
                <br />
                <span className="text-primary">Your Career Journey</span>
                <br />
                Starts Here!
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Personalized coaching and immersive bootcamps for young adults
                ready to take charge of their career path.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="group">
                <Link to="/services">
                  Join Bootcamp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Book a Free Session</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                6-Week Bootcamp
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Proven Results
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Expert Guidance
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Young professional confidently navigating their career path with expert coaching support"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-6 top-1/4 bg-card p-4 rounded-xl shadow-card border border-border animate-fade-in-up">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Young Adults Guided</div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-card border border-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
