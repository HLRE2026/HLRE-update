import { Mail } from 'lucide-react';
import mattImg from '../../assets/team/matt.jpeg';
import danImg from '../../assets/team/dan.jpeg';
import lloydImg from '../../assets/team/lloyd.jpeg';
import jereImg from '../../assets/team/jeremy.jpeg';

const team = [
  {
    name: "Matt Dringenberg",
    role: "Director",
    image: mattImg,
    bio: "Matt Dringenberg is an Edmonton-based filmmaker with over 12 years of experience in visual storytelling, specializing in documentary and human-centered narratives. As the founder of Integra Films, he has worked on a diverse range of projects, from commercial storytelling to deeply personal documentary films that highlight resilience, perseverance, and community impact. Matt's passion for storytelling is rooted in his own life experiences, including supporting his wife through a life-threatening illness, which deepened his commitment to capturing stories that inspire and connect people.\n\nWith a keen eye for cinematic visuals and an ability to bring real stories to life, Matt's work has taken him across Canada and beyond, documenting powerful stories of survival, determination, and human spirit. His latest project, Hope, Love & Resilience Expedition, follows stroke survivor Mark Ivancic on his journey to reclaim his strength through a 300-kilometer cycling expedition in the Canadian Rockies. Through this film, Matt continues his mission of crafting visually stunning, emotionally engaging stories that leave a lasting impact on audiences.",
    email: "matt@integrafilms.net"
  },
  {
    name: "Lloyd Salomone",
    role: "Executive Producer",
    image: lloydImg,
    bio: "Lloyd grew up with Mark Ivancic in Schumacher, Ontario. As friends living in a Northern Ontario gold mining community they played a lot of sports and hung out together, along with childhood friends known as the Schumacher Boys. To the boys, Mark's nick name is Ivy, so they'll be participating in the Hope Love & Resilience Expedition and will be at the finish line to celebrate this accomplishment. Lloyd signed on to help Ivy produce a documentary film about his journey.\n\nLloyd owns a documentary media production company based in Fredericton, New Brunswick. Since 2003, he has produced documentaries for television broadcasts, online streaming, interactive websites, and educational purposes. Lloyd has worked with the National Film Board of Canada, Canadian Broadcasting Corporation, Aboriginal Peoples Television Network, Bravo Channel, Bell FibeTV; and with researchers at various cultural and academic institutions (i.e. Beaverbrook Art Gallery, New Brunswick Museum, University of New Brunswick, Laurentian University, St. Thomas University).",
    email: "lloyd_salomone@hotmail.com"
  },
  {
    name: "Dan Adcock",
    role: "Producer",
    image: danImg,
    bio: "Dan is the Son-in-law of Mark Ivancic, and later to become videographer, video producer, website designer/editor and anything related to technology. Over the years, Mark and I collaborated on hosting a number of youth empowerment events in the greater Edmonton area. We both share a hobby for the outdoors and enjoy hiking, climbing and scrambling in the Canadian Rockies. From 2007 to 2020 Dan held a volunteer director position for a not-for-profit charity named the Evan Grykuliak Memorial Society (EGMS), the charity's mandate involved youth bullying prevention through leadership initiatives. Our flagship fund raising event Kicking Out Bullying (3v3 soccer tournament) provided funding to assist in the implementation for programs that aligned with our vision in schools across Alberta (Olweus Bullying Prevention and/or Leader in Me). In 2015 and 2016, Mark and Dan hosted the Power in Me - a youth empowerment day with a collection of speakers followed by entertainers in an engaging and inspiring event geared toward overcoming life's obstacles. These events were held at the Northlands Expo center Hall D and boasted attendance of upwards of 3000 students.",
    email: "danadcock554@gmail.com"
  },
  {
    name: "Jeremy Hamilton",
    role: "Marketing Manager",
    image: jereImg,
    bio: "As a former student in both Grade 4 and Grade 9 French Immersion, Mark left an indelible mark on my life. His infectious positivity, unwavering determination, and ability to motivate students was unparalleled. Beyond the classroom, we shared a love for hockey, and I still vividly remember the memorable hike he led us on to Sulphur Summit near Jasper. Mark's influence wasn't just academic; he fostered a desire in all his students to be better, to reach higher. Even today, at 39, hearing 'You Get What You Give' by New Radicals instantly brings back memories of his inspiring presence.\n\nAfter years of minimal contact, I discovered Mark's ambitious plan for the Banff to Jasper expedition through social media. This project immediately resonated with me as an opportunity to give back to someone who had given so much to his students. His impact on my life and countless others made joining this project a deeply personal mission. It's a chance to contribute to something larger than myself and support Mark's inspiring journey of resilience and determination.",
    email: "jeremy@ignitabull.com"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 ring-4 ring-gray-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-lg text-emerald-600">{member.role}</p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mt-4"
                      >
                        <Mail size={16} />
                        <span className="text-sm">{member.email}</span>
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
