import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Shield, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AIR",
      icon: Cpu,
      desc: "100% Offline • 100% Secure • OS Independent",
      features: [
        "Power of all models in one device",
        "Coding, text/PDF summarization",
        "OCR and voice-to-text capabilities",
        "Complete offline operation",
        "Runs on any operating system"
      ],
      colorScheme: "secondary"
    },
    {
      name: "PRO",
      icon: Zap,
      desc: "Fine-tuned model for specific tasks",
      features: [
        "Custom AI models tailored to your needs",
        "Optimized for specific use cases",
        "Enhanced performance for targeted tasks",
        "Secure and private inference",
        "Enterprise-ready deployment"
      ],
      colorScheme: "accent"
    },
    {
      name: "MAX",
      icon: Shield,
      desc: "Collaborative fleet-wide inference",
      features: [
        "Multi-device collaboration across secure networks",
        "Real-time maritime analytics",
        "Fleet-wide AI inference capabilities",
        "On-premise team server",
        "Advanced vision AI for defense applications"
      ],
      colorScheme: "max"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-display text-center mb-6 pixel-text uppercase animate-fade-in">
            [ Products ]
          </h1>
          <p className="text-center text-lg font-display mb-12 max-w-3xl mx-auto">
            Three models designed for different scales — empowering enterprises, defence sectors, and research institutions with secure, low-cost intelligence solutions
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((p, i) => {
              const colorClass = p.colorScheme === 'accent' 
                ? 'border-accent hover:shadow-[8px_8px_0_hsl(var(--accent))] hover:bg-accent/20' 
                : p.colorScheme === 'secondary'
                ? 'border-secondary hover:shadow-[8px_8px_0_hsl(var(--secondary))] hover:bg-secondary/20'
                : p.colorScheme === 'max'
                ? 'border-[hsl(var(--primary))] hover:shadow-[8px_8px_0_hsl(var(--primary))] hover:bg-primary/20'
                : 'border-primary hover:shadow-retro';
              
              const iconColor = p.colorScheme === 'accent' 
                ? 'text-accent' 
                : p.colorScheme === 'secondary'
                ? 'text-secondary'
                : p.colorScheme === 'max'
                ? 'text-[hsl(var(--primary))]'
                : 'text-primary';
              
              const bulletColor = p.colorScheme === 'accent'
                ? 'text-accent'
                : p.colorScheme === 'secondary'
                ? 'text-secondary'
                : p.colorScheme === 'max'
                ? 'text-[hsl(var(--secondary))]'
                : 'text-primary';

              return (
                <Card 
                  key={i} 
                  className={`retro-box p-6 hover:translate-y-[-4px] transition-all duration-300 bg-card/80 backdrop-blur-sm group ${colorClass}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardHeader>
                    <p.icon 
                      className={`w-16 h-16 mb-4 ${iconColor}`} 
                      strokeWidth={3} 
                    />
                    <CardTitle className="text-3xl font-display uppercase">
                      OneBit {p.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-display">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className={bulletColor}>▸</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-display uppercase text-center">
                  Technology Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base">
                <p>
                  <strong className="text-primary">Quantized Model Research:</strong> We're advancing model 
                  precision from FP16 to ultra-low-bit architectures (as low as 1.58-bit) without significant 
                  performance loss.
                </p>
                <p>
                  <strong className="text-primary">Edge Computing:</strong> Energy-efficient AI that operates 
                  on affordable hardware, enabling deployment anywhere without cloud dependency.
                </p>
                <p>
                  <strong className="text-primary">Indigenous R&D:</strong> Collaborating with Indian hardware 
                  labs and semiconductor research centres to design AI accelerators that are indigenously 
                  manufacturable and scalable.
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

export default Products;
