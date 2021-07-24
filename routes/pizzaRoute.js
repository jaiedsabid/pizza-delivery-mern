const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/", async (req, res) => {
    try {
        const allPizzas = await Pizza.find();
        res.status(200).send(allPizzas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;
