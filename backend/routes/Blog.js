import express from "express"
import { Create, Delete, getPosts, update } from "../controller/Blog.js"
import { isAdmin } from "../middleware/isAdmin.js"
import { upload } from "../middleware/Multer.js"

const BlogsRoutes = express.Router()

BlogsRoutes.post('/create',isAdmin,upload.single('postimage'),Create)
BlogsRoutes.delete("/delete/:id",isAdmin,Delete)
BlogsRoutes.get('/getposts',getPosts)
BlogsRoutes.patch('/update/:id',isAdmin,upload.single('postimage'),update)
export default BlogsRoutes