import mongoose from "mongoose";

const userSchema = mongoose.Schema;

const User = new userSchema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  password: String,
});

const user = mongoose.model("users", User);


export default user;
