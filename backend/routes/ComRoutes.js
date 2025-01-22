import express from "express"
import { AddComment } from "../controller/Comments.js"
import { isLogin } from "../middleware/isAdmin.js"

const CommentRoutes = express.Router()

CommentRoutes.post('/addComment',isLogin,AddComment)

export default CommentRoutes