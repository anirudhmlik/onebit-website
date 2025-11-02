import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, AlertTriangle, Shield, Zap } from "lucide-react";

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
            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300">
              <CardHeader>
                <Target className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  <strong>OneBit AI</strong> (Delhi NCR | Established 2025) is an indigenous artificial intelligence 
                  company pioneering ultra-efficient low-bit and edge-based AI systems in India.
                </p>
                <p>
                  OneBit AI aims to establish India as a leader in sovereign, sustainable, and hardware-efficient 
                  AI ecosystems—empowering enterprises, defence sectors, and research institutions with secure, 
                  low-cost intelligence solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm hover:bg-accent/20 transition-all duration-300">
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

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300">
              <CardHeader>
                <Rocket className="w-12 h-12 mb-4 text-secondary" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Our AIM</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  OneBit aims to develop the tech of the future right here in India and organically.
                </p>
                <p>
                  We aim to develop the lowest bit quantised LLM models that can run on the most efficient 
                  hardware while lowering energy consumption by 90% today.
                </p>
                <p>
                  Our goal for the next 6 months to 1 year is to provide a secure AI toolbox to our Government 
                  and on the side develop India's own Cloud-based GPT for consumers across India.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-destructive/50 hover:bg-destructive/20 transition-all duration-300">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 mb-4 text-destructive" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">The Challenge</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <p>
                  Increasing reliance on foreign AI tools creates data-security vulnerabilities for critical 
                  government and defence projects.
                </p>
                <p>
                  Many AI systems require cloud connectivity, exposing sensitive data to potential leaks or breaches.
                </p>
                <p>
                  There is a growing need within MoD, DRDO and allied institutions for offline, secure, and 
                  India-made AI that can operate in isolated networks.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-secondary hover:bg-secondary/20 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-secondary" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Advantages for DRDO and MoD</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <ul className="space-y-2 list-disc list-inside">
                  <li>Enables secure AI research, simulation, and analytics in classified environments</li>
                  <li>Reduces foreign technology dependence, supporting Atmanirbhar Bharat</li>
                  <li>Rapid on-site AI inference suitable for defence R&D and tactical applications</li>
                  <li>Minimises cyber-attack surface by removing third-party cloud access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-accent hover:bg-accent/20 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 mb-4 text-accent" strokeWidth={3} />
                <CardTitle className="text-2xl font-display uppercase">Potential Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="text-base space-y-4">
                <ul className="space-y-2 list-disc list-inside">
                  <li>Secure Data Intelligence for Strategic Defence Applications</li>
                  <li>On-Premise AI Model Development and Training within DRDO Facilities</li>
                  <li>AI-Enhanced Testing, Simulation, and Forecasting Tools</li>
                  <li>Collaboration across secure networks (OneBit MAX) for fleet-wide inference & real-time maritime analytics</li>
                  <li>Search & Rescue (mountains/forests): detect missing hikers using thermal + visual cues</li>
                  <li>Automated alerts to command centres with GPS coordinates and time-stamped data</li>
                  <li>Offline text/image/code generation for mission planning in remote regions (no cloud)</li>
                  <li>On-board, offline inference of people/vehicle detection, reducing bandwidth to ground station</li>
                </ul>
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
