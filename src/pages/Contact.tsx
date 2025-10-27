import { useState } from "react";
import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: "Message Sent Successfully!",
      description: "Anirudh will get back to you as soon as possible.",
      duration: 5000,
    });

    // Send notification email to founder
    const mailtoLink = `mailto:ceo@onebit-ai.in?subject=New Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AOrganization: ${formData.organization}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="retro-box bg-background transition-all duration-300 focus:shadow-pixel"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="retro-box bg-background transition-all duration-300 focus:shadow-pixel"
                  />
                </div>
                <div>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization (Optional)"
                    className="retro-box bg-background transition-all duration-300 focus:shadow-pixel"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your interest in OneBit AI..."
                    className="retro-box bg-background min-h-[150px] transition-all duration-300 focus:shadow-pixel"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full retro-button bg-primary text-background font-bold uppercase transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm border-primary">
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
                      +91 9058176356
                    </a>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={20} className="text-primary" />
                      New Delhi, India
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="retro-box p-8 bg-accent/10 backdrop-blur-sm border-accent">
                <CardHeader>
                  <CardTitle className="text-xl font-display uppercase">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    We typically respond within 24-48 hours. For urgent inquiries, 
                    please call directly or mention "URGENT" in your message subject.
                  </p>
                </CardContent>
              </Card>
            </div>
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
