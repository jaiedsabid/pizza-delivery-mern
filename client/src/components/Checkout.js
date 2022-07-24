import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../redux/ActionCreators';

function Checkout({ amount, ...props }) {
    const { loading } = useSelector((state) => state.OrderStatus);
    const dispatch = useDispatch();

    const tokenHandler = (token) => {
        dispatch(placeOrder(token, amount));
    };

    return (
        <div {...props}>
            <StripeCheckout
                amount={amount * 100}
                currency="BDT"
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51Ig33UFhm6X1t5EfmR99yz6T9RurCLdm7Cydgzi4sElzdKUKinUmZYOLYOo4QsWFblXQ4Z7lcfKOjJNASKbpCOn200rhdQ69Ck"
            >
                <button id="checkout-btn" type="button" className="btn btn-danger">
                    {loading ? (
                        <Spinner animation="border" variant="light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        'Pay Now'
                    )}
                </button>
            </StripeCheckout>
        </div>
    );
}

export default Checkout;
