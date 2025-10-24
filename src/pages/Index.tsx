import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Menu, X, Cpu, Shield, Zap, Sun, Moon, Mail, Phone } from "lucide-react";
import logoDark from "@/assets/onebit-logo.jpg";
import logoLight from "@/assets/onebit-logo-light.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-4 border-foreground bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={isDark ? logoDark : logoLight} alt="OneBit AI" className="h-16 w-auto pixelated" />
            
            <div className="hidden md:flex items-center gap-2">
              {["products", "roadmap", "investors", "contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="px-4 py-2 hover:bg-primary hover:text-background transition-colors uppercase text-xs">
                  {item}
                </button>
              ))}
              <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="ml-2">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            <div className="md:hidden flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-foreground bg-card">
            {["products", "roadmap", "investors", "contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left px-6 py-4 hover:bg-primary hover:text-background uppercase text-sm">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container text-center space-y-8">
          <img src={isDark ? logoDark : logoLight} alt="OneBit AI" className="h-48 w-auto mx-auto pixelated animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-display pixel-text uppercase">Offline Intelligence.<br/>Infinite Possibilities.</h1>
          <p className="text-base max-w-2xl mx-auto">Indigenous AI devices for data sovereignty and national security</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => scrollToSection("products")} size="lg" className="retro-button bg-primary text-background font-bold uppercase">Products ▶</Button>
            <Button onClick={() => scrollToSection("investors")} size="lg" variant="outline" className="retro-button uppercase">Invest</Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4 border-t-4 border-foreground">
        <div className="container">
          <h2 className="text-4xl font-display text-center mb-12 pixel-text uppercase">[ Products ]</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "AIR", icon: Cpu, desc: "USB plug & play AI", price: "₹60K-1L", features: ["Document AI", "Multilingual", "Offline"] },
              { name: "PRO", icon: Zap, desc: "PCB with compute", price: "₹1L-3L", features: ["10× faster", "Independent", "Rugged"], accent: true },
              { name: "MAX", icon: Shield, desc: "LAN server hub", price: "₹10L-20L", features: ["Vision AI", "Multi-user", "60fps"] }
            ].map((p, i) => (
              <Card key={i} className={`retro-box p-6 hover:translate-y-[-4px] transition-transform ${p.accent ? 'border-accent' : ''}`}>
                <CardHeader>
                  <p.icon className={`w-12 h-12 mb-4 ${p.accent ? 'text-accent' : 'text-primary'}`} strokeWidth={3} />
                  <CardTitle className="text-2xl font-display uppercase">{`OneBit ${p.name}`}</CardTitle>
                  <CardDescription className="text-xs">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-xs space-y-1">{p.features.map((f, j) => <li key={j}>▸ {f}</li>)}</ul>
                  <p className={`text-xl font-bold pt-4 border-t-2 ${p.accent ? 'text-accent' : 'text-primary'}`}>{p.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-4 border-t-4 border-foreground bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display text-center mb-12 pixel-text uppercase">[ Roadmap ]</h2>
          <div className="space-y-4">
            {[
              { phase: "I (0-6mo)", text: "Prototype & pilot in Defence/Govt" },
              { phase: "II (6-12mo)", text: "Compute setup & 1.58-bit LLM dev" },
              { phase: "III (Y2-3)", text: "Mass production & Research Labs" },
              { phase: "IV (Y3-4)", text: "DRDO/BEL chip design & exports" },
              { phase: "V (Y5+)", text: "Global expansion & AI leadership" }
            ].map((r, i) => (
              <Card key={i} className="retro-box p-4">
                <CardHeader><CardTitle className="text-sm font-display uppercase">▶ Phase {r.phase}</CardTitle></CardHeader>
                <CardContent><p className="text-xs">{r.text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="py-20 px-4 border-t-4 border-foreground">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-display text-center mb-12 pixel-text uppercase">[ Investment ]</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="retro-box p-6">
              <CardHeader><CardTitle className="uppercase">Current Ask</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><p className="text-xs text-muted-foreground">Capital</p><p className="text-3xl font-display text-primary">₹40L</p></div>
                <div><p className="text-xs text-muted-foreground">Equity</p><p className="text-2xl font-display">4%</p></div>
                <div><p className="text-xs text-muted-foreground">Valuation</p><p className="text-2xl font-display text-primary">₹10 CR</p></div>
              </CardContent>
            </Card>
            <Card className="retro-box p-6">
              <CardHeader><CardTitle className="uppercase">Market</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><p className="text-xs text-muted-foreground">TAM</p><p className="text-2xl font-display text-primary">₹6K-15K Cr</p></div>
                <div><p className="text-xs text-muted-foreground">SAM (3yr)</p><p className="text-2xl font-display">₹600-1.5K Cr</p></div>
                <div><p className="text-xs text-muted-foreground">Y3 Valuation</p><p className="text-2xl font-display text-primary">₹500-1.5K Cr</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 border-t-4 border-foreground bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display text-center mb-12 pixel-text uppercase">[ Contact ]</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="retro-box p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input required placeholder="Name" className="retro-box" />
                <Input type="email" required placeholder="Email" className="retro-box" />
                <Textarea required placeholder="Message" className="retro-box" />
                <Button type="submit" className="w-full retro-button bg-primary text-background font-bold">SEND</Button>
              </form>
            </Card>
            <Card className="retro-box p-6">
              <CardHeader><CardTitle className="uppercase">Founders</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">Anirudh Malik - CEO</p>
                  <a href="mailto:notanirudhmalik@gmail.com" className="flex items-center gap-2 text-xs hover:text-primary"><Mail size={16}/>notanirudhmalik@gmail.com</a>
                  <a href="tel:+919058176356" className="flex items-center gap-2 text-xs hover:text-primary"><Phone size={16}/>+91 9058176356</a>
                </div>
                <div>
                  <p className="font-bold">Harsh Tyagi - CTO</p>
                  <a href="mailto:harshty261@gmail.com" className="flex items-center gap-2 text-xs hover:text-primary"><Mail size={16}/>harshty261@gmail.com</a>
                  <a href="tel:+917017576212" className="flex items-center gap-2 text-xs hover:text-primary"><Phone size={16}/>+91 70175 76212</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t-4 border-foreground text-center text-xs">
        <p>© 2025 OneBit AI • New Delhi, India</p>
      </footer>
    </div>
  );
};

export default Index;