import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, CheckCircle, Users, Heart, Camera, Megaphone } from 'lucide-react';

const sponsorshipTiers = [
  {
    name: "Bronze Business",
    amount: "$1,000",
    perKm: "1 kilometer",
    icon: Medal,
    color: "from-emerald-400 to-emerald-500",
    borderColor: "border-emerald-400",
    benefits: [
      "Company name listed on website",
      "Social media thank you post",
      "Digital certificate of appreciation",
      "Updates on expedition progress"
    ]
  },
  {
    name: "Silver Business",
    amount: "$5,000",
    perKm: "5 kilometers",
    icon: Trophy,
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500",
    benefits: [
      "All Bronze benefits",
      "Company logo on expedition gear",
      "Featured in documentary credits",
      "Behind-the-scenes content access",
      "Personalized thank you video"
    ]
  },
  {
    name: "Gold Business",
    amount: "$10,000",
    perKm: "10 kilometers",
    icon: Award,
    color: "from-emerald-600 to-emerald-700",
    borderColor: "border-emerald-600",
    featured: true,
    benefits: [
      "All Silver benefits",
      "Prominent logo placement in documentary",
      "Speaking opportunity at launch event",
      "Custom social media campaign",
      "VIP premiere invitation (2 tickets)",
      "Branded kilometer marker in film"
    ]
  },
  {
    name: "Platinum Partner",
    amount: "$15,000+",
    perKm: "15+ kilometers",
    icon: Star,
    color: "from-emerald-700 to-emerald-800",
    borderColor: "border-emerald-700",
    benefits: [
      "All Gold benefits",
      "Executive Producer credit",
      "Custom branded content piece",
      "Full premiere table (8 tickets)",
      "Partnership announcement press release",
      "Year-long brand association rights",
      "Custom impact report for your organization"
    ]
  }
];

export default function SponsorshipTiers() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sponsorship Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Every kilometer of Mark's 300km journey represents an opportunity to make a lasting impact
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 max-w-2xl mx-auto mb-4">
            <p className="text-lg text-emerald-800 font-semibold mb-2">
              For Individual Supporters
            </p>
            <p className="text-emerald-700">
              Donate any amount through our Indiegogo campaign! Every dollar counts toward our $300,000 goal.
            </p>
            <button
              onClick={() => window.open('https://www.indiegogo.com', '_blank')}
              className="mt-3 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              Support on Indiegogo
            </button>
          </div>
          <p className="text-md text-gray-600">
            Business sponsorship tiers start at $1,000 and include promotional benefits
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sponsorshipTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full ${
                  tier.featured ? 'ring-2 ring-emerald-500 transform scale-105' : ''
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg z-10">
                    Most Popular
                  </div>
                )}
                
                {/* Tier Header */}
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-1">{tier.amount}</div>
                  <div className="text-sm opacity-90">Sponsors {tier.perKm}</div>
                </div>

                {/* Benefits List - flex-grow to push button to bottom */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - stays at bottom */}
                <div className="px-6 pb-6 mt-auto">
                  <button
                    onClick={() => {
                      window.location.href = `mailto:info@hlre.ca?subject=${encodeURIComponent(
                        `Interest in ${tier.name} Sponsorship`
                      )}&body=${encodeURIComponent(
                        `I'm interested in learning more about the ${tier.name} sponsorship opportunity for the Hope, Love & Resilience Expedition.`
                      )}`;
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      tier.featured
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

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
                $200,000 goes directly to CMHA and Glenrose Foundation
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

          {/* Custom Sponsorship Option */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              <strong>Looking for a custom sponsorship package?</strong>
            </p>
            <p className="text-gray-600 mb-6">
              We're happy to create a personalized sponsorship opportunity that aligns with your organization's goals and budget.
            </p>
            <button
              onClick={() => {
                window.location.href = 'mailto:info@hlre.ca?subject=Custom%20Sponsorship%20Inquiry';
              }}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Megaphone className="w-5 h-5" />
              Discuss Custom Package
            </button>
          </div>
        </motion.div>

        {/* Tax Receipt Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600 bg-white rounded-lg p-4 inline-block">
            <strong>Note:</strong> Charitable tax receipts available for portions of sponsorships going directly to registered charities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}