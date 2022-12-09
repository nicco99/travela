import React, { useState, useEffect, useContext } from "react";
import Trip from "./Trip";
import userContext from "../../context";
import Login from "../../Login";
function Book() {
  const [newTrip, setNewTrip] = useState([]);
  const [trip, setTrip] = useState([]);
  const {user} = useContext(userContext)
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("https://travela-backend-production.up.railway.app/trips", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTrip(res);
      });
  }, []);
  
  function handleClick() {
    let filteredArr = trip.filter(
      (trip) =>
        trip.route.start.toUpperCase() === start.toUpperCase() && trip.route.destination.toUpperCase() === destination.toUpperCase()
    );
    setNewTrip(filteredArr);
  }

  return (
    <div className="h-screen">
      <div className="w-full p-4 grid sm:grid-cols-2 gap-x-2 border rounded">
        <div className=" bg-sky-50 rounded p-2 ">
          <div className="m-auto flex flex-col items-center mt-5 justify-center">
            <span className="text-3xl">To</span>
            <input
              className='bg-white mt-2 p-4 w-full border rounded-lg outline-black text-center type="text" name="start '
              value={start}
              onChange={(e) => setStart(e.target.value)}></input>
          </div>
          <div className="m-auto flex flex-col items-center mt-5 justify-center">
            <span className="text-3xl">From</span>
            <input
              className='bg-white mt-2 p-4 w-full  border rounded-lg outline-black text-center type= "text" name="destination"'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}></input>
          </div>
          <div className="flex justify-center m-auto">
            <button
              className="outline text-sky-500 hover:bg-sky-600 w-full mt-8 h-7 rounded-lg hover:text-white"
              onClick={handleClick}>
              GO
            </button>
          </div>
        </div>
        <div className="">
          {" "}
          <div>
            {newTrip
              ? newTrip.map((e) => {
                  return <Trip key={e.id} trip={e} />;
                })
              : null}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap2 m-2">
        <p className="text-sky-900 w-full text-5xl font-serif">Some routes we travel to</p>
        <p className="w-full text-black text-2xl p-5 m-2">Nairobi - Mombasa</p>
        <p className="w-full text-black text-2xl p-5 m-2">Nakuru - Nairobi</p>
        <p className="w-full text-black text-2xl p-5 m-2">Mombasa - Nairobi</p>
      </div>
    </div>
  );
}

export default Book;
