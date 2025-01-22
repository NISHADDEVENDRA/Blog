import { Post } from "../model/Blog.js"

export const GetSinglePost = async(req,res)=>{
    try {
       const postId = req.params.id
       const Findpost =await Post.findById(postId)

       .populate({
          path:"comment",
          populate:{
            path:"userId"
          }
       })
       
       if(!Findpost){
        return res.status(404).json({success:false,message:"Page Not Found"})
         }
        res.status(200).json({success:true,post :Findpost})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server Error"})
      
    }
}