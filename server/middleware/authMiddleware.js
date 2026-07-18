const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  // Check if token exists in request header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Save user id in request
      req.user = {
        id: decoded.id,
      };

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not Authorized. Invalid Token",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "Not Authorized. No Token",
    });
  }
};

module.exports = { protect };