import "dotenv/config"
import jwt from "jsonwebtoken"

export function Authentication(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Token missing" });
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode.id) {
      req.user = decode.id;
      return next();
    }

  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}