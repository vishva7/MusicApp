import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Card from "./card";
function Prelogin() {
  return (
    <div>
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-64)]">
        <Navbar />

        <Card />
      </div>
    </div>
  );
}

export default Prelogin;
