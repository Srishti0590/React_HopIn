import { useEffect, useState } from "react";
import axios from 'axios';
import DefaultLayout from "../components/DefaultLayout";
const UpdateProduct = () =>{
    const [message, setMessage] = useState('');
    // const{id}= useParams();
    const[product, setProductdata] = useState('');
    const[name, setName] = useState('');
    const[model, setModel] = useState('');
    const[capacity, setCapacity] = useState('');
    const[power, setPower] = useState('');
    const[colour, setColour] = useState('');
    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const updateProduct=(e)=>{
        
        e.preventDefault();
        const data={
            
            name:name,
            model:model,
            capacity: capacity,
            power:power,
            colour:colour
        }
        axios.put("http://localhost:90/product/update", data, config)
        .then(result=>{
            alert('Product Updated')
            console.log(result)
        })
        .catch(e=>{
            console.log(e);
        })
    }
     useEffect(()=>{
        axios.get("http://localhost:90/product/display/:id", config)
        .then(result=>{
            console.log(result);
            setProductdata(result.data.data);
            setName(result.data.name);
            setModel(result.data.model);
            setCapacity(result.data.capacity);
            setPower(result.data.power);
            setColour(result.data.colour);
        })
        .catch(e=>{
            console.log(e)
        })
    }, [])
    return(
        <div>
            <DefaultLayout></DefaultLayout>
        <div className="container center" id="profile">
            <div className="row center">
            <div className="col-md-4">
                <h2>Update Products</h2>
                <p>{message}</p>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) =>{setName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" className="form-control" value={model} onChange={(e) =>{setModel(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Capacity</label>
                    <input type="text" className="form-control" value={capacity} onChange={(e) =>{setCapacity(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" value={power} onChange={(e) =>{setPower(e.target.value)}}/>
                </div>
             
                <div className="form-group">
                    <label>Colour</label>
                    <input type="text" className="form-control" value={colour} onChange={(e) =>{setColour(e.target.value)}}/>
                </div>
                
                <button type="submit" className="btn btn-primary mt-3" onClick={updateProduct}> Update</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default UpdateProduct;