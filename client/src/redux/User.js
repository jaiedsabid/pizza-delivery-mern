import * as ActionTypes from './ActionTypes';

const initialRegister = {
    loading: false,
    success: false,
    error: '',
};

const initialLogin = {
    loading: false,
    success: false,
    error: '',
    currentUser: {},
};

export const userRegister = (state = initialRegister, { type, payload }) => {
    switch (type) {
        case ActionTypes.USER_REGISTER_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.USER_REGISTER_SUCCESS:
            return { ...state, loading: false, success: true };
        case ActionTypes.USER_REGISTER_FAILED:
            return { ...state, loading: false, success: false, error: payload };
        default:
            return state;
    }
};

export const userLogin = (state = initialLogin, { type, payload }) => {
    switch (type) {
        case ActionTypes.USER_LOGIN_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.USER_LOGIN_SUCCESS:
            return { ...state, loading: false, success: true, currentUser: payload };
        case ActionTypes.USER_LOGIN_FAILED:
            return { ...state, loading: false, success: false, error: payload };
        case ActionTypes.USER_LOGOUT:
            return { ...state, loading: false, success: false, currentUser: null };
        default:
            return state;
    }
};
