const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Ig33UFhm6X1t5EfqCq3MGLWTYCiZ1NpRiZuFzPjTWsiRjUSVcUSOKFciK9v32gYZof8vcShWUPaMRqV1zgHP6bb00TdoCaOtT');
const { v4: uuidv4 } = require('uuid');

router.post('/makeorder', async (req, res) => {
    const {token, subTotal, currentUser, cartItems} = req.body;

    try {
        const customer = stripe.customers.create({
            email: token.email,
            name: token.card.name,
        });

        const payment = await stripe.charges.create({
            amount: subTotal * 100,
            currency: 'bdt',
            receipt_email: token.email,
            customer: customer.id,
            source: token.id
        }, {
            idempotencyKey: uuidv4()
        });

        if (payment) {
            res.status(200).json({
                message: 'Payment Successful'
            });
        } else {
            res.status(400).json({
                message: 'Payment Failed'
            });
        }
    } catch(error) {
        res.status(400).json({
            message: 'Payment Failed' + error.message
        });
    }
});

module.exports = router;