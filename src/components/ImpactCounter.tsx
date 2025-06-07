import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Heart, Users, Brain, Calendar } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ from, to, duration = 2, prefix = '', suffix = '' }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (value) => Math.round(value));
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.onChange((v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactCounter = () => {
  const impacts = [
    {
      icon: Heart,
      value: 50,
      label: 'Therapy Sessions',
      description: 'Funded through CMHA',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      value: 200,
      label: 'People Supported',
      description: 'In mental health programs',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Brain,
      value: 15,
      label: 'Support Groups',
      description: 'Created across Alberta',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Calendar,
      value: 365,
      label: 'Days of Impact',
      description: 'Year-round support',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every kilometer cycled translates to real support for mental health initiatives across Canada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${impact.bgColor} ${impact.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <impact.icon size={32} />
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter from={0} to={impact.value} />
                    {impact.value === 365 ? '' : '+'}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{impact.label}</h3>
                  <p className="text-sm text-gray-600">{impact.description}</p>
                </div>

                {/* Animated progress bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full ${impact.color} bg-current`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-emerald-600 text-white rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Every Dollar Makes a Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">$25</div>
                <p className="text-sm">Provides crisis support for one person</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">$50</div>
                <p className="text-sm">Funds a mental health workshop</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">$100</div>
                <p className="text-sm">Sponsors a week of support group sessions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCounter;