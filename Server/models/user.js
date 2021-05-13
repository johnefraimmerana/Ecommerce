import  mongoose from 'mongoose';

const userSchema = mongoose.Schema;

const User = new userSchema({
    firstName:{
        type: String,
       
    },
    lastName: {
        type: String,
        
    },
    emailAddress: {
        type: String,
    },
    password: String,
});

const user = mongoose.model("users", User);

export default user;