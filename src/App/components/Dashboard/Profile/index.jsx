import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../context";
function Profile() {
  const [update, setUpdate] = useState(false);
  const {user} = useContext(userContext)
  const [newDetails, setNewDetails] = useState({});
  const [change, setChange] = useState(false);
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  function handleUpdate() {
    setUpdate(true);
  }

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewDetails({ ...newDetails, [name]: value });
  }

  function handleDelete() {
    fetch(
      `https://travela-backend-production.up.railway.app/passengers/${user.id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => {
        setChange(!change);
        localStorage.clear();
        navigate("/login");
      });
  }

  function handleSave() {
    fetch(
      `https://travela-backend-production.up.railway.app/passengers/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newDetails),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        setChange(!change);
        setUpdate(!update);
      });
  }

  return (
    <div className="w-full h-4/5 flex flex-col justify-center items-center">
      {update ? (
        <div className="fixed w-full sm:w-1/2 bg-sky-100 rounded h-1/2">
          <div className="w-4/5 h-1/4 text-center font-mono text-2xl p-3">
            Update your details here
          </div>
          <div className="flex flex-col justify-center items-center">
            <label>Username:</label>
            <input
              onChange={(e) => handleChange(e)}
              className="border rounded-md w-3/5 p-2"
              name="username"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label>Email:</label>
            <input
              onChange={(e) => handleChange(e)}
              className="border rounded-md p-2 w-3/5"
              name="email"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label>phone Number:</label>
            <input
              onChange={(e) => handleChange(e)}
              className="border rounded-md p-2 w-3/5"
              name="p_number"
            />
          </div>
          <div className="flex flex-row justify-evenly items-center mb-8 p-3">
            <button
              onClick={handleSave}
              className="px-4 outline rounded-sm text-blue-600 hover:bg-blue-600 hover:text-white">
              Save
            </button>
            <button
              onClick={() => setUpdate(!update)}
              className="px-4 outline rounded-sm text-red-600 hover:bg-red-600 hover:text-white">
              Discard
            </button>
          </div>
        </div>
      ) : null}
      <div className="sm:w-4/5 text-2xl flex justify-center">
        Welcome {user.username}
      </div>
      <div className="w-4/5">
        <div>
          <label className="flex flex-col w-full">Username:</label>
          <input
            // onChange={(e)=>handleChange(e)}
            className="border rounded-md w-full p-2"
            value={user.username}
          />
        </div>
        <div>
          <label className="flex flex-col w-1/2">Email:</label>
          <input
            className="border rounded-md p-2 w-full"
            value={user.email}
          />
        </div>
        <div>
          <label className="flex flex-col w-full">phone Number:</label>
          <input
            className="border rounded-md p-2 w-full"
            value={user.p_number}
          />
        </div>
      </div>
      <div className="w-full flex-col  flex sm:flex-row sm:justify-center items-center mt-5">
        {" "}
        <div
          onClick={() => handleDelete()}
          className="outline hover:bg-red-500 p-3 ease-in-out text-2xl hover:text-white text-red-500 rounded-md sm:w-58 m-2">
          Delete Account
        </div>
        <div
          onClick={handleUpdate}
          className=" outline text-blue-500 m-2 hover:bg-blue-400 p-3 ease-in-out text-2xl hover:text-white rounded-md sm:w-58">
          Update
        </div>
        <div onClick={()=>navigate("/dashboard/bookings")} className="outline   text-blue-800 p-3 rounded-md m-2 hover:bg-blue-800 hover:text-white sm:w-58">
          View Current Booking
        </div>
      </div>
    </div>
  );
}

export default Profile;
