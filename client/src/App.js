import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
