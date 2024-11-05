import { Route, Calendar, Video, Heart } from 'lucide-react';

const expeditionDetails = [
  {
    icon: Route,
    title: "Journey Distance",
    value: "300 km",
    description: "Jasper to Banff through the Canadian Rockies"
  },
  {
    icon: Calendar,
    title: "Duration",
    value: "6 Days",
    description: "Challenging trek starting August 2024"
  },
  {
    icon: Video,
    title: "Documentary",
    value: "45 min",
    description: "Professional film documenting the journey"
  },
  {
    icon: Heart,
    title: "Funding Goal",
    value: "$100,000",
    description: "Supporting film production and expedition"
  }
];

const fundingBreakdown = [
  { item: "Broadcast License (CBC)", amount: "$25,000" },
  { item: "Alberta Media Fund", amount: "$23,750" },
  { item: "CAVCO Tax Credit", amount: "$4,000" },
  { item: "Community Funding", amount: "$47,250" }
];

export default function Expedition() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">The Hope Love & Resilience Expedition</h2>
          <p className="text-gray-600 text-lg">
            A transformative journey through the Canadian Rockies, documenting Mr. I's inspiring story 
            of recovery, determination, and the power of community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expeditionDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.title} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-6 mx-auto">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{detail.value}</h3>
                <h4 className="text-lg font-semibold text-gray-800 text-center mb-2">{detail.title}</h4>
                <p className="text-gray-600 text-center text-sm">{detail.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-accent-500/10 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Documentary Vision</h3>
            <p className="text-gray-600 mb-4">
              More than a documentary—this is a movement of resilience. Following Mark Ivancic, a former teacher, 
              musician, and community leader, as he embarks on a grueling 300km expedition through the Canadian Rockies 
              after surviving a devastating stroke.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="bg-accent-100 p-1 rounded-full text-accent-600 mt-1">✓</span>
                <span>Raw, intimate footage capturing daily struggles and victories</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-accent-100 p-1 rounded-full text-accent-600 mt-1">✓</span>
                <span>Breathtaking Rocky Mountain landscapes mirroring the journey</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-accent-100 p-1 rounded-full text-accent-600 mt-1">✓</span>
                <span>Stories of community support and transformation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-accent-100 p-1 rounded-full text-accent-600 mt-1">✓</span>
                <span>A testament that with hope and resilience, anything is possible</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Funding Allocation</h3>
            <div className="space-y-4">
              {fundingBreakdown.map((item) => (
                <div key={item.item} className="flex justify-between items-center">
                  <span>{item.item}</span>
                  <span className="font-semibold">{item.amount}</span>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-accent-500">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total Budget</span>
                  <span className="font-bold">$100,000</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://vimeo.com/773854707/b78514ec1f" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-accent-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent-50 transition-colors inline-flex items-center space-x-2"
              >
                <span>Watch Promo Video</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}