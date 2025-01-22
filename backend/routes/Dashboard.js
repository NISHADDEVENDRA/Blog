import express from "express"
import { isAdmin } from "../middleware/isAdmin.js"
import { DeleteUser, getAllData, getUser } from "../controller/Dashboard.js"

const DashboardRoutes = express.Router()

DashboardRoutes.get('/',isAdmin,getAllData)
DashboardRoutes.get('/users',isAdmin,getUser)
DashboardRoutes.delete('/deleteuser/:id',isAdmin,DeleteUser)
export default DashboardRoutes