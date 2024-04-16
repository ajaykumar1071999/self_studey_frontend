import CreateUser from "../pages/guestPages/createUser";
// import HomePage from "../pages/homepage";
import {
  HOME_PAGE,
  CREATE_NEW_USER_PAGE,
  USER_LOGIN_PAGE,
} from "../constants/routeConstants";
import Login from "../pages/guestPages/login";
import NotFoundPage from "../components/noteFoundPage";
import GuestLayout from "../components/layout/guestLayout";
import HomePage from "../pages/guestPages/homepage";

export const guestRoute = [
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: HOME_PAGE,
        element: <HomePage />,
      },
      {
        path: CREATE_NEW_USER_PAGE,
        element: <CreateUser />,
      },

      {
        path: USER_LOGIN_PAGE,
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
