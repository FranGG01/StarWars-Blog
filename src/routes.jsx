// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import PeopleDetails from "./pages/PeopleDetails/PeopleDetails";
import PlanetDetails from "./pages/PlanetDetails/PlanetDetails";
import VehicleDetails from "./pages/VehicleDetails/VehicleDetails";



export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/people/:id" element={<PeopleDetails />} />
      <Route path="/planet/:id" element={<PlanetDetails />} />
      <Route path="/vehicle/:id" element={<VehicleDetails />} />
    </Route>
  )
);