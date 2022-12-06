import React, { useState } from "react";

function Rating({ratingValue, setRatingValue}) {
  const [rating1, setRating1] = useState(true);
  const [rating2, setRating2] = useState(true);
  const [rating3, setRating3] = useState(true);
  const [rating4, setRating4] = useState(true);
  const [rating5, setRating5] = useState(true);

  function handleRating1(e) {
    e.preventDefault();
    setRating1(!rating1);
    setRating2(true);
    setRating3(true)
    setRating4(true);
    setRating5(true);
    setRatingValue(ratingValue => 1)
  }
  function handleRating2(e) {
    e.preventDefault();
    setRating1(false)
    setRating2(false);
    setRating3(true)
    setRating4(true)
    setRating5(true)
    setRatingValue(ratingValue => 2)
    
  }
  function handleRating3(e) {
    e.preventDefault();
    setRating1(false)
    setRating2(false);
    setRating3(false);
    setRating4(true)
    setRating5(true)
    setRatingValue(ratingValue => 3)

  }
  function handleRating4(e) {
    e.preventDefault();
    setRating1(false)
    setRating2(false);
    setRating3(false);
    setRating4(false);
    setRating5(true)
    setRatingValue(ratingValue => 4)

  }
  function handleRating5(e) {
    e.preventDefault();
    setRating1(false)
    setRating2(false);
    setRating3(false);
    setRating4(false);
    setRating5(false);
    setRatingValue(ratingValue => 5)

  }
  return (
    <div className="flex flex-row">
      <button onClick={(e) => handleRating1(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class={
            rating1 ? `text-white border mr-1 w-4` : `text-yellow-500 mr-1 w-4`
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
      </button>
      <button onClick={(e) => handleRating2(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class={
            rating2 ? `text-white border mr-1 w-4` : `text-yellow-500 mr-1 w-4`
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
      </button>
      <button onClick={(e) => handleRating3(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class={
            rating3 ? `text-white border mr-1 w-4` : `text-yellow-500 mr-1 w-4`
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
      </button>
      <button onClick={(e) => handleRating4(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class={
            rating4 ? `text-white border mr-1 w-4` : `text-yellow-500 mr-1 w-4`
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
      </button>
      <button onClick={(e) => handleRating5(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class={
            rating5 ? `text-white border mr-1 w-4` : `text-yellow-500 mr-1 w-4`
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Rating;