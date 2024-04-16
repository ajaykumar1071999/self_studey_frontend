import { toast } from "react-toastify";
export const SET_TOKEN_IN_LOCAL = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};
export const GET_TOKEN_FROM_LOCAL = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};
export const successToast = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  });
};

export const warningTost = (message) => {
  toast.warn(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  });
};

export const errorToast = (message) => { 
  toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  });
}
