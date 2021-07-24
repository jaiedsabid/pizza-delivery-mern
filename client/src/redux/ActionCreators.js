import * as ActionTypes from "./ActionTypes";
import axios from "axios";


export const loadPizzasRequest = () => {
    return {
        type: ActionTypes.LOAD_PIZZAS_REQUEST
    };
}

export const loadPizzasSuccess = data => {
    return {
        type: ActionTypes.LOAD_PIZZAS_SUCCESS,
        payload: data
    };
}

export const loadPizzasFailed = error => {
    return {
        type: ActionTypes.LOAD_PIZZAS_FAILED,
        payload: error
    };
}

export const load_All_Pizzas = () => async (dispatch) => {
    dispatch(loadPizzasRequest());
    try {
        const response = await axios.get("/api/pizzas");
        const data = await response.data;
        dispatch(loadPizzasSuccess((data)));
    } catch (error) {
        dispatch(loadPizzasFailed(error));
    }
}

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    let cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        variant: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    };

    dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: cartItem
    })

    const cartItems = getState().Cart.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}