import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
function Dashboard() {
  return (
   <div>
    <hi>welcome dash</hi>
    <SideBar/>
    <Outlet />
   </div>
  )
}

export default Dashboard