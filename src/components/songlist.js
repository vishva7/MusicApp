import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
const Songlist = ({song,index}) => {
 
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
           {ishover == songIndex&& (<div className="w-3 h-2">
            <BsFillPlayFill size={20} />
          </div>)}
          {ishover != songIndex&& (<div className="w-3 h-2">
            {S.id}
          </div>)}
          <div class="ml-[0.6rem] inline-flex items-center flex-shrink-0  w-[3.5rem] h-12 ">
            <img src="/tsrep.png"></img>
          </div>
          <span class="sr-only">Info</span>

          <div class="ml-3 w-80 text-sm font-medium">{S.title}</div>
          <div className="grid grid-cols-5 gap-5">
            <div>{S.album}</div>
            <div>{S.date}</div>
           
            <div w-4 h->
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
    </div>
     ))}
     </div>
    
   
  
  );
};

export default Songlist;
