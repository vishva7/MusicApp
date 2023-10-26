// import React, { useRef, useState } from "react";
const SearchCard = ({ search }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {search.map((SE) => (
        <div
          //   className={`w-40 h-40 bg-${SE.color} rounded-lg pl-3 pt-3`}
          style={{
            width: "160px",
            height: "160px",
            backgroundColor: SE.color,
            borderRadius: "8px",
            paddingLeft: "12px",
            paddingTop: "12px",
            fontFamily:
              "var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
            fontSize: "22px",
            color: "white",
          }}
          key={SE.id}
        >
          <b>{SE.title}</b>
        </div>
      ))}
    </div>
  );
};

export default SearchCard;
