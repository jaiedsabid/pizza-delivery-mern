import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import Pizza from "./Pizza";


const composeEnhancers = composeWithDevTools({});

export default function ConfigureStore() {
    const store = createStore(
        combineReducers({
            Pizza: Pizza
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}