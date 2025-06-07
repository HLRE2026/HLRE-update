import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import fallbackImage from '../../assets/HL&R Expedition.jpg';

const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Headlines that cycle through
  const headlines = [
    {
      top: "300km for Mental Health",
      bottom: "Supporting CMHA & Glenrose Foundation"
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover blur-sm"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source 
            src="/hero-video.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <img 
            src={fallbackImage} 
            alt="Rocky Mountains" 
            className="h-full w-full object-cover"
          />
        </video>
        
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
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            onClick={() => {
              const videoSection = document.getElementById('documentary-video');
              videoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Watch the Story
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            onClick={() => {
              const donateSection = document.getElementById('donate-section');
              donateSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Support Mental Health
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

      {/* Video Controls */}
      {videoLoaded && (
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
            onClick={() => setIsMuted(!isMuted)}
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