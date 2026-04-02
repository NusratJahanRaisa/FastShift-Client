import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";


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


  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path : "registration",
        Component: Registration
      }
    ]
  }
]);