import React, { useState } from 'react';
import type { Category, Track, MainCategory } from '../types';
import { iconMap } from './icons';
import { getColorClasses } from '../utils/colorMapping';

interface TrackListProps {
  category: MainCategory;
  subCategory: Category;
  onBack: () => void;
}

export const TrackList: React.FC<TrackListProps> = ({
  category,
  subCategory,
  onBack,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
  const colorClasses = getColorClasses(category.color);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(selectedTrack?.url === track.url ? null : track);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-neutral-600 hover:text-neutral-800 transition-colors mr-4"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M12 4L6 10L12 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 text-sm">Back</span>
          </button>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colorClasses.bgLight} flex items-center justify-center`}>
            {IconComponent && (
              <IconComponent 
                size={32} 
                className={colorClasses.text}
              />
            )}
          </div>
          <h1 className="text-2xl font-light text-neutral-800 dark:text-neutral-200 mb-2">
            {subCategory.name}
          </h1>
          {category.name === "Binaural Beats" && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
              Binaural beats require headphones to be effective
            </p>
          )}
        </div>

        {/* YouTube Player */}
        {selectedTrack && (
          <div className="mb-8 bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-neutral-100">
              <h3 className="text-lg font-medium text-neutral-800 mb-2">
                Now Playing
              </h3>
              <p className="text-neutral-600">
                {selectedTrack.title}
              </p>
            </div>
            <div className="aspect-video">
              {getYouTubeVideoId(selectedTrack.url) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedTrack.url)}?autoplay=1&rel=0`}
                  title={selectedTrack.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                  <p className="text-neutral-500">Invalid video URL</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Track List */}
        <div className="space-y-3">
          {subCategory.tracks.map((track, index) => {
            const isSelected = selectedTrack?.url === track.url;
            
            return (
              <button
                key={`${track.title}-${index}`}
                onClick={() => handleTrackSelect(track)}
                className={`w-full text-left bg-white rounded-xl transition-all duration-300 p-3 sm:p-4 border focus:outline-none focus:ring-2 focus:ring-offset-2 group ${
                  isSelected 
                    ? `${colorClasses.border} shadow-card-hover ring-2 ${colorClasses.ring}` 
                    : 'border-neutral-100 hover:border-neutral-200 shadow-card hover:shadow-card-hover'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    {/* Play/Pause Icon */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 ${
                      isSelected 
                        ? `${colorClasses.bgHover} ${colorClasses.text}` 
                        : `bg-neutral-100 text-neutral-400 group-hover:${colorClasses.bgLight} group-hover:${colorClasses.text}`
                    }`}>
                      {isSelected ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <rect x="3" y="2" width="3" height="12" rx="1" />
                          <rect x="10" y="2" width="3" height="12" rx="1" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M4 2l10 6-10 6V2z" />
                        </svg>
                      )}
                    </div>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm sm:text-base font-medium truncate transition-colors ${
                        isSelected ? colorClasses.text : 'text-neutral-800'
                      }`}>
                        {track.title}
                      </h4>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isSelected 
                      ? colorClasses.bg 
                      : 'bg-neutral-300 group-hover:bg-neutral-400'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-medium text-neutral-800 mb-3">
              How to Use
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Click on any track to start playing. Use headphones for the best binaural beats experience. 
              Find a comfortable position and allow the frequencies to guide your healing journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};