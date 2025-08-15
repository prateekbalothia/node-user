const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token; // read from cookies
    console.log(req.cookies.token)
    if (!token) {
        return res.status(401).send("Access Denied: No Token Provided!");
    }

    try {
        const verified = jwt.verify(token, "secret"); // verify token with secret
        req.user = verified; // store decoded payload in req.user
        next(); // move to next middleware/controller
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
};

module.exports = verifyToken;
