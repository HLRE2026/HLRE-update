import { Heart } from 'lucide-react';

export default function CharitySupportSection() {
  const charities = [
    {
      name: 'CMHA Edmonton Region',
      url: 'https://edmonton.cmha.ca/',
      description: 'Providing vital mental health support, crisis lines and community programs across Edmonton.'
    },
    {
      name: 'Glenrose Hospital Foundation',
      url: 'https://glenrosefoundation.com/',
      description: 'Driving innovative rehabilitation care and research for patients at the Glenrose Rehabilitation Hospital.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-primary-50/40">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 mb-6 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
          <Heart className="w-4 h-4" />
          Our Charity Partners
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10">
          Your Support Helps These Organizations Thrive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {charities.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg p-8 border border-primary-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="h-20 w-auto mb-6 flex items-center justify-center text-2xl font-bold text-primary-600 bg-primary-100 px-6 py-4 rounded-lg">
                {c.name.split(' ')[0]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {c.name}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {c.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 