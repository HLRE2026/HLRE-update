import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, Heart, Users, Target } from 'lucide-react';

const AnimatedJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const springPathLength = useSpring(pathLength, { stiffness: 100, damping: 20 });

  const milestones = [
    {
      km: 0,
      location: "Banff",
      title: "The Journey Begins",
      impact: "Launch mental health awareness campaign",
      icon: MapPin,
      position: { x: "10%", y: "80%" }
    },
    {
      km: 75,
      location: "Lake Louise",
      title: "Building Momentum",
      impact: "Fund 20 therapy sessions",
      icon: Heart,
      position: { x: "30%", y: "40%" }
    },
    {
      km: 150,
      location: "Columbia Icefield",
      title: "Halfway There",
      impact: "Launch 3 support groups",
      icon: Users,
      position: { x: "50%", y: "20%" }
    },
    {
      km: 225,
      location: "Athabasca Falls",
      title: "Final Push",
      impact: "Reach 100+ people with resources",
      icon: Heart,
      position: { x: "70%", y: "35%" }
    },
    {
      km: 300,
      location: "Jasper",
      title: "Mission Accomplished",
      impact: "Establish ongoing mental health fund",
      icon: Target,
      position: { x: "90%", y: "60%" }
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            300km of Hope
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the journey from Banff to Jasper as each kilometer creates lasting impact for mental health support
          </p>
        </motion.div>

        {/* Journey Map Container */}
        <div className="relative h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Background Mountain Silhouette */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,400 Q100,300 200,350 T400,250 Q500,150 600,200 T800,300 Q900,250 1000,350 L1000,600 L0,600 Z"
              fill="url(#mountainGradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated Path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M100,480 Q300,240 500,120 T900,360"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              style={{ pathLength: springPathLength }}
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones */}
          {milestones.map((milestone, index) => {
            return (
              <motion.div
                key={milestone.km}
                className="absolute"
                style={{
                  left: milestone.position.x,
                  top: milestone.position.y,
                  x: "-50%",
                  y: "-50%"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative group cursor-pointer"
                >
                  {/* Milestone Marker */}
                  <div className="bg-white rounded-full p-4 shadow-lg border-4 border-emerald-500 group-hover:border-emerald-600 transition-colors">
                    <milestone.icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  {/* Milestone Info Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-gray-900 text-white rounded-lg p-4 min-w-[200px] shadow-xl">
                      <div className="text-sm font-semibold">{milestone.location}</div>
                      <div className="text-xs opacity-80 mb-1">km {milestone.km}</div>
                      <div className="text-sm font-medium text-emerald-400">{milestone.title}</div>
                      <div className="text-xs mt-2">{milestone.impact}</div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Animated Cyclist */}
          <motion.div
            className="absolute w-8 h-8"
            style={{
              offsetPath: "path('M100,480 Q300,240 500,120 T900,360')",
              offsetDistance: useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]),
            }}
          >
            <div className="w-full h-full bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🚴</span>
            </div>
          </motion.div>
        </div>

        {/* Progress Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-emerald-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">300 km</div>
            <p className="text-gray-700">Total Distance</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">7 Days</div>
            <p className="text-gray-700">Journey Duration</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞ Impact</div>
            <p className="text-gray-700">Lives Changed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedJourney;