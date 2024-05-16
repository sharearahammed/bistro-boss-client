import { createBrowserRouter } from "react-router-dom";
import Main from "../Lauout/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu";
import Order from "../Pages/Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Manu></Manu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        }
    ]
  },
]);
