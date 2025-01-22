import { User } from "../model/blogModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Register =async (req,res)=>{
    const {FullName,email,password}=req.body
    try {
       if(!email || !password || !FullName){
         return res.status(400).json({success:false,message:"All Fields Are Required"})
       }

       const userAlreadyExists = await User.findOne({email})

       if(userAlreadyExists){
         return res.status(303).json({success:false, message:"User Already Exist Please Login"})
       }
       const imagePath= `${req.file.filename}`
       const hashedPassword = await bcryptjs.hash(password,10)
       const user = new User({
        FullName: FullName,
        email: email,
        password:hashedPassword,
        profile:imagePath,
       })

       await user.save()

       return res.status(200).json({success:true,message:"User Registered Successfully",user:user})

       
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
    }
}


export const Login =async (req,res)=>{
    try {
       const {email,password}= req.body
       if(!email || !password){
        return res.status(400).json({success:false,message:"All Fields Are Required"})
       } 
        
       const user = await User.findOne({email})

       if(!user){
       return res.status(300).json({success:false, message:"No user Found Please Register"})
       }
    
       const IsPasswordValid = await bcryptjs.compare(password,user.password)
       if(!IsPasswordValid){
        return res.status.json({success:false,message:"Invalid Password"})
       }

       const token =jwt.sign({userId:user._id},process.env.JWT_SECRET)
  
       res.cookie('token',token,{
          httpOnly :true,
          secure : false,
          maxAge : 3 * 24 * 60*60 *1000
       })
       res.status(200).json({success:true,message:"Login Successfully",user:user,token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
    }
}

export const Logout = async(req,res)=>{
    try {
       res.clearCookie('token')
       res.status(200).json({success:true,message:"Logout Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
    }
}