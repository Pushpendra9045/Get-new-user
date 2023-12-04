import React from 'react'



function Navbar() {
  return (
    <div className='nav-bar border-2 border-white-500 bg-white w-full p-4 flex fixed top-0 right-0 left-0 justify-between '>
      <div className="left border-2 border-red-500  h-12 w-36 flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
      <h2 className=" text-red-500 text-xl font-bold">GetNewUser</h2>
      </div>
      <div className="right border-2 border-red-500 h-12 md:mr-10 w-32 flex items-center justify-center text-xl ">
        <a href="" className=''>Github Link</a>
      </div>
    </div>
  )
}

export default Navbar
