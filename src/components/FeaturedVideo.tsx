import { Play, ExternalLink } from 'lucide-react';
import thumbnailImage from '../assets/everart-image.png';

export default function FeaturedVideo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience Mark's Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch the compelling story behind the Hope, Love & Resilience Expedition. 
              See how one man's determination to overcome adversity became a mission to inspire others.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {/* Video Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${thumbnailImage}')`,
                }}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer hover:bg-black/50 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-all duration-300 border-2 border-white/30">
                  <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">8:42</span>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              From Stroke Survivor to Expedition Leader
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              This powerful documentary preview showcases Mark's incredible journey of recovery 
              and his vision for the upcoming 300km expedition through the Canadian Rockies. 
              Learn about the mission, the community impact, and how your support makes this possible.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                <Play className="w-4 h-4" />
                Watch Full Video
              </button>
              <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                View on YouTube
              </button>
            </div>
          </div>

          {/* Video Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">25,000+ Views</h4>
              <p className="text-sm text-gray-600">People inspired by Mark's story</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">500+ Shares</h4>
              <p className="text-sm text-gray-600">Community members spreading hope</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">♥</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1,200+ Reactions</h4>
              <p className="text-sm text-gray-600">Hearts and support from viewers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
