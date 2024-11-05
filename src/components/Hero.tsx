export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3ZiRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f95609287e418ff576dcf9db2e3393f0eea9b1b5/41456648_10155624548560969_2016992598698229760_o.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="relative z-20 container mx-auto px-4 h-screen flex flex-col">
        <div className="max-w-3xl mt-32">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hope, Love, Resilience Expedition
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Empowering individuals to overcome challenges through the transformative power of hope, love, and resilience. Join us in making a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-16">
          <button className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors">
            Donate Now
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}