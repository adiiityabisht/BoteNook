const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route 1: Get all notes: GET "/api/notes/fetchallnotes" (Login required)
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    // Find all notes belonging to the authenticated user
    const notes = await Note.find({ user: req.user.id });

    // Send the notes as a response in JSON format
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occurred");
  }
});

// Route 2: Add new notes: POST "/api/notes/addnote" (Login required)
router.post(
  "/addnote",
  fetchuser,
  [
    // Validate the request body
    body("title", "Enter a title").isLength({ min: 3 }),
    body("description", "Enter a longer description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Create a new Note object
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      // Save the note in the database
      const savedNote = await note.save();

      // Send the saved note as a response in JSON format
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred");
    }
  }
);

module.exports = router;
