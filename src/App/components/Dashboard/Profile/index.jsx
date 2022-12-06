import React, { useState, useMemo, useCallback, useContext } from 'react';
import '../../css/profile.css'

// import { useDropzone } from 'reactzone'
import FormProfile from '../../FormProfile'

function Profile() {

  // const [fileUrl, setFileUrl] = useState(null);

  return (
    <div className= 'account'>
      <div className= 'account_info'>
        <h1>Settings</h1>
        <p>Change Personal Information</p>
      </div>
      <div className= 'account_box'>
        <div className='account_box_img'>
          <input/>
          <img
          src= 'https://media-exp1.licdn.com/dms/image/D4D03AQF1Mfp3k2wscg/profile-displayphoto-shrink_200_200/0/1665763325851?e=1674691200&v=beta&t=iij1FVMdlypCHBaxIkjWEqNOijBMRoxcdls6u2zcfs0'
          alt="account upload" 
          width={150} 
          className= 'account_box_img_img'
          height={150}
          classname='account_box_img_img'/>
          <p>Change Image</p>
        </div>
        <div className='account_box_from'>
          <FormProfile />
        </div>
      </div>
    </div>
  )
}

export default Profile