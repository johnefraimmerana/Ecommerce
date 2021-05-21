import express, { request } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Client from "./services/createUser.js";
import Sign from "./services/login.js";
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

//create user with validation
app.post("/createUser", Client.UserValidator(), (req, res) => {
  Client.CreateUser(req, res);
});

//login user
app.post("/login", Sign.LoginValidator(), (req, res) => {
  Sign.LoginUser(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost${PORT}`);
});
