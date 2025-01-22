import jwt from "jsonwebtoken"
import { User } from "../model/blogModel.js"

export const isAdmin = async (req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
           return res.status(401).json({success:false,message:"Unauthorized :No token provided"}) 
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user =await User.findById(decoded.userId)
        
        if(!user){
            return res.status(403).json({success:false,message:"Unauthorized:User Not Found"})

        }

        if(user.role != 'admin'){
            return res.status(403).json({success:false,message:"Unauthorized : User is not an admin"})
        }

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})  
    }
}


export const isLogin = async(req,res,next)=>{
    
    try{
       const token = req.cookies.token
        if(!token){
           return res.status(401).json({success:false,message:"Unauthorized :No token provided"}) 
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user =await User.findById(decoded.userId)
        
        if(!user){
            return res.status(403).json({success:false,message:"Unauthorized:User Not Found"})

        }
        req.user= user
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})  
    }
}