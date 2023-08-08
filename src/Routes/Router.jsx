import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOuts/mainLayOut/Main";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        }
      ]
    },
  ]);