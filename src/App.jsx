import { useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  authSelector,
  getSuccessLoggedIn,
  getUserInfo,
} from "./redux/authSlice";
import { GET_TOKEN_FROM_LOCAL } from "./utils/projectHelper";
import { ToastContainer } from "react-toastify";
import { adminRoute } from "./routes/admin";
import { guestRoute } from "./routes/guestRoute";
function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { isSuccessLoggedIn } = useSelector(authSelector);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // const token = JSON.parse(localStorage.getItem("token"));
  const token = GET_TOKEN_FROM_LOCAL();

  useEffect(() => {
    if (token && userData) {
      dispatch(getUserInfo(userData));
      dispatch(getSuccessLoggedIn(true));
    } else {
      dispatch(getSuccessLoggedIn(false));
      dispatch(getUserInfo({}));
    }
  }, [token]);

  const router = useRoutes(isSuccessLoggedIn ? adminRoute : guestRoute);

  return (
    <>  
      <ToastContainer />
      {router}
    </>
  );
}

export default App;
