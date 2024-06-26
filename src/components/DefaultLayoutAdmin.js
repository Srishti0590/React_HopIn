import React from "react";
import {Link, link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaGoogle, FaStar } from 'react-icons/fa';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
function DefaultLayoutAdmin(){
  const LogOut=()=>{
    //log out function
    //we need to erase the localstorage
    localStorage.clear();
    window.location.replace('/login');
  } 
  const[userdata, setUserdata] = useState('');
  const config ={
      headers:{
          Authorization:'Bearer ' + localStorage.getItem('ticket')
      }
  }
  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") setScrollState("amir")
      } else {
        if (scrollState !== "top") setScrollState("top")
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  useEffect(()=>{
    axios.get("http://localhost:90/customer/dashboard", config)
    .then(result=>{
        console.log(result);
        setUserdata(result.data.data);
    })
    .catch(e=>{
        console.log(e)
    })
}, [])
  var menu;

  if(localStorage.getItem('ticket')){
    menu=(
      <>
      <li class="nav-item">
       <Link class="nav-link mt-3" to="/addvehicle">Add Vehicle</Link>
     </li> 
     <li class="nav-item">
       <Link class="nav-link mt-3" to="/displaymessages">View Messages</Link>
     </li> 
     {/* <form class="d-flex " role="search" id="layout1">
     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     <button class="btn btn-outline-success" type="submit">Search</button> */}
     {/* <p><img src={'http://localhost:90/'+ userdata.picture} className="img-fluid img-thumbnail" id="image"/></p> */}
     
   {/* </form>    */}
     <li class="nav-item dropdown ps-5 mt-3 " id="layout1" >
       
       <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       {userdata.fn} {userdata.ln} 
       
       </a>
       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
         <li><Link class="dropdown-item" to="/myprofile">My Profile</Link></li>
         <li><hr class="dropdown-divider"/></li>
         <li><a class="dropdown-item" onClick={LogOut}>Log Out</a></li>
       </ul>       
     </li>
      </>
      
    )
    
  }
  else{
    menu=(
      <>
     
     <li class="nav-item " id="layout">
       <Link to="/login"><Button class="btn btn-outline-warning" id="login" style={{color:'white'}}>Login</Button></Link>
     </li>
      </>
    )   
  }
    return(
        <div >
        <nav class="navbar navbar-expand-lg bg-light" id="header">
<div class="container-fluid">
 {/* <img src="/images/logo.png" class="d-block " height={80} href="/"></img> */}
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <li class="nav-item">
       <a class="nav-link active" aria-current="page" href="/">
        <img className="logo" id="logo_main" src="/images/logo.png" alt="Car Rentals" />
       </a>
     </li>     
     <li class="nav-item mt-3">
       <Link class="nav-link" to="/displayproducts">All Vehicles</Link>
     </li>

     
   
     {menu}
   </ul> 
   
   
 </div>
 
</div>
</nav>

    </div>
   
    )
}
export default DefaultLayoutAdmin;