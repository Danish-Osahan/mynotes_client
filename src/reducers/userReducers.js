import {
  User_Login_Success,
  User_Login_Fail,
  User_Login_Request,
  User_Logout,
  User_Register_Success,
  User_Register_Fail,
  User_Update_Fail,
  User_Update_Success,
  User_Update_Request
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case User_Login_Request:
        return {
            loading: true
        }
    case User_Login_Success:
      return {
        userInfo: action.payload,
        loading: false
      };
    case User_Login_Fail:
      return {
        error: action.payload,
      };

    case User_Logout:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case User_Register_Success:
      return {
        userInfo: action.payload,
      };
    case User_Register_Fail:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case User_Update_Request:
      return { loading: true };
    case User_Update_Success:
      return { loading: false, userInfo: action.payload, success: true };
    case User_Update_Fail:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
