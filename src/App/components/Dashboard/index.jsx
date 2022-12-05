import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
function Dashboard() {
  return (
   <div className='flex'>
    <div className='flex-initial bg-slate-400 h-screen'>
    <SideBar/>
    </div>
   <div className='flex-initial w-full p-4'>
   <Outlet />
   </div>
   </div>
  )
}

export default Dashboard