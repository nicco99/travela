import React from 'react'
import styled from 'styled-components';



function Panel() {
  return (
    <div>
      <imageBody>
             <img className='outline-8 rounded-3xl hover:bg-blue-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300 ' src={"https://cdn1.iconfinder.com/data/icons/material-core/20/info-outline-256.png"} alt="info" width="45px" />
             <img className='outline-8 rounded-3xl hover:bg-green-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-green-300'src={"https://cdn2.iconfinder.com/data/icons/social-icons-color/512/whatsapp-256.png"} alt="whatsapp" width="50px" />
             <img className='outline-8 rounded-3xl hover:bg-blue-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'   src={"https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-twitter-512.png"} alt="twitter" width="55px" />
             <img className='outline-8 rounded-3xl hover:bg-red-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-red-300'   src={"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"} alt="instagram" width="50px" />
             <img className='outline-8 rounded-full hover:bg-blue-400 shadow hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300'   src={"https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-facebook-512.png"} alt="facebook" width="60px" />
      </imageBody> 
      
    </div>
  )
}

export default Panel