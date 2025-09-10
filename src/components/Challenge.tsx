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
                Graduating can feel overwhelming. Everyone's asking 'What's next?' but it's hard to give any answers because you're not sure if you even know what's next. Career fairs feel impersonal, the idea of further study seems daunting and life is getting confusing, some friends seem to have it all figured out, still many are left wondering what to do next. You're not alone and you're not broken.
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