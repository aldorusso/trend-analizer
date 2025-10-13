import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "We analyze your business to create digital solutions that truly drive your goals and maximize ROI."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Clean code, elegant design, and industry best practices ensure excellence in every project."
    },
    {
      icon: Lightbulb,
      title: "Constant Innovation",
      description: "We leverage cutting-edge technologies to keep your business at the competitive forefront."
    }
  ];

  const achievements = [
    "15+ years delivering exceptional digital solutions",
    "200+ successful projects completed globally",
    "Expert team in React, Next.js, Node.js & modern stacks",
    "Agile methodologies with on-time delivery guarantee",
    "24/7 continuous support and maintenance",
    "SEO optimization and performance excellence included"
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            We create exceptional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              digital experiences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eurosynapse is a team of passionate developers and designers who transform
            your vision into powerful, scalable, and beautiful web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Why choose Eurosynapse?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-corporate">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Our experience</h3>
            <Card className="card-corporate">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--accent-warm))' }} />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-8 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-primary/10">
              <p className="text-lg font-medium text-center">
                "We transform complex business challenges into elegant digital solutions
                that drive growth and delight users"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;