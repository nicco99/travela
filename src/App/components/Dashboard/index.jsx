import React,{useEffect,useState} from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Login';
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';

function Dashboard({user, setUser}) {
  const navigate =useNavigate()
  const token = localStorage.getItem("jwt");

    // useEffect(
    // fetch(`http://localhost:3000/passenger/`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then((res) => res.json())
    // .then(res => setUser(res.data))
    // )
  // console.log(user)
  // console.log(token)
  if (token) {
    return (
      <div className='flex'>
       <div className='flex-initial bg-slate-400 h-screen'>
       <SideBar/>
       </div>
      <div className='flex-initial w-full p-4 justify-around'>
      <Outlet />
      </div>
      </div>
  )
  } else {
    return (
      <div className='flex flex-col text-5xl justify-center items-center sm:h-screen'>
        <h3 className='text-center'>Unauthorized access</h3>
        <div className='flex flex-row p-3 justify-evenly w-1/2'>
        <button onClick={()=>navigate('/login')} className='bg-sky-400 rounded-md text-2xl px-4'>LOGIN</button>
        <button onClick={()=>navigate('/signup')} className='bg-sky-400 rounded-md text-2xl px-4'>SIGNUP</button>
        </div>
       
      </div>
    )
  }
}

export default Dashboard;
