import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl,post } from "../services/Endpoint";
import { removeUser } from '../redux/AuthSlice';
import toast from 'react-hot-toast';
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [isActive, setActive] = useState(false);
  const [islogin, setLogin] = useState(true);
  const user = useSelector((state)=>state.auth.user)
  
  const handleLogout=async()=>{
    try {
      const request= await post("/auth/logout")
      const response= request.data
       if (request.status==200) {
         navigate('/login')
         dispatch(removeUser())
         toast.success(response.message)
       }
    } catch (error) {
      console.log(error)
    }
}
  
  return (
    <>
      <nav className="bg-slate-700 flex justify-between items-center p-3">
        <Link to={"/"} className="mx-5 text-white font-bold text-3xl">
          <h1>Blog</h1>
        </Link>

        { !user ? (
          <div>
            <Link to={"/login"}>
              {" "}
              <button className="mx-3 cursor-pointer bg-pink-600 text-white mr-12 border-none w-20 h-10 text-base rounded-lg">
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                onClick={() => setActive((prev) => !prev)}
                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${BaseUrl}/images/${user.profile}`}
                  alt=""
                />
              </button>
            </div>
            {isActive ? (
              <div className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               {
                user.role=='admin'?  <Link to={"/dashboard"}>
                {" "}
                <a className="block px-4 py-2 text-sm text-gray-700">
                  Dashboard
                </a>
              </Link>:""
               }
                <Link to={"/profile/&*1222"}>
                  {" "}
                  <a
                    className="block px-4 py-2 text-sm text-gray-700"
                    onClick={() => setActive(setActive(false))}
                  >
                    Profile
                  </a>
                </Link>
                <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700">SignOut</a>
              </div>
            ) : (
              <div />
            )}{" "}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
