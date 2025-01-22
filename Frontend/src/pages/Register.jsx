import React from 'react'
import { Link } from 'react-router-dom'
import {  FaUser } from 'react-icons/fa'
const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mt-5 mx-auto min-h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl  font-semibold text-white">
        <img classNmae="w-8 h-8  mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
        <Link to={"/"}>Blog</Link>   
    </a>
    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
               <div >
                <label htmlFor="profileImage" className=' cursor-pointer relative '>
        
                  <div className='rounded-full bg-slate-800 flex max-w-28 max-h-28 items-center m-auto justify-center border-2 border-slate-500'>
                   <FaUser className='  text-slate-400 size-28 p-6 ' />
                 </div>
                 
                </label>

                <input type="file" id="profileImage" accept='image/*' className=' hidden'/>
               </div>
  
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Ram" required/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required/>
                </div>
               
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                <p className="text-sm font-light text-gray-500 ">
                    Already have an account ? <Link to={'/login'} class="font-medium text-blue-600 underline ">Signup</Link>
                </p>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register