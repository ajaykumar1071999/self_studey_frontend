import { Outlet } from "react-router-dom";
import Navbar from "../header";
import Footer from "../footer";
import SidebarMenu from "../sidemenu";
import "./adminlayout.css";

function AdminLayout() {
  return (
    <>
      <Navbar />
      <SidebarMenu />
      <div className="main-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
