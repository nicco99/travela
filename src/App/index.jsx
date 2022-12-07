import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Book from './components/Dashboard/Book'
import Bookings from './components/Dashboard/Bookings'
import SingleBooking from './components/Dashboard/Bookings/SingleBooking'
import BookTrip from './components/Dashboard/Book/BookTrip'
import Profile from './components/Dashboard/Profile'
import { useState } from 'react'
import { useEffect } from 'react'

import Welcome from './components/Dashboard/Welcome'

function App() {
  const [user, setUser] = useState([])
  const token = localStorage.getItem("jwt");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />}>
          <Route path='' element={<Welcome/>}/>
          <Route path="/dashboard/book" >
            <Route index element={<Book user={user} />} />
            <Route path=":id" element={<BookTrip />} />
          </Route>
          <Route path="/dashboard/booktrip" element={<BookTrip  user={user}  />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/bookings">
            <Route index element={<Bookings />} />
            <Route path=":id" element={<SingleBooking />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App