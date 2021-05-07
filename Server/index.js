import express, { request } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import User from './models/user.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get request from users
app.get('/users', userRoutes);

//get request from server
app.get('/', (req, res) =>{
  res.send("Hello from server...");
})

app.get('/createUser', (req, res)=>{
  res.send("created successfully");
})
app.post('/createUser', (req, res)=>{
  var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });

})

app.listen(PORT, ()=>{
  console.log(`Server is running on: http://localhost${PORT}`);
})
mongoose
  .connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log(`Connected to mongo database...`);
  })
  .catch((error) => console.log(error.message));
