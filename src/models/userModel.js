import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstname: {
        type: String, 
       required: 'Enter a first name' 
    }, 
    lastname: {
        type: String, 
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter an email address'
    }, 
    company: {
        type: String 
    }, 
    phone: {
        type: Number 
    }, 
    created_at: {
        type: Date, 
        default: Date.now
    }

}); 