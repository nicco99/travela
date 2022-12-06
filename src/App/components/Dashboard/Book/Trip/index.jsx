import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Trip({trip}) {

  const date = Date(trip.departure)
  console.log(date)

  function handleClick () {
    console.log("jhmjn,kjh")
  }
  return (
    <div>
        <Link to={`${trip.id}`} onClick={handleClick} >
        <div className='h-12 sm:h-16 mx-4 lg:mx-36 mt-2 flex rounded-lg border '>
  <div className='w-1/4 h-full '>
    <div>
      <p className='text-xs sm:text-base lg:text-xl'>From</p>
    </div>
    <div>
      <h3 className='text-sm  sm:text-xl lg:text-2xl text-center '>{trip.route.start}</h3>
    </div>
  </div>
  <div className='w-1/4 h-full '>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>To</p>
    </div>
    <div>
      <h3 className='text-sm sm:text-xl lg:text-2xl  text-center'>{trip.route.destination}</h3>
    </div>
  </div>
  <div className='w-1/4 h-full '>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>Depature</p>
    </div>
    <div>
      <p className='text-xs'>{trip.departure}</p>
    </div>
  </div>
  <div className='w-1/4 h-full '>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>Price</p>
    </div>
    <div>
      <h3 className='text-sm sm:text-xl lg:text-2xl  text-center'>{trip.route.price}</h3>
    </div>
  </div>
</div>
        </Link>
    </div>
  )
}

export default Trip