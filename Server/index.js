import express, { request } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/user.js";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const saltRounds = 10;

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
app.post(
  "/createUser",
  [
    body("firstName")
      .trim()
      .not()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long.")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Invalid first name."),
    body("lastName")
      .trim()
      .not()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long.")
      .withMessage("Last name must not be empty")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Invalid input. Must be at least 3 characters"),
    body("emailAddress").isEmail().withMessage("Invalid email Address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Invalid password. Must be at least 8 characters long"),
  ],
  (req, res) => {
    //returning error to client
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array() });
    }
    //checking email if exist
    User.findOne({ emailAddress: req.body.emailAddress }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (user === req.body.emailAddress)
        res.send("Email already exist. Use another email Address.");
    });
    //hashing and salting password
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: hash,
      });
      newUser.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("Registered!");
        }
      });
    });
  }
);

//login user
app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  User.findOne({ emailAddress: userName }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.send("login");
        }
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost${PORT}`);
});
