import Users from "../models/users.js";
import express from "express";

const app = express();

export const getUsers = (req, res) => {
  try {
    app.get("/", (request, response) => {
      response.send("its working!");
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
console.log(getUsers);
