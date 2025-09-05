import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Message */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">Your future won't wait.</span>
              <br />
              <span className="text-primary">Why should you?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every day you spend uncertain about your career direction is a day you could be building toward your dream job. 
              <strong className="text-foreground"> The time to act is now.</strong>
            </p>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center space-y-2">
              <Clock className="text-accent" size={32} />
              <div className="text-sm text-muted-foreground">Average time to clarity</div>
              <div className="text-2xl font-bold text-primary">6 weeks</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Users className="text-secondary" size={32} />
              <div className="text-sm text-muted-foreground">Next bootcamp spots</div>
              <div className="text-2xl font-bold text-primary">3 left</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <ArrowRight className="text-primary" size={32} />
              <div className="text-sm text-muted-foreground">Start your journey</div>
              <div className="text-2xl font-bold text-primary">Today</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/services">
                Join the Bootcamp
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <div className="text-muted-foreground">or</div>
            
            <Button variant="outline" size="xl" asChild className="group">
              <Link to="/services">
                Book a 1:1 Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ 7-day money-back guarantee</span>
              <span>✓ 500+ young adults guided</span>
              <span>✓ 95% success rate</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Still not sure? 
              <Link to="/contact" className="text-primary hover:underline ml-1">
                Schedule a free 15-minute consultation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;