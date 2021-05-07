import express from 'express';
import User from "../models/user.js";

const router = express.Router();

router.get('/users', (req, res) =>{
    res.send("galing sa users");
})

export default router;