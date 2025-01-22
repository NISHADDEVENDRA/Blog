import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux'

const AdminLayout = () => {
  const user = useSelector((state)=>state.auth.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }else if(user.role !=='admin'){
      navigate('/')
    }
  },[user,navigate])
  return (
    <div>
      <Navbar/>
      <div className='flex min-h-screen '>
        <Sidebar/>
        <div className='w-full'>
           <Outlet/> 
        </div>

      </div>
     
    </div>
  )
}

export default AdminLayout