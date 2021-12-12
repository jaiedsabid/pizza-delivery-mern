import * as ActionTypes from './ActionTypes';

const initialState = {
  loading: false,
  success: false,
  error: '',
};

export const UserRegister = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.USER_REGISTER_REQUEST:
      return {...state, loading: true};
    case ActionTypes.USER_REGISTER_SUCCESS:
      return {...state, loading: false, success: true};
    case ActionTypes.USER_REGISTER_FAILED:
      return {...state, loading: false, success: false, error: payload};
    default:
      return state;
  }
};
