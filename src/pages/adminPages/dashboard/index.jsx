import React, { useState, useEffect } from "react";
import { getMethodApi } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { usersListSelector } from "../../../redux/userListSlice";
import "./style.css";
function Dashboard() {
  const dispatch = useDispatch();
  const { userList } = useSelector(usersListSelector);
  // const { userList } = useSelector((state) => state.userSlice);
  const [data, setData] = useState([]);
  console.log("data", data);
  const getList = () => {
    getMethodApi("api/v1/getUsersList", null, dispatch);
  };
  // useEffect(() => {
  //   setData(userList);
  // }, []);
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {columns?.map((item) => (
              <th key={item?._id}>{item?.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList && userList?.length > 0 ? (
            userList?.map((item) => (
              <tr key={item?._id}>
                <td>{item?.name}</td>
                <td>{item?.age}</td>
                <td>{item?.work}</td>
                <td>{item?.mobile}</td>
                <td>{item?.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

const columns = [
  { name: "name", label: "Name" },
  { name: "age", label: "Age" },
  { name: "Work", label: "Work" },
  { name: "Mobile", label: "Mobile" },
  { name: "email", label: "Email" },
];
