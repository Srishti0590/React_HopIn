import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
const DisplayProduct=()=>{
const [productDetails, setProductdetails] = useState([]);
    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deleteProduct =(pid)=>{
        const data ={
            id:pid
        }
        axios.delete("http://localhost:90/product/delete/" + pid, config)
        .then(result => {
            console.log(result)
            if (result.data.status) {
                alert('Product Deleted')
                window.location.reload();
            }
        })
        .catch(e=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:90/product/displayall", config)
        .then(result=>{
            console.log(result)
            setProductdetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])
    return(
        <div>
            <DefaultLayout></DefaultLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h3 >All Vehicles</h3>
                        </div>
                        <div className="Col">
                            {productDetails.map(singleProduct=>{
                        return(
                            <div className="self-center mb-4 flex flex-col bg-white rounded-lg shadow dark:bg-gray-800" id="vehicles">
                         <img src="/images/vehicle.jpg" className="w-100"/>       
                        <p>Name: {singleProduct.name}</p>
                        <p>Colour: {singleProduct.colour}</p> 
                        <div>    
                            <div>
                            <Link to={"/product/display/"+singleProduct._id}> Show Vehicle Details</Link>
                                </div>                  
                        <button className="btn btn-primary mb-4  mt-4 py-2 px-4  bg-purple-600 hover:bg-purple-700
                 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center
                 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" onClick={()=>{deleteProduct (singleProduct._id)}}>Delete</button>
                        
                        </div>

                    </div>
                        )
                    })}
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default DisplayProduct;