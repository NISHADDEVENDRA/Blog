import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }]
},{timestamps:true})

export const Post = mongoose.model("Post",PostSchema)