import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const loadPizzasRequest = () => {
  return {
    type: ActionTypes.LOAD_PIZZAS_REQUEST,
  };
};

export const loadPizzasSuccess = (data) => {
  return {
    type: ActionTypes.LOAD_PIZZAS_SUCCESS,
    payload: data,
  };
};

export const loadPizzasFailed = (error) => {
  return {
    type: ActionTypes.LOAD_PIZZAS_FAILED,
    payload: error,
  };
};

export const loadAllPizzas = () => async (dispatch) => {
  dispatch(loadPizzasRequest());
  try {
    const response = await axios.get('/api/pizzas');
    const data = await response.data;
    dispatch(loadPizzasSuccess(data));
  } catch (error) {
    dispatch(loadPizzasFailed(error));
  }
};

export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    variant: variant,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };

  if (quantity > 10) {
    alert('You can\'t add more than 10 Pizzas of the same type!');
  } else if (quantity <= 0) {
    // alert("You can't decrease quantity less than 1!");
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: cartItem,
    });
  } else {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: cartItem,
    });
  }
  const cartItems = getState().Cart.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (pizzaId, variant) => (dispatch, getState) => {
  const cartItem = {
    _id: pizzaId,
    variant: variant,
  };

  dispatch({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: cartItem,
  });

  const cartItems = getState().Cart.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const userRegisterRequest = () => {
  return {
    type: ActionTypes.USER_REGISTER_REQUEST,
  };
};

export const userRegisterSuccess = () => {
  return {
    type: ActionTypes.USER_REGISTER_SUCCESS,
  };
};

export const userRegisterFailed = () => {
  return {
    type: ActionTypes.USER_REGISTER_FAILED,
  };
};

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());

    const response = await axios.post('/api/users/register', user);
    const jsonData = await response.json();
    const data = await jsonData.data;
    console.log(data);

    dispatch(userRegisterSuccess());
  } catch (error) {
    dispatch(userRegisterFailed());
  }
};
