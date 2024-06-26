import axios from "axios";
import { useEffect, useState } from "react";
import DefaultLayoutAdmin from "../components/DefaultLayoutAdmin";
const ViewMessages = () => {
    
    const[message, setMessage] = useState([]);
    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deleteMessage =(mid)=>{
        const data ={
            id:mid
        }
        axios.delete("http://localhost:90/message/delete/" + mid, config)
        .then(result => {
            console.log(result)
            if (result.data.status) {
                alert('Message Deleted successfully')
                window.location.reload();
            }
        })
        .catch(e=>{
            console.log(e)
        })
    }

    
    useEffect(()=>{
        axios.get("http://localhost:90/message/display", config)
        .then(result=>{
            console.log(result);
            setMessage(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
    }, [])
    return(
        <div>
            <DefaultLayoutAdmin></DefaultLayoutAdmin>
        <div className="container">
            <div className="row" id="profile">
              
                <div class="col-md-6 Col" id="profile1">
                 
                    <div className="mt-3 ps-3">
                        <h5>Messages:</h5>
                        {message.map(singleProduct=>{
                        return(
                            <div className="self-center mb-4 flex flex-row bg-white rounded-lg shadow dark:bg-gray-800" id="vehicles1">  
                        <p>Name: {singleProduct.name}</p>
                        <p>Email: {singleProduct.email}</p>
                        <p>Message: {singleProduct.message}</p>

                        <button className="mb-3" onClick={()=>{deleteMessage (singleProduct._id)}}>Delete</button>
                        
                 

                    </div>
                        )
                    })}
                    
                    
                </div>
                    
                </div>

                
            </div>
        </div>
        </div>
    )
}
export default ViewMessages;