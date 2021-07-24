import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import Pizza from "./Pizza";
import Cart from "./Cart";


const composeEnhancers = composeWithDevTools({});
const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const initialState = {
    Cart: {
        cartItems
    }
};

export default function ConfigureStore() {
    const store = createStore(
        combineReducers({
            Pizza: Pizza,
            Cart: Cart
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}