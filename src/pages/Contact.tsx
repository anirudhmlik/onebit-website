import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-display text-center mb-6 pixel-text uppercase animate-fade-in">
            [ Get in Touch ]
          </h1>
          <p className="text-center text-lg font-display mb-12">
            Ready to explore offline AI? Let's connect.
          </p>

          <div className="flex justify-center">
            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-primary max-w-md w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-display uppercase">Founder</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-2xl font-bold mb-1">Anirudh Malik</p>
                  <p className="text-sm text-primary uppercase font-display">Founder & CEO</p>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="mailto:ceo@onebit-ai.in"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <Mail size={20} className="text-primary" />
                    ceo@onebit-ai.in
                  </a>
                  <a
                    href="tel:+919058176356"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <Phone size={20} className="text-primary" />
                    +91 905817635
                  </a>
                  <a
                    href="https://www.linkedin.com/in/whoisaphysicist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <Linkedin size={20} className="text-primary" />
                    LinkedIn Profile
                  </a>
                </div>
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

export default Contact;
