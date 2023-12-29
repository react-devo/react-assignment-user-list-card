import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserProfileView from "../components/User/UserProfileView";
import ErrorPage from "../components/ErrorPage/CustomErrorPage";

export const AllRoutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/user/:userId",
      element: <UserProfileView />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
   
  ]);