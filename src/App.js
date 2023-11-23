import Prelogin from "./routes/PreLogin";
import Explore from "./routes/explore";
import SearchPage from "./routes/searchPage";
import { useState } from "react";
import Playlist1 from "./routes/playlist1";
import Playlist3 from "./routes/playlist3";
import Playlist2 from "./routes/playlist2";
import Playlist4 from "./routes/playlist4";
import Playlist5 from "./routes/playlist5";
import SignInPage from "./routes/signinpage";





import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./routes/rootlayout";
import Loginpage from "./routes/loginpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Prelogin />} />

        <Route path="/Prelogin" element={<Prelogin />} />
        <Route path="/playlist1" element={<Playlist1/>}></Route>
        <Route path="/playlist2" element={<Playlist2/>}></Route>
        <Route path="/playlist3" element={<Playlist3 />}></Route>
        <Route path="/playlist4" element={<Playlist4 />}></Route>
        <Route path="/playlist5" element={<Playlist5/>}></Route>
        <Route path="/explore" element={<Explore />} />

        <Route path="/searchPage" element={<SearchPage />}></Route>
      </Route>
      <Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
        <Route path="/signinpage" element={<SignInPage />}></Route>

      </Route>
    </>
  )
);
function App() {
  return (
   
    
    <RouterProvider router={router} />
  
  );
}
export default App;