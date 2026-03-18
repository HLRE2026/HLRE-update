import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Bike, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThousandPerKm() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Current progress - should be updated based on actual fundraising data
  const currentAmount = 0; // TODO: Replace with actual fundraising amount from backend
  const totalGoal = 300000;
  const progressPercentage = Math.min((currentAmount / totalGoal) * 100, 100);
  
  // Position bike based on actual progress, not scroll
  const bikePosition = `${progressPercentage}%`;

  return (
    <section ref={containerRef} className="pt-20 pb-8 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Campaign Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-emerald-600">
            $1,000 per Kilometer
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-4">
            Help Mark raise funds for every kilometer of his 300km journey
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Our goal is $300,000. The first $100,000 covers documentary production costs. All funds raised beyond $100,000 will go directly to the Glenrose Hospital Foundation and the Canadian Mental Health Association (CMHA)
          </p>
          <div className="bg-emerald-50 rounded-xl px-6 py-3 max-w-2xl mx-auto">
            <p className="text-emerald-700 font-medium">
              <strong>Donations:</strong> Tax receipts provided through the Glenrose Foundation ($25 or greater) <strong>Sponsorship:</strong> Details to be discussed with project team (Min. $1,000)
            </p>
          </div>
        </motion.div>

        {/* Visual Journey Bar */}
        <div className="relative mb-16">
          <div className="h-24 bg-gray-200 rounded-full overflow-hidden relative">
            {/* Progress gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20" />
            
            {/* Kilometer markers */}
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <span className="text-white font-bold text-lg">0 km</span>
              <span className="text-gray-700 font-bold text-lg">300 km</span>
            </div>

            {/* Progress bike - positioned based on fundraising progress */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
              style={{ left: bikePosition }}
            >
              <Bike className="w-8 h-8 text-emerald-600" />
            </motion.div>
          </div>
          
          {/* Milestones below */}
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <div className="text-center">
              <div className="font-bold text-emerald-600">Banff</div>
              <div>Start</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-600">$150,000</div>
              <div>Halfway</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-purple-600">Jasper</div>
              <div>Finish</div>
            </div>
          </div>
        </div>

        {/* Impact Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">$300,000</h3>
            <p className="text-gray-600">Total Campaign Goal</p>
            <p className="text-sm text-emerald-600 mt-2">300km × $1,000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">$200,000</h3>
            <p className="text-gray-600">For Mental Health</p>
            <p className="text-sm text-blue-600 mt-2">Direct to charities</p>
          </motion.div>

          
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/sponsorship"
            className="inline-block bg-emerald-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Support the Journey Today
          </Link>
          <p className="mt-4 text-gray-600">Every kilometer counts. Every dollar helps.</p>
        </motion.div>
      </div>
    </section>
  );
}
