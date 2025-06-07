import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, FileText, Users, Camera, Rocket, DollarSign, Heart } from 'lucide-react';

const FundraisingJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Current progress (0-100%)
  const currentProgress = 14; // Example: 14% of fundraising goal reached
  const fundraisingGoal = 300000; // $300k goal - $100k for doc, $200k for charities
  const currentAmount = 43000; // $43k raised (25k + 18k from grants)

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, currentProgress / 100]);
  const springPathLength = useSpring(pathLength, { stiffness: 100, damping: 20 });

  const milestones = [
    {
      id: 'banff',
      location: "Banff - Starting Point",
      title: "Edmonton Arts Council",
      description: "Grant funding secured",
      amount: "$25,000",
      status: "completed",
      icon: FileText,
      position: { x: "5%", y: "70%" }
    },
    {
      id: 'canmore',
      location: "Canmore",
      title: "Alberta Foundation for the Arts",
      description: "Grant application pending",
      amount: "$18,000",
      status: "completed",
      icon: FileText,
      position: { x: "20%", y: "45%" }
    },
    {
      id: 'lake-louise',
      location: "Lake Louise",
      title: "Corporate Sponsorships",
      description: "Business partnerships",
      amount: "$25,000",
      status: "in-progress",
      icon: Users,
      position: { x: "35%", y: "30%" }
    },
    {
      id: 'icefields',
      location: "Columbia Icefields",
      title: "Individual Donations",
      description: "Community support",
      amount: "$32,000",
      status: "in-progress",
      icon: DollarSign,
      position: { x: "50%", y: "25%" }
    },
    {
      id: 'production',
      location: "Sunwapta Pass",
      title: "Film Production",
      description: "Document the expedition",
      amount: "Sept 2025",
      status: "upcoming",
      icon: Camera,
      position: { x: "70%", y: "35%" }
    },
    {
      id: 'charity',
      location: "Athabasca Falls",
      title: "Charity Donations",
      description: "Support CMHA & Glenrose",
      amount: "$200,000",
      status: "upcoming",
      icon: Heart,
      position: { x: "85%", y: "50%" }
    },
    {
      id: 'jasper',
      location: "Jasper - Destination",
      title: "Documentary Launch",
      description: "Share our story & impact",
      amount: "2026",
      status: "upcoming",
      icon: Rocket,
      position: { x: "95%", y: "65%" }
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Journey to $300,000
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're raising $100,000 to produce the documentary and $200,000 to donate to CMHA and Glenrose Foundation
          </p>
          
          {/* Fundraising Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-emerald-600">
                ${currentAmount.toLocaleString()} raised
              </span>
              <span className="text-gray-600">
                Goal: ${fundraisingGoal.toLocaleString()}
              </span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${currentProgress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{currentProgress}% of goal reached</p>
          </div>
        </motion.div>

        {/* Journey Map Container */}
        <div className="relative h-[700px] bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Background Mountain Layers */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Far mountains - light */}
            <path
              d="M0,500 Q150,400 300,450 T600,350 Q750,250 900,300 T1200,400 L1200,700 L0,700 Z"
              fill="url(#farMountainGradient)"
              opacity="0.3"
            />
            {/* Mid mountains */}
            <path
              d="M0,550 Q200,450 350,480 Q500,350 650,400 Q800,300 950,380 Q1100,420 1200,480 L1200,700 L0,700 Z"
              fill="url(#midMountainGradient)"
              opacity="0.2"
            />
            {/* Near mountains */}
            <path
              d="M0,600 Q100,520 250,560 Q400,480 550,520 Q700,450 850,500 Q1000,520 1200,580 L1200,700 L0,700 Z"
              fill="url(#nearMountainGradient)"
              opacity="0.15"
            />
            
            <defs>
              <linearGradient id="farMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
              <linearGradient id="midMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
              <linearGradient id="nearMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </svg>

          {/* Journey Path - Realistic with ups and downs */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background full path (gray) */}
            <path
              d="M60,490 Q180,420 300,360 Q420,400 540,320 Q660,340 780,280 Q900,350 1020,400 Q1080,420 1140,455"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              strokeLinecap="round"
            />
            
            {/* Animated progress path */}
            <motion.path
              d="M60,490 Q180,420 300,360 Q420,400 540,320 Q660,340 780,280 Q900,350 1020,400 Q1080,420 1140,455"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              style={{ pathLength: springPathLength }}
            />
            
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones */}
          {milestones.map((milestone, index) => {
            const isCompleted = milestone.status === 'completed';
            const isInProgress = milestone.status === 'in-progress';
            const isActive = isCompleted || isInProgress;

            return (
              <motion.div
                key={milestone.id}
                className="absolute"
                style={{
                  left: milestone.position.x,
                  top: milestone.position.y,
                  x: "-50%",
                  y: "-50%"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative group cursor-pointer"
                >
                  {/* Milestone Marker */}
                  <div className={`
                    rounded-full p-4 shadow-lg border-4 transition-all
                    ${isCompleted 
                      ? 'bg-emerald-500 border-emerald-600' 
                      : isInProgress
                      ? 'bg-blue-500 border-blue-600 animate-pulse'
                      : 'bg-white border-gray-300'
                    }
                  `}>
                    <milestone.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  </div>

                  {/* Milestone Info Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-gray-900 text-white rounded-lg p-4 min-w-[240px] shadow-xl">
                      <div className="text-xs font-medium text-gray-400 mb-1">{milestone.location}</div>
                      <div className="text-base font-bold mb-2">{milestone.title}</div>
                      <div className="text-sm mb-2">{milestone.description}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-400 font-semibold">{milestone.amount}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isCompleted 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : isInProgress
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-gray-500/20 text-gray-300'
                        }`}>
                          {milestone.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900"></div>
                    </div>
                  </div>

                  {/* Location Label */}
                  <div className={`
                    absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap
                    ${isActive ? 'text-gray-900' : 'text-gray-500'}
                  `}>
                    {milestone.location.split(' - ')[0]}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Animated Cyclist/Progress Indicator */}
          <motion.div
            className="absolute w-12 h-12"
            style={{
              offsetPath: "path('M60,490 Q180,420 300,360 Q420,400 540,320 Q660,340 780,280 Q900,350 1020,400 Q1080,420 1140,455')",
              offsetDistance: useTransform(scrollYProgress, [0, 0.8], ["0%", `${currentProgress}%`]),
            }}
          >
            <div className="w-full h-full bg-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-lg">🚴</span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Every contribution brings us closer to sharing this important story about mental health and resilience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const donateSection = document.getElementById('donate-section');
                donateSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Support Our Journey
            </button>
            <button
              onClick={() => {
                window.open('mailto:info@hlre.ca?subject=Corporate%20Sponsorship%20Inquiry', '_blank');
              }}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Users className="w-5 h-5" />
              Become a Sponsor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FundraisingJourney;