import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Book from './components/Dashboard/Book'
import Bookings from './components/Dashboard/Bookings'
import SingleBooking from './components/Dashboard/Bookings/SingleBooking'
import UserProfile from './components/Dashboard/UserProfile'

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/dashboard" element={<Dashboard/>}>
  <Route path="/dashboard/book" element={<Book/>}/>
  <Route path="/dashboard/userprofile" element={<UserProfile/>}/>
  <Route path="/dashboard/bookings">
            <Route index element={<Bookings/>} />
            <Route path=":id" element={<SingleBooking />} />
  </Route>
  </Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App