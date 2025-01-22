import React, { useEffect, useState } from 'react'
import { BaseUrl, get } from '../services/Endpoint'
import { useParams } from 'react-router-dom'

const Post = () => {

  const {id}=useParams()
  const [singlepost,setSinglepost]=useState(null)
  
  const SinglePost = async ()=>{
    try {
      const response = await get(`/public/singlepost/${id}`)
      const data = response.data
      console.log(data)
      setSinglepost(data.post)
    } catch (error) {
      console.log(error)
    }
   }
  useEffect(()=>{
   SinglePost()
  },[])
  return (
   <>
     <div>
      <div className='flex flex-col my-5'>
          <h1 className='text-white text-3xl mx-9 my-4 font-bold '>{singlepost && singlepost.title}</h1>
          <img className='rounded-2xl mx-7 max-w-4xl' src={singlepost && `${BaseUrl}/images/${singlepost.image}`}alt="" />
          <p className='text-white text-1xl mx-7 my-7'>{singlepost && singlepost.desc}</p>
          <hr className='mx-7'/>
          <h3 className='mt-7 mx-7 font-bold text-white text-2xl'>Leave a Comment</h3>

          <form action="">
            <div className='flex flex-col'>
               <label className='mt-2 mx-7 text-white' htmlFor="comment">Comment:</label>
               <textarea className='mx-7 rounded-md p-1' rows="4" placeholder='write your Comment here' id="comment" required></textarea>
            </div>  
            <button className='mx-7 mt-2  rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type='submit' >Submit Comment</button>
          </form>    
          <hr className='mx-7 my-5' />
            <h3 className='mx-7 text-white font-bold text-2xl'>Comments:</h3>
        
           {singlepost && singlepost.comment.map((comments)=>{
             return(
              <div className=' p-3  flex flex-row mx-7 my-1 rounded-md bg-slate-500'>
              <img className=' max-h-12 ml-2 mr-3 overflow-hidden  text-white rounded-full' src={`${BaseUrl}/images/${comments.userId.profile}`} alt="" />
              <div className='flex flex-col'>
                <h3 className='text-white font-bold text-'>{comments.userId.FullName}</h3>
                <p className='text-white'>{comments.comment}</p>
              </div>
            </div>
             )
           })}
          
          
       

      </div>
        
      

     </div>
   </>
  )
}

export default Post