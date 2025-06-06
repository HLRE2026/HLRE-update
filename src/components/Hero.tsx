import { Play, Heart, Mountain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3ZiRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f95609287e418ff576dcf9db2e3393f0eea9b1b5/41456648_10155624548560969_2016992598698229760_o.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Mountain className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">300km Journey • Canadian Rockies • September 2025</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Lives Through the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Power of Resilience
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Join Mark Ivancic's extraordinary 300km expedition through the Canadian Rockies—a documentary journey of recovery, hope, and transformation that will inspire communities and change lives.
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">300km Journey</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm font-medium">45min Documentary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium">$100,000 Goal</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Support the Expedition
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-3">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-3">Supported by</p>
            <div className="flex flex-wrap gap-6 items-center">
              <span className="text-sm text-gray-400">Edmonton Arts Council</span>
              <span className="text-sm text-gray-400">Alberta Foundation for the Arts</span>
              <span className="text-sm text-gray-400">Community Partners</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Overlay Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-sm px-6 py-8 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            HLRE – Hope, Love &amp; Resilience Expedition
          </h2>
          <p className="text-lg md:text-2xl text-primary-400 font-medium">
            Advancing Mental Health &amp; Stroke Recovery
          </p>
        </div>
      </div>
    </div>
  );
}
