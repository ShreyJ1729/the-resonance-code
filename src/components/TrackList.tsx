import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Category, Track, MainCategory } from '../types';
import { iconMap } from './icons';
import { getColorClasses, getHexColorStyles } from '../utils/colorMapping';

// YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

// Wake Lock API types
interface WakeLockSentinel {
  released: boolean;
  type: string;
  release(): Promise<void>;
  addEventListener(type: string, listener: EventListener): void;
  removeEventListener(type: string, listener: EventListener): void;
}

// Wake Lock API - Using any to avoid conflicts with existing types
declare const navigator: any;

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
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [loopMode, setLoopMode] = useState<'single' | 'playlist'>('playlist');
  const [player, setPlayer] = useState<any>(null);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  const [wakeLockSupported, setWakeLockSupported] = useState<boolean>(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const IconComponent = iconMap[(subCategory.icon || category.icon) as keyof typeof iconMap];
  const subCategoryColor = subCategory.color || category.color;
  const isHexColor = subCategoryColor.startsWith('#');
  const colorClasses = isHexColor ? getColorClasses(category.color) : getColorClasses(subCategoryColor);
  const hexStyles = isHexColor ? getHexColorStyles(subCategoryColor) : null;
  
  // For background, use subcategory's own color classes if it's not hex, otherwise use hex styles
  const bgColorClasses = subCategory.color && !isHexColor ? getColorClasses(subCategory.color) : colorClasses;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const handleTrackSelect = (track: Track, index: number) => {
    const wasSelected = selectedTrack?.url === track.url;
    if (wasSelected) {
      setSelectedTrack(null);
      releaseWakeLock();
    } else {
      setSelectedTrack(track);
      setCurrentTrackIndex(index);
      setUserInteracted(true); // Mark that user has interacted
    }
  };

  const handleNextTrack = useCallback(() => {
    const nextIndex = (currentTrackIndex + 1) % subCategory.tracks.length;
    setCurrentTrackIndex(nextIndex);
    setSelectedTrack(subCategory.tracks[nextIndex]);
  }, [currentTrackIndex, subCategory.tracks]);

  const handlePrevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? subCategory.tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setSelectedTrack(subCategory.tracks[prevIndex]);
  };

  // Wake lock functions
  const requestWakeLock = async () => {
    if (!wakeLockSupported || wakeLock) return;
    
    try {
      const newWakeLock = await navigator.wakeLock!.request('screen');
      setWakeLock(newWakeLock);
      console.log('Wake lock acquired');
      
      newWakeLock.addEventListener('release', () => {
        console.log('Wake lock released');
        setWakeLock(null);
      });
    } catch (err) {
      console.error('Failed to acquire wake lock:', err);
    }
  };

  const releaseWakeLock = async () => {
    if (wakeLock) {
      try {
        await wakeLock.release();
        setWakeLock(null);
      } catch (err) {
        console.error('Failed to release wake lock:', err);
      }
    }
  };

  // Check wake lock support and load YouTube API
  useEffect(() => {
    // Check wake lock support
    setWakeLockSupported('wakeLock' in navigator);
    
    // Load YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      
      window.onYouTubeIframeAPIReady = () => {
        console.log('YouTube API loaded');
      };
    }
  }, []);

  // Initialize YouTube player when track is selected
  useEffect(() => {
    if (selectedTrack && playerRef.current && window.YT) {
      const videoId = getYouTubeVideoId(selectedTrack.url);
      if (videoId) {
        // Destroy existing player
        if (player) {
          player.destroy();
        }

        // Create new player with mobile-optimized settings
        const newPlayer = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: userInteracted ? 1 : 0, // Only autoplay after user interaction
            playsinline: 1, // Critical for iOS Safari
            rel: 0,
            loop: loopMode === 'single' ? 1 : 0,
            playlist: loopMode === 'single' ? videoId : undefined,
            controls: 1, // Show controls for mobile users
            modestbranding: 1,
            origin: window.location.origin, // Required for iframe API
          },
          events: {
            onReady: (event: any) => {
              console.log('YouTube player ready');
              // If user has interacted and autoplay is 0, manually play
              if (userInteracted && !playerRef.current?.querySelector('iframe')?.src.includes('autoplay=1')) {
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
              if (event.data === 1) { // Playing
                requestWakeLock();
              } else if (event.data === 2 || event.data === 0) { // Paused or ended
                if (event.data === 0 && loopMode === 'playlist') {
                  console.log('Video ended, advancing to next track');
                  handleNextTrack();
                } else if (event.data === 2) {
                  releaseWakeLock();
                }
              }
            },
            onError: (event: any) => {
              console.error('YouTube player error:', event.data);
              releaseWakeLock();
            },
          },
        });

        setPlayer(newPlayer);
      }
    }
  }, [selectedTrack, loopMode, handleNextTrack]);

  // Cleanup player and wake lock on unmount
  useEffect(() => {
    return () => {
      if (player) {
        player.destroy();
      }
      releaseWakeLock();
    };
  }, [player]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors mr-4"
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
          <div 
            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              isHexColor ? '' : bgColorClasses.bgLight
            }`}
            style={hexStyles ? { backgroundColor: hexStyles.bgColorLight } : undefined}
          >
            {IconComponent && (
              <IconComponent 
                size={32} 
                className={hexStyles ? '' : colorClasses.text}
                style={hexStyles ? { color: hexStyles.textColor } : undefined}
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
          <div className="mb-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                    Now Playing
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {selectedTrack.title}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                    Track {currentTrackIndex + 1} of {subCategory.tracks.length} • {loopMode === 'single' ? 'Single track loop' : 'Auto-playlist enabled'}
                    {wakeLock && ' • Screen stay awake'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLoopMode(loopMode === 'single' ? 'playlist' : 'single')}
                    className={`p-2 rounded transition-colors ${
                      loopMode === 'single' 
                        ? `${colorClasses.bgLight} ${colorClasses.text}` 
                        : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                    }`}
                    title={loopMode === 'single' ? 'Switch to auto-playlist mode' : 'Switch to single track loop'}
                  >
                    {(() => {
                      const IconComponent = loopMode === 'single' 
                        ? iconMap["repeat-1"]
                        : iconMap["list-music"];
                      return <IconComponent size={20} />;
                    })()}
                  </button>
                  <button
                    onClick={handlePrevTrack}
                    className="p-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                    title="Previous Track"
                    disabled={loopMode === 'single'}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 4l-8 6 8 6V4zM6 4h2v12H6V4z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextTrack}
                    className="p-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                    title="Next Track"
                    disabled={loopMode === 'single'}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 4v12l8-6-8-6zM12 4h2v12h-2V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="aspect-video">
              {getYouTubeVideoId(selectedTrack.url) ? (
                <div
                  ref={playerRef}
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
                  <p className="text-neutral-500 dark:text-neutral-400">Invalid video URL</p>
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
                onClick={() => handleTrackSelect(track, index)}
                className={`w-full text-left bg-white dark:bg-neutral-800 rounded-xl transition-all duration-300 p-3 sm:p-4 border focus:outline-none focus:ring-2 focus:ring-offset-2 group ${
                  isSelected 
                    ? `${colorClasses.border} shadow-card-hover ring-2 ${colorClasses.ring}` 
                    : 'border-neutral-100 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 shadow-card hover:shadow-card-hover'
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
                        isSelected ? colorClasses.text : 'text-neutral-800 dark:text-neutral-200'
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

      </div>
    </div>
  );
};