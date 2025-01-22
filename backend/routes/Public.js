import express from "express"
import { GetSinglePost } from "../controller/public.js"

const publicRoutes = express.Router()

publicRoutes.get('/singlepost/:id',GetSinglePost)

export default publicRoutes