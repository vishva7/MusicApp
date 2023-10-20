import React, { useState } from 'react';
const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    
    <div>
      <div className="bg-black rounded-lg shadow-lg w-64" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <div className="px-3 pb-3 pt-3">
      <img src="/album1.webp" alt="Card Image" className="w-full h-full object-cover rounded-t-lg" />
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">Olivia Rodrigo Mix</h2>
        {/* <p className="text-gray-600 mt-2 text-white">Olivia Rodrigo Mix</p> */}
        <a href="#" className="text-blue-500 mt-4 inline-block">Conon Gray, One Direction and Billie Eillish</a>
        
      </div>
      {isHovered ? (
        <>
      <div className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-blue-500 p-2 rounded-full">
            ▶️
          </div>
      </>
      ) : null}
    </div>
  </div>
  );
};


export default Card;
