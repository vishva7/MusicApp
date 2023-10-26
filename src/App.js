import Prelogin from "./routes/PreLogin";
import Explore from "./routes/explore";
import SearchPage from "./routes/searchPage";
import { useState } from "react";
import Songlist from "./components/songlist";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Prelogin />} />
       
        <Route path="/Prelogin" element={<Prelogin />} />
        <Route path="/songlist" element={<Songlist />}></Route>
        <Route path="/explore" element={<Explore />} />

        <Route path="/searchPage" element={<SearchPage />}></Route>
      </Route>
      <Route>
        <Route path="/loginpage" elem></Route>
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
