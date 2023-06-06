const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from user
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decode.id).select("-password");
      if (!req.user) throw "User not found";

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      if (error === "User not found")
        throw new Error("User not found, please login again.");
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
