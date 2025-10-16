import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Menu, X, Cpu, Shield, Zap, Globe, Rocket, Users, TrendingUp, Download } from "lucide-react";
import logoImage from "@/assets/onebit-logo.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-4 border-foreground bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="OneBit AI" className="h-12 w-auto pixelated" />
            </div>
            
            <div className="hidden md:flex items-center gap-1 text-xs">
              {["about", "products", "tech", "roadmap", "investors", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 hover:bg-primary hover:text-background transition-colors border-2 border-transparent hover:border-foreground uppercase"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 border-2 border-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-foreground bg-card">
            {["about", "products", "tech", "roadmap", "investors", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 text-sm hover:bg-primary hover:text-background border-b-2 border-foreground uppercase"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-accent animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-4 border-secondary animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto text-center z-10 space-y-8">
          <div className="inline-block retro-box p-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display mb-6 pixel-text uppercase leading-relaxed">
              Offline Intelligence.<br />Infinite Possibilities.
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Portable, secure AI devices for individuals, developers, and institutions. India's indigenous edge AI revolution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("products")}
                size="lg"
                className="retro-button bg-primary text-background font-bold text-sm px-8 py-6 uppercase"
              >
                View Products ▶
              </Button>
              <Button
                onClick={() => scrollToSection("investors")}
                size="lg"
                variant="outline"
                className="retro-button bg-background text-foreground font-bold text-sm px-8 py-6 uppercase"
              >
                Investor Deck
              </Button>
            </div>
          </div>
          
          <div className="text-xs opacity-50 animate-blink">▼ SCROLL DOWN ▼</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t-4 border-foreground">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ About OneBit AI ]
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="retro-box p-6 animate-fade-in">
              <CardContent className="text-sm md:text-base leading-relaxed space-y-4 pt-6">
                <p>
                  OneBit AI is an indigenous artificial intelligence company pioneering ultra-efficient low-bit and edge-based AI systems in India. Our core mission is to democratise access to AI by developing locally manufactured, self-contained AI devices and low-bit large language models (LLMs) that operate without reliance on external cloud infrastructure.
                </p>
                <p>
                  Unlike conventional models that depend on massive GPU clusters and centralised data centres, OneBit AI focuses on quantised models and hardware-optimised local inference, ensuring privacy, data sovereignty, and national AI independence.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Privacy First", desc: "Complete offline operation. Your data never leaves your device." },
                { icon: Zap, title: "Ultra Efficient", desc: "1.58-bit quantisation for maximum performance on minimal hardware." },
                { icon: Globe, title: "Indigenous", desc: "100% Made in India. Data sovereignty and national AI independence." },
              ].map((feature, i) => (
                <Card key={i} className="retro-box p-4 hover:translate-y-[-4px] transition-transform">
                  <CardContent className="pt-6 text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={3} />
                    <h3 className="text-lg font-bold mb-2 uppercase">{feature.title}</h3>
                    <p className="text-xs leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 border-t-4 border-foreground bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ Product Lineup ]
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* OneBit AIR */}
            <Card className="retro-box p-6 hover:translate-y-[-4px] transition-transform">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-primary bg-background flex items-center justify-center mb-4">
                  <Cpu className="w-8 h-8 text-primary" strokeWidth={3} />
                </div>
                <CardTitle className="text-2xl font-display uppercase">OneBit AIR</CardTitle>
                <CardDescription className="text-xs">USB Plug-and-Play Model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="leading-relaxed">
                  Portable, low-power AI unit offering offline text, image, and code generation. Runs on user's computing power.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Document/PDF summarisation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Multilingual support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Text & code generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Zero cloud dependency</span>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-foreground">
                  <p className="text-accent font-bold text-lg">₹60,000 - ₹1,00,000</p>
                  <p className="text-xs opacity-70">+ Support: ₹15k-50k/year</p>
                </div>
                <Button className="w-full retro-button bg-primary text-background font-bold uppercase text-xs">
                  Learn More ▶
                </Button>
              </CardContent>
            </Card>

            {/* OneBit PRO */}
            <Card className="retro-box p-6 border-accent hover:translate-y-[-4px] transition-transform">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-accent bg-background flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-accent" strokeWidth={3} />
                </div>
                <CardTitle className="text-2xl font-display uppercase text-accent">OneBit PRO</CardTitle>
                <CardDescription className="text-xs">PCB-Based Integrated Compute</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="leading-relaxed">
                  Integrated onboard compute for higher performance. Independent of user's computer with dedicated processing power.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>10× faster inference than AIR</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>Secure & private by design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>All AIR features included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>Rugged, customisable models</span>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-foreground">
                  <p className="text-accent font-bold text-lg">₹1,00,000 - ₹3,00,000</p>
                  <p className="text-xs opacity-70">+ Support: ₹1L-2L/year</p>
                </div>
                <Button className="w-full retro-button bg-accent text-background font-bold uppercase text-xs border-accent">
                  Learn More ▶
                </Button>
              </CardContent>
            </Card>

            {/* OneBit MAX */}
            <Card className="retro-box p-6 border-secondary hover:translate-y-[-4px] transition-transform">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-secondary bg-background flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-secondary" strokeWidth={3} />
                </div>
                <CardTitle className="text-2xl font-display uppercase text-secondary">OneBit MAX</CardTitle>
                <CardDescription className="text-xs">LAN-Based Enterprise Server</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="leading-relaxed">
                  On-premise AI hub for multi-device use. Vision AI, satellite/surveillance image analysis, team server.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary">▸</span>
                    <span>Vision AI capabilities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary">▸</span>
                    <span>Satellite/surveillance analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary">▸</span>
                    <span>Up to 60fps generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary">▸</span>
                    <span>Multi-user collaboration</span>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-foreground">
                  <p className="text-secondary font-bold text-lg">₹10,00,000 - ₹20,00,000</p>
                  <p className="text-xs opacity-70">+ Support: ₹1L-2L/year</p>
                </div>
                <Button className="w-full retro-button bg-secondary text-background font-bold uppercase text-xs border-secondary">
                  Learn More ▶
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20 px-4 border-t-4 border-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ Technology Stack ]
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-primary" />
                  1.58-Bit Quantisation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed space-y-3">
                <p>
                  OneBit AI is advancing model quantisation research, pushing precision formats from FP16 to ultra-low-bit architectures (as low as 1.58-bit) without significant performance loss.
                </p>
                <p>
                  This enables energy-efficient, edge-ready AI that can operate on affordable hardware, making AI accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <Shield className="w-6 h-6 text-accent" />
                  Indigenous R&D
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed space-y-3">
                <p>
                  Collaboration with Indian hardware labs and semiconductor research centres to design AI accelerators and chips that are indigenously manufacturable and scalable.
                </p>
                <p>
                  Building India's first self-reliant AI hardware and software stack, reducing dependency on foreign infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <Zap className="w-6 h-6 text-secondary" />
                  Edge Computing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed space-y-3">
                <p>
                  Privacy-first AI with complete offline operation. All processing happens locally on your device, ensuring data sovereignty and security.
                </p>
                <p>
                  No cloud dependency means no data leaks, no surveillance, and complete control over your AI operations.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Multimodal AI
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed space-y-3">
                <p>
                  Developing specialized multimodal agents — Vision AI, Speech AI, and Code AI — enabling perception, automation, and intelligence at the edge.
                </p>
                <p>
                  Future roadmap includes multilingual speech processing, coding agents, and advanced vision systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 border-t-4 border-foreground bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ Execution Roadmap ]
          </h2>

          <div className="space-y-6">
            {[
              {
                phase: "Phase I",
                timeline: "0-6 Months",
                title: "Prototype & Pilot",
                color: "primary",
                items: [
                  "Develop OneBit AIR (USB) and PRO (PCB) prototypes",
                  "Execute pilots in Defence, Government offices",
                  "Build partnerships with NIC, ISRO, Defence Labs",
                  "Establish consumer base in strategic institutions",
                ]
              },
              {
                phase: "Phase II",
                timeline: "6-12 Months",
                title: "Infrastructure & Model Development",
                color: "accent",
                items: [
                  "Set up indigenous GPU/CPU compute clusters",
                  "Initiate OneBit Core (1.58-bit LLM) development",
                  "Collaborate with IIT labs for hardware integration",
                  "Begin R&D on Vision AI, Speech AI, Code AI",
                ]
              },
              {
                phase: "Phase III",
                timeline: "Year 2-3",
                title: "Scale & Integration",
                color: "secondary",
                items: [
                  "Mass-produce OneBit Pro and Max",
                  "Establish OneBit AI Research Labs",
                  "Pilot integrations in defence systems, PSU banks",
                  "Launch OneBit Developer SDK",
                ]
              },
              {
                phase: "Phase IV",
                timeline: "Year 3-4",
                title: "Advanced Systems",
                color: "primary",
                items: [
                  "Integrate 1.58-bit LLMs into consumer hardware",
                  "Partner with STPI, BEL, DRDO for chip co-design",
                  "Develop multilingual Vision & Speech AI",
                  "Begin international pilot exports",
                ]
              },
              {
                phase: "Phase V",
                timeline: "Year 5+",
                title: "Global Expansion",
                color: "accent",
                items: [
                  "Full-scale export to allied markets",
                  "Strategic partnerships with national data centres",
                  "Launch open research initiatives",
                  "Establish India as sovereign AI leader",
                ]
              },
            ].map((phase, i) => (
              <Card key={i} className={`retro-box p-6 border-${phase.color}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`md:w-48 shrink-0 border-4 border-${phase.color} bg-background p-4 text-center`}>
                    <div className={`text-${phase.color} font-bold text-xl mb-2`}>{phase.phase}</div>
                    <div className="text-xs opacity-70">{phase.timeline}</div>
                    <div className="mt-2 text-sm font-bold uppercase">{phase.title}</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <span className={`text-${phase.color} shrink-0`}>▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 px-4 border-t-4 border-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ Investment Opportunity ]
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div className="border-2 border-foreground p-3">
                    <div className="text-xs opacity-70 mb-1">Total Addressable Market (TAM)</div>
                    <div className="font-bold text-primary text-lg">₹6,000-15,000 Cr</div>
                    <div className="text-xs opacity-70">~US$720M - US$1.8B</div>
                  </div>
                  <div className="border-2 border-foreground p-3">
                    <div className="text-xs opacity-70 mb-1">Serviceable Available Market (SAM)</div>
                    <div className="font-bold text-accent text-lg">₹600-1,500 Cr</div>
                    <div className="text-xs opacity-70">~US$70M - US$180M (3 years)</div>
                  </div>
                </div>
                <p className="leading-relaxed pt-2">
                  Target sectors: Defence, Government, PSU Banks, Healthcare, Education, and Export markets.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-6 border-accent">
              <CardHeader>
                <CardTitle className="text-xl uppercase flex items-center gap-2">
                  <Users className="w-6 h-6 text-accent" />
                  Investment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div className="border-2 border-accent p-3 bg-accent/10">
                    <div className="text-xs opacity-70 mb-1">Initial Ask (Pre-Seed)</div>
                    <div className="font-bold text-accent text-2xl">₹40 Lakhs</div>
                    <div className="text-xs opacity-70 mt-1">for 4% equity</div>
                  </div>
                  <div className="border-2 border-foreground p-3">
                    <div className="text-xs opacity-70 mb-1">Pre-Money Valuation</div>
                    <div className="font-bold text-lg">~₹10 Crore</div>
                  </div>
                </div>
                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>Infrastructure & prototyping</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>R&D team expansion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">▸</span>
                    <span>Pilot deployment setup</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="retro-box p-6">
            <CardHeader>
              <CardTitle className="text-xl uppercase text-center">Projected Growth</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-center space-y-4">
              <p className="leading-relaxed">
                Cumulative valuation potential (P/E 15-20x) by Year 3:
              </p>
              <div className="text-4xl font-bold text-gradient">₹500 - ₹15,000 Crore</div>
              <Button className="retro-button bg-primary text-background font-bold uppercase text-xs px-8 py-4">
                <Download className="w-4 h-4 mr-2" />
                Download Investor Deck
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t-4 border-foreground bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 pixel-text uppercase">
            [ Get In Touch ]
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-lg uppercase">CEO & Founder</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold text-primary">Anirudh Malik</p>
                <p>📧 notanirudhmalik@gmail.com</p>
                <p>📱 +91 9058176356</p>
                <p>📍 New Delhi, India</p>
              </CardContent>
            </Card>

            <Card className="retro-box p-6">
              <CardHeader>
                <CardTitle className="text-lg uppercase">CTO & Co-Founder</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold text-accent">Harsh Tyagi</p>
                <p>📧 harshty261@gmail.com</p>
                <p>📱 +91 70175 76212</p>
                <p>📍 New Delhi, India</p>
              </CardContent>
            </Card>
          </div>

          <Card className="retro-box p-6">
            <CardHeader>
              <CardTitle className="text-lg uppercase text-center">Send Us A Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase mb-2 block">Name</label>
                    <Input 
                      required 
                      className="border-2 border-foreground focus:border-primary text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      required 
                      className="border-2 border-foreground focus:border-primary text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase mb-2 block">Organization</label>
                  <Input 
                    className="border-2 border-foreground focus:border-primary text-sm"
                    placeholder="Your Organization"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase mb-2 block">Message</label>
                  <Textarea 
                    required 
                    rows={6}
                    className="border-2 border-foreground focus:border-primary text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full retro-button bg-primary text-background font-bold uppercase text-sm py-6"
                >
                  Send Message ▶
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground bg-background py-8 px-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 text-xs">
            {["About", "Products", "Tech", "Roadmap", "Investors", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-primary uppercase"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="text-xs opacity-70">
            © 2025 OneBit AI. All rights reserved. Made in India with ❤️
          </div>
          <div className="text-xs opacity-50">
            Building India's Indigenous AI Infrastructure
          </div>
        </div>
      </footer>

      <style>{`
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
};

export default Index;
