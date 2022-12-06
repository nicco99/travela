import React from 'react';

function Profile() {

  return (
    <div className='w-full flex flex-col grid grid-cols-1'>
      <div className='w-28 rounded-full h-28 bg-slate-400 items-center'></div>
      <div className='flex flex-col w-1/2'>
        <label>Username:</label>
        <input className='border rounded-md p-2' value="Nicco99"/>
      </div>
      <div className='flex flex-col w-1/2'>
        <label>Email:</label>
        <input className='border rounded-md p-2'/>
      </div>
      <div className='flex flex-col w-1/2'>
        <label>phone Number:</label>
        <input className='border rounded-md p-2'/>
      </div>
      <div className='flex flex-row w-1/2 justify-round'>
        <button className='bg-blue-400 px-3 rounded-md'>Update</button>
        <button className='bg-red-400 px-3 rounded-md'>Delete</button>
      </div>
    </div>
  )
}

export default Profile








// <div className= 'account'>
    //   <div className= 'account_info'>
    //     {/* <h1>Settings</h1> */}
    //     <p>Change Personal Information</p>
    //   </div>
    //   <div className= 'account_box'>
    //     <div className='account_box_img'>
    //       <input/>
    //       <img
    //       src= 'https://media-exp1.licdn.com/dms/image/D4D03AQF1Mfp3k2wscg/profile-displayphoto-shrink_200_200/0/1665763325851?e=1674691200&v=beta&t=iij1FVMdlypCHBaxIkjWEqNOijBMRoxcdls6u2zcfs0'
    //       alt="account upload" 
    //       width={150} 
    //       className= 'account_box_img_img'
    //       height={150}
    //       classname='account_box_img_img'/>
    //       <p>Change Image</p>
    //     </div>
    //     <div className='account_box_from'>
    //       <FormProfile />
    //     </div>
    //   </div>
    // </div>