import { Mail } from 'lucide-react';

const team = [
  {
    name: "Matt Dringenberg",
    role: "Director",
    bio: "Commercial filmmaker with over 10 years of experience through Integra Films, working with brands like Under Armour, Walmart, and RCMP. Matt met Mark in 2012, collaborating on viral video projects with students.",
    email: "matt@integrafilms.net"
  },
  {
    name: "Dan Adcock",
    role: "Producer",
    bio: "Mark's son-in-law and experienced videographer. Former director of the Evan Grykuliak Memorial Society, Dan collaborated with Mark on youth empowerment events reaching thousands of students.",
    email: "danadcock554@gmail.com"
  },
  {
    name: "Lloyd Salomone",
    role: "Executive Producer",
    bio: "Lloyd grew up with Mark Ivancic in Schumacher, Ontario. As friends living in a Northern Ontario gold mining community they played a lot of sports and hung out together, along with childhood friends known as the Schumacher Boys. To the boys, Mark's nick name is Ivy, so they'll be participating in the Hope Love & Resilience Expedition and will be at the finish line to celebrate this accomplishment. Lloyd signed on to help Ivy produce a documentary film about his journey in life.\n\nLloyd owns a documentary media production company based in Fredericton, New Brunswick. Since 2003, he has produced documentaries for television broadcasts, online streaming, interactive websites, and educational purposes. Lloyd has worked with the National Film Board of Canada, Canadian Broadcasting Corporation, Aboriginal Peoples Television Network, Bravo Channel; and with researchers at various cultural and academic institutions (i.e. Beaverbrook Art Gallery, New Brunswick Museum, University of New Brunswick, Laurentian University).",
    email: ""
  },
  {
    name: "Jeremy Hamilton",
    role: "Marketing Manager",
    bio: "As a former student in both Grade 4 and Grade 9 French Immersion, Mark left an indelible mark on my life. His infectious positivity, unwavering determination, and ability to motivate students was unparalleled. Beyond the classroom, we shared a love for hockey, and I still vividly remember the memorable hike he led us on to Sulphur Summit near Jasper. Mark's influence wasn't just academic; he fostered a desire in all his students to be better, to reach higher. Even today, at 39, hearing 'You Get What You Give' by New Radicals instantly brings back memories of his inspiring presence.\n\nAfter years of minimal contact, I discovered Mark's ambitious plan for the Banff to Jasper expedition through social media. This project immediately resonated with me as an opportunity to give back to someone who had given so much to his students. His impact on my life and countless others made joining this project a deeply personal mission. It's a chance to contribute to something larger than myself and support Mark's inspiring journey of resilience and determination.",
    email: "jeremy@ignitabull.com"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold">{member.role}</p>
              </div>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}