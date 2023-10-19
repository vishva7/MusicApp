import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Card from "./card";
function Prelogin() {
  return (
    <div className="encl bg-red-500">
      <div className="div1">
        <Sidebar />
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar />

        <Card />
      </div>
    </div>
  );
}

export default Prelogin;
