import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function Bookings() {
const [bookings ,setBooking] = useState([])
const token = localStorage.getItem("jwt");




useEffect(()=>{
  fetch("http://localhost:3000/bookings", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res =>{
    if(res.ok){
     res.json().then(bookings =>setBooking(bookings))
    }else
  { console.log("there was an error")}
  }
  )
},[])

let bookingList = bookings.map(booking =><div className='rounded-md bg-sky-100'>
  <p className='m-3 flex flex-row justify-evenly'><span className='text-violet-900'>Trip From: </span>{booking.trip.route.start} <span className='text-violet-9git00'>To: </span>{booking.trip.route.destination}</p>
  <p className='m-3 flex flex-row justify-evenly'><span className='text-lime-400'> The Driver's Phone Number is: </span><span>{booking.trip.bus.driver_number}</span> </p>
<p className='m-3 flex flex-row justify-evenly'><span className='text-orange-400'> Bus Number Plate: </span>{booking.trip.bus.number_plate}</p>
<p className='flex flex-row p-2 justify-around'><button className='bg-sky-500 rounded-md p-3 border'><Link to={`${booking.id}`}>More Details</Link></button></p>
</div>)
  return (
    <div className='grid grid-cols-2 gap-4'>
      {bookingList}
    </div>
  )
}

export default Bookings