import { motion } from 'framer-motion';
import { DollarSign, FileText, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import SponsorshipTable from '../SponsorshipTable';

const fundingBreakdown = [
  { item: "Corporate Sponsorships", amount: "", status: "Multiple tiers available & outlined below" },
  { item: "Individual Donations", amount: "", status: "Every kilometer counts" },
  { item: "Grants", amount: "", status: "Optional funding source" }
];

const allocationBreakdown = [
  { category: "Pre-Production", amount: "$15,000", percentage: 15 },
  { category: "Production (Filming)", amount: "$35,000", percentage: 35 },
  { category: "Post-Production", amount: "$20,000", percentage: 20 },
  { category: "Equipment & Travel", amount: "$15,000", percentage: 15 },
  { category: "Community Engagement", amount: "$10,000", percentage: 10 },
  { category: "Contingency", amount: "$5,000", percentage: 5 }
];

export default function FinancialAllocation() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Financial Resources & Allocation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're raising $300,000 total: $100,000 for documentary costs and $200,000 for the Glenrose Hospital Foundation and Canadian Mental Health Association.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Funding Sources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-full">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold">Hope, Love & Resilience Expedition Funding Sources</h3>
            </div>
            
            <div className="space-y-4">
              {fundingBreakdown.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-start border-b border-gray-100 pb-3"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{item.item}</p>
                    <p className="text-sm text-gray-500">{item.status}</p>
                  </div>
                  {item.amount && <span className="font-bold text-emerald-600 text-lg">{item.amount}</span>}
                </motion.div>
              ))}
              
              <div className="pt-4 mt-2 space-y-4">
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-700 mb-2">Sponsorship Tiers:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>$1,000 × 100</span>
                      <span className="text-gray-600">= $100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$5,000 × 10</span>
                      <span className="text-gray-600">= $50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$15,000 × 5</span>
                      <span className="text-gray-600">= $75,000</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-xl font-bold text-gray-900">Total Campaign Goal</span>
                  <span className="text-2xl font-bold text-emerald-600">$300,000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Budget Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Documentary Budget Allocation</h3>
            </div>
            
            <div className="space-y-4">
              {allocationBreakdown.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.category}</span>
                    <span className="font-semibold">{item.amount}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <Camera className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Every Dollar Counts</h3>
            <p className="text-gray-700 text-lg">
              The first $100,000 covers all documentary production costs. Every dollar raised beyond that goes directly to Glenrose Foundation and Canadian Mental Health Association, multiplying our impact and supporting vital community and mental health charities across Canada.
            </p>
          </div>
        </motion.div>

        {/* Ready To Make An Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="bg-secondary-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready To Make An Impact?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Join us as an individual and business contributor and help us reach our $300,000 goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sponsorship"
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Donations
              </Link>
              <Link
                to="/sponsorship"
                className="bg-white text-secondary-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Business Sponsorship
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
