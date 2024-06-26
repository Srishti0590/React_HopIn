import React, { useState } from "react";
import axios from 'axios';
import DefaultLayout from "../components/DefaultLayout";
import {Row, Col} from "react-bootstrap";


function Register(){
    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [age, setAge]= useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]= useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]=useState('');

    const registerUser=(e)=>{
        e.preventDefault();
        const data={
            fn:firstname,
            ln: lastname,
            age: age,
            email: email,
            phone: phone,
            password: password
        }
        axios.post('http://localhost:90/customer/register', data)
        .then(response=>{
            setMessage(response.data.message);
            console.log(response.data.message);
            
            window.location = "/login";
        })
        .catch(e=>{console.log(e)})
    }

    return(
        <div>
            <DefaultLayout></DefaultLayout>
        
            <div id="margin" className=" flex flex-col bg-white rounded-lg shadow dark:bg-gray-800">
            < div className="row center" id="row">
            <div className="col-md-5 contains">
                <h2 id="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">Register Here!!</h2>
                <p>{message}</p>
                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='images'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                     
                </Col>
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={(e)=> setFirstname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" onChange={(e)=> setLastname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" onChange={(e)=> setAge(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)}
                    placeholder="....@gmail.com"/>
                </div>
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="number" className="form-control" rules={[{required: true}]} onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" rules={[{required: true}]} onChange={(e)=> setPassword(e.target.value)} placeholder="********"/>
                </div>
                <button type="submit" className="btn btn-primary mb-4  mt-4 py-2 px-4  bg-purple-600 hover:bg-purple-700
                 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center
                 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" id="button" onClick={registerUser}>Register</button>
                 <div>
                <a href="/login" id="reg">Back to login!!</a>
                </div>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Register;