import React, { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import Songlist from "./songlist";
import {
  BrowserRouter as Router,
  Route,Routes,
  Switch,useNavigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Card = ({ Album, id }) => {
  const [isHovered, setIsHovered] = useState(null);
  const history = useNavigate();
  function handleClick() {
    history("/songlist"); // Replace "/new-page" with the path of the page you want to navigate to
  }

  

  return (
    <div className="grid grid-cols-5 gap-2">
      {Album.map((Al) => (
        <div
          className="relative bg-black rounded-lg shadow-lg md:w-48"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          
          <div className="px-3 pb-3 pt-3">
            <img
              src={Al.img}
              alt="Card Image"
              className="w-full h-full flex object-cover rounded-t-lg"
            />
             
            
            {isHovered == true ? (
              <>
                <div className="play-button absolute top-1 mt-32 ml-[7.8rem] bg-black py-2 px-2 rounded-full">
                  <BsFillPlayFill color="blue" size={25} />
                </div>
              </>
            ) : null}
          </div>

          <div className="p-2 px-4">
            <h2 className="text-lg font-semibold text-white">{Al.title}</h2>
            <a href="#" className="text-blue-500 mt-2 inline-block text-sm">
              {Al.author}
            </a>
          </div>
        </div>
        
      ))}
    </div>
  );
};
export default Card;
