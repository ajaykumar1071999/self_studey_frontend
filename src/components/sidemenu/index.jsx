import React from "react";
import "./style.css";
import {
  ADMIN_DASHBOARD_PAGE,
  PRODUCT_LIST_PAGE,
  USERS_LIST_PAGE,
} from "../../constants/routeConstants";
import { useLocation, useNavigate } from "react-router-dom";
function SidebarMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const sidebarmenuItems = [
    {
      label: "Dashboard",
      path: ADMIN_DASHBOARD_PAGE,
      isActive:
        pathname === ADMIN_DASHBOARD_PAGE ||
        pathname.includes(ADMIN_DASHBOARD_PAGE),
    },
    {
      label: "User List",
      path: USERS_LIST_PAGE,
      isActive: pathname.includes(USERS_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
    {
      label: "Products",
      path: PRODUCT_LIST_PAGE,
      isActive: pathname.includes(PRODUCT_LIST_PAGE),
    },
  ];

  const handleClickMenu = (path) => {
    navigate(path);
  };
  return (
    <div className="vertical-menu">
      {sidebarmenuItems?.map((item, index) => (
        <div key={index}>
          <p
            className={item?.isActive ? "active" : ""}
            onClick={() => handleClickMenu(item?.path)}
          >
            {item?.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SidebarMenu;
