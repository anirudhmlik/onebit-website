import { useState, useEffect } from "react";
import { HolographicLogo } from "./HolographicLogo";
import { GlitchEffect } from "./GlitchEffect";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing AI Systems...");
  const [dots, setDots] = useState("");

  const loadingMessages = [
    "Initializing AI Systems...",
    "Loading Neural Networks...",
    "Calibrating Sensors...",
    "Establishing Connections...",
    "Preparing Interface...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 150);

    const textTimer = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    const messageTimer = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
      clearInterval(messageTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-pulse" />
      
      {/* Floating Particles - reduced count */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Logo with reduced effects */}
        <div className="mb-4">
          <HolographicLogo className="text-6xl md:text-8xl" isAnimated={false} />
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 h-3 bg-muted/30 rounded-full overflow-hidden border-2 border-foreground/20">
          <div 
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div className="text-2xl font-display font-bold text-primary animate-neon-glow">
          {Math.round(progress)}%
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-lg font-display text-muted-foreground animate-neon-flicker">
            {loadingText}{dots}
          </p>
          
          {/* Loading Dots Animation */}
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-accent rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-2 gap-4 text-sm font-mono text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Core Systems</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span>Neural Networks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Data Processing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Interface Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
