import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, get } from "../services/Endpoint.js";

const RecentPost = () => {
    const navigate =useNavigate()
    const [post,setPost]= useState([])
  
    const handleNavigate = (id)=>{
        navigate(`/post/${id}`)
    }
  
    const getpost = async()=>{
      try {
        const response = await get('/blog/getposts')
        const data = response.data
        setPost(data.posts)
        console.log(data)
      } catch (error) {
         console.log(error)
      }
    }

    useEffect(()=>{
      getpost()
    },[])

  return (
    <>
      <div>
        <div className="text-center  mt-5 mb-5">
          <h2 className="text-white font-bold text-3xl ">Recent Posts</h2>
        </div>
      </div>

     <div className="grid grid-cols-1 place-items-center mx-auto  md:grid-cols-3 lg:grid-cols-4 md:gap-1 md:mx-3 ">
      
        {post && post.map((post,index)=>{
          return(
           
            <div className=" flex flex-col  mb-3 md:mx-1  bg-white shadow-sm border border-slate-200 rounded-lg max-w-96">
       <div className=" max-h-48  m-2.5 overflow-hidden text-white rounded-md">
         <img src={`${BaseUrl}/images/${post.image}`} alt="card-image" />
       </div>
       
       <div className="p-4">
         <h6 className="mb-2 text-slate-800 text-xl font-semibold"> {post.title}</h6>
         <p className="text-slate-600 leading-normal font-light">{post.desc} </p>
       </div>
       
       <div className="px-4 pb-4 pt-0 mt-2">
         <button onClick={()=>handleNavigate(post._id)} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" > Read more</button>
       </div>
      </div>
          )
        })}

      </div>
    </>
  );
};

export default RecentPost;
