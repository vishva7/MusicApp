import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchCard from "../components/searchCard";
import {useState} from 'react'; 

function Explore() {
    const [search,setSearch]=useState([{title:"Today's Top Hits",id:1,img:"/album1.webp"},
  {title:"Rap Caviar",id:2},
  {title:"All Out 2010s",id:3},
  {title:"Rock Classics",id:4},
  {title:"Chill Hits",id:4}
  ])
    return ( 
        <div className="encl">
      <div className="div1">
        <Sidebar/>
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar/>
        <SearchCard search={search}/>

      </div>
    </div>
     );
}

export default Explore;                                                                                                