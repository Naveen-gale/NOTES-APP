import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Changed "notes app" to "notes_app"
await mongoose.connect("mongodb://localhost:27017/notes_app"); // Changed "notes app" to "notes_app"/notes_app");
        console.log("Database connected successfully");
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Optional: stops the server if the DB fails to connect
    }
}

export default connectDB;