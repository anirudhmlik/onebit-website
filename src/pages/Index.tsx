import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RetroBackground } from "@/components/RetroBackground";
import { HolographicLogo } from "@/components/HolographicLogo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { GlitchEffect } from "@/components/GlitchEffect";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { SocialIntegration } from "@/components/SocialIntegration";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cpu, Shield, Zap, ArrowRight } from "lucide-react";

const Index = () => {
  const [heroRef, isHeroVisible, getHeroAnimation] = useScrollAnimation({ 
    animationType: 'zoom-in', 
    delay: 200 
  });
  const [featuresRef, isFeaturesVisible, getFeaturesAnimation] = useScrollAnimation({ 
    animationType: 'slide-up', 
    delay: 100 
  });
  const [ctaRef, isCtaVisible, getCtaAnimation] = useScrollAnimation({ 
    animationType: 'bounce-in', 
    delay: 300 
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      <ParticleBackground />
      
      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10">
        <div className={`container text-center space-y-8 transition-all duration-1000 ${isHeroVisible ? getHeroAnimation() : 'opacity-0 translate-y-10'}`}>
          {/* Holographic Logo */}
          <div className="mb-8">
            <HolographicLogo className="text-4xl md:text-6xl lg:text-7xl" />
          </div>
          <GlitchEffect intensity={0.02} duration={5000} type="text">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display pixel-text uppercase leading-tight">
              Offline Intelligence.<br/>Infinite Possibilities.
            </h1>
          </GlitchEffect>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-display">
            Indigenous AI devices for data sovereignty and national security
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products">
              <Button size="lg" className="retro-button bg-primary text-background font-bold uppercase group text-lg px-8 py-4">
                Products <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="retro-button uppercase text-lg px-8 py-4">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section ref={featuresRef} className="py-20 px-4 border-t-4 border-foreground relative z-10 bg-card/50 backdrop-blur-sm">
        <div className="container">
              <h2 className={`text-4xl md:text-6xl lg:text-7xl font-display text-center mb-12 pixel-text uppercase transition-all duration-1000 ${isFeaturesVisible ? getFeaturesAnimation() : 'opacity-0 translate-y-10'}`}>
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
                  className={`retro-box p-6 hover:translate-y-[-4px] transition-all duration-300 hover:shadow-retro bg-card ${
                    i === 0 ? 'card-3d-tilt' : i === 1 ? 'card-3d-float' : 'card-3d-flip'
                  } ${
                    isFeaturesVisible ? `animate-scale-in` : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                <item.icon className="w-12 h-12 mb-4 text-primary animate-float-3d" strokeWidth={3} />
                <h3 className="text-xl font-display uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 border-t-4 border-foreground relative z-10 bg-card/30 backdrop-blur-sm">
        <div className="container">
          <InteractiveDemo />
        </div>
      </section>

      {/* Social Integration Section */}
      <section className="py-20 px-4 border-t-4 border-foreground relative z-10 bg-card/20 backdrop-blur-sm">
        <div className="container">
          <SocialIntegration />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t-4 border-foreground relative z-10">
        <div className="container max-w-4xl text-center space-y-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display pixel-text uppercase">
                Ready to Build the Future?
              </h2>
          <p className="text-xl md:text-2xl font-display">
            We're an early-stage startup looking for partners, investors, and innovators
            who share our vision of AI independence.
          </p>
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
