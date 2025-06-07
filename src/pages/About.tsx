import Journey from '../components/About/Journey';
import Team from '../components/About/Team';
import Story from '../components/Story';
import FinancialAllocation from '../components/About/FinancialAllocation';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About HLRE</h1>
            <p className="text-xl leading-relaxed">
              The Hope Love & Resilience Expedition is more than a journey through the Canadian Rockies - 
              it's a testament to the human spirit's ability to overcome adversity and inspire others along the way.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mark's Personal Story */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Story />
      </motion.div>
      
      <Journey />
      
      {/* Financial Resources & Allocation */}
      <FinancialAllocation />
      
      <Team />
    </div>
  );
}