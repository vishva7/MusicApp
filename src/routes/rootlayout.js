import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <div className="encl bg-black">
      <div className=" relative div1">
        <Sidebar />
      </div>
      <div className="div2 relative ml-60 pl-7 top-0">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
