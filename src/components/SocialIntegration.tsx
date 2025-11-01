import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Twitter, 
  Linkedin, 
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlitchEffect } from "./GlitchEffect";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/onebit-ai/",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/onebit_ai",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/onebit.ai/",
    color: "hover:text-pink-500",
  }
];

export const SocialIntegration = () => {
  const [socialRef, isSocialVisible, getSocialAnimation] = useScrollAnimation({ 
    animationType: 'slide-up', 
    delay: 100 
  });

  return (
    <div ref={socialRef} className={`space-y-12 transition-all duration-1000 ${isSocialVisible ? getSocialAnimation() : 'opacity-0 translate-y-10'}`}>
      {/* Social Media Links */}
      <div className="space-y-6">
        <GlitchEffect intensity={0.02} duration={4000} type="random">
          <h2 className="text-3xl font-display text-center pixel-text uppercase">
            [ Follow Our Journey ]
          </h2>
        </GlitchEffect>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
    </div>
  );
};
