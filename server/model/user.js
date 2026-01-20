import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,      // Changed from Type to type
        required: true
    },
    email: {
        type: String,      // Changed from Type to type
        required: true,
        unique: true       // Good practice for user emails!
    },
    password: {
        type: String,      // Changed from Type to type
        required: true
    }
});

const User = mongoose.model('User', userSchema); // Capitalizing 'User' is standard practice for models
export default User;