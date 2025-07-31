import React from 'react';
import { Track } from '../types';
import { getColorClasses, combineClasses } from '../utils/colorUtils';

interface TrackListProps {
  tracks: Track[];
  categoryColor: string;
}

export const TrackList: React.FC<TrackListProps> = ({ tracks, categoryColor }) => {
  const colorClasses = getColorClasses(categoryColor);

  const handlePlayTrack = (track: Track) => {
    // Placeholder for play functionality
    console.log(`Playing track: ${track.name}`);
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-3">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className={combineClasses(
            // Base styles
            'p-4 rounded-xl border-2 transition-all duration-300 group',
            'hover:shadow-lg transform hover:scale-[1.01]',
            // Dynamic color classes using safe approach
            colorClasses.background,
            colorClasses.backgroundHover,
            colorClasses.border
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              {/* Track Number */}
              <div className={combineClasses(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold',
                colorClasses.background,
                colorClasses.text
              )}>
                {index + 1}
              </div>
              
              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h4 className={combineClasses(
                  'font-semibold text-lg mb-1 transition-colors truncate',
                  colorClasses.text,
                  colorClasses.textHover
                )}>
                  {track.name}
                </h4>
                <p className="text-gray-600 text-sm truncate">
                  {track.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-gray-500">
                    {formatDuration(track.duration)}
                  </span>
                  {track.type && (
                    <span className={combineClasses(
                      'text-xs px-2 py-1 rounded-full',
                      colorClasses.background,
                      colorClasses.text
                    )}>
                      {track.type}
                    </span>
                  )}
                  {track.bpm && (
                    <span className="text-xs text-gray-500">
                      {track.bpm} BPM
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={() => handlePlayTrack(track)}
              className={combineClasses(
                // Base styles
                'ml-4 p-3 rounded-full transition-all duration-300 group',
                'hover:scale-110 focus:outline-none focus:ring-2',
                // Dynamic color classes
                colorClasses.background,
                colorClasses.backgroundHover,
                colorClasses.focusRing
              )}
              aria-label={`Play ${track.name}`}
            >
              <svg 
                className={combineClasses(
                  'w-6 h-6 transition-colors',
                  colorClasses.text
                )} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          {/* Track Waveform Placeholder */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-1 h-8">
              {Array.from({ length: 40 }, (_, i) => (
                <div
                  key={i}
                  className={combineClasses(
                    'flex-1 rounded-full opacity-30 transition-all duration-300',
                    colorClasses.background.replace('/10', '/40')
                  )}
                  style={{
                    height: `${Math.random() * 100 + 10}%`,
                    minHeight: '4px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};