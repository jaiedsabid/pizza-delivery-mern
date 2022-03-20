import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { Container, Nav, Navbar as NavBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const {
        Cart: { cartItems },
        UserLogin: { currentUser },
    } = useSelector((state) => state);

    return (
        <NavBar
            collapseOnSelect
            className="shadow-lg p-3 mb-5 bg-body rounded"
            expand="lg"
            variant="light"
        >
            <Container fluid>
                <Link className="navbar-brand" to="/">
                    ⚡ Flash Pizza
                </Link>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {!Object.keys(currentUser).length ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item dropdown">
                                <div
                                    className="nav-link dropdown-toggle text-end"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {currentUser.name}
                                </div>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <Link className="dropdown-item text-end" to="/orders">
                                            Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-end" to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        )}
                        <Link className="nav-link ms-auto position-relative" to="/cart">
                            Cart
                            {cartItems.length ? (
                                <span
                                    id="cust-badge"
                                    // eslint-disable-next-line max-len
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >
                                    {cartItems.length}
                                    <span className="visually-hidden">Total Cart Items</span>
                                </span>
                            ) : null}
                        </Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
}

export default Navbar;
