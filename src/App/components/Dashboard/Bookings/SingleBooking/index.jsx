import React from 'react'
import { useParams } from 'react-router-dom'

function SingleBooking() {
  const {id} = useParams()
  console.log(id)
  return (
    <div>SingleBooking</div>
  )
}

export default SingleBooking