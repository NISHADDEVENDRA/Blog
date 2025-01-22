import React, { useEffect, useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"

import toast from 'react-hot-toast';
import { BaseUrl, delet, get } from '../../services/Endpoint';
const Allpost = () => {

  const [posts,setPosts]=useState([])
  const [loadedata,setLoadedata]=useState(false)


  const handleDelete = async(postId) => {
 // Display a confirmation dialog
 const confirmed = window.confirm('Are you sure you want to delete this user?');
  
 if (confirmed) {
   try {
     const response = await delet(`/blog/delete/${postId}`);
     const data = response.data;

     if (data.success) {
       toast.success(data.message);
       setLoadedata(!loadedata); // Trigger reloading the data
     
     } else {
       toast.error('Failed to delete the user.');
     }
   } catch (error) {
     console.error('Error deleting user:', error);

     if (error.response && error.response.data && error.response.data.message) {
         // setError(error.response.data.message); // Set error message from server response
         toast.error(error.response.data.message)
     } else {
         toast.error("An unexpected error occurred. Please try again.");
     }
   }
 }
  };

  const handleUpdate = (postId) => {
    // Implement the update functionality here
    console.log(`Post with ID ${postId} updated.`);
  };

  useEffect(()=>{
    const getposts=async()=>{
      try {
          const resposne= await get("/blog/GetPosts")
          const data= resposne.data
         setPosts(data.posts)
          console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getposts()
   },[loadedata])


  return (
    <>
    <div>
    <div className="text-center  mt-5 mb-5">
      <h2 className="text-white font-bold text-3xl ">Recent Posts</h2>
    </div>
  </div>

 <div className="grid grid-cols-1 place-items-center mx-auto  md:grid-cols-3 lg:grid-cols-4 md:gap-1 md:mx-3 ">
  
  {posts && posts.map((post)=>{
    return(
      <div className=" flex flex-col  mb-3 md:mx-1  bg-white shadow-sm border border-slate-200 rounded-lg max-w-80">
      <div className=" max-h-48  m-2.5 overflow-hidden text-white rounded-md">
        <img  src={`${BaseUrl}/images/${post.image}`} />
      </div>
      
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold"> {post.title}</h6>
        <p className="text-slate-600 leading-normal font-light">{post.description} </p>
      </div>
      
      <div className="px-4 py-4 pt-0 flex justify-between">
        <button  onClick={() => handleDelete(post._id)} className=" flex   rounded-md bg-red-600 py-2 px-4  border border-transparent  text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button" > <FaTrashAlt className=' mt-1 me-1 ' />Delete</button>
        <button  onClick={() => handleUpdate(post._id)} className=" flex rounded-md bg-yellow-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-yellow-700 focus:shadow-none active:bg-yellow-700 hover:bg-yellow-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" > <FaEdit className='mt-1 me-1'/>Update</button>
      </div>
     </div>
    )
  })}

  </div>
</>
  )
}

export default Allpost