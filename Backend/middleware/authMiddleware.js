import JWT from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Authorization token missing",
      });
    }
    const token = authHeader.split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Invalid token",
          error: err.message,
        });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in auth middleware",
      error,
    });
  }
};

export default authMiddleware;