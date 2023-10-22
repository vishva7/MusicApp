import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchCard from "../components/searchCard";

function Explore() {
    return ( 
        <div className="encl">
      <div className="div1">
        <Sidebar/>
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar/>
        <SearchCard/>

      </div>
    </div>
     );
}

export default Explore;                                                                                                