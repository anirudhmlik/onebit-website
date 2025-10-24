import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface HolographicLogoProps {
  isAnimated?: boolean;
  className?: string;
}

export const HolographicLogo = ({ isAnimated = true, className = "" }: HolographicLogoProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  
  const text = "ONEBIT AI";
  const delay = 150;

  useEffect(() => {
    if (!isAnimated || !isMainPage) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);

    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, delay);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [isAnimated, isMainPage]);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchIntensity(1);
        setTimeout(() => setGlitchIntensity(0), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`holographic-logo ${className}`}>
      {/* Holographic background layers */}
      <div className="holographic-bg holographic-bg-1"></div>
      <div className="holographic-bg holographic-bg-2"></div>
      <div className="holographic-bg holographic-bg-3"></div>
      
      {/* Main text */}
      <div 
        className={`holographic-text ${glitchIntensity > 0 ? 'glitch-active' : ''}`}
        style={{ '--glitch-intensity': glitchIntensity } as React.CSSProperties}
      >
        {displayedText.split("").map((char, index) => (
          <span
            key={index}
            className={`holographic-char ${
              isAnimated && isMainPage && index === displayedText.length - 1 && !isComplete
                ? "animate-character-jump"
                : isComplete && isMainPage
                ? "animate-character-settle"
                : ""
            }`}
            style={{
              animationDelay: isAnimated && isMainPage ? `${index * 0.1}s` : "0s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      
      {/* Scan lines */}
      <div className="holographic-scanlines"></div>
      
      {/* Holographic particles */}
      <div className="holographic-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="holographic-particle"
            style={{
              '--delay': `${i * 0.1}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};
