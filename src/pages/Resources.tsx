const books = [
  {
    title: "Hope Love & Resilience Expedition",
    image: "https://m.media-amazon.com/images/I/71gRcSULmEL._SY466_.jpg",
    publishDate: "December 4, 2020",
    link: "https://www.amazon.ca/Hope-Love-Resilience-Expedition/dp/1989849075/"
  },
  {
    title: "Stroke of Midnight: Still Bamma Slamma",
    image: "https://m.media-amazon.com/images/I/71EOklGQZ6L._SY466_.jpg",
    publishDate: "2021",
    link: "https://www.amazon.ca/Stroke-Midnight-Still-Bamma-Slamma/dp/0228810108/"
  }
];

const recoveryVideos = [
  {
    title: "Road to Recovery Tour 2018",
    embedId: "L1XeBLvBCAI",
    description: "The beginning of Mark's recovery journey after his stroke."
  },
  {
    title: "Post-Stroke Skating",
    embedId: "LNwyIHxVN6I",
    description: "Mark returns to the ice, demonstrating remarkable progress in his recovery."
  },
  {
    title: "Post-Stroke Climb of Morro's Peak",
    embedId: "S4-3HqL5hAE",
    description: "A significant milestone in Mark's recovery journey."
  },
  {
    title: "Holding Strong",
    embedId: "EbMAuDB1ELk",
    description: "A testament to perseverance and determination."
  },
  {
    title: "The Ivy Canyon Project",
    embedId: "2JJXbbLC60M",
    description: "Exploring new challenges and pushing boundaries."
  },
  {
    title: "Road to Barry's Recovery Tour '22",
    embedId: "HWg8I_Rf3p0",
    description: "Continuing the journey of recovery and inspiration."
  },
  {
    title: "Hope Knows No Bounds",
    embedId: "EY94r-6Gs58",
    description: "A message of limitless possibilities and perseverance."
  },
  {
    title: "Hope 'n Love Instillin",
    embedId: "cXD5qQ_SCXs",
    description: "Sharing the message of hope and love."
  },
  {
    title: "Hope - Part 1 HLRE Series",
    embedId: "sZ7_2eIjGOs",
    description: "First part of the HLRE documentary series."
  },
  {
    title: "Love - Part 2 HLRE Series",
    embedId: "vKn1TjMz-sQ",
    description: "Second part of the HLRE documentary series."
  }
];

const musicVideos = [
  {
    title: "Enough - 400 Student Cup Song",
    embedId: "qzueBTBKTZU",
    description: "Original song accompanied by 400 students using solo cups as percussion."
  },
  {
    title: "Stony Plain Christmas",
    embedId: "xSAqQKSUH1w",
    description: "Original Christmas song highlighting the town of Stony Plain, performed with the Meridian Heights school choir."
  },
  {
    title: "Holding Strong - Little Warriors",
    embedId: "EEP_aNN3rMo",
    description: "Song written for Little Warriors, performed by Tea Gonzales."
  },
  {
    title: "Children of Ecuador Benefit Concert",
    embedId: "_oAzjLBixxQ",
    description: "Hosting a benefit concert supporting youth in Ecuador."
  }
];

export default function Resources() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Books Section */}
        <section className="mb-16 bg-gray-50 py-12 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Books by Mark Ivancic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {books.map((book) => (
                <div key={book.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-48 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-4">Published: {book.publishDate}</p>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Videos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Recovery Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recoveryVideos.map((video) => (
              <div key={video.title} className="bg-white rounded-lg shadow-lg p-6 border border-primary-100">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[400px] rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Music Videos Section */}
        <section className="bg-secondary-50 py-12 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Musical Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {musicVideos.map((video) => (
                <div key={video.title} className="bg-white rounded-lg shadow-lg p-6 border border-secondary-100">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[400px] rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}