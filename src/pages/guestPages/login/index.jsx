import { useEffect, useState } from "react";
import { clientListApi, postMethodApi, qbStatusChangeApi } from "../../../api";
import { USER_LOGIN_API } from "../../../constants/apiConstants";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GithubStats from "../githubStatus";
function Login() {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const clearAll = () => {
    setFormValues(initialFormValues);
  };
  const handleSubmit = async () => {
    dispatch(clientListApi(formValues));
    // dispatch(qbStatusChangeApi(formValues));
    //   await postMethodApi(
    //     USER_LOGIN_API,
    //     formValues,
    //     setData,
    //     clearAll,
    //     navigate,
    //     dispatch
    //   );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={formValues?.username}
          name="username"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          value={formValues?.password}
          name="password"
          onChange={onChangeHandler}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
      <GithubStats />
    </>
  );
}

export default Login;
