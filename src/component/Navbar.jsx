import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>  
          <Link className='hover:cursor-pointer' >
              <div className=" border-b border-neutral-200 p-3  ">
                    <div className="w-[900px] mx-auto flex justify-between  ">
                      <Link to="/" className='text-2xl font-black hover:text-blue-600'>React SPA.</Link>
                       {/* <input type="text" placeholder='Search your thought... ' className='w-70 rounded-xl border-neutral-300 border p-2  hover:outline-blue-500 bg-gray-100 ' /> */}
                     <div className="flex gap-5 text-xl font-semibold items-center ">
                       <Link to="/fruitType" className=' hover:text-blue-600'>Fruits</Link>
                      <Link to="/about" className=' hover:text-blue-600'>About Fruits</Link>
                     <Link to="/contact" className=' hover:text-blue-600'>Contact Us</Link>
                     {/* <Link to="/signIn" className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer hover:text-white'>Sign In</Link> */}
                    {/* <Link to="/signUp" className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer hover:text-white'>Sign Up</Link> */}
                  </div>
                    </div>
              </div>
        </Link>
    </>
  )
}

export default Navbar



