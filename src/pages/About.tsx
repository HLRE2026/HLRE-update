import VideoHero from '../components/VideoHero';
import ThousandPerKm from '../components/ThousandPerKm';
import OurVision from '../components/OurVision';
import CharitySupportSection from '../components/CharitySupportSection';
import SponsorshipTiers from '../components/SponsorshipTiers';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Full-screen Video Hero */}
      <VideoHero />
      
      {/* Full Documentary Video Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="documentary-video"
        className="py-12 md:py-16 px-6 bg-gray-50"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch the Full Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join Mark on his 300km journey raising awareness for mental health across the Canadian Rockies
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-xl shadow-2xl overflow-hidden"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              src="https://player.vimeo.com/video/1026632300?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              title="HLRE – Full Documentary"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* $1,000 per Kilometer Campaign */}
      <ThousandPerKm />

      {/* Sponsorship Tiers - Benefits for Different Levels */}
      <SponsorshipTiers />

      {/* Our Vision - What Your Support Will Achieve */}
      <OurVision />

      {/* Charity Partners - Mental Health Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="donate-section"
      >
        <CharitySupportSection />
      </motion.div>
    </main>
  );
}
