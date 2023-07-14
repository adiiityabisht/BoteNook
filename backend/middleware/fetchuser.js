const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisishidden";

const fetchuser = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.header("auth-token");
  if (!token) {
    // If no token is found, return an error
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    // Verify the JWT token and extract the user data
    const data = jwt.verify(token, JWT_SECRET);

    // Add the user ID to the request object
    req.user = data.user;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid, return an error
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
