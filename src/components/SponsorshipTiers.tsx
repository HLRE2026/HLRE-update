import { motion } from 'framer-motion';
import { Users, Heart, Camera } from 'lucide-react';

export default function SponsorshipTiers() {
  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Donations and Sponsorships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Every kilometer of Mark's 300km journey represents an opportunity to make a lasting impact
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-4">
            <div className="bg-emerald-50 rounded-xl p-4">
              <p className="text-lg text-emerald-800 font-semibold mb-2">
                Donations
              </p>
              <p className="text-emerald-700 text-sm mb-3">
                Donate any amount through our campaign! Every dollar counts toward our $300,000 goal.
              </p>
              <button
                onClick={() => window.open('https://www.indiegogo.com', '_blank')}
                className="w-full bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
              >
                Make a Donation
              </button>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4">
              <p className="text-lg text-emerald-800 font-semibold mb-2">
                Sponsorships
              </p>
              <p className="text-emerald-700 text-sm mb-3">
                Multiple tiers available starting at $1,000. Gain valuable brand exposure and make a lasting impact.
              </p>
              <a
                href="/sponsorship"
                className="block w-full bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors text-center"
              >
                View Sponsorship Benefits
              </a>
            </div>
          </div>
          <p className="text-md text-gray-600">
            Business sponsorship tiers start at $1,000 and include promotional benefits
          </p>
        </motion.div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Why Sponsor This Journey?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold mb-2">Direct Impact</h4>
              <p className="text-gray-600 text-sm">
                $200,000 goes directly to Glenrose Foundation and Canadian Mental Health Association
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold mb-2">Documentary Exposure</h4>
              <p className="text-gray-600 text-sm">
                Your brand featured in a professional documentary film reaching thousands
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold mb-2">Community Leadership</h4>
              <p className="text-gray-600 text-sm">
                Demonstrate your commitment to mental health and community wellness
              </p>
            </div>
          </div>

        </motion.div>

        
      </div>
    </section>
  );
}
