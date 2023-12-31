import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  }
            ]
      }
])


export default router;