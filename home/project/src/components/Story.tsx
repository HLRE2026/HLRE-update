export default function Story() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mark's Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mark Ivancic's journey is one of transformation and inspiration. Through personal challenges and triumphs, he discovered the power of hope, love, and resilience. This discovery led to the creation of the Hope, Love, Resilience Expedition, a mission to share these transformative principles with others facing their own challenges.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, Mark travels the world sharing his story and empowering others to overcome their obstacles through the principles of HLRE. His work has touched thousands of lives and continues to inspire change across communities.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Read Full Story
            </button>
          </div>
          <div className="relative">
            <img
              src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBejNiRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3fdb6ae28a546d06f65614dde2898793d0650117/everart-image.png"
              alt="Mark Ivancic"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}