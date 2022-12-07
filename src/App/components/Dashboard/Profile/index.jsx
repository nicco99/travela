import axios from "axios";
import React, { useState, useEffect } from "react";

function Profile() {
  const [passengers, setPassengers] = useState([]);
  const token = localStorage.getItem("jwt")
  console.log(token)
  useEffect(() => {
    fetch('http://localhost:3000/passengers', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.json())
    .then((res) =>{
      console.log(res)
      setPassengers(res)
        })
}
, [])

  return (
    <div className="w-full flex flex-col grid grid-cols-1 self-center space-y-10">
      <div className="w-28 rounded-full h-28 bg-slate-400 items-center"></div>
      <div className="container ">
        {passengers.map((passenger) => (
          <div className="card" key={passenger.id}>
            <div>
              <label className="flex flex-col w-1/2 ">Username:</label>
              <input
                className="border rounded-md p-2"
                value={passenger.username}
              />
            </div>
            <div>
              <label className="flex flex-col w-1/2">Email:</label>
              <input
                className="border rounded-md p-2"
                value={passenger.email}
              />
            </div>
            <div>
              <label className="flex flex-col w-1/2">phone Number:</label>
              <input
                className="border rounded-md p-2"
                value={passenger.p_number}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row w-1/2 justify-round">
        <button className="bg-blue-400 px-3 rounded-md">Update</button>
        <button className="bg-red-400 px-3 rounded-md">Delete</button>
      </div>
    </div>
  );
}

export default Profile;

