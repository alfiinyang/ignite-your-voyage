import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coachPhoto from "@/assets/coach-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
              <h1 className="text-4xl md:text-6xl font-bold">
                Our <span className="text-primary">Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To empower young adults to navigate their career paths with confidence, 
                clarity, and purpose. We believe every recent graduate deserves guidance 
                in turning their potential into meaningful opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Coach Bio Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={coachPhoto} 
                    alt="Sarah Johnson, Career Coach"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                
                {/* Floating Credentials */}
                <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card border">
                  <div className="flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    <span className="font-semibold text-sm">ICF Certified</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Meet Sarah Johnson</h2>
                  <p className="text-xl text-primary font-semibold mb-6">
                    Certified Career Coach & Young Adult Specialist
                  </p>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I still remember the overwhelming feeling of graduating college and having 
                    absolutely no idea what came next. Despite having a degree, I felt completely 
                    unprepared for the "real world" and the pressure to figure out my entire future.
                  </p>
                  
                  <p>
                    That experience of uncertainty, anxiety, and eventual breakthrough shaped my 
                    passion for helping other young adults navigate this critical transition period. 
                    After stumbling through my own career journey, I discovered the power of 
                    structured self-discovery and strategic planning.
                  </p>
                  
                  <p>
                    For the past 8 years, I've specialized in working exclusively with recent 
                    graduates and young professionals. I've helped over 500 individuals transform 
                    their career confusion into clarity and confidence.
                  </p>
                </div>

                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/contact">
                    Let's Connect
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                My Coaching <span className="text-primary">Philosophy</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every young adult has unique strengths and potential. My role is to help you 
                discover and channel these into a fulfilling career path.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Authentic Self-Discovery",
                  description: "Uncover your true passions, values, and natural strengths through proven assessment tools and deep reflection.",
                  color: "text-primary"
                },
                {
                  icon: Target,
                  title: "Strategic Planning",
                  description: "Transform insights into actionable goals with clear timelines and measurable milestones.",
                  color: "text-secondary"
                },
                {
                  icon: Users,
                  title: "Supportive Community",
                  description: "Connect with like-minded peers and build a network of professionals who champion your success.",
                  color: "text-accent"
                },
                {
                  icon: Award,
                  title: "Continuous Growth",
                  description: "Develop resilience and adaptability skills that serve you throughout your entire career journey.",
                  color: "text-primary"
                }
              ].map((principle, index) => {
                const IconComponent = principle.icon;
                
                return (
                  <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-muted/50 flex items-center justify-center`}>
                        <IconComponent className={principle.color} size={32} />
                      </div>
                      <h3 className="text-xl font-bold">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold">
                Credentials & <span className="text-primary">Expertise</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ICF Certified Coach",
                  description: "Professional Certified Coach (PCC) credential from the International Coaching Federation",
                  year: "2019"
                },
                {
                  title: "M.A. Counseling Psychology",
                  description: "Master's degree with specialization in career development and young adult transitions",
                  year: "2016"
                },
                {
                  title: "MBTI Certification",
                  description: "Certified practitioner of Myers-Briggs Type Indicator for personality assessment",
                  year: "2018"
                },
                {
                  title: "StrengthsFinder Coach",
                  description: "Gallup-certified coach for CliftonStrengths assessment and development",
                  year: "2020"
                },
                {
                  title: "Career Leader Certification",
                  description: "Specialized certification in career assessment and exploration tools",
                  year: "2021"
                },
                {
                  title: "Ongoing Education",
                  description: "Regular training in emerging career trends and coaching methodologies",
                  year: "Continuous"
                }
              ].map((credential, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg">{credential.title}</h3>
                      <span className="text-sm text-primary font-semibold">{credential.year}</span>
                    </div>
                    <p className="text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">
                A Personal <span className="text-primary">Note</span>
              </h2>
              
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong className="text-foreground">
                    "I believe that your twenties should be a time of exploration and growth, 
                    not paralyzing anxiety about making the 'perfect' choice."
                  </strong>
                </p>
                
                <p>
                  When I work with clients, I'm not just their coach—I'm their advocate, 
                  cheerleader, and strategic partner. I've been where you are, and I know 
                  that with the right guidance and support, this uncertain time can become 
                  the foundation for an incredible career.
                </p>
                
                <p>
                  Outside of coaching, I'm an avid hiker, coffee enthusiast, and lifelong 
                  learner. I live in Colorado with my partner and our rescue dog, Bailey. 
                  I'm passionate about sustainability, travel, and helping young adults 
                  build careers they love while making a positive impact on the world.
                </p>
              </div>

              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/services">
                  Ready to Start Your Journey?
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;