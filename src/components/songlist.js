import { useState, useRef, useEffect } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Player from "./player";



const Songlist = ({ song, index }) => {
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [ishover, setHover] = useState(null);

  // Retrieve state from localStorage on component mount
  useEffect(() => {
    const storedIndex = localStorage.getItem("currentSongIndex");
    const storedIsPlaying = localStorage.getItem("isPlaying");

    if (storedIndex !== null && storedIsPlaying !== null) {
      setCurrentSongIndex(parseInt(storedIndex));
      setIsPlaying(storedIsPlaying === "true");
    }
  }, []);

  // Store state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentSongIndex", currentSongIndex);
    localStorage.setItem("isPlaying", isPlaying);
  }, [currentSongIndex, isPlaying]);

  const playMusic = (songIndex) => {
    if (isPlaying && currentSongIndex === songIndex) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentSongIndex(songIndex);
      setIsPlaying(true);
      audioRef.current.src = song[songIndex].src;
      audioRef.current.play();
    }
  };

  const handleEntry = (index) => {
    setHover(index);
  };

  const handleExit = () => {
    setHover(null);
  };

  return (
    <div>
      {song.map((S, songIndex) => (
        <div
          className="h-20"
          onMouseEnter={() => handleEntry(songIndex)}
          onMouseLeave={handleExit}
          key={songIndex}
        >
          <div className="flex md:w-full md:ml-[-1rem] h-16 mb-2 p-2 text-white bg-gray-700">
            {ishover === songIndex && (
              <div className="w-4 h-2">
                <button onClick={() => playMusic(songIndex)}>
                  {isPlaying && currentSongIndex === songIndex ? (
                    <BsFillPauseFill size={20} />
                  ) : (
                    <BsFillPlayFill size={20} />
                  )}
                </button>
              </div>
            )}
            {ishover !== songIndex && <div className="w-4 h-2">{S.id}</div>}
            
            <div className="ml-[0.6rem] inline-flex items-center flex-shrink-0 w-[3.5rem] h-12 ">
              <img src="/tsrep.png" alt="album cover"></img>
            </div>
            <span className="sr-only">Info</span>
            <div className="ml-3 w-80 text-sm font-medium">{S.title}</div>
            <div className="ml-12 grid grid-cols-5 gap-5">
              <div>{S.album}</div>
              <div>{S.date}</div>
              <div className="ml-20">
                {ishover == songIndex && (
                  <div className="w-4 h-2">
                    <BsSuitHeart />
                  </div>
                )}
                {ishover !== songIndex && <div className="w-4 h-2"></div>}
                <div className="ml-12 w-12">{S.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <audio
        ref={audioRef}
        controls
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 1000,
        }}
      ></audio>
    </div>
  );
};

export default Songlist;