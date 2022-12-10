import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../../../context";
function BookTrip() {
  const [noOfSeats, setSNoOfSeats] = useState(1);
  const { user } = useContext(userContext);
  const [trip, setTrip] = useState({});
  const [route, setRoutes] = useState({});
  const navigate = useNavigate()
  const [bus, setBus] = useState({});
  const [loader, setLoader] = useState(false);
  const token = localStorage.getItem("jwt");
  const {id} = useParams();
  function clickUp() {
    let newNumber = noOfSeats + 1;
    setSNoOfSeats(newNumber);
  }
  function clickDown() {
    if (noOfSeats > 1) {
      let newNumber = noOfSeats - 1;
      setSNoOfSeats(newNumber);
    } else {
      setSNoOfSeats(1);
    }
  }
  useEffect(() => {
    fetch(`https://travela-backend-production.up.railway.app/trips/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTrip(trip);
        setRoutes(res.route);
        setBus(res.bus);
      });
  },[])
console.log(trip)
 function handleLoader(){
  setTimeout(setLoader(loader=>!loader),2000)
 }

  function handlePayment() {
    setLoader(loader=>!loader)
    fetch(`/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        phone: user.p_number,
        amount: trip.route.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleBooking();
      });
  }

  function handleBooking() {
    handleLoader()
    fetch("/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        trip_id: trip.id,
        passenger_id: user.id,
        status: "pending",
      }),
    })
      .then((r) => r.json())
      .then((data) => navigate("/dashboard/bookings"));
  }
  const date = Date(trip.departure);
  let newDate = date.split(" ");

  let theDate = newDate.splice(0, 4).join("-");
  let time = newDate.splice(0, 1).join("-");

  return (
    <div className=" w-full h-screen">
      <div className="grid grid-cols-1">
        <h1 className="text-center font-serif text-3xl text-sky-900">
          click pay to complete trip booking
        </h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="h-24 rounded-md shadow-lg bg-sky-200 flex flex-row justify-center items-center">
          <div className="mt-4 lg:mt-6">
            <p className="text-2xl font-serif">FROM</p>
          </div>
          <div className="mt-4 ml-1 lg:ml-20">
            <h1 className="text-sm sm:text-lg lg:text-3xl">{route.start}</h1>
          </div>
        </div>
        <div className="h-24 rounded-md shadow-lg bg-sky-200 flex flex-row justify-center items-center">
          <div className="mt-4 lg:mt-6">
            <h3 className="text-2xl font-serif">TO</h3>
          </div>
          <div className="mt-4 ml-1 lg:ml-20">
            <h1 className="text-sm sm:text-lg lg:text-3xl">
              {route.destination}
            </h1>
          </div>
        </div>

        <div className="h-24 rounded-md shadow-lg bg-sky-200 grid grid-cols-1 gap-2 justify-center items-center">
          <div className="flex flex-row justify-around">
            <span>Date:</span>
            <span className="text-sky-900">{theDate}</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-red-500">Depature Time</span>
            <span className="text-sky-900">{time}</span>
          </div>
        </div>
        <div className="h-24 rounded-md shadow-lg bg-sky-200 grid grid-cols-2 gap-2 justify-center items-center">
          <div className="">
            <p className="text-xs sm:text-sm lg:text-base">BUS REG</p>
          </div>
          <div className="">
            <h1 className="text-xs sm:text-base lg:text-2xl">
              {bus.number_plate}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 g-2 h-14 text-2xl text-center font-serif">
        payment details
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="shadow-md h-28 bg-sky-400 rounded-lg flex flex-row justify-evenly items-center">
          <h3 className="text-sky-900">PRICE</h3>

          <h1 className="text-white text-3xl">{route.price * noOfSeats}</h1>
        </div>
        <div className="flex flex-row items-center bg-sky-400 shadow-md rounded-md h-28">
          <h3 className="text-xs ml-2 sm:text-sm lg:text-base">NO-OF-SEATS</h3>

          <div className="w-full h-16 flex">
            <div className="w-1/2">
              <div className="ml-4 mt-3 lg:ml-14">
                <h1 className="text-lg ml-2 sm:text-xl lg:text-3xl">
                  {noOfSeats}
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-full">
                <div>
                  <button onClick={clickUp}>▲</button>
                </div>
                <div>
                  <button onClick={clickDown}>▼</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-28 bg-sky-400 text-white rounded-md shadow-md">
          <div className="grid grid-cols-2 p-auto">
            <h3 className="">phone number</h3>
            <h1 className="">{user.p_number}</h1>
          </div>
          <div className="grid grid-cols-2 p-auto">
            <h3 className="text-white p-auto rounded-md">PASSENGER</h3>
            <h1 className="text-xs sm:text-base lg:text-2xl">
              {user.username}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 text-center">
        <p className="text-lg  leading-loose">
          ALL BOOKINGS ARE DONE THROUGH MPESA
        </p>
        <p className="text-lg  leading-loose	">
          DEPATURE IS STRICTLY AT THE STATED TIME
        </p>
        <p className="text-lg leading-loose	">
          NO REFUNDS TO BE MADE FOR LATE ARRIVALS
        </p>
      </div>
      <div className="flex justify-center mt-8 ">
        <button
          onClick={() => handlePayment()}
          className="w-24 outline hover:text-white mb-5 hover:bg-cyan-400 text-cyan-400 rounded-lg sm:w-36 lg:w-48 lg:h-16 lg:text-2xl">
          {loader?<div><div class="animate-spin h-5 w-5 mr-3 border-2 rounded-full border-black" viewBox="0 0 24 24">
  
  </div><span>Processing...</span></div>:<span>PAY</span>}
        </button>
      </div>
    </div>
  );
}

export default BookTrip;
