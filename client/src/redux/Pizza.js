import * as ActionTypes from './ActionTypes';

const initialState = { pizzas: [], loading: true, error: null };

export default function Pizza(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.LOAD_PIZZAS_REQUEST:
            return { ...state, loading: true, pizzas: [], error: null };
        case ActionTypes.LOAD_PIZZAS_SUCCESS:
            return { ...state, pizzas: payload, loading: false, error: null };
        case ActionTypes.LOAD_PIZZAS_FAILED:
            return { ...state, error: payload, loading: false, pizzas: [] };
        default:
            return state;
    }
}
