import React from "react";
import{useState} from 'react';
import axios from 'axios';
import DefaultLayout from "../components/DefaultLayout";
import {Row, Col} from "react-bootstrap";

function Login(){
    // const history = useHistory()
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]= useState('');

    const CustomerLogin=(e)=>{
        
        e.preventDefault();
        const data={
            email: email,
            password: password  
        }
        axios.post('http://localhost:90/customer/login', data)
            .then(response=>{
                setMessage(response.data.message);
                console.log(response.data.token)
                if(response.data.token){
                    //Login Access
                    localStorage.setItem('ticket', response.data.token);
                    localStorage.setItem('userType', response.data.userType);
                    // <Redirect to="/" />
                    setMessage(response?.data?.message)
                    window.location = "/";

                }
                else{
                    //error
                    setMessage("Invalid Credentials");
                }
            })
            .catch(e=>{console.log(e)})
    }

    return(
        <div>
            <DefaultLayout></DefaultLayout>

        <body className="body" > 
        <div id="margin" className=" flex flex-col bg-white rounded-lg shadow dark:bg-gray-800">
            < div className="row center" id="row">
            <div className="col-md-5 contains">
                <h2 id="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">Login to your account</h2>
                <p style={{color:'red'}}>{message}</p>
                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='images'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                     
                </Col>
                <div className="form-group" id="input">
                    <label className="py-2">Email:</label>
                    <input type="text" id="sign-in-email" className="form-control rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>
                <div className="form-group" id="input">
                    <label className="py-2">Password:</label>
                    <input type="text" className="form-control rounded-r-lg flex-1 appearance-none border 
                    border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm
                     text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-4 py-2 px-4  bg-purple-600 hover:bg-purple-700
                 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center
                 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " id="button"
                 onClick={CustomerLogin}
                 >Login</button>
                 <div>
                <a  className="ps-5 ms-4" href="/forgotpassword">Forgot Password?</a>
                </div>
                 

                <div id="alternativeLogin">
                    <label className="pt-2">Or sign in with:</label>
                    <div id="iconGroup" className="row">
                    <div id="twitter">
                    <img 
                    className='images'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"/>
                    </div>
                    <div id="google">
                    <img 
                    className='images'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"/>
                    </div>
                    <div id="google">
                    <img 
                    className='images'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" />
                    
                    </div>
                    </div>

                </div> 
                <div>
                <a href="/register" id="reg">New user? Cick here to register!!</a>
                </div>
                
                
            
            </div>
            
           
                

            
            </div>
        </div>
        </body>
        </div>
        
    )
    
}
export default Login;