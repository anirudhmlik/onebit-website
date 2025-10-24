import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AnimatedLogoProps {
  isAnimated?: boolean;
  className?: string;
}

export const AnimatedLogo = ({ isAnimated = true, className = "" }: AnimatedLogoProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  
  const text = "ONEBIT AI";
  const delay = 150; // Delay between each character

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
    }, 500); // Initial delay before animation starts

    return () => clearTimeout(timer);
  }, [isAnimated, isMainPage]);

  return (
    <div className={`font-display font-black text-4xl md:text-6xl lg:text-7xl pixel-text uppercase ${className}`}>
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block ${
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
  );
};
