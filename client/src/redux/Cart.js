import * as ActionTypes from './ActionTypes';

const initialState = {cartItems: []};

export default function Cart(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const exist = state.cartItems.find((item) => {
        return (
          item._id === action.payload._id &&
          item.variant === action.payload.variant
        );
      });
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (
              item._id === action.payload._id &&
              item.variant === action.payload.variant
            ) {
              return action.payload;
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      const {_id, variant} = action.payload;
      const newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return !(item._id === _id && item.variant === variant);
        }),
      };
      return newState;
    default:
      return state;
  }
}
