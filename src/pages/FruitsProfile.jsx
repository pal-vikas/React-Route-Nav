import React from 'react'
import { Link } from 'react-router-dom'

function FruitsProfile({img, name, country}) {
  return (
    <>
        <Link to={`/${name}`}>
              <div className=" w-[300px]  flex text-center mx-auto gap-3 mb-5   ">
                  <img className='w-30 h-30 object-cover border-neutral-400 border rounded-full' src={img} alt="fruit-img" />
                  <div className=" flex flex-col items-center justify-center">
                      <p>{name}</p>
                      <p>{country}</p>
                  </div>
              </div>
        </Link>
    </>
  )
}

export default FruitsProfile
