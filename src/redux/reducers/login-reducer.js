import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    users: [],
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_USERS:
            return { ...state, users: payload };

        case ActionsTypes.SET_LOGIN_PENDING:
            return { ...state, isLoginPending: payload };

        case ActionsTypes.SET_LOGIN_SUCCESS:
            return { ...state, isLoginSuccess: payload };

        case ActionsTypes.SET_LOGIN_ERROR:
            return { ...state, isLoginError: payload };

        default:
            return state;
    }
};
