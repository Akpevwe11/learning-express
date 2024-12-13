import mongoose from "mongoose"; 

import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema);


// adds new user to the db 
export const addNewUser = async (req, res) => {
    let newUser = new User(req.body);
    console.log(req.body);  
    try {

        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (error) {
        res.send(error); 
    }
};

// get all the users from the databse 

export const getAllUsers =  async (req, res) => {

    try {

        const users = await User.find({});
        res.json(users);

    } catch (error) {
        res.send(error); 
    }
}