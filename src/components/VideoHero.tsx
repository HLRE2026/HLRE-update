import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import fallbackImage from '../assets/HL&R Expedition.jpg';

const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Headlines that cycle through
  const headlines = [
    {
      top: "300km for Mental Health",
      bottom: "Supporting Glenrose Foundation & CMHA"
    },
    {
      top: "Breaking the Silence",
      bottom: "One Kilometer at a Time"
    },
    {
      top: "Your Support Changes Lives",
      bottom: "Join the Journey for Mental Wellness"
    }
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  // Handle play/pause functionality
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Video play failed:', error);
            // Don't set error state immediately - video might still load
            // Only set error if video fails to load entirely
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Attempt to play video on mobile after user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && !videoLoaded) {
        videoRef.current.play().catch((error) => {
          console.error('Video autoplay failed:', error);
          setVideoError(true);
        });
      }
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };

    // Add listeners for first user interaction
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [videoLoaded]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover blur-sm"
              style={{ display: 'block' }}
              onLoadedData={() => {
                setVideoLoaded(true);
                // Try to play after data is loaded
                if (videoRef.current) {
                  videoRef.current.play().then(() => {
                    setIsPlaying(true);
                    setIsPaused(false);
                  }).catch((error) => {
                    console.warn('Autoplay prevented by browser:', error);
                    setIsPaused(true);
                    // Don't set error - video is loaded, just can't autoplay
                  });
                }
              }}
              onError={(e) => {
                console.error('Video error:', e);
                setVideoError(true);
              }}
              onCanPlay={() => {
                // Video is ready to play
                if (videoRef.current && isPlaying) {
                  videoRef.current.play().then(() => {
                    setIsPaused(false);
                  }).catch(() => {
                    setIsPaused(true);
                    // Autoplay blocked - this is normal, user can click to play
                  });
                }
              }}
              onPlay={() => {
                setIsPlaying(true);
                setIsPaused(false);
              }}
              onPause={() => {
                setIsPaused(true);
                setIsPlaying(false);
              }}
            >
              <source 
                src="/hero-video.mp4" 
                type="video/mp4" 
              />
              {/* Fallback text for accessibility */}
              Your browser does not support the video tag.
            </video>
            {/* Show a dark background while video loads instead of Mark's image */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 to-emerald-800 flex items-center justify-center z-10">
                <div className="text-white text-center">
                  <div className="animate-pulse text-lg">Loading video...</div>
                </div>
              </div>
            )}
            {/* Show play button overlay if video is paused (autoplay blocked) */}
            {videoLoaded && isPaused && !videoError && (
              <div 
                className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 cursor-pointer"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play().then(() => {
                      setIsPlaying(true);
                      setIsPaused(false);
                    }).catch((error) => {
                      console.error('Video play failed:', error);
                    });
                  }
                }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play size={48} className="text-white" />
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback image if video fails to load */
          <img 
            src={fallbackImage} 
            alt="Rocky Mountains" 
            className="h-full w-full object-cover blur-sm"
          />
        )}
        
        {/* Video Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Animated Headlines */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="mb-4 text-5xl font-bold md:text-7xl lg:text-8xl">
              {headlines[currentHeadline].top}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light">
              {headlines[currentHeadline].bottom}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button 
            size="md"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => {
              const videoSection = document.getElementById('documentary-video');
              videoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Watch the Story
          </Button>
          <Button 
            size="md"
            variant="outline"
            className="bg-white border-white text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 font-bold shadow-lg shadow-emerald-500/30"
            onClick={() => {
              const donateSection = document.getElementById('donate-section');
              donateSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Support Community Health
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="mb-2 text-sm">Scroll to explore</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Controls - Only show if video loaded successfully */}
      {videoLoaded && !videoError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 right-8 z-20 flex gap-2"
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
                setIsMuted(!isMuted);
              }
            }}
            className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default VideoHero;
