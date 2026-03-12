export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mark's Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mark Ivancic's journey is a powerful testament to resilience, transformation, and the unwavering strength of the human spirit. A beloved teacher, musician, and community leader, Mark inspired countless lives through his adventurous spirit and compassionate heart. But in 2018, after a game of hockey, his life took an unexpected turn when he suffered a severe stroke that left him with partial paralysis, challenging him to rebuild his life from the ground up.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Determined to overcome these obstacles, Mark discovered the profound impact of hope, love, and resilience. This newfound purpose became the foundation of the Hope, Love, & Resilience Expedition (HLRE)—a mission to inspire and empower others facing life's toughest challenges. Through the HLRE, Mark shares his story of recovery, strength, and courage, reminding us all that no matter the hardship, there's always a way forward.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Deeply rooted in the Stony Plain community, Mark's impact as a teacher and musician has touched countless lives. Through his classroom teaching in Stony Plain and his musical performances, he has always found ways to inspire and connect with others. Now, he aspires to expand his reach through motivational speaking engagements, sharing his story of recovery and resilience with a broader audience. His vision is to combine his authored works with powerful presentations, showing others that every challenge can become a stepping stone to something greater.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img
                src="/assets/everart-image.png"
                alt="Mark Ivancic"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600/10 rounded-lg" />
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">
              <strong>Inspiring Educator:</strong> Mark has delivered bullying prevention presentations to multiple schools across his school division and beyond, reaching hundreds of students with messages of empathy, respect, and resilience. His experience in addressing youth challenges, combined with his personal journey of overcoming adversity, makes him a powerful voice for positive change in educational communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
