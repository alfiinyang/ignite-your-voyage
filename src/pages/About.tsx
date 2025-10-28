import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coachPhoto from "@/assets/coach-photo-new.jpg";

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
                    alt="Annie Opusunju, Career Coach"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Floating Credentials */}
                <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card border">
                  <div className="flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    <span className="font-semibold text-sm">ICF Certified</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border">
                  <div className="text-2xl font-bold text-secondary">10</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Meet Annie Opusunju</h2>
                  <p className="text-xl text-primary font-semibold mb-6">
                    Certified Project Manager, Scrum Master & Career Coach
                  </p>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With a decade of experience in the academic field, I am dedicated to empowering 
                    both teenagers and adults in their career journeys. My extensive background includes 
                    serving as a senior visa decision maker and analyst for the UK government, providing 
                    me with invaluable insights into international relations and human social dynamics.
                  </p>
                  
                  <p>
                    Fluent in multiple languages and trained across various European countries, I excel 
                    in fostering cross-cultural understanding and communication. This multicultural 
                    perspective allows me to connect with clients from diverse backgrounds and help them 
                    navigate their unique career challenges.
                  </p>
                  
                  <p>
                    As a certified project manager and scrum master, I utilise structured, agile 
                    methodologies to ensure a productive and engaging learning environment, guiding 
                    each participant toward their unique career goals with clarity and purpose.
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
                  title: "Certified Project Manager",
                  description: "Professional project management certification with expertise in delivering complex initiatives",
                  year: "Certified"
                },
                {
                  title: "Certified Scrum Master",
                  description: "Agile methodology expert utilizing structured frameworks for career development",
                  year: "Certified"
                },
                {
                  title: "UK Government Analyst",
                  description: "Senior visa decision maker and analyst with deep insights into international relations",
                  year: "10+ Years"
                },
                {
                  title: "Multilingual Professional",
                  description: "Fluent in multiple languages, fostering cross-cultural understanding and communication",
                  year: "Ongoing"
                },
                {
                  title: "European Training",
                  description: "Trained across various European countries in career coaching and development methodologies",
                  year: "International"
                },
                {
                  title: "Academic Experience",
                  description: "Decade of experience empowering teenagers and adults in their educational and career paths",
                  year: "10 Years"
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
                    "Career development is not just about finding a job—it's about discovering 
                    your unique path and building the skills to navigate it successfully."
                  </strong>
                </p>
                
                <p>
                  When I work with clients, I bring a unique blend of international perspective, 
                  structured methodology, and genuine passion for their success. My experience across 
                  cultures and industries allows me to provide insights that go beyond traditional 
                  career coaching, helping you develop the adaptability and confidence needed in 
                  today's global workplace.
                </p>
                
                <p>
                  I'm committed to creating an engaging, productive learning environment where each 
                  individual can explore their potential and chart a course toward their career goals 
                  with clarity, confidence, and purpose.
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