import { motion } from 'framer-motion';
import { DollarSign, Users, Building2, Star } from 'lucide-react';

const sponsorshipLevels = [
  {
    tier: "Individual Supporters (Indiegogo)",
    amount: "Any Amount",
    quantity: "Unlimited",
    total: "Every $ Counts",
    icon: Users,
    description: "Support through Indiegogo - donate what feels right",
    color: "bg-emerald-50 text-emerald-700"
  },
  {
    tier: "Bronze Tier Sponsors",
    amount: "$1,000",
    quantity: "× 100",
    total: "$100,000",
    icon: Building2,
    description: "Businesses making an impact",
    color: "bg-blue-50 text-blue-700"
  },
  {
    tier: "Silver Tier Partners",
    amount: "$5,000",
    quantity: "× 10",
    total: "$50,000",
    icon: Star,
    description: "Local businesses showing leadership",
    color: "bg-purple-50 text-purple-700"
  },
  {
    tier: "Gold Tier Partners",
    amount: "$15,000",
    quantity: "× 5",
    total: "$75,000",
    icon: Star,
    description: "Major sponsors driving change",
    color: "bg-amber-50 text-amber-700"
  }
];

export default function SponsorshipTable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Sponsorship Structure - Reaching our $300,000 goal together</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {sponsorshipLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.tier}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${level.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{level.tier}</div>
                    <div className="text-sm text-gray-600">{level.description}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{level.amount}</span>
                    <span>{level.quantity}</span>
                  </div>
                  <div className="font-bold text-lg text-emerald-600">{level.total}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Total Goal */}
        <div className="mt-6 pt-6 border-t-2 border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-full">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xl font-bold text-gray-900">Campaign Goal</span>
            </div>
            <div className="text-3xl font-bold text-emerald-600">$300,000</div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-gray-600 mb-1">Documentary Production</div>
              <div className="font-bold text-gray-900">$100,000</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="text-emerald-700 mb-1">Charity Donations</div>
              <div className="font-bold text-emerald-900">$200,000</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => window.open('https://www.indiegogo.com', '_blank')}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Make a Donation
          </button>
          <button
            onClick={() => {
              window.location.href = 'mailto:info@hlre.ca?subject=Business%20Sponsorship%20Inquiry';
            }}
            className="w-full bg-white text-emerald-600 border-2 border-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Become a Business Sponsor
          </button>
        </div>
      </div>
    </div>
  );
}
