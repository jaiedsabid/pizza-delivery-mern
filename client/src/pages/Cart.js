import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/ActionCreators';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Cart.cartItems);
    const subTotal = cartItems.reduce((ac, cu) => ac + cu.price, 0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <H1>Cart Items</H1>
                    <hr />
                    {cartItems.length ? (
                        cartItems.map((item) => (
                            <div key={item._id}>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <H2>
                                            {item.name} <Variant>[{item.variant}]</Variant>
                                        </H2>
                                        {/* eslint-disable-next-line max-len */}
                                        Price: {item.quantity} * {item.prices[0][item.variant]} ={' '}
                                        {item.price}
                                        <div className="text-start mt-1">
                                            <H2 className="d-inline-block me-3">Quantity: </H2>
                                            <i
                                                className="fa fa-plus text-success me-2"
                                                aria-hidden="true"
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart(
                                                            item,
                                                            item.quantity + 1,
                                                            item.variant
                                                        )
                                                    )
                                                }
                                            />
                                            <span>{item.quantity}</span>
                                            <i
                                                className="fa fa-minus text-danger ms-2"
                                                aria-hidden="true"
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart(
                                                            item,
                                                            item.quantity - 1,
                                                            item.variant
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-content-center">
                                        <div className="my-auto">
                                            <img
                                                src={item.image}
                                                width={80}
                                                height={80}
                                                alt="item.name"
                                            />
                                        </div>
                                        <div className="my-auto">
                                            <i
                                                className="fa fa-trash text-danger ms-3"
                                                aria-hidden="true"
                                                onClick={() => {
                                                    dispatch(
                                                        removeFromCart(item._id, item.variant)
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <H2>Empty Cart!</H2>
                    )}
                </div>
                <div className="col-md-4">
                    <H1>Total Price</H1>
                    <div>
                        <TotalPrice>{subTotal}</TotalPrice>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

const H1 = styled.h1`
    font-size: 1.5rem;
    font-width: 500;
`;

const H2 = styled.h2`
    font-size: 1rem;
    font-width: 400;
`;

const Variant = styled.span`
    font-width: 600;
`;

const TotalPrice = styled.h2`
    font-size: larger;
    font-weight: bolder;
    color: tomato;
`;
