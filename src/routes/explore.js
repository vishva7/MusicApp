import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/card";
import SearchCard from "../components/searchCard";
import Title from "../components/title";
import { useState } from "react";
import SearchPage from "./searchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Explore() {
  const [titlecard, setTitlecard] = useState([
    { title: "Reputation", id: 1, img: "/tsrep.png" },
    { title: "Rap Caviar", id: 2, img: "/tsrep.png" },
    { title: "All Out 2010s", id: 3, img: "/tsrep.png" },
    { title: "Rock Classics", id: 4, img: "/tsrep.png" },
    { title: "Chill Hits", id: 5, img: "/tsrep.png" },
    { title: "Chill Hits", id: 5, img: "/tsrep.png" },
  ]);
  const [Album, setAlbum] = useState([
    {
      title: "Today's Top Hits",
      body: "Katniss",
      author: "Drake on top of the Hottest 50!",
      id: 1,
      img: "/album1.webp",
    },
    {
      title: "Rap Caviar",
      body: "Peeta",
      author: "Music from Lil Tecca,Lil Uzi Vert and Gucci Mane",
      id: 2,
      img: "/album1.webp",
    },
    {
      title: "All Out 2010s",
      body: "Prim",
      author: "The biggest songs of the 2010s",
      id: 3,
      img: "/album1.webp",
    },
    {
      title: "Rock Classics",
      body: "Snow",
      author: "Rock legends & epic songs that continue to inspire",
      id: 4,
      img: "/album1.webp",
    },
    {
      title: "Chill Hits",
      body: "Viona",
      author: "Kick back to the best new and recent chill...",
      id: 4,
      img: "/album1.webp",
    },
  ]);
  return (
    <div className="encl">
      <p>
        <b>Good Afternnoon!</b>
      </p>
      <div>
        <Title titlecard={titlecard} />
      </div>

      <div className="pt-12">
        <div className="text-white pb-4 text-3xl">
          <p>
            <b>Top Mixes:</b>
          </p>

          <Card Album={Album} id={Album.id} />
        </div>
      </div>
    </div>
  );
}

export default Explore;
