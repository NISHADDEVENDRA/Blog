import React from 'react'
import { FaCamera, FaLock, FaUser } from 'react-icons/fa'
const Profile = () => {
  return (
   <>
    <div className='flex flex-col justify-center items-center my-12 mx-auto max-w-[370px] rounded-xl p-7 shadow-lg shadow-current bg-slate-900'>
      <h1 className='text-white text-2xl mb-5 '>Update Profile</h1>
      <form >
        <div >
          <label htmlFor="profileImage" className=' cursor-pointer relative '>
        
            <div className='rounded-full bg-slate-800 flex max-w-28 max-h-28 items-center m-auto justify-center border-2 border-slate-500'>
              <FaUser className='  text-slate-400 size-28 p-6 ' />
            </div>
            <FaCamera className=' absolute bottom-1 right-16 bg-slate-800 text-slate-400 size-5 p-1 rounded-full border-2 border-slate-400 '/>
          </label>

          <input type="file" id="profileImage" accept='image/*' className=' hidden'/>
        </div>

        <div className='flex relative mt-4'>
          <FaUser className=' absolute mt-2 mx-1 text-slate-400'/>
          <input type="text" placeholder='Update Name' className='px-7 py-1 rounded-md bg-slate-700' />
        </div>
        
        
        <div className='flex relative mt-4'>
          <FaLock className=' absolute mt-2 mx-1 text-slate-400'/>
          <input type="password" placeholder='Old Password' className='px-7 py-1 rounded-md bg-slate-700' />
        </div>

        <div className='flex relative mt-4'>
          <FaLock className=' absolute mt-2 mx-1 text-slate-400'/>
          <input type="password" placeholder='Old Password' className='px-7 py-1 rounded-md bg-slate-700' />
        </div>

        <button type='submit ' className='bg-blue-600 mt-3 w-full text-white text-1xl p-1 rounded-md' >Update Profile</button>
      </form>
    </div>
   </>

  )
}

export default Profile