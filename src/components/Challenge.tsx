import crossroadsImage from "@/assets/crossroads-illustration.jpg";

const Challenge = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <div className="space-y-6 max-w-lg">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              We understand
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Feeling Lost at the{" "}
              <span className="text-primary">Crossroads?</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Graduating can feel overwhelming. Everyone's asking 'What's next?'
              but it's hard to give any answers because you're not sure if you
              even know what's next. Career fairs feel impersonal, the idea of
              further study seems daunting and life is getting confusing, some
              friends seem to have it all figured out, still many are left
              wondering what to do next. You're not alone and you're not broken.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={crossroadsImage}
                alt="Career crossroads illustration showing multiple paths and opportunities"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Floating Elements */}
            <div className="hidden sm:block absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-card">
              You're here
            </div>

            <div className="hidden sm:block absolute -bottom-3 -left-3 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-card">
              Your future awaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
