import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';





   

function Search() {
   
  return (
    
    <div>
         {/* <button className='bg-sky-500 p-5 ml-4 rounded hover:rounded-lg '>Go</button> */}
         <Link to={'/login'}>
         <button className='bg-sky-500 p-5 ml-4 rounded hover:rounded-lg w-full h-full '>Get Started</button>
         </Link>  
    </div>
         
        
  )
}

 
 
 
 

export default Search