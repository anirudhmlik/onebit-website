import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RetroBackground } from "@/components/RetroBackground";
import { Cpu, Shield, Zap, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10">
        <div className="container text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-display pixel-text uppercase leading-tight">
            Offline Intelligence.<br/>Infinite Possibilities.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-display">
            Indigenous AI devices for data sovereignty and national security
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products">
              <Button size="lg" className="retro-button bg-primary text-background font-bold uppercase group">
                Products <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="retro-button uppercase">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 border-t-4 border-foreground relative z-10 bg-card/50 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ What We Do ]
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Cpu, title: "Offline AI", desc: "Run powerful AI models without internet connectivity" },
              { icon: Shield, title: "Data Sovereignty", desc: "Keep your data secure and local, no cloud dependency" },
              { icon: Zap, title: "Edge Computing", desc: "Ultra-efficient AI inference on low-power devices" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="retro-box p-6 hover:translate-y-[-4px] transition-all duration-300 hover:shadow-retro bg-card"
              >
                <item.icon className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
                <h3 className="text-xl font-display uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t-4 border-foreground relative z-10">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display pixel-text uppercase">
            Ready to Build the Future?
          </h2>
          <p className="text-lg font-display">
            We're an early-stage startup looking for partners, investors, and innovators
            who share our vision of AI independence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="retro-button bg-accent text-background font-bold uppercase">
              Let's Connect
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t-4 border-foreground text-center text-xs relative z-10">
        <p>© 2025 OneBit AI • New Delhi, India</p>
      </footer>
    </div>
  );
};

export default Index;
