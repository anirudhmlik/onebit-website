import { useState, useEffect, useRef } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay prevented:", err);
      });
    }

    // Hide loading screen when video ends
    const handleVideoEnd = () => {
      setIsLoading(false);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      
      // Also set a timeout as fallback (in case video doesn't fire 'ended' event)
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // 5 second fallback

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/loading-screen.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        onEnded={() => setIsLoading(false)}
      />
    </div>
  );
};
