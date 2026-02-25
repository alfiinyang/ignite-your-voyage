import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1758876021772-2684360dfc97?auto=format&fit=crop&w=2200&q=80";
const heroBackgroundImageSmall =
  "https://images.unsplash.com/photo-1758876021772-2684360dfc97?auto=format&fit=crop&w=900&q=75";
const heroBackgroundImageMedium =
  "https://images.unsplash.com/photo-1758876021772-2684360dfc97?auto=format&fit=crop&w=1400&q=75";
const heroBackgroundImageLarge =
  "https://images.unsplash.com/photo-1758876021772-2684360dfc97?auto=format&fit=crop&w=2200&q=80";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image + readability overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImage}
          srcSet={`${heroBackgroundImageSmall} 900w, ${heroBackgroundImageMedium} 1400w, ${heroBackgroundImageLarge} 2200w`}
          sizes="100vw"
          alt="Young professionals collaborating in a modern office setting"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/35 backdrop-blur-sm border border-white/35 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles size={14} />
            <span>Career coaching for young adults</span>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Navigate Your Career With
              <br />
              <span className="text-secondary">Confidence, Clarity, and Purpose.</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
              We empower recent graduates and young adults to turn potential
              into meaningful opportunities through personalized coaching,
              practical strategy, and focused support.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/70 text-white bg-black/20 hover:bg-white/15 hover:text-white"
            >
              <Link to="/services">Explore Coaching Programs</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Personalized Coaching
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Career Clarity Framework
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Real-World Action Plan
            </div>
          </div>

          <p className="text-xs text-white/70">
            Photo by Vitaly Gariev on Unsplash
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
