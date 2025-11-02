import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hospital, GraduationCap, Globe, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partners = () => {
  const sectors = [
    {
      icon: Shield,
      title: "Defence & Government",
      desc: "Secure, offline AI for national security operations, strategic command centres, and classified environments where data sovereignty is critical.",
      hoverBg: "hover:bg-primary/20"
    },
    {
      icon: Building2,
      title: "Public Sector Banks",
      desc: "Privacy-first AI solutions for financial analysis, customer service, and fraud detection without exposing sensitive data to cloud services.",
      hoverBg: "hover:bg-accent/20"
    },
    {
      icon: Hospital,
      title: "Healthcare Institutions",
      desc: "Medical document processing, diagnostic assistance, and patient data analysis with complete privacy and HIPAA compliance.",
      hoverBg: "hover:bg-secondary/20"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      desc: "AI-powered learning tools, research assistance, and administrative automation for schools, colleges, and universities.",
      hoverBg: "hover:bg-primary/20"
    },
    {
      icon: Briefcase,
      title: "Enterprises & Corporates",
      desc: "Offline AI for internal operations, document intelligence, code generation, and workflow automation without cloud dependency.",
      hoverBg: "hover:bg-accent/20"
    },
    {
      icon: Globe,
      title: "Export Markets",
      desc: "Strategic partnerships with friendly nations seeking sovereign AI capabilities and technology independence.",
      hoverBg: "hover:bg-secondary/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-display text-center mb-6 pixel-text uppercase animate-fade-in">
            [ Who We Serve ]
          </h1>
          <p className="text-center text-lg font-display mb-12 max-w-3xl mx-auto">
            Building partnerships across sectors that value data sovereignty, security, and AI independence
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sectors.map((sector, i) => (
              <Card 
                key={i} 
                className={`retro-box p-6 hover:translate-y-[-4px] transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-retro ${sector.hoverBg}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <sector.icon className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
                  <CardTitle className="text-xl font-display uppercase">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{sector.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="retro-box p-4 md:p-8 bg-accent/10 backdrop-blur-sm border-accent hover:bg-accent/20 transition-all duration-300 w-full">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-display uppercase text-center mb-4">
                Partnership Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm md:text-base">
              <div>
                <h3 className="text-xl font-display uppercase text-accent mb-2">Strategic Partners</h3>
                <p>
                  We're seeking collaborations with research institutions, semiconductor labs, and defense 
                  organizations to accelerate indigenous AI chip development and deployment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display uppercase text-accent mb-2">Early Adopters</h3>
                <p>
                  Join our pilot program to test and validate OneBit AI devices in real-world environments. 
                  Help shape the future of offline AI while securing early access to cutting-edge technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display uppercase text-accent mb-2">Investors & Advisors</h3>
                <p>
                  As an early-stage startup, we're looking for visionary investors who understand the 
                  strategic importance of AI sovereignty and want to be part of India's AI revolution.
                </p>
              </div>

              <div className="text-center pt-6 px-2">
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="retro-button bg-accent text-background font-bold uppercase w-full sm:w-auto">
                    Let's Partner Up
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-6 px-4 border-t-4 border-foreground text-center text-xs relative z-10">
        <p>© 2025 OneBit AI • New Delhi, India</p>
      </footer>
    </div>
  );
};

export default Partners;
