import { useState, useEffect } from "react";

interface GlitchEffectProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
  type?: 'text' | 'matrix' | 'scanline' | 'random';
}

export const GlitchEffect = ({ 
  children, 
  intensity = 0.1, 
  duration = 2000,
  className = "",
  type = 'random'
}: GlitchEffectProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchStyle, setGlitchStyle] = useState({});
  const [glitchClass, setGlitchClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < intensity) {
        setIsGlitching(true);
        
        // Choose glitch type
        const glitchTypes = ['text', 'matrix', 'scanline'];
        const selectedType = type === 'random' ? glitchTypes[Math.floor(Math.random() * glitchTypes.length)] : type;
        
        // Set appropriate CSS class
        switch (selectedType) {
          case 'text':
            setGlitchClass('animate-text-glitch');
            break;
          case 'matrix':
            setGlitchClass('animate-matrix-glitch');
            break;
          case 'scanline':
            setGlitchClass('animate-scanline-glitch');
            break;
          default:
            setGlitchClass('animate-text-glitch');
        }
        
        // Random glitch transformations for custom effects
        const randomTransform = {
          transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px) skew(${Math.random() * 2 - 1}deg)`,
          filter: `hue-rotate(${Math.random() * 360}deg) saturate(${1 + Math.random() * 2})`,
          textShadow: `
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #ff0000,
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #00ff00,
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #0000ff
          `,
          clipPath: `inset(${Math.random() * 20}% ${Math.random() * 20}% ${Math.random() * 20}% ${Math.random() * 20}%)`
        };
        
        setGlitchStyle(randomTransform);
        
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchStyle({});
          setGlitchClass('');
        }, Math.random() * 200 + 50);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [intensity, duration, type]);

  return (
    <div 
      className={`transition-all duration-75 ${className} ${isGlitching ? glitchClass : ''}`}
      style={isGlitching ? glitchStyle : {}}
    >
      {children}
    </div>
  );
};
