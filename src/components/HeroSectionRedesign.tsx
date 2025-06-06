import { Play, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroSectionRedesignProps {
  onWatchStory?: () => void;
  onSupportExpedition?: () => void;
}

export default function HeroSectionRedesign({ onWatchStory, onSupportExpedition }: HeroSectionRedesignProps) {
  return (
    <section className="pt-24 md:pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100/20 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-slate-100/30 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-emerald-200/15 rounded-full blur-lg" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 text-center max-w-4xl">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Header Content */}
          <header className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight">
              A 300km journey of{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                hope and resilience
              </span>{' '}
              after stroke
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              We're documenting Mark's ride across the Rockies to show that recovery is possible, and to support others facing life's toughest challenges.
            </p>
          </header>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" onClick={onWatchStory} aria-label="Watch Mark's inspiring recovery story">
              <Play className="mr-3 h-6 w-6" />
              Watch the Story
            </Button>

            <Button variant="outline" size="lg" onClick={onSupportExpedition} aria-label="Support the Hope, Love, Resilience Expedition">
              <Heart className="mr-3 h-6 w-6" />
              Support the Expedition
            </Button>
          </motion.div>

          {/* Supporting Information */}
          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">
              Join us as we follow Mark's incredible journey through the Canadian Rockies, proving that with hope, love, and resilience, recovery knows no limits.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 