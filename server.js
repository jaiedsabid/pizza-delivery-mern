const express = require("express");
const app = express();
const db = require("./db");
const pizza = require("./routes/pizzaRoute");

// Middlewares
app.use(express.json());

// Routes
app.use("/pizzas", pizza);

app.get("/", (req, res) => {
   res.send("Server is working fine");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on PORT: ${PORT}`);
});