import { useEffect, useRef, useState } from "react";

type AnimationType = 
  | 'fade-in' 
  | 'slide-up' 
  | 'slide-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'zoom-in' 
  | 'zoom-out' 
  | 'rotate-in' 
  | 'bounce-in' 
  | 'flip-in' 
  | 'elastic-in'
  | 'scale-in';

interface UseScrollAnimationOptions {
  threshold?: number;
  animationType?: AnimationType;
  delay?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    animationType = 'fade-in', 
    delay = 0, 
    once = true 
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    const animationMap: Record<AnimationType, string> = {
      'fade-in': 'animate-fade-in',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
      'slide-left': 'animate-slide-left',
      'slide-right': 'animate-slide-right',
      'zoom-in': 'animate-zoom-in',
      'zoom-out': 'animate-zoom-out',
      'rotate-in': 'animate-rotate-in',
      'bounce-in': 'animate-bounce-in',
      'flip-in': 'animate-flip-in',
      'elastic-in': 'animate-elastic-in',
      'scale-in': 'animate-scale-in'
    };

    return animationMap[animationType] || 'animate-fade-in';
  };

  return [ref, isVisible, getAnimationClass] as const;
};
