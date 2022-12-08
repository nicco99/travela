import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Trip({trip}) {

  const date = Date(trip.departure)
  let newDate = date.split(" ")

  let theDate = newDate.splice(1,2).join("-")
  let time =   newDate[2]
  return (
    <div>
        <Link to={`${trip.id}`} >
        <div className='grid sm:grid-cols-6 gap-2 '>
  <div className='flex flex-col items-center'>
    <div>
      <p className='text-xs sm:text-base lg:text-xl'>From</p>
    </div>
    <div>
      <h3 className='text-sky-900'>{trip.route.start}</h3>
    </div>
  </div>
  <div className='flex flex-col items-center'>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>To</p>
    </div>
    <div>
      <h3 className='text-sky-900'>{trip.route.destination}</h3>
    </div>
  </div>
  <div className='flex flex-col items-center'>
      <p>Date</p>
     <span>{theDate}</span>
    </div>
  <div className='flex flex-col items-center'>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>time</p>
    </div>
    <div>
    <span>{time}</span>
    </div>
  </div>
  <div className='flex flex-col items-center'>
  <div>
      <p className='text-xs sm:text-base lg:text-xl '>Price</p>
    </div>
    <div>
      <h3 className='text-sky-900'>{trip.route.price}</h3>
    </div>
  </div>
</div>
<hr></hr>
        </Link>
    </div>
  )
}

export default Trip