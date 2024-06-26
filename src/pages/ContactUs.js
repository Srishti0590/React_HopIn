import { useState } from "react";
import axios from "axios";

const ContactUs=()=>{
    const[name, setname]=useState('');
    const[email, setemail]=useState('');
    const[message, setmessage]=useState('');
    const [message1, setMessage]= useState('');
    const messageSend=(e)=>{
        e.preventDefault();
        const data={
            name:name,
            email:email,
            message:message,
           
        }
        const config ={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('ticket')
            }
        }
        axios.post('http://localhost:90/message/add', data, config)
        .then(response=>{
            setMessage(response.data.message);
            console.log(response)
        })
        .catch(e=>{console.log(e)})
    }
    return(
        <div id="carousel">
    <form id="contact-form" 
    // onSubmit={this.handleSubmit.bind(this)}
     method="POST" className="container center flex flex-col bg-white rounded-lg shadow dark:bg-gray-800 mt-5 p-5">
        <p className="color-red">{message1}</p>
    <div className="form-group">
        <h3>We are always open for your feedback!!</h3>
        <label htmlFor="name" >Name</label>
        <input type="text" className="form-control" onChange={(e) =>setname(e.target.value) } />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1" >Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) =>setemail(e.target.value) } />
    </div>
    <div className="form-group">
        <label htmlFor="message"  >Message</label>
        <textarea className="form-control" rows="5" placeholder="Type your message here......." onChange={(e) =>setmessage(e.target.value) }></textarea>
    </div>
    <button type="submit" className="btn btn-primary mt-2" onClick={messageSend}>Submit</button>
</form>

    {/* <div>
        <GoogleMapComponent></GoogleMapComponent>
    </div> */}
    </div>
    )

}
export default ContactUs;
