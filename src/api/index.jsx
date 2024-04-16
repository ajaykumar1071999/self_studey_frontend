import axios from "axios";
import { ROOT_URL } from "../constants/apiConstants";
import { getSuccessLoggedIn, getUserInfo } from "../redux/authSlice";
import {
  SET_TOKEN_IN_LOCAL,
  errorToast,
  successToast,
} from "../utils/projectHelper";
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

export const getMethodApi = async (url, payload = null, setData, token) => {
  try {
    const response = await axios.get(`${ROOT_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });
    if (response?.data?.statusCode === 200) {
      setData(response?.data);
    }
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

// export const request = async (endpoint, method, data = null, headers = {}, setData) => {
//   try {
//     const url = `${ROOT_URL}/${endpoint}`;
//     const config = {
//       method: method.toUpperCase(),
//       url: url,
//       headers: {
//         "Content-Type": "application/json",
//         ...headers,
//       },
//       data: data,
//     };
//     console.log("Data", data);
//     const response = await axios(config);

//     if (setData) {
//       setData(response.data);
//     }

//     return response.data;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

// Example usage:
// GET request
// request("https://api.example.com/data", "GET")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// // POST request
// const postData = { name: "John", age: 30 };
// request("https://api.example.com/data", "POST", postData)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// // PUT request
// const putData = { id: 123, name: "Jane", age: 25 };
// request("https://api.example.com/data/123", "PUT", putData)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// // DELETE request
// request("https://api.example.com/data/123", "DELETE")
//   .then(() => console.log("Deleted successfully"))
//   .catch((error) => console.error(error));
