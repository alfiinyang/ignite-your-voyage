import crossroadsImage from "@/assets/crossroads-illustration.jpg";

const Challenge = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Feeling Lost at the 
              <span className="text-primary"> Crossroads?</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                You've just graduated or you're about to graduate, and the world feels overwhelming. 
                Everyone's asking "What's next?" but no one's showing you how to figure it out.
              </p>
              
              <p>
                Career fairs feel impersonal. Online job boards are confusing. 
                Your friends seem to have it all figured out, but you're still wondering...
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground font-medium">
                "What if I choose the wrong path? What if I waste my potential? 
                How do I even know what I'm good at?"
              </blockquote>
              
              <p className="font-medium text-foreground">
                You're not alone. And more importantly, you don't have to figure it out alone.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={crossroadsImage} 
                alt="Career crossroads illustration showing multiple paths and opportunities"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-semibold shadow-card">
              You're here
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-semibold shadow-card">
              Your future awaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;