import { Post } from "../model/Blog.js"
import { User } from "../model/blogModel.js"
import fs from "fs"
import path from "path"
import { Comment } from "../model/comments.js"


export const getAllData = async (req,res) =>{
    try {
      const user = await User.find()
      const post =await Post.find()
      const comment = await Comment.find()
      if(!user || !post ){
        return res.status(404).json({success:false,message:"Page not found"})
      }

      res.status(200).json({success:true,user,post,comment})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
    }
}


export const getUser = async(req,res)=>{
    try {
        const user = await User.find()
  
        if(!user ){
          return res.status(404).json({success:false,message:"Page not found"})
        }
  
        res.status(200).json({success:true,user})
      } catch (error) {
          console.log(error)
          return res.status(500).json({success:false,message:"Internal server Error"})
      }
}

export const DeleteUser = async(req,res)=>{
    try {
       const userid =req.params.id
       const ExistUser= await User.findById(userid)

       if(!ExistUser){
        return res.status(404).json({success:false,message:"data not found"})
       }
       if(ExistUser.role == 'admin'){
        return res.status(404).json({success:false,message:"sorry admin can't be Deleted"})
       }
       const Deleteuser =await User.findByIdAndDelete(userid)
       if(ExistUser.profile){
        const profilepath = path.join('public/images',ExistUser.image)
        fs.promises.unlink(profilepath)
        .then(()=>console.log("post image Deleted"))
        .catch(error=> console.log('Error deleting post image',error))
      } 
       return res.status(200).json({success:true,message:"Page Deleted Successfully", Deleted : Deleteuser})
       re

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"}) 
    }
}