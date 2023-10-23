import SearchCard from "./components/searchCard";
import Prelogin from "./routes/PreLogin";
import Explore from "./routes/explore";
import SearchPage from "./routes/searchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Explore} />
    //     <Route exact path="/searchPage" component={SearchPage} />
    //   </Switch>
    // </Router>
    <Router>
     
      <div className="content bg-black">
        <Switch>
          <Route exact path="/">
            <Explore />
          </Route>
          <Route exact path="/searchPage">
            <SearchPage />
          </Route>
          <Route exact path="/explore">
          <Explore/>
          </Route>

        </Switch>
      </div>
    </Router>

        
       
    
  );
}
export default App;
