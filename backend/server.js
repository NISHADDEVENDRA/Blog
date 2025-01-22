import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import AuthRoutes from "./routes/Auth.js"
import cookieParser from "cookie-parser"
import BlogsRoutes from "./routes/Blog.js"
import DashboardRoutes from "./routes/Dashboard.js"
import CommentRoutes from "./routes/ComRoutes.js"
import publicRoutes from "./routes/Public.js"
dotenv.config()
const app =express()
const PORT = process.env.PORT || 5000
const corsOptions={
    origin:true,
    credentials:true
}
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use(cors(corsOptions))
app.use('/auth',AuthRoutes)
app.use('/blog',BlogsRoutes)
app.use('/dashboard',DashboardRoutes)
app.use('/comment',CommentRoutes)
app.use('/public',publicRoutes)
app.listen(PORT, ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("MONGODB Connected Successfully"))
    console.log (`Server is running on port :${PORT}`)
})