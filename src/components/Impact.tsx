import { Users, BookOpen, Mic } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    label: 'Lives Touched',
    value: 10000,
    icon: Users,
    suffix: '+',
  },
  {
    label: 'Resources Created',
    value: 5,
    icon: BookOpen,
    suffix: ' books',
  },
  {
    label: 'Speaking Engagements',
    value: 100,
    icon: Mic,
    suffix: '+',
  },
];

export default function Impact() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observers = stats.map((stat, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let start = 0;
              const end = stat.value;
              const duration = 2000;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  clearInterval(timer);
                  setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = end;
                    return newCounters;
                  });
                } else {
                  setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = Math.floor(start);
                    return newCounters;
                  });
                }
              }, 16);
            }
          });
        },
        { threshold: 0.1 }
      );
    });

    const elements = document.querySelectorAll('.stat-card');
    elements.forEach((el, index) => {
      observers[index].observe(el);
    });

    return () => {
      elements.forEach((el, index) => {
        observers[index].unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-card bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {counters[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}