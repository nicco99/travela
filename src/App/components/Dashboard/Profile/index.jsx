import axios from "axios";
import React, { useState, useEffect } from "react";

// Fragments let you group a list of children without adding extra nodes to the DOM
// useSelector from the redux store allows you to extract data from the Redux store state, using a selector function

function Profile() {
  const [passengers, setPassengers] = useState([]);
  // the default userName is set to an empty list and the setUserName used to update the value of the name

  // run the uName function when the page loads
  useEffect(() => {
    details();
  }, []);

  const details = () => {
    axios
      .get("http://localhost:3000/bookings")
      .then((response) => {
        console.log(response);
        setPassengers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col grid grid-cols-1">
      <div className="w-28 rounded-full h-28 bg-slate-400 items-center"></div>
      <div className="container">
        {passengers.map((passenger) => (
          <div className="card" key={passenger.id}>
        <label className="flex flex-col w-1/2">Email:</label>
            <input className="border rounded-md p-2" value={passenger.status}/>
            <label className="flex flex-col w-1/2">phone Number:</label>
        <input className="border rounded-md p-2" value={passenger.status}/>
          </div>
        ))}
      </div>
      
      {/* <div className="flex flex-col w-1/2">
        <label>Email:</label>
        <input className="border rounded-md p-2" />
      </div> */}
      {/* <div className="flex flex-col w-1/2">
        <label>phone Number:</label>
        <input className="border rounded-md p-2" />
      </div> */}
      <div className="flex flex-row w-1/2 justify-round">
        <button className="bg-blue-400 px-3 rounded-md">Update</button>
        <button className="bg-red-400 px-3 rounded-md">Delete</button>
      </div>
    </div>
  );
}

export default Profile;
