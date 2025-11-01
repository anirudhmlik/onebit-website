import { useEffect, useRef, useState } from "react";

export const RetroCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number>();
  const lastClickTimeRef = useRef<number>(0);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Don't initialize cursor on mobile devices
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add bounce effect occasionally - reduced frequency
      if (Math.random() < 0.01) {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 200);
      }
      
      // Create trail effect - reduced frequency
      if (Math.random() < 0.02) {
        const wasJustClicked = Date.now() - lastClickTimeRef.current < 300; // Within 300ms of click
        createTrail(e.clientX, e.clientY, wasJustClicked);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      lastClickTimeRef.current = Date.now();
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, .retro-button, .retro-box');
      const isPixelText = target.matches('.pixel-text, .text-gradient');
      
      setIsHovering(isInteractive || isPixelText);
      
      // Add special effects for different elements
      if (target.matches('.retro-button')) {
        cursorRef.current?.classList.add('pulse');
        setTimeout(() => cursorRef.current?.classList.remove('pulse'), 500);
      }
      
      if (target.matches('.retro-box')) {
        cursorRef.current?.classList.add('spin');
        setTimeout(() => cursorRef.current?.classList.remove('spin'), 300);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Random glitch effect - reduced frequency
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.005) { // 0.5% chance every interval
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 50);
      }
    }, 2000);

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(updateCursor);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
      clearInterval(glitchInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  const createTrail = (x: number, y: number, isClicking = false) => {
    const trail = document.createElement('div');
    trail.className = isClicking ? 'cursor-trail cursor-trail-rotate' : 'cursor-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
    }, 500);
  };

  const cursorClasses = [
    'retro-cursor',
    isHovering && 'hover',
    isClicking && 'click',
    isGlitching && 'glitch',
    isBouncing && 'bounce'
  ].filter(Boolean).join(' ');

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={cursorClasses}
    />
  );
};
