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
/*
//creating new user to the database
export const createUsers = (req, res) =>{
  const user = req.body;

  const newUser = new Users(user);

  try{
      await newUser.save();
      res.status(201).json(newUser);
  }catch(error){
    res.status(409).json({message: error.message});
  }
}
*/