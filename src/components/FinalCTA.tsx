import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";

const FinalCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                Your future won't wait.
                <br />
                <span className="text-primary">Why should you?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Every day you spend uncertain about your career direction is a day
                you could be building toward your dream job.{" "}
                <strong className="text-foreground">The time to act is now.</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto">
              <div className="text-center">
                <Clock className="text-accent mx-auto mb-2" size={24} />
                <div className="text-xl font-bold text-primary">6 wks</div>
                <div className="text-xs text-muted-foreground">To clarity</div>
              </div>
              <div className="text-center">
                <Users className="text-secondary mx-auto mb-2" size={24} />
                <div className="text-xl font-bold text-primary">3 left</div>
                <div className="text-xs text-muted-foreground">Bootcamp spots</div>
              </div>
              <div className="text-center">
                <ArrowRight className="text-primary mx-auto mb-2" size={24} />
                <div className="text-xl font-bold text-primary">Today</div>
                <div className="text-xs text-muted-foreground">Start now</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button size="lg" className="group" onClick={() => openModal("Ignite Your Future Bootcamp")}>
                Join the Bootcamp
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
              <span className="text-muted-foreground text-sm">or</span>
              <Button variant="outline" size="lg" onClick={() => openModal("1:1 Coaching")}>
                Book a 1:1 Session
              </Button>
            </div>

            {/* Trust */}
            <div className="space-y-3 pt-4">
              <div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
                <span>✓ 7-day money-back guarantee</span>
                <span>✓ 500+ young adults guided</span>
                <span>✓ 95% success rate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Still not sure?{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Schedule a free consultation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
};

export default FinalCTA;