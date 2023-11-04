import Prelogin from "./routes/PreLogin";
import Explore from "./routes/explore";
import SearchPage from "./routes/searchPage";
import { useState } from "react";
import Playlist from "./routes/playlist";
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
        <Route path="/playlist" element={<Playlist />}></Route>
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
    <RouterProvider router={router} /> //have to import
  );
}
export default App;
