import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const BootcampHighlight = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   const targetDate = new Date();
  //   targetDate.setDate(targetDate.getDate() + 30);

  //   const timer = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = targetDate.getTime() - now;
  //     if (difference > 0) {
  //       setTimeLeft({
  //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //       });
  //     }
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  const weeklyModules = [
    { week: "Week 1", title: "Self-Discovery", description: "Uncover your strengths, values, and passion areas" },
    { week: "Week 2", title: "Market Research", description: "Explore industries and understand career landscapes" },
    { week: "Week 3", title: "Skill Mapping", description: "Identify your current skills and gaps to bridge" },
    { week: "Week 4", title: "Personal Branding", description: "Craft your resume, LinkedIn, and professional story" },
    { week: "Week 5", title: "Network Building", description: "Connect with professionals and build relationships" },
    { week: "Week 6", title: "Action Planning", description: "Create your 90-day career launch strategy" },
  ];

  return (
    <>
      <section className="py-24 section-light">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              Flagship program
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              <span className="text-accent">6 Weeks.</span>{" "}
              A Clearer Path.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our flagship <strong className="text-foreground">Ignite Your Future Bootcamp</strong>{" "}
              transforms uncertainty into clarity. In just 6 weeks, you'll go from
              confused to confident about your career direction.
            </p>
          </div>

          {/* Countdown Timer */}
          {/* <div className="max-w-2xl mx-auto mb-16">
            <Card className="border-primary/10 bg-card">
              <CardContent className="text-center py-8">
                <h3 className="text-lg font-semibold mb-5 text-foreground">Next Cohort Starts In</h3>

                <div className="flex justify-center gap-3 md:gap-5 mb-5">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-primary text-primary-foreground text-2xl md:text-3xl font-bold rounded-xl px-3 py-2.5 min-w-[64px] tabular-nums">
                        {value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1.5 capitalize">{unit}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Users size={14} /> Limited to 12 participants</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> 3 spots remaining</span>
                </div>
              </CardContent>
            </Card>
          </div> */}

          {/* Program Overview */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Weekly Breakdown */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Your 6-Week Journey</h3>
              <div className="space-y-3">
                {weeklyModules.map((module, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-shadow"
                  >
                    <div className="bg-primary text-primary-foreground text-xs font-bold rounded-full px-3 py-1 flex-shrink-0 mt-0.5">
                      {module.week}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">What You'll Achieve</h3>
                <div className="space-y-3">
                  {[
                    "Crystal-clear career direction aligned with your strengths",
                    "Professional online presence that attracts opportunities",
                    "A network of industry professionals and like-minded peers",
                    "Confidence to interview and negotiate effectively",
                    "90-day action plan with concrete next steps",
                    "Lifetime access to our alumni community",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <Card className="bg-muted border-0">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">92%</div>
                      <div className="text-xs text-muted-foreground mt-1">Land job/internship within 3 months</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">4.9</div>
                      <div className="text-xs text-muted-foreground mt-1">Average program rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="space-y-3">
                <Button size="lg" className="w-full group" onClick={() => setModalOpen(true)}>
                  Secure Your Spot – $250
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
                <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Clock size={12} />
                  Risk-free 7-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Ignite Your Future Bootcamp"
      />
    </>
  );
};

export default BootcampHighlight;