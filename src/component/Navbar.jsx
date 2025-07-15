import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>  
          <Link>
              <div className="flex items-center justify-between border-b border-neutral-400 p-3 ">
                  <Link to="/" className='text-2xl font-black hover:text-blue-600'>React SPA.</Link>
                  <div className="flex gap-5 text-xl font-semibold ">
                      <Link to="/about" className=' hover:text-blue-600'>About Us</Link>
                     <Link to="/contact" className=' hover:text-blue-600'>Contact Us</Link>
                  </div>
              </div>
        </Link>
    </>
  )
}

export default Navbar



