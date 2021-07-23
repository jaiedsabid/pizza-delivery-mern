const express = require("express");
const router = express.Router();
const Pizza = require('../models/pizzaModel');

router.get("/", async (req, res) => {
    const allPizzas = await Pizza.find();
    res.send(allPizzas);
})

module.exports = router;
