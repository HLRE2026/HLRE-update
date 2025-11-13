import Journey from '../components/About/Journey';
import Team from '../components/About/Team';
import Story from '../components/Story';
import FinancialAllocation from '../components/About/FinancialAllocation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      
      {/* Become a Business Sponsor CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-emerald-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us as a business sponsor and help us reach our $300,000 goal while gaining valuable brand exposure
          </p>
          <Link
            to="/sponsorship"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Become a Business Sponsor
          </Link>
        </div>
      </motion.div>
      
      <Team />
    </div>
  );
}