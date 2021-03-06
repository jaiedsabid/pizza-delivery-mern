import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import NotFound404 from './pages/404';
import Cart from './pages/Cart';
import Home from './pages/HomePage';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/registration" component={Registration} />
                    <Route path="*" component={NotFound404} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
