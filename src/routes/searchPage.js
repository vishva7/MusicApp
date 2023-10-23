import SearchCard from "../components/searchCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const SearchPage = () => {
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
    return ( 
        <div>
             <div className="div1 z-10">
        <Sidebar />
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar />
        </div>
        <div>
       <SearchCard search={search}/>

        </div>

            </div>
     );
}
 
export default SearchPage;