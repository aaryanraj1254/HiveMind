const jwt = require('jsonwebtoken');



const authenticateToken = (req, res, next) => {
    console.log("authentication running...");
    console.log("token",req.header("Authorization"));
    const token = req.header('Authorization')?.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};


const authorize = (roles = []) => {
    return (req, res, next) => {
        console.log("authorize running...");
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied. Insufficient permissions." });
        }
        next();
    };
};

module.exports = { authenticateToken, authorize };
