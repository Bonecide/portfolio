import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Experience } from "../pages/Experience";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/experience",
    Component: Experience,
  },
]);
