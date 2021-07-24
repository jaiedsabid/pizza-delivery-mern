import * as ActionTypes from "./ActionTypes";

const initialState = {cartItems: []};

export default function Cart(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state, cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}