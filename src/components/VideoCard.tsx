import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  embedId: string;
  description: string;
}

export default function VideoCard({ title, embedId, description }: VideoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video bg-gray-100">
        {!isLoaded ? (
          <button
            onClick={handleLoad}
            className="relative w-full h-full group"
            aria-label={`Play video: ${title}`}
          >
            {/* Thumbnail Image */}
            <img
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== fallbackThumbnailUrl) {
                  target.src = fallbackThumbnailUrl;
                }
              }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-emerald-600 rounded-full p-4 shadow-lg group-hover:bg-emerald-700 group-hover:scale-110 transition-all duration-300">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
            
            {/* Video title on thumbnail */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                {title}
              </h3>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      
      <div className="p-4">
        {!isLoaded && (
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        )}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}