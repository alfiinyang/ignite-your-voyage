import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BootcampHighlight = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to next cohort (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weeklyModules = [
    {
      week: "Week 1",
      title: "Self-Discovery",
      description: "Uncover your strengths, values, and passion areas"
    },
    {
      week: "Week 2", 
      title: "Market Research",
      description: "Explore industries and understand career landscapes"
    },
    {
      week: "Week 3",
      title: "Skill Mapping",
      description: "Identify your current skills and gaps to bridge"
    },
    {
      week: "Week 4",
      title: "Personal Branding",
      description: "Craft your resume, LinkedIn, and professional story"
    },
    {
      week: "Week 5",
      title: "Network Building",
      description: "Connect with professionals and build relationships"
    },
    {
      week: "Week 6",
      title: "Action Planning",
      description: "Create your 90-day career launch strategy"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-accent">6 Weeks.</span>
            <br />
            <span className="text-foreground">A Clearer Path.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our flagship <strong>Ignite Your Future Bootcamp</strong> transforms uncertainty into clarity. 
            In just 6 weeks, you'll go from confused to confident about your career direction.
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="mb-16 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <CardContent className="text-center py-8">
            <h3 className="text-2xl font-bold mb-6">Next Cohort Starts In:</h3>
            
            <div className="flex justify-center gap-4 md:gap-8 mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-primary text-primary-foreground text-3xl md:text-4xl font-bold rounded-xl px-4 py-3 min-w-[80px]">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 capitalize">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={16} />
                <span className="text-sm">Limited to 12 participants</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <span className="text-sm">3 spots remaining</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Weekly Breakdown */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Your 6-Week Journey</h3>
            
            <div className="space-y-4">
              {weeklyModules.map((module, index) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-soft hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground text-sm font-bold rounded-full w-16 h-8 flex items-center justify-center flex-shrink-0">
                        {module.week}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{module.title}</h4>
                        <p className="text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Program Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">What You'll Achieve</h3>
              
              <div className="space-y-4">
                {[
                  "Crystal-clear career direction aligned with your strengths",
                  "Professional online presence that attracts opportunities", 
                  "A network of industry professionals and like-minded peers",
                  "Confidence to interview and negotiate effectively",
                  "90-day action plan with concrete next steps",
                  "Lifetime access to our alumni community"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Stats */}
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4">Program Success</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">92%</div>
                    <div className="text-sm text-muted-foreground">Land job/internship within 3 months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">4.9</div>
                    <div className="text-sm text-muted-foreground">Average program rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="space-y-4">
              <Button variant="accent" size="xl" className="w-full group">
                <Link to="/services" className="flex items-center justify-center w-full">
                  Secure Your Spot - $250
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                <Clock className="inline mr-1" size={14} />
                Risk-free 7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampHighlight;