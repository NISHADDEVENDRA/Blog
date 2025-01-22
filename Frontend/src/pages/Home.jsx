import React from 'react'
import RecentPost from '../Components/RecentPost'

const Home = () => {
  return (
    <>
      <div className=" md:min-h-[500px] text-center bg-slate-800 relative px-5 py-36 flex  flex-col justify-center items-center bg-[url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg')] bg-cover bg-center  ">
        <h1 className=' text-3xl font-bold text-yellow-50'>Welcome TO My Blog</h1>
        <p className=' text-base mt-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi saepe obcaecati laborum est tempora! Velit neque consequuntur necessitatibus sint, nihil quis architecto?</p>
      </div>

     <div>
        <RecentPost/>
     </div>

      </>
  )
}

export default Home