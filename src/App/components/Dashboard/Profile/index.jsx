import React from "react";

function Profile() {
  return (
    <div className="w-full flex flex-col grid grid-cols-1">
      <div className="w-28 rounded-full h-28 bg-slate-400 items-center"></div>
      <div className="flex flex-col w-1/2">
        <label>Username:</label>
        <input className="border rounded-md p-2" value="Nicco99" />
      </div>
      <div className="flex flex-col w-1/2">
        <label>Email:</label>
        <input className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col w-1/2">
        <label>phone Number:</label>
        <input className="border rounded-md p-2" />
      </div>
      <div className="flex flex-row w-1/2 justify-round">
        <button className="bg-blue-400 px-3 rounded-md">Update</button>
        <button className="bg-red-400 px-3 rounded-md">Delete</button>
      </div>
    </div>
  );
}

export default Profile;
