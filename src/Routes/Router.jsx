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
import FaqPage from "../pages/FaqPage";
import CommunityGuidelines from "../pages/CommunityGuidelines";
import DashboardLayout from "../layOuts/mainLayOut/DashboardLayout";
import MembershipOrder from "../pages/MembershipOrder";
import PaymentSuccess from "../pages/Home/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/Home/PaymentFail/PaymentFail";
import PaymentCancel from "../pages/Home/PaymentCancel/PaymentCancel";
import CreateBlog from "../pages/Dashboard/CreateBlog/CreateBlog";
import UsersFeedback from "../pages/Dashboard/UsersFeedback/UsersFeedback";
import GiveAFeedback from "../pages/Dashboard/GiveAFeedback/GiveAFeedback";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import Favorites from "../pages/Dashboard/Favorites/Favorites";
import ViewSingleBlog from "../pages/blogs/ViewSingleBlog";
import Likes from "../pages/Dashboard/Likes/Likes";
import UsersInquiries from "../pages/Dashboard/UsersInquiries/UsersInquiries";
import PrivateRoute from "./PrivateRouter/PrivateRouter";
import Search from "../pages/Dashboard/Search/Search";
import ManageUser from "../pages/Dashboard/Admin/ManageUser.jsx/ManageUser";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Messages from "../pages/Dashboard/Messages/Messages";
import FaqQuestions from "../pages/FaqQuestions";

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
        element: (
          <PrivateRoute>
            <MembershipOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "/members",
        element: (
          <PrivateRoute>
            <Members></Members>
          </PrivateRoute>
        ),
      },
      {
        path: "/countries",
        element: (
          <PrivateRoute>
            <Countries></Countries>
          </PrivateRoute>
        ),
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
        path: "/view-blog/:id",
        element: (
          <PrivateRoute>
            <ViewSingleBlog></ViewSingleBlog>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <FindPartner></FindPartner>
          </PrivateRoute>
        ),
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
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/faq-details",
        element: <FaqQuestions></FaqQuestions>,
      },
      {
        path: "/community-guidelines",
        element: <CommunityGuidelines></CommunityGuidelines>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
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
        path: "/dashboard/search",
        element: <Search></Search>,
      },
      {
        path: "/dashboard/messages",
        element: <Messages></Messages>,
      },
      {
        path: "/dashboard/favorite",
        element: <Favorites></Favorites>,
      },
      {
        path: "/dashboard/likes",
        element: <Likes></Likes>,
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
        element: <UsersInquiries></UsersInquiries>,
      },
      {
        path: "/dashboard/give-a-feedback",
        element: <GiveAFeedback></GiveAFeedback>,
      },
      {
        path: "/dashboard/payment",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
