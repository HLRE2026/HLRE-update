import { Milestone } from './Milestone';

const timeline = [
  {
    year: "Pre-2018",
    title: "Inspiring Educator",
    description: "As a junior high teacher in Stony Plain, Alberta, Mark empowered hundreds of youth with the motto 'anything is possible in life'. He led annual hiking trips to Jasper and hosted youth events in large auditoriums."
  },
  {
    year: "April 2018",
    title: "Life-Changing Stroke",
    description: "After a game of hockey, Mark suffered a major stroke resulting in left-side paralysis. This forced him to relearn basic life skills and face significant mental health challenges."
  },
  {
    year: "Sept 2018",
    title: "First Summit Post-Stroke",
    description: "After five months of physiotherapy, Mark successfully hiked Sulphur Skyline with family, friends, and former students - the same trail he used to take his students on."
  },
  {
    year: "2019-2020",
    title: "Author & Motivator",
    description: "Mark wrote and self-published two books designed to motivate and inspire others on their journey in recovery."
  },
  {
    year: "2021",
    title: "New Beginnings",
    description: "Invested in a recumbent bicycle, discovering a new passion that would lead to the conception of the Hope Love & Resilience Expedition."
  },
  {
    year: "2025",
    title: "The Expedition",
    description: "Embarking on a 300km journey from Banff to Jasper, pushing physical and mental limits while inspiring others to overcome their own challenges."
  }
];

export default function Journey() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mark's Journey</h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((milestone, index) => (
            <Milestone
              key={milestone.year}
              {...milestone}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
