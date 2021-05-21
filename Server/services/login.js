import { body, validationResult } from "express-validator";
import User from "../models/user.js";
import bcrypt from "bcrypt";

function LoginValidator() {
  return [
    body("userName").notEmpty().withMessage("Invalid Email"),
    body("password").notEmpty().withMessage("Invalid password"),
  ];
}
function LoginUser(req, res) {
  //returning error to client
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() });
  } else {
    const userName = req.body.userName;
    const password = req.body.password;
    User.findOne({ emailAddress: userName }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (err) {
              console.log(err);
            }
            if (result === true) {
              res.send("login successfully.");
            } else {
              res.send("Invalid email or password");
            }
          });
        }
      }
    });
  }
}

export default {
  LoginValidator,
  LoginUser,
};
