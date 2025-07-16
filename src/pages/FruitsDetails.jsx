import React from 'react'
import fruits from '../FruitsInfo'
import { useParams } from 'react-router-dom'

function FruitsDetails() {

  let {name} = useParams();
   let fruitsInfo = fruits.find(data => data.name === name)
  return (
    <>
     <div className="w-[700px] border mx-auto mt-30 p-4 rounded-xl">
                    <img className='w-full' src={fruitsInfo.img} alt="fruits" />
                    <p>{fruitsInfo.name}</p>
                    <p>{fruitsInfo.flavor}</p>
                    <p>{fruitsInfo.color}</p>
                    <p>{fruitsInfo.season}</p>
                    <p>{fruitsInfo.variety}</p>
                </div>
    </>
  )
}

export default FruitsDetails
