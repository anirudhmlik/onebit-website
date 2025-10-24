import { useEffect, useRef } from "react";

export const RetroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      shape: 'square' | 'circle' | 'triangle';
    }> = [];

    // Create retro gaming particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        shape: ['square', 'circle', 'triangle'][Math.floor(Math.random() * 3)] as 'square' | 'circle' | 'triangle'
      });
    }

    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY * 0.3;
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(189, 147, 249, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i - (scrollY % 50));
        ctx.lineTo(canvas.width, i - (scrollY % 50));
        ctx.stroke();
      }

      // Draw and move particles
      particles.forEach((particle) => {
        ctx.fillStyle = 'rgba(189, 147, 249, 0.6)';
        
        const adjustedY = particle.y - scrollY * 0.5;

        if (particle.shape === 'square') {
          ctx.fillRect(particle.x, adjustedY, particle.size, particle.size);
        } else if (particle.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(particle.x, adjustedY, particle.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(particle.x, adjustedY);
          ctx.lineTo(particle.x + particle.size, adjustedY + particle.size);
          ctx.lineTo(particle.x - particle.size, adjustedY + particle.size);
          ctx.closePath();
          ctx.fill();
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};
