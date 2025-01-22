import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { post } from '../services/Endpoint';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/AuthSlice';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
   
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const request = await post('/auth/login', value);
        const response = request.data;
        console.log("login success", response);
       if (request.status==200) {
        dispatch(setUser(response.user));
        navigate('/')
        toast.success(response.message)

       }
    } catch (error) {
        console.error("login error", error);
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message)
        } else {
            toast.error("An unexpected error occurred. Please try again.");
        }
    }
};
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl  font-semibold text-white"
      >
        <img
          className="w-8 h-8  mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        <Link to={"/"}>Blog</Link>
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Sign in to your account
          </h1>
          <form   onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name='email'
                id="email"
                value={value.email}
                onChange={handlechange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                value={value.password}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Dont have an account yet?{" "}
              <Link
                to={"/register"}
                className="font-medium text-blue-600 underline "
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
