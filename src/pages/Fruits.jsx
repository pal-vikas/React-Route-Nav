import React from 'react'
import fruits from '../FruitsInfo'
import FruitsProfile from './FruitsProfile'

function Fruits() {
  return (
    <div>
                <div className=" text-center mt-24 ">
                      <p className='py-5'>Welcome to Fruits Page !</p>
                      {
                        fruits.map(fruit => <FruitsProfile img={fruit.img} name={fruit.name} country={fruit.country} />)
                      }
                  </div>

    </div>
  )
}

export default Fruits
