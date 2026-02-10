import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import coachPhoto from "@/assets/coach-photo-new.jpg";

const CoachPreview = () => {
  return (
    <section className="py-24 section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={coachPhoto}
                alt="Annie Inyang, professional career coach"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="absolute -top-5 -right-5 bg-card p-4 rounded-xl shadow-card border border-border">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Young Adults Guided</div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-card p-4 rounded-xl shadow-card border border-border">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Your guide
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Your{" "}
                <span className="text-primary">Career Guide</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Annie Inyang, and I've dedicated a decade to empowering
                both teenagers and adults in their career journeys.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With extensive experience as a senior visa decision maker and
              analyst for the UK government, I bring invaluable insights into
              international relations and human social dynamics to help you
              navigate your career path with confidence.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Award, label: "Certified Coach", sub: "ICF Accredited", color: "text-primary" },
                { icon: Users, label: "10 Years", sub: "Experience", color: "text-secondary" },
                { icon: Target, label: "Specialized", sub: "Young Adults", color: "text-accent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                  <item.icon className={item.color} size={20} />
                  <div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/about">
                Learn More About My Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachPreview;
