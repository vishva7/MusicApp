import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
const Songlist = () => {
  const [ishover, setHover] = useState(null);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {ishover == false ? (
        <div
          id="alert-1"
          class="  flex  w-3/4 ml-20 mb-2 p-2 text-white  bg-gray-700 "
        >
          1
          <div class="ml-[0.7rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
            <img src="/tsrep.png"></img>
          </div>
          <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium">Gorgeous Taylor Swift</div>
          <div className="grid grid-cols-4 gap-48">
            <div className="ml-40">Reputation</div>
            <div className="ml-4">13 October</div>
            <div></div>
            <div classname="ml-20">
              <button classname="ml-20">2:11</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="alert-1"
          class="  flex  w-3/4 ml-20 mb-2 p-2 text-white  bg-gray-700 "
        >
          <div>
            <BsFillPlayFill size={20} />
          </div>
          <div class="ml-[0.7rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
            <img src="/tsrep.png"></img>
          </div>
          <span class="sr-only">Info</span>

          <div class="ml-3 text-sm font-medium">Gorgeous Taylor Swift</div>
          <div className="grid grid-cols-4 gap-72">
            <div className="ml-40">Reputation</div>
            <div className="ml-4">13 October</div>
            <div>
              <BsSuitHeart />
            </div>
            <div>
              <button>2:11</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Songlist;
