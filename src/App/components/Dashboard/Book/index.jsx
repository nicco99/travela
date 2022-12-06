import React, { useState, useEffect } from 'react'
import Trip from './Trip'
import Login from '../../Login'
function Book() {
  const[newTrip, setNewTrip] = useState([])
  const[trip, setTrip] = useState([])

  const[start, setStart] = useState('')
  const[destination, setDestination] = useState('')



  useEffect(() => {
    fetch('http://localhost:3000/trips')
    .then((res) => res.json())
    .then((res) =>{
      setTrip(res)
    })
}
, [])

function handleClick() {
  let filteredArr = trip.filter( trip=>trip.route.start.toUpperCase()== start.toUpperCase() && trip.route.destination.toUpperCase()== destination.toUpperCase() )
  setNewTrip(filteredArr)
}

    return (
      <div className='w-full'>
      <div className='h-screen'>
        <div className='h-24 mx-4 lg:mx-36 mt-16 flex lG:justify-center space-x-2'>
          <div className='w-2/5'>
            <h2 className='lg:text-center'>To</h2>
              <input className='bg-white mt-2 h-7 w-full border border-slate-900 rounded-lg outline-black text-center type="text" name="start 'value={start} onChange={(e) => setStart(e.target.value)}></input>
          </div>
          <div className='w-2/5'>
            <h2 className='lg:text-center'>From</h2>
            <input className='bg-white mt-2 h-7 w-full border border-slate-900 rounded-lg outline-black text-center type= "text" name="destination"' value={destination} onChange={(e) => setDestination(e.target.value)}></input>
          </div>
          <div className='flex justify-center w-1/5'>
                <button className='bg-cyan-400 w-full mt-8 h-7 rounded-lg' onClick={handleClick}>
                  GO
                </button>
            </div>
        </div>
        <div>
          { newTrip
          ? newTrip.map( (e) => {
            return <Trip key={e.id }trip={e}/>
          })
          : null }
        </div>
      </div>
    </div>
    )
}

export default Book