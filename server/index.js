import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import authRuter from './routes/auth.js';

const app = express();

// 1. Connect to Database
connectDB();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Routes
app.use('/api/auth', authRuter);

// 4. Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});