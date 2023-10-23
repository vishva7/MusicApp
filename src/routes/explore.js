import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/card";
import SearchCard from "../components/searchCard";
import Title from "../components/title";
import {useState} from 'react'; 

function Explore() {
    const [search,setSearch]=useState([{title:"Podcasts",id:1, color:'#27856A'},
  {title:"Live Events",id:2, color:'#283EA3'},
  {title:"Made For You",id:3, color:'#1E3264'},
  {title:"New Releases",id:4, color:'#8D67AB'},
  {title:"Hindi",id:5, color:'#E8115B'},
  {title:"Punjabi",id:6, color:'#8D67AB'},
  {title:"Tamil",id:7, color:'#7358FF'},
  {title:"Telugu",id:8, color:'#B49BC8'},
  {title:"Charts",id:9, color:'#F037A5'},
  {title:"Pop",id:10, color:'#9CF0E1'},
  {title:"Indie",id:11, color:'#E1118B'},
  {title:"Trending",id:12, color:'#D7F27D'},
  {title:"Love",id:13, color:'#283EA3'},
  {title:"Discover",id:14, color:'#777777'},
  {title:"Mood",id:15, color:'#DC148C'},
  {title:"Party",id:16, color:'#283EA3'},
  {title:"Devotional",id:17, color:'#1E3264'},
  {title:"Decades",id:18, color:'#B49BC8'},
  {title:"Hip-Hop",id:19, color:'#E1118B'},
  {title:"Electronic",id:20, color:'#8D67AB'},
  {title:"Student",id:21, color:'#D7F27D'},
  {title:"Chill",id:22, color:'#E8115B'},
  {title:"Gaming",id:23, color:'#8D67AB'},
  {title:"K-Pop",id:24, color:'#9CF0E1'},
  {title:"Workout",id:25, color:'#7358FF'},
  {title:"Radar",id:26, color:'#777777'},
  {title:"Equal",id:27, color:'#D7F27D'},
  {title:"Rock",id:28, color:'#F037A5'}

  ])
  const [titlecard,setTitlecard]=useState([
  {title:"Reputation",id:1,img:"/tsrep.png"},
  {title:"Rap Caviar",id:2,img:"/tsrep.png"},
  {title:"All Out 2010s",id:3,img:"/tsrep.png"},
  {title:"Rock Classics",id:4,img:"/tsrep.png"},
  {title:"Chill Hits",id:5,img:"/tsrep.png"},
  {title:"Chill Hits",id:5,img:"/tsrep.png"}

  ])
  const [Album,setAlbum]=useState([{title:"Today's Top Hits",body:"Katniss",author:"Drake on top of the Hottest 50!",id:1,img:"/album1.webp"},
  {title:"Rap Caviar",body:"Peeta",author:"Music from Lil Tecca,Lil Uzi Vert and Gucci Mane",id:2,img:"/album1.webp"},
  {title:"All Out 2010s",body:"Prim",author:"The biggest songs of the 2010s",id:3,img:"/album1.webp"},
  {title:"Rock Classics",body:"Snow",author:"Rock legends & epic songs that continue to inspire",id:4,img:"/album1.webp"},
  {title:"Chill Hits",body:"Viona",author:"Kick back to the best new and recent chill...",id:4,img:"/album1.webp"}
  ])
    return ( 
        <div className="encl">
      <div className="div1">
        <Sidebar/>
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar/>
        <div className="pt-12">
        <Title  titlecard={titlecard}/>
        </div>
        <div className="pt-20"> 
        <Card Album={Album} id={Album.id}/>
        </div>
        {/* <SearchCard search={search}/> */}

      </div>
    </div>
     );
}

export default Explore;                                                                                                