import express from 'express'
const router = express.Router()
import bcrypt from 'bcrypt'
import User from '../model/user.js'
import jwt from 'jsonwebtoken'


// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    console.log("Incoming Data:", req.body)

    const user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      })
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      name,
      email,
      password: hashpassword
    })

    await newUser.save()

    return res.status(201).json({
      success: true,
      message: "User created successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    console.log("1. Request received");

    const { email, password } = req.body;
    console.log("2. Body:", email, password);

    const user = await User.findOne({ email });
    console.log("3. User:", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    const checkpass = await bcrypt.compare(password, user.password);
    console.log("4. Password match:", checkpass);

    if (!checkpass) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    console.log("5. Creating token");

    const token = jwt.sign(
      { email: user.email, id: user._id },
      "mySuperSecretKey123",
      { expiresIn: "5h" }
    );

    console.log("6. Token created");

    return res.status(200).json({
      success: true,
      token,
      user: { name: user.name, email: user.email },
      message: "User logged in successfully"
    });

  } catch (err) {
    console.error("LOGIN CRASH:", err);   // this line is GOLD
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});


export default router
