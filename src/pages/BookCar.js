import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DefaultLayout from "../components/DefaultLayout";
import { Link, useParams } from "react-router-dom";


import axios from "axios";
const BookingCar = () => {
    const [details, setDetails] = useState([]);
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    // const [paymentStatus, setPaymentStatus] = useState("");
    const [message, setMessage] = useState("");
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    var paymentStatus;
    if (paymentMethod === 'Cash On Delivery') {
        paymentStatus = "Pending";
    } else {
        paymentStatus = "Paid";
    }
    const deleteBooking = (booking_id) => {
        console.log(booking_id);
        axios
            .delete("http://localhost:90/bookings/delete/" + booking_id, config)
            .then((result) => {
                console.log(result);
                if (result.data.success) {
                    console.log("Car Deleted Successfully");
                    window.location.replace("/bookcar");
                } else {
                    console.log("Please Try Again!!!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(() => {
        axios
            .get("http://localhost:90/bookings/get", config)
            .then((result) => {
                console.log(result);
                setDetails(result.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const orderProduct = () => {
        const data = {
            orderItem: details,
            totalPrice: details.reduce(
                (a, c) => a + c.pid.pprice * c.quantity,
                0
            ),
            paymentMethod: paymentMethod,
            paymentStatus: paymentStatus,
            contactNo: contactNo,
            address: address,
        };
        axios
            .post("http://localhost:90/booking/insert", data, config)
            .then((response) => {
                if (response.data.success === true) {
                    setMessage("Booking Made Successfully");
                } else {
                    setMessage("Please Try Again! Something Went Wrong!!!");
                }
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
        }

        
return (
    <div>
    <DefaultLayout></DefaultLayout>
    <div className="cart-body mt-5 pt-4">
        <div className="container mb-4">
            <h2 className="mb-5 first-cap text-center">My Bookings</h2>
            <div className="row">
                <div className="col-12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className='table-dark' >
                                    <th scope="col" className="text-center">Image</th>
                                    <th scope="col" className="text-center">Name</th>
                                    <th scope="col" className="text-center" >Price</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* {details.map(singleProduct => { */}
                                    {/* return ( */}
                                        <tr>
                                            <td className='text-center'><img src="/images/vehicle.jpg" alt="" width="150" className='text-center' /></td>
                                            <td className='text-center'> Hyundai</td>
                                            <td className='text-center'> 2500/day</td>
                                            
                                        </tr>
                                    {/* ) */}
                                 {/* })} */}
                                
                                {/* <tr>
                                <td colSpan="4"></td>
                                <td className="text-center">Total Amount</td>
                                <td colSpan="2">Sub-Total</td>
                            </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>    
                </div>
                </div>
                </div>
)    
    };
export default BookingCar;    