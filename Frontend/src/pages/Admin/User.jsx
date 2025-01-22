import React, { useEffect, useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"
import toast from 'react-hot-toast';
import { delet, get } from '../../services/Endpoint';
const User = () => {

  const [Users ,setUsers]=useState([])
  const [loadedata,setLoadedata]=useState(false)
  
  const handleDelete = async (userId) => {
    
    const confirmed = window.confirm('Are you sure you want to delete this user?');
  
    if (confirmed) {
      try {
        const response = await delet(`/dashboard/delete/${userId}`);
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

  useEffect(()=>{
    const getuser=async()=>{
      try {
          const resposne= await get("dashboard/users")
          const data= resposne.data
          setUsers(data.user)
          console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getuser()
   },[loadedata])
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <h1 className='text-white font-bold m-4 text-3xl'>Users</h1>
      <div className='m-4  '>
        <table className='table-auto text-left rtl:text-right w-full'>
          <thead className='text-white'>
            <th >#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody className='bg-slate-700  text-yellow-50'>
          {Users && Users.map((user,index)=>{
            return(
              <tr scope='row' key={user.id}>
              <th>{index+1}</th>
              <td>{user.FullName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}  className='bg-red-500 flex text-1xl p-1 m-2 rounded-md px-2 mx-0 hover:bg-red-700 hover:ring-2  hover:ring-red-800'><FaTrashAlt className='mt-1 me-1 ' />Delete</button>
              </td>
            </tr>
            )
          }
          
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User