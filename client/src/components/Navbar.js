import React from 'react';
import {useSelector} from "react-redux";
import {Navbar as NavBar, Nav, Container} from "react-bootstrap";

function Navbar() {
    const cartItems = useSelector(state => state.Cart.cartItems.length);
    return (
        <React.Fragment>
            <NavBar collapseOnSelect className="shadow-lg p-3 mb-5 bg-body rounded" expand="lg" variant="light">
                <Container fluid>
                    <NavBar.Brand href="#home">⚡ Flash Pizza</NavBar.Brand>
                    <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="ms-auto" href="#login">Login</Nav.Link>
                            <Nav.Link className="ms-auto position-relative" href="#cart">Cart
                                {
                                    cartItems ?
                                        (
                                            <span id="cust-badge"
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    {cartItems}
                                                <span className="visually-hidden">Total Cart Items</span>
                                                </span>
                                        ) : null
                                }
                            </Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </React.Fragment>
    );
}

export default Navbar;