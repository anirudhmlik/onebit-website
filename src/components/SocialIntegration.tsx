import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Users,
  Bell
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlitchEffect } from "./GlitchEffect";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/onebitai",
    color: "hover:text-blue-400",
    followers: "2.5K"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/onebit-ai",
    color: "hover:text-blue-600",
    followers: "1.2K"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/onebit-ai",
    color: "hover:text-gray-400",
    followers: "850"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@onebitai",
    color: "hover:text-red-500",
    followers: "3.1K"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/onebit.ai/",
    color: "hover:text-pink-500",
    followers: "28"
  }
];

const newsletterFeatures = [
  "Latest AI research updates",
  "Product launch announcements", 
  "Industry insights & analysis",
  "Exclusive early access",
  "Technical deep-dives"
];

export const SocialIntegration = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const [socialRef, isSocialVisible, getSocialAnimation] = useScrollAnimation({ 
    animationType: 'slide-up', 
    delay: 100 
  });

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    setError("");

    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubscribing(false);
    setIsSubscribed(true);
    setEmail("");

    // Reset success state after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <div ref={socialRef} className={`space-y-12 transition-all duration-1000 ${isSocialVisible ? getSocialAnimation() : 'opacity-0 translate-y-10'}`}>
      {/* Newsletter Signup */}
      <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm card-3d-tilt">
        <CardHeader className="text-center">
          <GlitchEffect intensity={0.02} duration={4000} type="random">
            <CardTitle className="text-3xl font-display uppercase flex items-center justify-center gap-3">
              <Bell className="w-8 h-8 text-primary" />
              Stay Updated
            </CardTitle>
          </GlitchEffect>
          <p className="text-muted-foreground mt-2">
            Get the latest updates on AI independence and our products
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {isSubscribed ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce-in">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display uppercase text-green-500 animate-neon-glow">
                Subscribed!
              </h3>
              <p className="text-muted-foreground">
                Thank you for subscribing. You'll receive our updates soon.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleNewsletterSubscribe} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your email address"
                      className={`retro-input ${error ? 'border-red-500' : ''}`}
                      disabled={isSubscribing}
                    />
                    {error && (
                      <p className="text-red-500 text-xs font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {error}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubscribing || !email.trim()}
                    className="retro-button bg-primary text-background font-bold uppercase px-6"
                  >
                    {isSubscribing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Subscribe</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-display uppercase text-sm text-primary">What you'll get:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {newsletterFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <div className="space-y-6">
        <GlitchEffect intensity={0.02} duration={4000} type="random">
          <h2 className="text-3xl font-display text-center pixel-text uppercase">
            [ Follow Our Journey ]
          </h2>
        </GlitchEffect>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <Card 
              key={index} 
              className="retro-box p-4 bg-card/60 backdrop-blur-sm card-3d-tilt group hover:translate-y-[-2px] transition-all duration-300"
            >
              <CardContent className="text-center space-y-3">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <social.icon className={`w-8 h-8 mx-auto ${social.color} transition-colors duration-300`} />
                </div>
                <div>
                  <h3 className="font-display uppercase text-sm">{social.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{social.followers} followers</p>
                </div>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Badge variant="secondary" className="text-xs hover:bg-primary hover:text-background transition-colors duration-300 cursor-pointer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Follow
                  </Badge>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <Card className="retro-box p-6 bg-card/60 backdrop-blur-sm card-3d-float">
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Users className="w-8 h-8 mx-auto text-primary animate-float-3d" />
              <div className="text-2xl font-bold font-display">5.2K</div>
              <div className="text-xs text-muted-foreground uppercase">Community</div>
            </div>
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-accent animate-float-3d" />
              <div className="text-2xl font-bold font-display">1.8K</div>
              <div className="text-xs text-muted-foreground uppercase">Subscribers</div>
            </div>
            <div className="space-y-2">
              <Github className="w-8 h-8 mx-auto text-secondary animate-float-3d" />
              <div className="text-2xl font-bold font-display">850</div>
              <div className="text-xs text-muted-foreground uppercase">Contributors</div>
            </div>
            <div className="space-y-2">
              <Twitter className="w-8 h-8 mx-auto text-blue-400 animate-float-3d" />
              <div className="text-2xl font-bold font-display">2.5K</div>
              <div className="text-xs text-muted-foreground uppercase">Followers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
