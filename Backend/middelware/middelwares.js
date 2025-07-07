import JWT from "jsonwebtoken";
import dotenv from "dotenv";
export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            console.log(decoded); // Log the decoded token for debugging
            if (err) {
                console.log(err);
                
                return res.status(401).send({ 
                    success: false,
                    message: "Invalid token", 
                    error: err.message
                });
            }
            req.user = decoded; // Attach user info to request object
            next(); // Proceed to the next middleware or route handler
        });
    } catch (error) {
        console.log("Error in auth middleware", error);
        res.status(500).send({ 
            success: false,
            message: "Error in auth middleware",
            error
         });
    }
}