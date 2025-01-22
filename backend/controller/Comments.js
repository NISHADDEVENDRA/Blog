import { Post } from "../model/Blog.js"
import { Comment } from "../model/comments.js"

export const AddComment = async(req,res)=>{
    try {
       const {postId,userId,comment} = req.body
       
       const newComment = Comment({
        postId,userId,comment
       })

       await newComment.save()

       const existPost = await  Post.findById(postId)

       if(!existPost){
        return res.status(404).json({success:false,message:"user not Found"})
       }

       existPost.comment.push(newComment._id)

       await existPost.save()
       res.status(200).json({success:true,message:"comment added successfully", comment: newComment})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"}) 
    }
}