import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepages from "../Pages/Homepages";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
       {
        index: true,
        Component: Homepages,
        
       }, 
       {
        path: "/aboutUs",
        Component: AboutUs,
       },
       {
        path: "/profile",
        Component: Profile,
       },
       {
        path: "/signup",
        Component: SignUp,
       },
       {
        path: "/signin",
        Component: SignIn,
       },
    ]
  },
]);