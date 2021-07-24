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