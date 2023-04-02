import {
  User_Login_Fail,
  User_Login_Success,
  User_Logout,
  User_Register_Success,
  User_Register_Fail,
  User_Update_Request,
  User_Update_Success,
  User_Update_Fail,
  User_Login_Request
} from "../constants/userConstants";
import axios from "axios";
const baseUrl ='https://mynotes-api-ozqd.onrender.com/'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: User_Login_Request });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.post(
      `${baseUrl}api/users/login`,
      // "http://localhost:5000/api/users/login",
      { email, password },
      config
    );
    dispatch({ type: User_Login_Success, payload: data });
    // console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: User_Login_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // setError(error.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({type:User_Logout})
}


export const register=(name,email,password,pic)=>async (dispatch) =>{
  try {
    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.post(
      // "http://localhost:5000/api/users",
      `${baseUrl}api/users`,
      { name, email, password, pic },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: User_Register_Success, payload: data });
    // dispatch({ type: User_Login_Success, payload: data });

    console.log(data);
  } catch (error) {
    dispatch({
      type: User_Register_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: User_Update_Request });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${baseUrl}api/users/profile`, user, config);

    dispatch({ type: User_Update_Success, payload: data });

    dispatch({ type: User_Login_Success, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: User_Update_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
