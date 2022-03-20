import axios from 'axios';
import * as ActionTypes from './ActionTypes';

export const loadPizzasRequest = () => ({
    type: ActionTypes.LOAD_PIZZAS_REQUEST,
});

export const loadPizzasSuccess = (data) => ({
    type: ActionTypes.LOAD_PIZZAS_SUCCESS,
    payload: data,
});

export const loadPizzasFailed = (error) => ({
    type: ActionTypes.LOAD_PIZZAS_FAILED,
    payload: error,
});

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
        variant,
        quantity,
        prices: pizza.prices,
        price: pizza.prices[0][variant] * quantity,
    };

    if (quantity > 10) {
        alert("You can't add more than 10 Pizzas of the same type!");
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
    const { cartItems } = getState().Cart;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (pizzaId, variant) => (dispatch, getState) => {
    const cartItem = {
        _id: pizzaId,
        variant,
    };

    dispatch({
        type: ActionTypes.REMOVE_FROM_CART,
        payload: cartItem,
    });

    const { cartItems } = getState().Cart;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const userRegisterRequest = () => ({
    type: ActionTypes.USER_REGISTER_REQUEST,
});

export const userRegisterSuccess = () => ({
    type: ActionTypes.USER_REGISTER_SUCCESS,
});

export const userRegisterFailed = (payload) => ({
    type: ActionTypes.USER_REGISTER_FAILED,
    payload,
});

export const registerUser = (user) => async (dispatch) => {
    try {
        dispatch(userRegisterRequest());

        const response = await axios.post('/api/users/register', user);

        if (response.status === 200) {
            dispatch(userRegisterSuccess());
        }
    } catch (error) {
        dispatch(userRegisterFailed(error.response.data.message));
    }
};

export const userLoginRequest = () => ({
    type: ActionTypes.USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (payload) => ({
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload,
});

export const userLoginFailed = (payload) => ({
    type: ActionTypes.USER_LOGIN_FAILED,
    payload,
});

export const userLogout = () => ({
    type: ActionTypes.USER_LOGOUT,
});

export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch(userLoginRequest());

        const response = await axios.post('/api/users/Login', user);

        if (response.status === 200) {
            dispatch(userLoginSuccess(response.data.currentUser));
        }
    } catch (error) {
        dispatch(userLoginFailed(error.response.data.message));
    }
};
