import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <div className="encl bg-black md:bg-black">
      <div className=" relative div1 md:ml-70  ">
        <Sidebar />
      </div>
      <div className="div2 relative ml-0 md:ml-60 pl-0 md:pl-7 top-0">
        <Navbar />
        
        <Outlet />
        
      </div>
      
    </div>
  );
};

export default RootLayout;











































