/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const db = require('./db');
const pizza = require('./routes/pizzaRoute');
const user = require('./routes/userRoute');
const orders = require('./routes/ordersRoute');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/pizzas', pizza);
app.use('/api/users', user);
app.use('/api/orders', orders);

app.get('/', (req, res) => {
  res.send('Server is working fine');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${PORT}`);
});
