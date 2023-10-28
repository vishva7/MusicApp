import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
const Songlist = ({song}) => {
  const [ishover, setHover] = useState(null);
  return (
    <div>
      {song.map((S) => (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {ishover == false ? (
        <div
          id="alert-1"
          class="  flex  w-full ml-0 mb-2 p-2 text-white  bg-gray-700 "
        >
          <div className="w-4">
          1
          </div>
          <div class="ml-[0.7rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
            <img src={S.img}></img>
          </div>
          <span class="sr-only">Info</span>
          <div class="ml-3 font-medium">{S.title}</div>
          <div className="grid md:grid-cols-4 gap-72 ">
            <div className="ml-40">{S.album}</div>
            <div className="ml-4">{S.date}</div>
            <div></div>
            <div classname="ml-20">
              <button classname="ml-20">{S.time}</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="alert-1"
          class="  flex  w-full ml-0 mb-2 p-2 text-white  bg-gray-700 "
        >
          <div>
            <BsFillPlayFill size={20} />
          </div>
          <div class="ml-[0.7rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
            <img src="/tsrep.png"></img>
          </div>
          <span class="sr-only">Info</span>

          <div class="ml-3 text-sm font-medium">{S.title}</div>
          <div className="grid grid-cols-4 gap-72">
            <div className="ml-40">{S.album}</div>
            <div className="ml-4">{S.date}</div>
            <div>
              <BsSuitHeart />
            </div>
            <div>
              <button>{S.time}</button>
            </div>
          </div>
        </div>
      )}
    </div>
    ))}
    </div>
  );
};

export default Songlist;
