import * as ActionTypes from './ActionTypes';

const initialOrderStatus = {
    loading: false,
    success: false,
    error: '',
};

export const OrderCheckout = (state = initialOrderStatus, { type, payload }) => {
    switch (type) {
        case ActionTypes.PLACE_ORDER_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.PLACE_ORDER_SUCCESS:
            return { ...state, loading: false, success: true };
        case ActionTypes.PLACE_ORDER_FAILED:
            return { ...state, loading: false, success: false, error: payload };
        default:
            return state;
    }
};
