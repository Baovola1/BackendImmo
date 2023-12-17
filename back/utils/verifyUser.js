//nécessaire avant de faire updateUser=>verify user via son token
import jwt from "jsonwebtoken";


export const verifyToken=(req,res, next)=>{
    const cookie = req.cookies.access_token;
    if(!cookie) return next(errorHandler(401,"Unauthorized"));

    jwt.verify(cookie, process.env.JWT_SECRET,(err,user)=>{
        req.user= user;
        next();
    });
}