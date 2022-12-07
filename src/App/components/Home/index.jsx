import React from 'react';
import NavBar from './NavBar'
import Search from './Search';
import Panel from './Panel';
import "../css/home.css";
import styled from 'styled-components';

function Home() {
  return (
    <div className='h-sreen'>
       <NavBar/>
       <Div className='body'>
       <Panel/>
       <Search/>
       </Div>

    </div>
    
  
  )
}
const Div = styled.div`
display:flex;
height: 10px;
justify-content:space-between;
margin-right:20rem;

`

export default Home