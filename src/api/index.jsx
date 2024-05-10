import axios from "axios";
import {
  CHANGE_QUESTION_BANK_LIST_STATUS_API,
  GET_CLIENT_LIST_API,
  ROOT_URL,
} from "../constants/apiConstants";
import {
  getClientList,
  getSuccessLoggedIn,
  getUserInfo,
} from "../redux/authSlice";
import {
  GET_TOKEN_FROM_LOCAL,
  SET_TOKEN_IN_LOCAL,
  errorToast,
  successToast,
} from "../utils/projectHelper";
import { getUserList } from "../redux/userListSlice";
import api from "../utils/apiHelper";

export const postMethodApi = async (
  url,
  payload,
  setData,
  clearAll,
  navigate,
  dispatch
) => {
  try {
    const response = await axios.post(`${ROOT_URL}/${url}`, payload);

    if (response.data?.statusCode === 200) {
      const { token, name, email, userType } = response?.data?.details;
      localStorage.setItem(
        "userData",
        JSON.stringify({ name, email, userType })
      );
      successToast(response?.data?.message);
      SET_TOKEN_IN_LOCAL(token);
      dispatch(getUserInfo(response.data));
      dispatch(getSuccessLoggedIn(true));
      navigate("/");
    }
  } catch (error) {
    if (error.response?.data?.statusCode === 404) {
      errorToast(error.response?.data?.message);
    }
    console.error("Error:", error.response?.data?.message);
    throw error;
  }
};

export const getMethodApi = async (url = null, payload = null, dispatch) => {
  try {
    const token = GET_TOKEN_FROM_LOCAL();
    const response = await axios.get(`${ROOT_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });
    if (response?.data?.statusCode === 200) {
      dispatch(getUserList(response?.data?.details));
    }
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

export const clientListApi = () => (dispatch) => {
  api()
    .root(ROOT_URL)
    .get(`${GET_CLIENT_LIST_API}?page=${2}&limit=${10}`)
    .success((a) => {
      dispatch(getClientList(a?.details));
    })
    .error((e) => {
      errorToast(e);
    })
    .send();
};

export const qbStatusChangeApi = (formValues) => () => {
  api()
    .root(ROOT_URL)
    .post(CHANGE_QUESTION_BANK_LIST_STATUS_API)
    .data(formValues)
    .success((a) => {
      console.log("response", a);
    })
    .error((e) => {
      const { error } = e;
      errorToast(error);
    })
    .send(() => { 
      
    });
};
