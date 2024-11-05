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
    bio: "Childhood friend of Mark and owner of Flower Power Production Inc. Lloyd has worked with the National Film Board of Canada, CBC, and various cultural institutions.",
    email: ""
  },
  {
    name: "Jeremy Hamilton",
    role: "Marketing Manager",
    bio: "A former student inspired by Mr. I's teaching, Jeremy reconnected with the project after seeing its potential to make a difference. His experience as both a student and now a marketing professional brings a unique perspective to the team.",
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
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </div>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
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