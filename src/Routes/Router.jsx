import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/mainLayOut/Main";
import Home from "../pages/Home";
import MemberShip from "../pages/membership/MemberShip";
import Members from "../components/Members/Members";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import Countries from "../pages/Countries/Countries";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import SingleUserProfile from "../pages/SingleUserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: <MemberShip></MemberShip>,
      },
      { path: "/members", element: <Members></Members> },
      {
        path: "/members",
        element: <Members></Members>,
      },
      { path: "/members", element: <Members></Members> },
      {
        path: "/countries",
        element: <Countries></Countries>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/view-profile",
        element: <SingleUserProfile></SingleUserProfile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
