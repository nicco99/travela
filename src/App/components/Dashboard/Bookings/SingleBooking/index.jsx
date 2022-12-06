import React,{useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Rating from "./Rating"
function SingleBooking() {
  const [showModal, setShowModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  const {id} = useParams()
 
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }
  function handleReview(e) {
    e.preventDefault();
    const review = {
      comment: formData.comment,
      rating: ratingValue,
      booking_id: parseInt(id)
    };
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(-1 + 1);
        console.log(data)
      });
  }
  return (
    <div className='h-4/5 bg-sky-100 rounded shadow-md'>
       <button
            className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 mt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 float-right"
            type="button"
            onClick={() => setShowModal(true)}>
            review
          </button>
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
                      className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
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
                      <Rating
                        ratingValue={ratingValue}
                        setRatingValue={setRatingValue}
                      />
                      <button
                        className="font-bold px-6 py-3 mt-3 rounded shadow hover:shadow-lg bg-blue-400"
                        type="submit">
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className='h-28 bg-sky-50 grid-cols-3 gap-3'>
            <div className='bg-sky-50 h-14'></div>
            <div className='bg-sky-100 h-14'></div>
          </div>
    </div>
  )
}

export default SingleBooking