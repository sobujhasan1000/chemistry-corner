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
import SingleUserProfile from "../pages/SingleUserProfile";
import FindPartner from "../pages/FindPartner/FindPartner";
import Blog from "../pages/blogs/Blog";
import ErrorPage from "../pages/ErrorPage";
import OurTeam from "../pages/OurTeam";
import Testimonials from "../pages/Testimonials";
import FAQ from "../pages/FAQ";
import CommunityGuidelines from "../pages/CommunityGuidelines";
import DashboardLayout from "../layOuts/mainLayOut/DashboardLayout";
import MembershipOrder from "../pages/MembershipOrder";
import PaymentSuccess from "../pages/Home/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/Home/PaymentFail/PaymentFail";
import PaymentCancel from "../pages/Home/PaymentCancel/PaymentCancel";
import CreateBlog from "../pages/Dashboard/CreateBlog/CreateBlog";
import UsersFeedback from "../pages/Dashboard/UsersFeedback/UsersFeedback";
import UsersInpuiries from "../pages/Dashboard/UsersInquiries/UsersInpuiries";
// import UserProfile from "../pages/Dashboard/userProfile/userProfile";
import GiveAFeedback from "../pages/Dashboard/GiveAFeedback/GiveAFeedback";
import Favorites from "../pages/Dashboard/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: <MemberShip></MemberShip>,
      },
      {
        path: "/membership/:id",
        element: <MembershipOrder />,
      },
      {
        path: "/members",
        element: <Members></Members>,
      },
      {
        path: "/countries",
        element: <Countries></Countries>,
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "/payment/cancel/:tranId",
        element: <PaymentCancel></PaymentCancel>,
      },
      {
        path: "/view-profile/:id",
        element: <SingleUserProfile></SingleUserProfile>,
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
      {
        path: "/find-partner",
        element: <FindPartner></FindPartner>,
      },
      {
        path: "/our-team",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/community-guidelines",
        element: <CommunityGuidelines></CommunityGuidelines>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/dashboard/favorite",
        element: <Favorites></Favorites>,
      },
      {
        path: "/dashboard/create-blog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "/dashboard/users-feedbacks",
        element: <UsersFeedback></UsersFeedback>,
      },
      {
        path: "/dashboard/users-inquiries",
        element: <UsersInpuiries></UsersInpuiries>,
      },
      {
        path: "/dashboard/give-a-feedback",
        element: <GiveAFeedback></GiveAFeedback>,
      },
    ],
  },
]);

export default router;
