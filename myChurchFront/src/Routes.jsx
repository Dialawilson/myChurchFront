import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// sections
import AgipBase from "./sections/AgipBase";
import ChindahExtension from "./sections/ChindahExtension";
import Eagleislandchurch from "./sections/EagleIslandchurch2";
import MgbwikeChurch from "./sections/MgbwikeChurch";
import OruAkworChurch from "./sections/OruAkworChurch";
import OrowoChurch from "./sections/OrowoChurch";
import AgipRoad from "./sections/AgipRoad.jsx";
// import App from "./App"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AgipRoad />}>
      <Route path="/agipBase" element={<AgipBase />} />
      <Route path="/chindahExtension" element={<ChindahExtension />} />
      <Route path="/Eagleislandchurch" element={<Eagleislandchurch />} />
      <Route path="/MgbwikeChurch" element={<MgbwikeChurch />} />
      <Route path="/OruAkworChurch" element={<OruAkworChurch />} />
      <Route path="/OrowoChurch" element={<OrowoChurch />} />
    </Route>
  )
);

export default router; // Assuming 'Routes' is the component you want to export
