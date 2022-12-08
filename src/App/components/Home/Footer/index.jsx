import React from 'react'

function Footer() {
    return (
    <div className='bg-sky-400 h-100 flex justify-around absolute inset-x-0 bottom-0 p-8'>
      <div class="left">
                 <label className='font-bold text-2xl italic  '>Travela</label>
                  <p className='text-2xl italic'>When preparing to travel,
                  <br></br> lay out all your clothes and all your money.
                  <br></br> Then take half the clothes
                  <br></br> and twice the money.</p>
            </div>
         <div className='flex flex-col justify-between'>
            <ul>
                <li className='text-2xl font-normal hover:font-bold'>Resources</li>
                <li className='text-2xl font-normal hover:font-bold pt-3'>Give Feedback</li>
                <li className='text-2xl font-normal hover:font-bold pt-3'>Status </li>
                <li className='text-2xl font-normal hover:font-bold pt-3'>Privacy & Policy</li>
            </ul>
           
         </div>
         

       <div className='flex flex-col'>
         <div>
             <h2 className='text-2xl'>Get us on</h2>
                <div class='flex flex-row'>
                <img src={"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/103-GooglePlay_play_google_play_apps-256.png"} alt="google play" width="45px" />
                <img className='m' src={"https://cdn1.iconfinder.com/data/icons/social-links/55/_20-256.png"} alt="app store" width="45px" />
                </div>
         </div>



         <div className='mt-5'>
            <p className='text-2xl'>Or reach out via</p>
                <div class='flex justify-between m-1'>
                    <img className='outline-8 rounded-3xl hover:bg-green-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-green-300'src={"https://cdn2.iconfinder.com/data/icons/social-icons-color/512/whatsapp-256.png"} alt="whatsapp" width="50px" />
                    <img className='outline-8 rounded-3xl hover:bg-blue-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'   src={"https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-twitter-512.png"} alt="twitter" width="50px" />
                    <img className='outline-8 rounded-3xl hover:bg-red-400 shadow hover:shadow-lg focus:outline-none focus:ring focus:ring-red-300'   src={"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"} alt="instagram" width="50px" />
                    <img className='outline-8 rounded-full hover:bg-blue-400 shadow hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300'   src={"https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-facebook-512.png"} alt="facebook" width="50px" />


                </div>
         </div>
         </div>
    </div>

    );
    }
    export default Footer;


