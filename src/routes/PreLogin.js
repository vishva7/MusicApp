import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import Title from "../components/title"; 
function Prelogin() {
  return (
    <div className="encl">
      <div className="div1">
        <Sidebar />
      </div>
      <div className="div2 ml-60 pl-7">
        <Navbar />

        {/* <Card /> */}
        <Title/>

      </div>
    </div>
  );
}

export default Prelogin;
