import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import Logo from "../../assets/react.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { HOME_PAGE } from "../../constants/routeConstants";
import ProfileMenu from "./profile";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/authSlice";
function Navbar() {
  const userInfo = useSelector(authSelector);
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname: PATH_NAME } = location;
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setProfileOpen(null);
  };

  const navbar = [
    {
      label: "Home",
      path: HOME_PAGE,
      icon: <HomeOutlinedIcon />,
      isActive: PATH_NAME === HOME_PAGE,
    },
  ];
  return (
    <>
      <div className="navbar-wrapper">
        <div className="menu-mobile" onClick={handleProfileOpen}>
          <MenuOutlinedIcon />
        </div>
        <div className="main-logo">
          <img src={Logo} alt="main-logo" />
        </div>

        <div
          className={profileOpen ? "show-mobile-menu" : "mobile-menu"}
          onClick={handleProfileOpen}
        >
          <p className="menu-items">Mobile navigation</p>
        </div>

        <div className="search-bar-wrapper">
          <div className="search-headbar">
            <SearchOutlinedIcon className="header-serach-icon" />
            <input
              type="search"
              name="search"
              placeholder="Search for products, Brand and More"
            />
          </div>
        </div>
        <div className="login-wrapper">
          <AccountCircleOutlinedIcon />
          <p>
            {!userInfo?.userInfo?.name?.length > 0 ? (
              "Login"
            ) : (
              <ProfileMenu handleLogOut={handleLogOut} />
            )}
          </p>
          <KeyboardArrowDownOutlinedIcon className="down-arrow" />
        </div>
        <div className="cart-wrapper">
          <ShoppingCartOutlinedIcon />
          <p className="cart-text">Cart</p>
        </div>
        <div className="header-become-seller">
          <RedeemOutlinedIcon />
          <p>Become a seller</p>
        </div>
        <div className="header-action">
          <MoreVertOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Navbar;
