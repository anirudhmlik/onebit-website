import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-display text-center mb-12 pixel-text uppercase animate-fade-in">
            [ About OneBit AI ]
          </h1>

          <div className="space-y-12 animate-fade-in">
            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <Target className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  OneBit AI is pioneering indigenous artificial intelligence systems in India. We're building 
                  ultra-efficient, low-bit AI models and hardware that operate completely offline.
                </p>
                <p>
                  Our mission is to democratize AI access while ensuring data sovereignty, privacy, and 
                  national security through locally manufactured, self-contained AI devices.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mb-4 text-accent" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  We envision India as a global leader in sovereign, sustainable AI ecosystems. Unlike 
                  conventional models that rely on massive cloud infrastructure, we focus on quantized 
                  models and hardware-optimized local inference.
                </p>
                <p>
                  From hardware prototyping to indigenous AI infrastructure and global export, we're 
                  building India's first self-reliant AI hardware and software stack.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <Rocket className="w-12 h-12 mb-4 text-secondary" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Early Stage Startup</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  We're at an exciting phase of growth, moving from prototype development to pilot 
                  deployments with government and defense institutions.
                </p>
                <p>
                  As an early-stage startup, we're looking for strategic partners, investors, and 
                  collaborators who share our vision of making India an AI superpower through indigenous 
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-display uppercase">Founder</CardTitle>
              </CardHeader>
              <CardContent className="text-base">
                <p className="text-xl font-bold mb-2">Anirudh Malik</p>
                <p className="text-sm text-primary uppercase font-display">Founder & CEO</p>
                <p className="mt-4 text-muted-foreground">
                  Leading OneBit AI's mission to establish India as a pioneer in offline, sovereign 
                  artificial intelligence systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t-4 border-foreground text-center text-xs relative z-10">
        <p>© 2025 OneBit AI • New Delhi, India</p>
      </footer>
    </div>
  );
};

export default About;
