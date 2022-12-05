import React from 'react';
import NavBar from './NavBar'
import Search from './Search';
import Panel from './Panel';
import "../css/home.css"

function Home() {
  return (
    <div className='h-sreen'>
       <NavBar/>
       <Panel/>
       <Search/>

    </div>
    
  
  )
}

export default Home