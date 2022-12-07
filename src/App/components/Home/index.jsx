import React,{useEffect,useState} from 'react';
import NavBar from './NavBar'
import Search from './Search';
// import Panel from './Panel';
// import "../css/home.css";


function Home() {
  const [toggle,setToggle] =useState(false)
  return (
    <div className=' h-screen w-screen' >
      <div>
        <button onClick={()=>{setToggle(toggle=>!toggle)}} className='p-2 bg-sky-400 mt-3 ml-3 sm:hidden rounded-md'>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      {toggle?<div className='bg-blue-400 rounded-md sm:hidden w-full h-auto p-3 m-3 flex flex-col justify-center items-center '>
<div className='hover:bg-sky-300 px-3 rounded-md text-2xl  text-white' >Log in</div>
<div className='hover:bg-sky-300 px-3 rounded-md text-2xl  text-white '>Sign up</div>
<div className='hover:bg-sky-300 px-3 rounded-md text-2xl text-white'>Home</div>
        </div>:null}
       <NavBar/>
       <div className='bg-no-repeat h-screen w-full sm:w-3/5 flex justify-center items-center sm:h-3/5 shadow-lg rounded-md  m-auto bg-cover' style={{backgroundImage: `url("https://verbanoviaggi.com/wp-content/uploads/2017/12/istockphoto-636879522-170667a.jpg")`}} >
     
       <Search/>
       </div>

    </div>
    
  
  )
}


export default Home