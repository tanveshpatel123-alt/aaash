
import React, { useState, useRef, useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const videoId = "3NycM9lYdRI"; // YouTube ID for Tum Hi Ho (Aashiqui 2)

  useEffect(() => {
    // Load YouTube IFrame API script if not already present
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current) return;
      
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            setupInteractionTrigger();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        }
      });
    }

    const setupInteractionTrigger = () => {
      const attemptPlay = () => {
        if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
          window.removeEventListener('click', attemptPlay);
          window.removeEventListener('touchstart', attemptPlay);
          window.removeEventListener('scroll', attemptPlay);
        }
      };

      window.addEventListener('click', attemptPlay);
      window.addEventListener('touchstart', attemptPlay);
      window.addEventListener('scroll', attemptPlay);
    };

    return () => {
      // Clean up listeners if component unmounts
      window.removeEventListener('click', () => {});
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex items-center group">
      {/* Hidden YouTube Player */}
      <div id="youtube-player" className="absolute opacity-0 pointer-events-none"></div>
      
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 backdrop-blur-md border border-white/40 ${
          isPlaying 
            ? 'bg-rose-500 text-white animate-pulse' 
            : 'bg-white/60 text-rose-500 hover:bg-rose-100'
        }`}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      
      <div className="ml-3 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs">
        <span className="text-xs font-medium text-rose-900 bg-white/60 px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-sm border border-white/30 shadow-sm">
          {isPlaying ? "Playing: Tum Hi Ho" : "Play Our Song"}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
