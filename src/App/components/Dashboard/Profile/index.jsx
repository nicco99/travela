import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Profile() {
  const [passengers, setPassengers] = useState({});
  const [update,setUpdate] = useState(false)
  const [newDetails,setNewDetails] = useState({})
  const [change,setChange] = useState(false)
  const token = localStorage.getItem("jwt");
  const id = localStorage.getItem("passenger");
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`/passengers/${parseInt(id)}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPassengers(res);
      });
  }, [change]);

  function handleUpdate(){
   setUpdate(true)
  }

function handleChange(e){
  let name = e.target.name
  let value = e.target.value
  setNewDetails({...newDetails, [name]:value})
 
}

function handleDelete () {
  fetch(`/passenger/${parseInt(id)}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
}).then(r=>r.json()).then(data => {
  setChange(!change)
  localStorage.clear()
  navigate("/login")
})
}

function handleSave(){
  fetch(`/passengers/${parseInt(id)}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(newDetails)
}).then(r=>r.json()).then(data=>{ 
  console.log(data)
  setChange(!change)
  setUpdate(!update)
})
}

  return (
    <div className="w-full h-4/5 flex flex-col justify-center items-center">
      {update?<div className="fixed w-full sm:w-1/2 bg-sky-100 rounded h-1/2">
        <div className="w-4/5 h-1/4 text-center font-mono text-2xl p-3">Update your details here</div>
      <div className="flex flex-col justify-center items-center">
          <label>Username:</label>
          <input
          onChange={(e)=>handleChange(e)}
            className="border rounded-md w-3/5 p-2"
            name="username"
        
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label>Email:</label>
          <input
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2 w-3/5"
            name="email"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
       
          <label>phone Number:</label>
          <input
           onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2 w-3/5"
            name="p_number"
          />
        </div>
        <div className="flex flex-row justify-evenly items-center mb-8 p-3">
          <button onClick={handleSave} className="px-4 outline rounded-sm text-blue-600 hover:bg-blue-600 hover:text-white">Save</button>
          <button onClick={() => setUpdate(!update)}  className="px-4 outline rounded-sm text-red-600 hover:bg-red-600 hover:text-white">Discard</button>
        </div>
      </div>:null}
      <div className="sm:w-4/5 text-2xl flex justify-center">
        Welcome {passengers.username}
      </div>
      <div className="w-4/5">
        <div>
          <label className="flex flex-col w-full">Username:</label>
          <input
          // onChange={(e)=>handleChange(e)}
            className="border rounded-md w-full p-2"
            value={passengers.username}
          />
        </div>
        <div>
          <label className="flex flex-col w-1/2">Email:</label>
          <input
            className="border rounded-md p-2 w-full"
            value={passengers.email}
          />
        </div>
        <div>
          <label className="flex flex-col w-full">phone Number:</label>
          <input
            className="border rounded-md p-2 w-full"
            value={passengers.p_number}
          />
        </div>
      </div>
      <div className="w-full flex-col p-2  flex sm:flex-row sm:justify-evenly mt-5">
        {" "}
        <div onClick={handleUpdate} className=" outline text-blue-500 hover:bg-blue-400 p-3 ease-in-out text-2xl hover:text-white rounded-md w-24">
          Update
        </div>
        <div onClick={()=>handleDelete()} className="outline hover:bg-red-500 p-3 ease-in-out text-2xl hover:text-white text-red-500 rounded-md ">
          Delete Account
        </div>
        <div className="outline  text-blue-800 p-3 rounded-sm hover:bg-blue-800 hover:text-white">
          View Current Booking
        </div>
      </div>
    </div>
  );
}

export default Profile;
