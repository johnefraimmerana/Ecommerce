import User from "../models/user.js";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
const saltRounds = 10;

function UserValidator() {
  return [
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
  ];
}

function CreateUser(req, res) {
  //returning error to client
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() });
  }
  //checking email if exist
  User.findOne({ emailAddress: req.emailAddress }, function (err, user) {
    if (err) {
      console.log(err);
    }
    if (Boolean(user))
      res.send("Email already exist. Use another email Address.");
  });
  //hashing and salting password
  bcrypt.hash(req.password, saltRounds, function (err, hash) {
    const newUser = new User({
      firstName: req.firstName,
      lastName: req.lastName,
      emailAddress: req.emailAddress,
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

export default {
  CreateUser,
  UserValidator,
};
