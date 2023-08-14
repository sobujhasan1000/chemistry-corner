import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/mainLayOut/Main";
import Home from "../pages/Home";
import Members from "../components/Members/Members";

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
        path: "/members",
        element: <Members></Members>,
      }
    ],
  },
]);

export default router;
