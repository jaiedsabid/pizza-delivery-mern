import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Cart from "./pages/Cart";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
