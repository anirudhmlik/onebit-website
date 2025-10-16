import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  TrendingUp, 
  Users, 
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Download,
  ArrowRight,
  Check,
  Server,
  Usb,
  Network
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-mono font-bold text-gradient">
              OneBit AI
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("products")} className="text-sm hover:text-primary transition-colors">Products</button>
              <button onClick={() => scrollToSection("technology")} className="text-sm hover:text-primary transition-colors">Technology</button>
              <button onClick={() => scrollToSection("roadmap")} className="text-sm hover:text-primary transition-colors">Roadmap</button>
              <button onClick={() => scrollToSection("investors")} className="text-sm hover:text-primary transition-colors">Investors</button>
              <Button onClick={() => scrollToSection("contact")} size="sm" className="bg-primary hover:bg-primary/90">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse opacity-40" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(199, 89%, 48%, 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient glow-text">
              Offline Intelligence.
              <br />
              Infinite Possibilities.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Portable, secure AI devices for individuals, developers, and institutions.
              <br />
              <span className="text-primary">Run powerful AI models locally</span> — without cloud dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("products")}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-primary/50 transition-all"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("investors")}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Investor Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
              About OneBit AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              OneBit AI builds <span className="text-primary font-semibold">indigenous, hardware-optimized AI systems</span> capable 
              of running large models locally — ensuring security, privacy, and sovereignty in AI inference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is to enable <span className="text-secondary font-semibold">defense, healthcare, and enterprise</span> users 
              with offline AI compute that never compromises on performance or data security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Privacy First", desc: "Your data never leaves your device. Zero cloud dependency." },
              { icon: Zap, title: "Edge Computing", desc: "Ultra-low latency with on-device inference at the edge." },
              { icon: Lock, title: "Sovereign AI", desc: "Indigenous hardware for national security applications." }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all card-glow hover:scale-105">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-display">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three powerful solutions for offline AI, from portable USB to enterprise LAN hubs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "OneBit AIR",
                subtitle: "USB",
                icon: Usb,
                desc: "Plug-and-play offline AI on user's machine",
                features: [
                  "Document/PDF summarisation",
                  "Multilingual support",
                  "Text & code generation",
                  "Zero cloud dependency"
                ],
                price: "₹60,000 – ₹1,00,000"
              },
              {
                name: "OneBit PRO",
                subtitle: "PCB",
                icon: Cpu,
                desc: "Integrated onboard compute for higher performance",
                features: [
                  "10× faster inference",
                  "Secure & private compute",
                  "Plug-and-play setup",
                  "Includes all AIR features"
                ],
                price: "₹1,00,000 – ₹3,00,000",
                featured: true
              },
              {
                name: "OneBit MAX",
                subtitle: "LAN",
                icon: Network,
                desc: "On-premise AI hub for multi-device use",
                features: [
                  "Vision AI capabilities",
                  "Satellite/surveillance analysis",
                  "Up to 60fps generation",
                  "Team server deployment"
                ],
                price: "₹10,00,000 – ₹20,00,000"
              }
            ].map((product, idx) => (
              <Card 
                key={idx} 
                className={`bg-card border-border hover:border-primary transition-all group hover:scale-105 ${
                  product.featured ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <product.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                    {product.featured && (
                      <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-display">
                    {product.name}
                    <span className="block text-sm text-muted-foreground mt-1 font-mono">({product.subtitle})</span>
                  </CardTitle>
                  <CardDescription className="text-base mt-2">{product.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border pt-4">
                    <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
                      Request Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
                Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge quantization research meets indigenous hardware development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <Server className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-display">Quantized Model Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our proprietary quantization technology compresses models from FP16 to <span className="text-primary font-semibold">1.58-bit format</span>, 
                    enabling powerful AI inference on resource-constrained devices.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      90% reduction in model size
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Minimal accuracy loss
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      10× faster inference
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-display">Indigenous Hardware R&D</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Strategic partnerships with Indian semiconductor manufacturers to create <span className="text-primary font-semibold">sovereign AI hardware</span> 
                    for national security and enterprise applications.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Made in India initiative
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Defense-grade security
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Supply chain independence
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
              Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              From prototype to nationwide deployment
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: "Phase I",
                timeline: "0–6 months",
                title: "Pilot & Validation",
                items: [
                  "USB prototype pilots in ministries",
                  "Hospital deployment trials",
                  "Feedback integration & refinement"
                ]
              },
              {
                phase: "Phase II",
                timeline: "6–12 months",
                title: "Strategic Deployment",
                items: [
                  "DRDO integration partnerships",
                  "ISRO satellite analysis systems",
                  "Defense command unit rollout"
                ]
              },
              {
                phase: "Phase III",
                timeline: "Year 2",
                title: "Scale Production",
                items: [
                  "Armed forces wide deployment",
                  "Public sector bank integration",
                  "PSU hospital networks"
                ]
              },
              {
                phase: "Phase IV",
                timeline: "Years 3–4",
                title: "Advanced Features",
                items: [
                  "Vision AI capabilities",
                  "Multilingual speech processing",
                  "Autonomous coding agents"
                ]
              },
              {
                phase: "Phase V",
                timeline: "Year 5+",
                title: "Global Expansion",
                items: [
                  "Export to friendly nations",
                  "Strategic AI partnerships",
                  "International defense contracts"
                ]
              }
            ].map((phase, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-mono font-bold text-sm group-hover:bg-primary/30 transition-colors">
                      {phase.phase}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-display mb-1">{phase.title}</CardTitle>
                      <CardDescription className="text-sm">{phase.timeline}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
              For Investors
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in building the future of sovereign AI
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-display">Investment Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Equity Offering</p>
                  <p className="text-3xl font-bold text-primary">4% for ₹40L</p>
                  <p className="text-sm text-muted-foreground mt-1">Pre-seed valuation: ₹10 Crore</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold mb-2">Capital Deployment:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Infrastructure setup & lab equipment
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Prototype development & testing
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      R&D team expansion
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Strategic partnerships & pilots
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-display">Market Potential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Target Markets:</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Defense & Government</span>
                      <span className="text-primary font-semibold">₹500Cr+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Healthcare & PSUs</span>
                      <span className="text-primary font-semibold">₹300Cr+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Banking & Finance</span>
                      <span className="text-primary font-semibold">₹200Cr+</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Investor Deck
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how OneBit AI can power your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="font-semibold text-lg mb-2">Anirudh Malik</p>
                    <p className="text-sm text-muted-foreground">Founder, OneBit AI</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                      <a href="mailto:anirudhforphysics@gmail.com">anirudhforphysics@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Globe className="h-5 w-5" />
                      <span>New Delhi, India</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-4">Connect with us:</p>
                    <div className="flex gap-4">
                      <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </a>
                      <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                        <Github className="h-6 w-6 text-primary" />
                      </a>
                      <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-mono font-bold text-gradient mb-2">OneBit AI</p>
              <p className="text-sm text-muted-foreground">
                © 2025 OneBit AI. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("products")} className="hover:text-primary transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection("investors")} className="hover:text-primary transition-colors">
                Investors
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
