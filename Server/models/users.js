import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const users = mongoose.model("users", userSchema);

export default users;
