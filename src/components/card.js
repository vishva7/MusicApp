import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Card = ({ Album, id }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const history = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  const handleClick = (index) => {
    history(`/playlist${index+1}`); // Replace "/new-page" with the path of the page you want to navigate to
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {Album.map((Al, index) => (
        <div
          className="relative bg-black rounded-lg shadow-lg md:w-48"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{handleClick(index)}}
          key={index}
        >
          <div className="px-3 pb-3 pt-3">
            <img
              src={Al.img}
              alt="Card Image"
              className="w-full h-full flex object-cover rounded-t-lg"
            />

            {hoveredCardIndex === index && (
              <div className="play-button absolute top-1 mt-32 ml-[7.8rem] bg-black py-2 px-2 rounded-full">
                <BsFillPlayFill color="blue" size={25} />
              </div>
            )}
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