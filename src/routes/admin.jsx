import { lazy } from "react";
import AdminLayout from "../components/layout/adminLayout";
import NotFoundPage from "../components/noteFoundPage";
import {
  ADMIN_DASHBOARD_PAGE,
  PRODUCT_LIST_PAGE,
  USERS_LIST_PAGE,
} from "../constants/routeConstants";
const Dashboard = lazy(() => import("../pages/adminPages/dashboard"));
const Products = lazy(() => import("../pages/adminPages/product"));
const UsersList = lazy(() => import("../pages/adminPages/user/list"));
export const adminRoute = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ADMIN_DASHBOARD_PAGE,
        element: <Dashboard />,
      },
      {
        path: USERS_LIST_PAGE,
        element: <UsersList />,
      },
      {
        path: PRODUCT_LIST_PAGE,
        element: <Products />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
