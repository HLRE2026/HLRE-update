import { Heart, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import glenroseLogo from '../../assets/glenrose-logo.png';
import cmhaLogo from '../../assets/cmha-logo.png';

export default function CharitySupportSection() {
  const charities = [
    {
      name: 'Glenrose Foundation',
      shortName: 'Glenrose',
      url: 'https://glenrosefoundation.com/',
      description: 'Supporting stroke recovery and rehabilitation care, helping patients rebuild their lives through innovative programs and research.',
      icon: Heart,
      logo: glenroseLogo,
      color: 'blue',
      impact: ''
    },
    {
      name: 'Canadian Mental Health Association',
      shortName: 'CMHA Edmonton',
      url: 'https://edmonton.cmha.ca/',
      description: 'Providing vital mental health support, crisis intervention, and community programs that help thousands of Canadians every year.',
      icon: Brain,
      logo: cmhaLogo,
      color: 'emerald',
      impact: ''
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-6 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" />
            Making a Real Difference
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Every Donation Makes an Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            $200,000 of the $300,000 raised goes directly to these incredible organizations, 
            creating lasting impact in mental health support and stroke recovery programs across Canada.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {charities.map((c, index) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color === 'emerald' ? 'from-emerald-50 to-emerald-100/50' : 'from-blue-50 to-blue-100/50'} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Content */}
              <div className="relative z-10">
                {c.logo ? (
                  <div className="h-48 mb-6 flex items-center justify-center p-4">
                    <img 
                      src={c.logo} 
                      alt={`${c.name} logo`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 mb-6 flex items-center justify-center rounded-full ${c.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'} group-hover:scale-110 transition-transform mx-auto`}>
                    <c.icon size={40} />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {c.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {c.description}
                </p>
                
                <div className={`inline-flex items-center gap-2 text-sm font-medium ${c.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'} group-hover:gap-3 transition-all`}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Donation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => {
              const whySection = document.getElementById('why-it-matters');
              whySection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            <Users className="w-5 h-5" />
            Join Our Mission for Mental Health
          </button>
        </motion.div>
      </div>
    </section>
  );
} 