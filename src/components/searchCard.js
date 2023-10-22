// import React, { useRef, useState } from "react";
const SearchCard = ({search}) => {
  return (
    <div className="grid grid-cols-7 gap-2">
    {search.map((SE) => (
    <div className="w-40 h-40 bg-[#27856A] rounded-lg pl-3 pt-3">
      
        <b>{SE.title}</b>
      
    </div>
    ))}
    </div>
  );
};

export default SearchCard;
