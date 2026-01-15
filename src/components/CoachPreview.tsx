import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import coachPhoto from "@/assets/coach-photo-new.jpg";

const CoachPreview = () => {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={coachPhoto} 
                alt="Professional career coach headshot"
                className="w-full h-auto"
              />
              
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card border">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Young Adults Guided</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet Your 
                <span className="text-primary"> Career Guide</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hi, I'm Annie Inyang, and I've dedicated a decade to empowering both teenagers 
                and adults in their career journeys.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With extensive experience as a senior visa decision maker and analyst for the UK government, 
                I bring invaluable insights into international relations and human social dynamics to help you 
                navigate your career path with confidence.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Award className="text-primary" size={24} />
                <div>
                  <div className="font-semibold text-sm">Certified Coach</div>
                  <div className="text-xs text-muted-foreground">ICF Accredited</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Users className="text-secondary" size={24} />
                <div>
                  <div className="font-semibold text-sm">10 Years</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Target className="text-accent" size={24} />
                <div>
                  <div className="font-semibold text-sm">Specialized</div>
                  <div className="text-xs text-muted-foreground">Young Adults</div>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/about">
                Learn More About My Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachPreview;