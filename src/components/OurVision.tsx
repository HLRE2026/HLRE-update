import { motion } from 'framer-motion';
import { Heart, Users, Camera, Target } from 'lucide-react';

const visionPoints = [
  {
    icon: Camera,
    title: "Professional Documentary",
    description: "A 45-minute film capturing Mark's 300km journey through the Rockies",
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "$200,000 donated directly to CMHA and Glenrose Foundation",
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Inspiring thousands with a story of resilience and recovery",
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Target,
    title: "Lasting Legacy",
    description: "Creating awareness and breaking stigma around mental health",
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function OurVision() {
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
            What Your Support Will Achieve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Together, we're creating more than a documentary – we're building a movement of hope and resilience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-full ${point.color} flex items-center justify-center`}
              >
                <point.icon size={40} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The Journey Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Journey Ahead
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <div className="text-4xl font-bold mb-2 text-emerald-600">300km</div>
                <p className="text-gray-600">Through the Canadian Rockies</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <div className="text-4xl font-bold mb-2 text-blue-600">7 Days</div>
                <p className="text-gray-600">Of filming in June 2026</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <div className="text-4xl font-bold mb-2 text-purple-600">∞ Lives</div>
                <p className="text-gray-600">Touched by this story</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}