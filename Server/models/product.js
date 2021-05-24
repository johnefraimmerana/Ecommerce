import mongoose from "mongoose";

const userSchema = mongoose.Schema;

const Product = new userSchema({
  productName: String,
  genre: String,
  price: String,
  image: String,
});

const products = mongoose.model("products", Product);

export default products;
