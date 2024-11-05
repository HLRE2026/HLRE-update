export default function Story() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mark's Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mark Ivancic's journey is a powerful testament to resilience, transformation, and the unwavering strength of the human spirit. A beloved teacher, musician, and community leader, Mark inspired countless lives through his adventurous spirit and compassionate heart. But in 2018, his life took an unexpected turn when he suffered a severe stroke that left him with partial paralysis, challenging him to rebuild his life from the ground up.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Determined to overcome these obstacles, Mark discovered the profound impact of hope, love, and resilience. This newfound purpose became the foundation of the Hope, Love, & Resilience Expedition (HLRE)—a mission to inspire and empower others facing life's toughest challenges. Through the HLRE, Mark shares his story of recovery, strength, and courage, reminding us all that no matter the hardship, there's always a way forward.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Mark is on a mission to make a difference. Traveling across communities and sharing his story, he inspires others to embrace resilience and find purpose in their journeys. His work has touched thousands of lives and continues to ignite hope and positive change wherever he goes.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBejNiRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3fdb6ae28a546d06f65614dde2898793d0650117/everart-image.png"
              alt="Mark Ivancic"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-primary-600/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}