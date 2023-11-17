import { useState,useRef } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Player from "./player";
const Songlist = ({song,index}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play(); // Start playing
      } else {
        audioRef.current.pause(); // Pause if it's already playing
      }
    }
  };
 
  const [ishover, setHover] = useState(null);
  const handleentry = (index) => {
    setHover(index);
  };

  const handleexit = () => {
    setHover(null);
  };
  return (
  
    <div >
      {song.map((S,songIndex) => (
    <div className="h-20"
      onMouseEnter={() => handleentry(songIndex)}
      onMouseLeave={ handleexit}
      key={songIndex}
    >
     
        
        <div
          
          class="  flex md:w-full md:ml-[-1rem] h-16 mb-2 p-2 text-white  bg-gray-700 "
        >
           {ishover == songIndex&& (<div className="w-4 h-2">
           <button onClick={playMusic}> <BsFillPlayFill size={20} /></button>
          </div>)}
          {ishover != songIndex&& (<div className="w-4 h-2">
            {S.id}
          </div>)}
          <div class="ml-[0.6rem] inline-flex items-center flex-shrink-0  w-[3.5rem] h-12 ">
            <img src="/tsrep.png"></img>
          </div>
          <span class="sr-only">Info</span>

          <div class="ml-3 w-80 text-sm font-medium">{S.title}</div>
          <div className=" ml-12 grid grid-cols-5 gap-5">
            <div>{S.album}</div>
            <div>{S.date}</div>
           
            <div className="ml-20">
            {ishover == songIndex&& (<div className="w-4 h-2">
              <BsSuitHeart />
            </div>)}
            {ishover != songIndex&& (<div className="w-4 h-2">
              
            </div>)}
            <div className=" ml-12 w-12">
              {S.time}
            </div>
          </div>
        </div>
     
      </div>
      <audio
        ref={audioRef} // Assign the reference to the audio element
        src={S.src}
        controls
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          backgroundColor: "black",
          zIndex: 1000,
        }}
      ></audio>

    </div>
    
     ))}
     
      
     export default ;
      
     </div>
    
   
  
  );
};

export default Songlist;
