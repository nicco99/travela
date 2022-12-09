import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Rating from "./Rating"
function SingleBooking() {
  const [showModal, setShowModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [formData, setFormData] = useState({});
  const [booking,setBooking]=useState({})
  const [notify,setNotify]= useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const token = localStorage.getItem("jwt");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  // useEffect(()=>{
  //   fetch(`https://travela-backend-production.up.railway.app/reviews`,{
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "content-type": "application/json",
  //     }
  //   })
  //   .then(res=>res.json().then(data=>setBooking(data)))
  
  // },[])



  function handleReview(e) {
    e.preventDefault();
    const reviews = {
      comment: formData.comment,
      rating: ratingValue,
      booking_id: parseInt(id)
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        setNotify(notify=>!notify)
        navigate(-1 + 1);
      });
  }



console.log(booking)

  const styling = "h-28 bg-blue-400 text-white rounded-md shadow-lg flex flex-col justify-around items-center mt-3"
  return (
    <div className='h-4/5 bg-sky-100 rounded shadow-md'>
      <div className='grid grid-'>

      </div>
      <div className='h-28 grid-cols-1'>
        <h1 className='bg-sky-50  p-4 text-center text-3xl'>Welcome Client😊</h1>
      </div>
      <div className='grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 m-4'>
        <div className={`${styling}`}>
          <h1 className='font-2xl'>Amount paid for the trip</h1>
          <span className='font-serif font-extrabold text-4xl'>2000</span>
        </div>
        <div className={`${styling}`}>
          <p className='font-2xl' >Depature time</p>
          <span className='font-serif font-extrabold text-4xl'>10:00am</span>
        </div>
        <div className={`${styling}`}>   
          <button
            className="bg-sky-900 px-4 text-white active:bg-blue-500 font-bold h-8 rounded hover:bg-white hover:text-black shadow hover:shadow-lg outline-none focus:outline-none "
            type="button"
            onClick={() => setShowModal(true)}>
            Leave a review
          </button>
          </div>
          <div className={`${styling}`}>   
          <button
            className="bg-sky-900 px-4 text-white active:bg-blue-500 font-bold h-8 rounded hover:bg-white hover:outline-sky-900 hover:text-black shadow-xl outline-none focus:outline-none "
            type="button">
             view my reviews
          </button>
          </div>
      </div>
    
       {showModal ? (
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">
                      Rate our trip and bus
                    </h3>
                    <button
                      className="bg-transparent border-0 text-black float-center"
                      onClick={() => setShowModal(false)}>
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      onSubmit={(e) => handleReview(e)}
                      className="bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        comment
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        name="comment"
                        required
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        rating out of 5
                      </label>
                      <div>
                      <Rating
                        ratingValue={ratingValue}
                        setRatingValue={setRatingValue}
                      />
                      </div>
                     
                      <button
                        className="font-bold text-white px-6 py-3 mt-3 rounded shadow hover:shadow-lg bg-blue-900"
                        type="submit">
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
      
    </div>
  )
}

export default SingleBooking