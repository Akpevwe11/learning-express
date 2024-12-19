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



export const getUserByID  = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);

    } catch (error) {
        res.send(error);
    }

};

// Method to update a contact 

export const updateUser = async (req, res) => {

    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.json(user);

    } catch(error) {
        res.send(error); 
    }
};

// Method to delete a user from the collection 


export const deleteUser = async (req, res) => {

   try {
    const user = await User.deleteOne({_id: req.params.id});
    if (user.deletedCount === 0) {
        return res.status(404).json({message: "User not found"}); 
    }

    res.json({message: "User deleted successfully"});
   } catch (err) {
    res.send(err);
   }

}; 




