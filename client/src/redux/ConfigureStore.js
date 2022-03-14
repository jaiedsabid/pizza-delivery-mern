import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Cart from './Cart';
import Pizza from './Pizza';
import { UserRegister } from './User';

const composeEnhancers = composeWithDevTools({});
const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
const initialState = {
    Cart: {
        cartItems,
    },
};

export default function ConfigureStore() {
    const store = createStore(
        combineReducers({
            Pizza,
            Cart,
            UserRegister,
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}
