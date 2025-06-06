import HeroSectionRedesign from '../components/HeroSectionRedesign';
import WhyItMatters from '../components/WhyItMatters';
import Story from '../components/Story';
import Expedition from '../components/Expedition';
import CharitySupportSection from '../components/CharitySupportSection';

export default function Home() {
  return (
    <main>
      <HeroSectionRedesign />
      {/* Embedded Expedition Video */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative w-full rounded-xl shadow-lg overflow-hidden" style={{paddingTop: '56.25%'}}>
            <iframe
              src="https://player.vimeo.com/video/1026632300?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              title="HLRE – Project Promo Video"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>
      <CharitySupportSection />
      <WhyItMatters />
      <Story />
      <Expedition />
    </main>
  );
}
