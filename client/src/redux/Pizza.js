import * as ActionTypes from "./ActionTypes";

const initialState = {pizzas: [], loading: true, error: null};

export default function Pizza(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_PIZZAS_REQUEST:
            return {...state, loading: true, pizzas: [], error: null};
        case ActionTypes.LOAD_PIZZAS_SUCCESS:
            return {...state, pizzas: action.payload, loading: false, error: null};
        case ActionTypes.LOAD_PIZZAS_FAILED:
            return {...state, error: action.payload, loading: false, pizzas: []}
        default:
            return state;
    }
}