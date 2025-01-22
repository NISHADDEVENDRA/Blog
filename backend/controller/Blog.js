import { Post } from "../model/Blog.js"
import fs from "fs"
import path from "path"
export const Create = async(req,res)=>{
  try {
    const {title,desc} = req.body
    const imagepath=`${req.file.filename}`

    const CreateBlogs = new Post({
        title,desc,image:imagepath,
    })
   await CreateBlogs.save()
   return res.status(200).json({success:true,message:"Post Created Succcessfully",Post:CreateBlogs})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server Error"})
  }
}


export const Delete =async (req,res)=>{
    try {
        const postId = req.params.id
        const FindPost =await Post.findById(postId)
        if(!FindPost){
            return res.status(404).json({success:false,message:"Page Not Found"})
        }
        if(FindPost){
          const profilepath = path.join('public/images',FindPost.image)
          fs.promises.unlink(profilepath)
          .then(()=>console.log("post image Deleted"))
          .catch(error=> console.log('Error deleting post image',error))
        }
        const deletePost = await Post.findByIdAndDelete(postId)

        return res.status(200).json({success:true,message:"Page Deleted Successfully", Deleted : deletePost})


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
    }
}


export const getPosts = async (req,res)=>{
  try {
    const posts = await Post.find()
    if(!posts){
      return res.status(404).json({success:false,message:"Page Not Found"})
    }
    
    return res.status(200).json({success:true,posts})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server Error"})
  }
}

export const update = async (req,res)=>{
  try {
     const {title,desc}=req.body
     const postid = req.params.id
    const updatePost = await Post.findById(postid)
    
    if(!updatePost){
      return res.status(404).json({success:false,message:"Page Not Found"})
    }
   
    if(title){
      updatePost.title =title
    }

    if(desc){
      updatePost.desc =desc
    }

    if(req.file){
      updatePost.image =req.file.filename
    }
    await updatePost.save()
    return res.status(200).json({success:true,message:"Successfully Updated"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server Error"})
  }
}