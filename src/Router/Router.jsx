import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : LandingPage
  },
  {
    path: "/home",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);