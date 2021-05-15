import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  //registration state
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //set the value of the sign up form
  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  //show notification or toast
  const notify = (statusData) => {
    if (statusData === "Registered!") {
      toast.success(statusData);
    } else if (
      statusData === "Email already exist. Use another email Address."
    ) {
      toast.warning(statusData);
    } else {
      for (var i = 0; i < statusData.length; i++) {
        var result = statusData[i].msg;
        toast.error(result);
      }
    }
  };
  //submit button register new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/createUser", {
          firstName: register.firstName,
          lastName: register.lastName,
          emailAddress: register.email,
          password: register.password,
        })
        .then((res) => {
          if (
            res.data === "Registered!" ||
            res.data === "Email already exist. Use another email Address."
          ) {
            notify(res.data);
          } else {
            notify(res.data.errors);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "#fdf3f4",
          height: "auto",
          borderRadius: "20px",
        }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={register.firstName}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={register.lName}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  value={register.email}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  value={register.password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              color="secondary"
              onClick={notify}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <ToastContainer />
          </form>
        </div>
      </Container>
    </>
  );
}
