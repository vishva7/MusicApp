import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import Title from "../components/title";
import Footer from "../components/footer";
import { useState } from "react";
function Prelogin() {
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
      <Card Album={Album} id={Album.id} />
      <div>{/* <Footer/> */}</div>
    </div>
  );
}

export default Prelogin;
