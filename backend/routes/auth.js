// Import necessary modules and dependencies
const express = require("express");
const User = require("../models/User"); // Importing the User model
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisishidden";
const fetchuser = require("../middleware/fetchuser");

// Route 1: Route to create a user: POST "/createuser" (No authentication required)
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
    let success=false;
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // Check if a user with the provided email already exists
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        // If a user with the provided email already exists, return an error
        return res
          .status(400)
          .json({
            success,
            error: "Sorry, a user with this email already exists",
          });
      }

      // Hash the password before storing it in the database
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user with the provided name, email, and hashed password
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Create a JWT token containing the user's ID
      const data = {
        user: {
          id: user.id,  
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // Send a response with the created user's JWT token
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal ServerError Occurred");
    }
  }
);

// Route 2: Authenticate a user: POST "/login" (No authentication required)
router.post(
  "/login",
  [
    body("email", "Enter valid email").isEmail(),
    body("email", "Pass cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user with the provided email
      let user = await User.findOne({ email });
      if (!user) {
        // If user not found, return an error
        success = false;
        return res.status(400).json({ error: "Try Again!" });
      }

      // Compare the provided password with the hashed password stored in the database
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        // If passwords do not match, return an error
        success = false;
        return res.status(400).json({ success, error: "Try Again!" });
      }

      // Create a JWT token containing the user's ID
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // Send a response with the user's JWT token
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal ServerError Occurred");
    }
  }
);

// Route 3: Get logged-in user details using POST "/getuser" (Login required)
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    // Get the user ID from the authenticated request
    const userId = req.user.id;

    // Find the user by ID and exclude the password field from the result
    const user = await User.findById(userId).select("-password");

    // Send the user details in the response
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal ServerError Occurred");
  }
});

module.exports = router;
