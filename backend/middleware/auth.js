import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
   
   
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        
        req.userId = token_decode.userId;
          // ✅ safer & correct
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ success: false, message: "Invalid Token" });
    }
}
