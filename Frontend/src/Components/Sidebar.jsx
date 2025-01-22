import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FaPlusSquare} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFileAlt} from 'react-icons/fa'

const Sidebar = () => {
  return (
   <>
     <div className='bg-slate-800 text-white min-w-52 '>
       <div className='p-3'>
         <ul className='flex flex-col'>
            <li className=' mb-3 '>
              <Link to={'/dashboard'} className='flex flex-row '><FaHome className='me-2 mt-1'/>Dashboard</Link>
            </li>

            <li className='mb-3 '>
              <Link to={'/dashboard/addpost'} className='flex flex-row '><FaPlusSquare className='me-2 mt-1'/>Add Post</Link>
            </li>

            <li className=' mb-3 '>
              <Link to={'/dashboard/user'} className='flex flex-row '><FaUsers className=' mt-1 me-2'/>All Users</Link>
            </li>
           
            <li className=' mb-3 '>
              <Link to={'/dashboard/allpost'} className='flex flex-row '><FaFileAlt className=' mt-1 me-2'/>All Posts</Link>
            </li>

         </ul>
       </div>
     </div>
   </>
  )
}

export default Sidebar