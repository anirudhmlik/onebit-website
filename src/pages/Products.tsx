import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Shield, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AIR",
      icon: Cpu,
      desc: "USB plug & play AI",
      features: [
        "Document/PDF summarization",
        "Multilingual support",
        "Text & code generation",
        "Runs on your machine",
        "Complete offline operation"
      ]
    },
    {
      name: "PRO",
      icon: Zap,
      desc: "PCB with integrated compute",
      features: [
        "10× faster inference",
        "Independent processing",
        "Rugged & portable",
        "Secure & private",
        "Plug-and-play setup"
      ],
      accent: true
    },
    {
      name: "MAX",
      icon: Shield,
      desc: "LAN server hub",
      features: [
        "Vision AI capabilities",
        "Multi-user support",
        "Surveillance analysis",
        "Up to 60fps generation",
        "On-premise team server"
      ]
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
            Three models designed for different scales — from individual developers to enterprise deployments
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((p, i) => (
              <Card 
                key={i} 
                className={`retro-box p-6 hover:translate-y-[-4px] transition-all duration-300 bg-card/80 backdrop-blur-sm group ${
                  p.accent 
                    ? 'border-accent hover:shadow-[8px_8px_0_hsl(var(--accent))] product-card-accent' 
                    : 'hover:shadow-retro product-card-primary'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <p.icon 
                    className={`w-16 h-16 mb-4 ${p.accent ? 'text-accent' : 'text-primary'}`} 
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
                        <span className={p.accent ? 'text-accent' : 'text-primary'}>▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
