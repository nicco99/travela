import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    
  <div className='navigation hidden sm:block'> 
         <Nav>
              <Div>
                  <img src=
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQzC0u03UPMX9l65QhzsBXQflVqMrdkVhZXXbjF60SOtEdbM6J_" alt="bus" width="100px" />
                  <P className='font-serif'>TRAVELA</P>
              </Div>

              <Ul>
                  <Link to="/">Home</Link>
                  <Link to="/Login">Log in</Link>
                  <Link to="/Signup">Sign up</Link>
                 
               </Ul>
         </Nav>
  </div> 
    
  );
}
const Nav = styled.nav`
display:flex;
justify-content:space-evenly;
padding:20px

`
const P = styled.p`
padding:30px;
font-weight:italics;
font-size:larger`

const Div = styled.div`
display:flex;
margin-right:auto;
`
const Ul = styled.ul`
  background-color:#B1DAFF;
  align-items:center;
  width:30vw;
  margin-right: 25px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  font-size:1.2rem;
  border-radius: 50px;
  
  box-shadow: 5px 2px  #888888;
   `
export default NavBar;