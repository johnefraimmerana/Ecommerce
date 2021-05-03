import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Schema from "mongoose";
import users from "./models/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Server is running on: ${PORT}`);
  })
  .catch((error) => console.log(error.message));

users.find(function (err, users) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(users);

    users.forEach(function (user) {
      console.log(user.password);
    });
  }
});
