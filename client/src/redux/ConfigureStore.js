import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getFromLocalStorage } from '../utils/helpers';
import Cart from './Cart';
import { OrderCheckout } from './OrderCheckout';
import Pizza from './Pizza';
import { userLogin, userRegister } from './User';

const composeEnhancers = composeWithDevTools({});
const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
const currentUser = getFromLocalStorage('currentUser');
const initialState = {
    Cart: {
        cartItems,
    },
    UserLogin: {
        currentUser: currentUser || {},
    },
};

export default function ConfigureStore() {
    const store = createStore(
        combineReducers({
            Pizza,
            Cart,
            UserRegister: userRegister,
            UserLogin: userLogin,
            OrderStatus: OrderCheckout,
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}
