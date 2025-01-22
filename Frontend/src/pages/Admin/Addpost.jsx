import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { post } from '../../services/Endpoint';

const Addpost = () => {
   
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); 
   

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (image) {
        formData.append('postimage', image);
      }
      formData.append('title', title);
      formData.append('desc', description);
      
  
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      
      const response = await post('/blog/create', formData);
      const data = response.data;
      if (data.success) {
        toast.success(data.message)
        setTitle('')
        setImage(null)
        setDescription('')
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  



  return (
    <div className='flex items-center justify-center min-h-full  flex-col'>
      <div className='bg-white md:w-6/12 '>
      <div className='bg-blue-600 text-white text-2xl p-1 text-center' >
         <h2>Add New Post</h2>
       </div>
       <div>
          <div className='flex flex-col m-4 ' >
            <label htmlFor="postImage" className='mb-2'>Upload Image</label>
            <input type="file" id='postimage'  onChange={(e) => setImage(e.target.files[0])}  className=' rounded-md border-2 border-slate-500'/>
          </div>

          <div className='flex flex-col m-4'>
            <label htmlFor="postTitle" className=''>Title:</label>
            <input type="text" id='postTitle' className='p-1 rounded-md border-slate-500 border-2' placeholder='Enter post Title' onChange={(e) => setTitle(e.target.value)} value={title}  required />
          </div>

          <div className='flex flex-col m-4 mb-0'>
            <label htmlFor="postDescription" >Description:</label>
            <textarea   value={description}
                    onChange={(e) => setDescription(e.target.value)}  id="postDescription" rows="6" className='border-2 rounded-md p-1 border-slate-500' placeholder=' Write your post description here' required></textarea>
          </div>

          <div className='flex'>
            <button type='submit' onClick={handleSumbit} className='bg-blue-600 m-4 p-1 rounded-md w-full cursor-pointer hover:bg-blue-700'>Submit Post</button>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Addpost