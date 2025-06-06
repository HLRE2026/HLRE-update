import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ExpeditionVideoSectionProps {
  videoUrl: string;
  isYouTube?: boolean;
  title: string;
  caption: string;
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
}

export default function ExpeditionVideoSection({
  videoUrl,
  isYouTube = false,
  title,
  caption,
  autoPlay = false,
  muted = true,
  className,
}: ExpeditionVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  const youtubeId = isYouTube ? getYouTubeId(videoUrl) : null;
  const youtubeEmbedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&rel=0&modestbranding=1`
    : null;

  // Handle direct video play/pause
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => setHasError(true));
    }
    setIsPlaying(!isPlaying);
  };

  // Handle mute toggle
  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // YouTube loading state listener
  useEffect(() => {
    if (!isYouTube) return;
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'video-progress') setIsLoading(false);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isYouTube]);

  // Direct video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isYouTube) return;
    const onLoadStart = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);
    const onError = () => {
      setHasError(true);
      setIsLoading(false);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('loadstart', onLoadStart);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error', onError);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    return () => {
      video.removeEventListener('loadstart', onLoadStart);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('error', onError);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, [isYouTube]);

  return (
    <section className={cn('py-16 md:py-24 px-6', className)} aria-labelledby="video-section-title">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Video Container */}
          <div
            className="relative group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onFocus={() => setShowControls(true)}
            onBlur={() => setShowControls(false)}
          >
            <motion.div
              className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 focus-within:ring-2 focus-within:ring-emerald-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Loading */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
                      <p className="text-slate-600 font-medium">Loading video...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error */}
              <AnimatePresence>
                {hasError && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Unable to load video</h3>
                        <p className="text-slate-600">Please check your connection and try again.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Embed */}
              {isYouTube && youtubeEmbedUrl && (
                <iframe
                  ref={iframeRef}
                  src={youtubeEmbedUrl}
                  title={title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />
              )}

              {/* Direct video */}
              {!isYouTube && (
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={videoUrl}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop
                  playsInline
                  aria-label={title}
                />
              )}

              {/* Play overlay */}
              {!isYouTube && (
                <AnimatePresence>
                  {!isPlaying && !isLoading && !hasError && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                    >
                      <Button
                        size="lg"
                        onClick={handlePlayPause}
                        className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-2xl hover:scale-110 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Controls */}
              {!isYouTube && (
                <AnimatePresence>
                  {showControls && !isLoading && !hasError && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2"
                    >
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handlePlayPause}
                          className="text-white hover:bg-white/20 p-2"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleMuteToggle}
                          className="text-white hover:bg-white/20 p-2"
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <h2 id="video-section-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">{caption}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 