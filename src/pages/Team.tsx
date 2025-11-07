import { RetroBackground } from "@/components/RetroBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Harsh Tyagi",
      designation: "Technical Lead",
      email: "harshty261@gmail.com",
      phone: "+91 7017576212",
      linkedin: "https://www.linkedin.com/in/harsht261",
      color: "primary"
    },
     {
      name: "M Sparsh Mehra",
      designation: "Research Scientist",
      email: "phs247153@iitd.ac.in",
      phone: "+91 9899938759",
      linkedin: "https://www.linkedin.com/in/m-sparsh-mehra-b100b0225/",
      color: "secondary"
    },
    {
      name: "Vishnu Prasad",
      designation: "Research Scientist",
      email: "vishnuprasad@gmail.com",
      phone: "+91 9746997684",
      linkedin: "https://www.linkedin.com/in/",
      color: "primary"
    },
    {
      name: "Khushi Singh",
      designation: "Management",
      email: "khushiravisingh2920@gmail.com",
      phone: "+91 8083480804",
      linkedin: "https://www.linkedin.com/in/khushi-singh-574a69204/",
      color: "primary"
    },
    {
      name: "Aman",
      designation: "Management",
      email: "amanfx0004@gmail.com",
      phone: "+91 6396705027",
      linkedin: "https://www.linkedin.com/in/amanshisodiyaatcharts/",
      color: "accent"
    },
    {
      name: "Dev Yadav",
      designation: "Management",
      email: "dev94110v@gmail.com",
      phone: "+91 7017442374",
      linkedin: "https://www.linkedin.com/in/dev-yadav-930335230//",
      color: "primary"
    },
    {
      name: "Khushboo Panghal",
      designation: "Management",
      email: "panghalkhushboo2002@gmail.com",
      phone: "+91 9306863059",
      inkedin: "https://www.linkedin.com/in/khushboo-panghal-46720b25b/",
      color: "accent"
    },
    {
      name: "Apoorv Pundir",
      designation: "Management",
      email: "apoorvpundir21@gmail.com",
      phone: "+91 7906837751",
      linkedin: "https://www.linkedin.com/in/apoorv790",
      color: "secondary"
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          border: "border-primary",
          hover: "hover:bg-primary/20",
          icon: "text-primary",
          linkHover: "hover:text-primary"
        };
      case "accent":
        return {
          border: "border-accent",
          hover: "hover:bg-accent/20",
          icon: "text-accent",
          linkHover: "hover:text-accent"
        };
      case "secondary":
        return {
          border: "border-secondary",
          hover: "hover:bg-secondary/20",
          icon: "text-secondary",
          linkHover: "hover:text-secondary"
        };
      default:
        return {
          border: "border-primary",
          hover: "hover:bg-primary/20",
          icon: "text-primary",
          linkHover: "hover:text-primary"
        };
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <RetroBackground />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-display text-center mb-6 pixel-text uppercase animate-fade-in">
            [ Our Team ]
          </h1>
          <p className="text-center text-lg font-display mb-12">
            Meet the talented individuals powering OneBit AI's vision.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => {
              const colors = getColorClasses(member.color);
              return (
                <Card 
                  key={index} 
                  className={`retro-box px-3 py-4 md:px-8 md:py-8 bg-card/80 backdrop-blur-sm ${colors.border} ${colors.hover} transition-all duration-300`}
                >
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-xl md:text-2xl font-bold mb-1">{member.name}</p>
                      <p className="text-lg md:text-xl font-display uppercase text-muted-foreground">
                        {member.designation}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={`mailto:${member.email}`}
                        className={`flex items-center gap-2 text-[7px] md:text-sm ${colors.linkHover} transition-all duration-300 hover:translate-x-1 whitespace-nowrap`}
                      >
                        <Mail size={20} className={`${colors.icon} flex-shrink-0`} />
                        <span className="overflow-hidden">{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className={`flex items-center gap-3 text-sm ${colors.linkHover} transition-all duration-300 hover:translate-x-1`}
                      >
                        <Phone size={20} className={colors.icon} />
                        {member.phone}
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 text-sm ${colors.linkHover} transition-all duration-300 hover:translate-x-1`}
                      >
                        <Linkedin size={20} className={colors.icon} />
                        LinkedIn Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t-4 border-foreground text-center text-xs relative z-10">
        <p>© 2025 OneBit AI • New Delhi, India</p>
      </footer>
    </div>
  );
};

export default Team;

