import axios from "axios";
import { ActionsTypes } from "../contants/actions-type";

// Aksi sinkron
export const setUsers = (users) => ({
    type: ActionsTypes.SET_USERS,
    payload: users,
});

export const setLoginSuccess = (isLoginSuccess) => ({
    type: ActionsTypes.SET_LOGIN_SUCCESS,
    payload: isLoginSuccess,
});

export const setLoginPending = (isLoginPending) => ({
    type: ActionsTypes.SET_LOGIN_PENDING,
    payload: isLoginPending,
});

export const setLoginError = (isLoginError) => ({
    type: ActionsTypes.SET_LOGIN_ERROR,
    payload: isLoginError,
});

// Aksi asinkron untuk login
export const login = (email, password) => {
    return async (dispatch) => {
      dispatch(setLoginPending(true));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
  
      try {
        const response = await axios.get("https://fakestoreapi.com/users");
  
        // Validasi email dan password
        const user = response.data.find(
          (user) => user.email === email && user.password === password
        );
  
        if (user) {
          // Simpan token ke localStorage
          const token = `user-${user.id}`;
          localStorage.setItem("authToken", token);
  
          // Simpan data user ke Redux
          dispatch(setUsers([user]));
          dispatch(setLoginSuccess(true));
        } else {
          throw new Error("Invalid email or password");
        }
      } catch (error) {
        dispatch(setLoginError(error.message));
      } finally {
        dispatch(setLoginPending(false));
      }
    };
  };
