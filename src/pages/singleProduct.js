import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import {FaStar } from 'react-icons/fa';

const SingleProduct=()=>{

    const booknow=()=>{
        window.location.replace('/bookcar');
        alert('Booking sucessfully made')      } 

    const {id} = useParams();
    const [details, setDetails] = useState('');
    const [message, setMessage] = useState('');

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    console.log(id)
    useEffect(()=>{
        axios.get("http://localhost:90/product/display/" + id, config)
        .then(result=>{
            console.log(result)
            setDetails(result.data.data);
        })
        .catch()
    },[])
    return(
        <div>
            <DefaultLayout></DefaultLayout>
            <div className="container">
            <div id="single">
                <div>
                    {/* <p><img src={'http://localhost:90/'+ details.picture} id="img1" /></p> */}
                    <img src="/images/vehicle.jpg" className="me-5"/>
                 
                </div>
                <div className="mt-5 pt-5">
                    <h2>Name: {details.name}</h2>
                   
                    <p>Model: {details.model}</p>
                    <p>Colour: {details.colour}</p>
                    <p>Price: {details.power}</p>
                    <p>Capacity: {details.capacity}</p>
                    <h6><FaStar id="star"/><FaStar id="star"/><FaStar id="star"/><FaStar id="star"/><FaStar /> </h6>
                    <button className="btn btn-primary mb-4  mt-4 py-2 px-4  bg-purple-600 hover:bg-purple-700
                 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center
                 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"  onClick={booknow} >Book Now</button>
                </div>
            
            

            </div>
        </div>
        </div>
      
    )
}
export default SingleProduct;