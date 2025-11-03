import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, Calendar, MapPin, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlitchEffect } from "./GlitchEffect";

const teamMembers = [
  {
    name: "Anirudh Malik",
    role: "Founder & CEO",
    bio: "AI researcher and entrepreneur with 8+ years in machine learning and edge computing. Former research scientist at leading tech companies.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/anirudhmalik",
      twitter: "https://twitter.com/anirudhmalik",
      github: "https://github.com/anirudhmalik",
      email: "ceo@onebit-ai.in"
    },
    skills: ["AI Research", "Edge Computing", "Leadership", "Strategy"]
  },
  
];

const timeline = [
  {
    year: "2024",
    title: "Company Founded",
    description: "OneBit AI established with vision of indigenous AI systems"
  },
  {
    year: "2024 Q2",
    title: "First Prototype",
    description: "Developed initial quantized model architecture"
  },
  {
    year: "2024 Q3",
    title: "Seed Funding",
    description: "Raised initial funding from angel investors"
  },
  {
    year: "2024 Q4",
    title: "Pilot Deployments",
    description: "Started pilot programs with government institutions"
  },
  {
    year: "2025",
    title: "Product Launch",
    description: "Launching OneBit AIR, PRO, and MAX products"
  }
];

export const TeamSection = () => {
  const [teamRef, isTeamVisible, getTeamAnimation] = useScrollAnimation({ 
    animationType: 'slide-up', 
    delay: 100 
  });
  const [timelineRef, isTimelineVisible, getTimelineAnimation] = useScrollAnimation({ 
    animationType: 'slide-left', 
    delay: 200 
  });

  return (
    <div className="space-y-16">
      {/* Team Members */}
      <div ref={teamRef} className={`transition-all duration-1000 ${isTeamVisible ? getTeamAnimation() : 'opacity-0 translate-y-10'}`}>
        <GlitchEffect intensity={0.02} duration={4000} type="random">
          <h2 className="text-4xl md:text-6xl font-display text-center mb-12 pixel-text uppercase">
            [ Our Team ]
          </h2>
        </GlitchEffect>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`retro-box p-6 bg-card/80 backdrop-blur-sm hover:translate-y-[-4px] transition-all duration-300 hover:shadow-retro ${
                index === 0 ? 'card-3d-tilt' : index === 1 ? 'card-3d-float' : 'card-3d-flip'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center animate-float-3d group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <GlitchEffect intensity={0.01} duration={5000} type="text">
                  <CardTitle className="text-xl font-display uppercase">{member.name}</CardTitle>
                </GlitchEffect>
                <p className="text-primary font-display uppercase text-sm animate-neon-glow">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <a href={member.social.linkedin} className="hover:text-primary transition-all duration-300 hover:scale-110 group">
                    <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
                  </a>
                  <a href={member.social.github} className="hover:text-accent transition-all duration-300 hover:scale-110 group">
                    <Github className="w-5 h-5 group-hover:animate-bounce" />
                  </a>
                  <a href={member.social.twitter} className="hover:text-secondary transition-all duration-300 hover:scale-110 group">
                    <Twitter className="w-5 h-5 group-hover:animate-bounce" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="hover:text-primary transition-all duration-300 hover:scale-110 group">
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div ref={timelineRef} className={`transition-all duration-1000 ${isTimelineVisible ? getTimelineAnimation() : 'opacity-0 translate-x-10'}`}>
        <GlitchEffect intensity={0.02} duration={4000} type="random">
          <h2 className="text-4xl md:text-6xl font-display text-center mb-12 pixel-text uppercase">
            [ Our Journey ]
          </h2>
        </GlitchEffect>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary animate-pulse"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm z-10 animate-float-3d group-hover:scale-110 transition-transform duration-300">
                  {item.year}
                </div>
                <div className="ml-8 flex-1">
                  <Card className={`retro-box p-6 bg-card/80 backdrop-blur-sm card-3d-tilt ${
                    index % 2 === 0 ? 'hover:translate-x-2' : 'hover:translate-x-[-2px]'
                  } transition-all duration-300`}>
                    <CardHeader>
                      <GlitchEffect intensity={0.01} duration={6000} type="text">
                        <CardTitle className="text-xl font-display uppercase">{item.title}</CardTitle>
                      </GlitchEffect>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
