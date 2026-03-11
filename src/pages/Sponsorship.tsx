import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, CheckCircle, Users, Heart, Camera, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sponsorshipTiers = [
  {
    name: "Keeping Us Moving",
    tagline: "$1,000 for 1 Kilometer",
    amount: "$1,000",
    perKm: "1 Kilometer",
    icon: Medal,
    color: "from-emerald-400 to-emerald-500",
    borderColor: "border-emerald-400",
    benefits: [
      "Logo featured in HLRE documentary film tail credits (community screenings, broadcast & online streaming channels)",
      "Small size logo on HLRE marketing trailer (bike route coverage)",
      "Logo placement on the HLRE website with clickable sponsor feature & social media posts",
      "VIP tickets to the Premiere Gala Screening (2 tickets)"
    ]
  },
  {
    name: "Pushing The Limits",
    tagline: "$7,500 for 7.5 Kilometers",
    amount: "$7,500",
    perKm: "7.5 Kilometers",
    icon: Trophy,
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500",
    featured: true,
    benefits: [
      "Name acknowledgement featured in HLRE documentary film tail credits (community screenings, broadcast & online streaming channels)",
      "Large size logo on HLRE marketing trailer (bike route & media coverage)",
      "Logo placement on the HLRE website with clickable sponsor feature & social media posts",
      "VIP speaking opportunity & tickets to the Premiere Gala Screening (15 tickets)",
      "Special invitation & partnership acknowledgement in HLRE media releases and events"
    ]
  },
  {
    name: "Reaching The Finish Line",
    tagline: "$15,000 for 15 Kilometers",
    amount: "$15,000",
    perKm: "15 Kilometers",
    icon: Star,
    color: "from-emerald-600 to-emerald-700",
    borderColor: "border-emerald-600",
    benefits: [
      "Name acknowledgement featured in HLRE documentary film tail credits (community screenings, broadcast & online streaming channels)",
      "Extra large size logo on HLRE marketing trailer (bike route & media coverage)",
      "Logo placement on the HLRE website with clickable sponsor feature & social media posts",
      "VIP speaking opportunity & tickets to the Premiere Gala Screening (30 tickets)",
      "Special invitation & partnership acknowledgement in HLRE media releases and events",
      "Behind-the-scenes documentary access (7 day bike trip - Jasper to Banff)"
    ]
  }
];

export default function Sponsorship() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sponsorship Opportunities</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Join us in supporting Mark's 300km journey and make a lasting impact on mental health and stroke recovery
            </p>
          </div>
        </div>
      </section>

      {/* Individual Supporters Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Individual Supporters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Every dollar counts! Support Mark's journey through our Indiegogo campaign. 
              Donate any amount that feels right for you and help us reach our $300,000 goal.
            </p>
            <div className="bg-emerald-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">
                Support via Indiegogo
              </h3>
              <p className="text-emerald-700 mb-6">
                Your contribution directly supports the documentary production and helps us donate $200,000 
                to Glenrose Foundation and CMHA for mental health and stroke recovery programs.
              </p>
              <button
                onClick={() => window.open('https://www.indiegogo.com', '_blank')}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
              >
                Donate here
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Sponsorship Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Business Sponsorship</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Business sponsorship tiers start at $1,000 and include valuable promotional benefits. 
              Every tier helps us reach our $300,000 goal while giving your brand meaningful exposure.
            </p>
          </motion.div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
                    <div className="text-sm opacity-90 mb-2">{tier.tagline}</div>
                    <div className="text-3xl font-bold">{tier.amount}</div>
                  </div>

                  {/* Benefits List */}
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

                  {/* CTA Button */}
                  <div className="px-6 pb-6 mt-auto">
                    <button
                      onClick={() => {
                        window.location.href = `mailto:info@hlre2025.com?subject=${encodeURIComponent(
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

          {/* Why Sponsor Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Why Sponsor This Journey?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2">Direct Impact</h4>
                <p className="text-gray-600 text-sm">
                  $200,000 goes directly to Glenrose Foundation and CMHA
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

          {/* Custom Package Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <Megaphone className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Custom Sponsorship Package</h3>
              <p className="text-lg text-gray-600 mb-6">
                Looking for a custom sponsorship opportunity that aligns with your organization's goals and budget? 
                We're happy to create a personalized package tailored to your needs.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're interested in event sponsorship, product placement, or a unique partnership opportunity, 
                we can work together to create something meaningful for both your brand and our mission.
              </p>
              <button
                onClick={() => {
                  window.location.href = 'mailto:info@hlre2025.com?subject=Custom%20Sponsorship%20Inquiry';
                }}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
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

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in supporting Mark's journey and help us reach our $300,000 goal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://www.indiegogo.com', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Donate here
            </button>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            >
              Learn More About HLRE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

