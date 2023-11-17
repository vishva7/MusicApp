import React, { useState } from "react";

const Player = () => {
  // Sample audio file URL
  const audioUrl = "MusicApp\public\Quinn XCII - Intro (Slow).mp3";

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="text-white hover:text-blue-500 focus:outline-none"
        >
          {/* {isPlaying ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 19A9 9 0 1 1 10 1a9 9 0 0 1 0 18zM10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM7 6a1 1 0 0 1 1.554-.832l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 7 14V6z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm15.707 1.293a1 1 0 0 1 1.414 1.414A9.956 9.956 0 0 1 18 10a9.956 9.956 0 0 1-2.293 6.293A1 1 0 0 1 14.88 17l-6-4a1 1 0 0 1 0-1.664l6-4a1 1 0 0 1 1.414 1.414L9.414 10l6.293 4.293z"
              />
            </svg>
          )} */}
        </button>
        {/* <span className="ml-2 text-white">Audio Title</span> */}
      </div>

      <audio
  src={"/Quinn XCII - Intro (Slow).mp3"}
  controls

  style={{
    width: "100%", // Adjust the width as needed
    marginTop: "8px",
    backgroundColor:"black", // Adjust the margin-top as needed
  }}
></audio>

    </div>
  );
};

export default Player;
