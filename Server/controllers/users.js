import Users from "../models/users.js";
import express from "express";

const app = express();

export const getUsers = async (req, res) => {
  try {
    const currentUsers = await Users.find();
    console.log(currentUsers);
    res.status(200).json(currentUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};