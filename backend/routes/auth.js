const express = require("express");
const User = require("../models/User"); // Importing the User model
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');    
const JWT_SECRET = 'thisishidden'
// Route to create a user: POST "/createuser" (No authentication required)
router.post(
  "/createuser",
  [
    // Express-validator middleware for request body validation
    body("email", "Enter valid email").isEmail(),
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        // If a user with the provided email already exists, return an error
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt); 
      // Create a new user with the provided name, email, and password
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });
      const data = {
        user:{
            id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
    
      // Send a response with the created user data
      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal ServerError Occured ");
    }
  }
);

// authticate a user: no login required 

router.post(
  "/login",
  [

    body("email", "Enter valid email").isEmail(),
    body("email", "Pass canoot be black").exists(),
    // body("password", "Password must be at least 5 characters").isLength({
    //   min: 5,
    // }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} =  req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Try Again!"});
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error: "Try Again!"})
        }
        const data = {
        user:{
            id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });   
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal ServerError Occured ");
    }
  })

module.exports = router;
