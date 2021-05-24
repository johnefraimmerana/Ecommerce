import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/product.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const secret = process.env.SECRET;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Connected to mongo database...`);
  })
  .catch((error) => console.log(error.message));

app.get("/products", (req, res) => {
  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("./", (req, res) => {
  res.send("Hello to lharo and welcome");
});
app.post("/createProducts", (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  newProduct.save();
});
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost${PORT}`);
});
