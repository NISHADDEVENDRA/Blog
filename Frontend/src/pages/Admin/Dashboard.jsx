import React, { useEffect, useState } from 'react'
import { get } from '../../services/Endpoint'

const Dashboard = () => {
   
  const [post,setPost]=useState([])
  const [users,setUsers]=useState([])
  const [comments,setComments]=useState([])
   
   useEffect(()=>{
     const GetData=async()=>{
       try {
         const request= await get('/dashboard')
         const response= request.data
 
         console.log(response)
         if (request.status===200) {
           setPost(response.post)
           setUsers(response.user)
           setComments(response.comment)
         }
       } catch (error) {
         console.log(error)
       }
     }
     GetData()
   },[])

  return (
    <div >
      <h2 className='m-4 font-bold text-2xl text-white '>Dashboard</h2>
      <div className=' grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 mx-5 gap-5'>
        <div className='   bg-blue-600 text-white rounded-md'>
          <div className='m-3'>
            <h5 className='text-2xl'>Total Users:</h5>
            <p className='text-lg mt-1  '>{users && users.length}</p>
          </div>
        </div>

        <div className='   bg-green-600 text-white rounded-md'>
          <div className='m-3'>
            <h5 className='text-2xl'>Total Posts:</h5>
            <p className='text-lg mt-1  '>{post && post.length}</p>
          </div>
        </div>

        <div className='  bg-yellow-500 text-white rounded-md'>
          <div className='m-3'>
            <h5 className='text-2xl'>Total Comments:</h5>
            <p className='text-lg mt-1  '>{comments && comments.length}</p>
          </div>
        </div>
 
      </div>
    </div>
  )
}

export default Dashboard