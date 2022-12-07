import React,{useState} from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
function BookTrip() {
    const [noOfSeats, setSNoOfSeats] = useState(1)
    const[trip, setTrip] = useState({})
    const[route, setRoutes] = useState({})
    const[bus, setBus] = useState({})



    const id = useParams()
    function clickUp () {
        let newNumber = noOfSeats +1
        setSNoOfSeats(newNumber)
    }
    function clickDown () {
        if (noOfSeats > 1) {
            let newNumber = noOfSeats -1
            setSNoOfSeats(newNumber)
        } 
        else {
            setSNoOfSeats(1)
        }
    }
  useEffect(() => {
    fetch(`http://localhost:3000/trips/${id.id}`)
    .then((res) => res.json())
    .then((res) =>{
      setTrip(res)
      setRoutes(res.route)
      setBus(res.bus)
    })
}

, [])
console.log(route)

  return (
    <div className=' w-full'>
           <div>
        <h1 className=' text-center text-sm font-bold sm:text-lg lg:text-4xl '> All Times Are in EAT  </h1>
    </div>
    <div className='mt-8'>
        <h2 className='text-l mx-6 font-bold sm:text-xl lg:text-2xl'>Trip Details</h2>
    </div>
    <div className='flex mt-4 mx-8 space-x-2 sm:mt-10 lg:mt-12'>
        <div className='shadow-2xl w-1/4 rounded-lg h-24 lg:h-36' >
             <div>
                <div className='mt-4 lg:mt-6'>
                    <p className='text-xs ml-2 sm:text-sm lg:text-base'>FROM</p> 
                    </div>
                    <div className='mt-4 ml-1 lg:ml-20'>
                    <h1 className='text-sm sm:text-lg lg:text-3xl' >{route.start}</h1>
                    </div>
                </div>
        </div>
        <div className=' shadow-2xl w-1/4 rounded-lg h-24 lg:h-36'>
            <div>
                <div className='mt-4 lg:mt-6'>
                <h3 className='text-xs ml-2 sm:text-sm lg:text-base'>TO</h3> 
                </div>
                <div className='mt-4 ml-1 lg:ml-20'>
                <h1 className='text-sm sm:text-lg lg:text-3xl'>{route.destination}</h1>
                </div>
            </div>
        </div>
        <div className='shadow-2xl h-24 w-1/2 rounded-lg lg:h-36'>
          <div className='flex space-x-3'>
          <div className=' w-1/2'>
                <div className='mt-4 ml-2 lg:mt-6'>
                <h3 className='text-xs sm:text-sm lg:text-base'>DEPARTURE</h3> 
                </div>
                <div className='mt-5 ml-2 lg:ml-14'>
                <h1 className='text-xs lg:text-base'>{Date(trip.departure)}</h1>
                </div>
            </div>
            <div className=' w-1/2'>
            <div className='mt-4 ml-2 lg:mt-6'>
                <p className='text-xs sm:text-sm lg:text-base'>BUS REG</p> 
                </div>
                <div className='mt-5 lg:ml-14'>
                <h1 className='text-xs sm:text-base lg:text-2xl'>{bus.number_plate}</h1>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div>
    <h2 className='text-l mx-6 mt-8 font-bold lg:text-2xl '>Payment Details</h2>
    </div >
    <div className='flex mt-6 mx-6 space-x-2 sm:mt-10 lg:mt-12'>
        <div className='shadow-2xl h-36 w-1/4 rounded-lg' >
             <div>
                <div className='mt-4 ml-2 lg:mt-6 '>
                    <h3 className='text-xs ml-2 sm:text-sm lg:text-base'>PRICE</h3> 
                    </div>
                    <div className='mt-4 ml-5 lg:ml-24'>
                    <h1 className='text-base sm:text-lg lg:text-3xl'>{route.price * noOfSeats}</h1>
                    </div>
                </div>
        </div>
        <div className=' shadow-2xl h-36 w-1/4 rounded-lg'>
            <div>
                <div className='mt-4 ml-2 lg:mt-6'>
                <h3 className='text-xs ml-2 sm:text-sm lg:text-base'>NO-OF-SEATS</h3> 
                </div>
                <div className='w-full h-16 flex'>
                  <div className='w-1/2'>
                  <div className='ml-4 mt-3 lg:ml-14'> 
                <h1 className='text-lg ml-2 sm:text-xl lg:text-3xl'>{noOfSeats}</h1>
                </div>
                  </div>
                  <div className='w-1/2'>
                  <div className='h-full'>
                <div >
                    <button onClick={clickUp}>▲</button>
                </div>
                <div>  
                    <button onClick={clickDown}>▼</button>
                </div>
                </div>
                  </div>
                </div>
            </div>
        </div>
        <div className='shadow-2xl h-36 w-1/2 rounded-lg flex'>
            <div className=' w-1/2'>
            <div className='mt-4 ml-2 lg:mt-6'>
                <h3 className='text-xs sm:text-sm lg:text-base '>PHONE-NUMBER</h3> 
                </div>
                <div className='mt-3 ml-2 lg:ml-14'>
                <h1 className='text-xs sm:text-base lg:text-2xl '>0712345678</h1>
                </div>
            </div>
            <div className=' w-1/2'>
            <div className='mt-4 lg:mt-6'>
                <h3 className='text-xs sm:text-sm lg:text-base'>PASSENGER NAME</h3> 
                </div>
                <div className='mt-3  lg:ml-14'>
                <h1 className='text-xs sm:text-base lg:text-2xl'>NICCO NJERU{id.id}</h1>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full mt-8 text-center'>
      <p className='text-lg sm:text-xl lg:text-3xl leading-loose'>ALL BOOKINGS ARE DONE THROUGH MPESA</p>
      <p className='text-lg sm:text-xl lg:text-3xl  leading-loose	'>DEPATURE IS STRICTLY AT THE STATED TIME</p>
      <p className='text-lg sm:text-xl lg:text-3xl  leading-loose	'>NO REFUNDS TO BE MADE FOR LATE ARRIVALS</p>
    </div>
    <div className='flex justify-center mt-8 '>
            <button className='w-24 bg-cyan-400	sm:rounded-lg sm:w-36 lg:w-48 lg:h-16 lg:text-2xl'>PAY</button>
    </div>
    </div>
)
}

export  default BookTrip