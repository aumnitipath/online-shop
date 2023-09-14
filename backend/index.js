const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const products = require("./products");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on Port ${port}`));

mongoose
  .connect(uri, {
    useNewURlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successful..."))
  .catch((err) => console.log("MongoDB connection failed", err.message));
