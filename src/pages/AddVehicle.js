import axios from "axios";
import { useState } from "react";
import DefaultLayoutAdmin from "../components/DefaultLayoutAdmin";
const AddProduct =()=>{
    // const [image, setImage] = useState('');
    const[name1, setProductname]=useState('');
    const[model, setDescription]=useState('');
    const[capacity, setQuantity]=useState('');
    const[power, setCategory]=useState('');
    const[colour, setPrice]=useState('');
    const[pic, setPic]=useState('');

    const [message, setMessage] = useState('');

    const onFileSubmit=(e)=>{
        // setFile(e.target)
        // console.log(e.target.files[0].name)
        setPic(e.target.files[0]);
      }

    const addProduct=(e)=>{
        e.preventDefault();
        const jhj={
            name:name1,
            model:model,
            capacity:capacity,
            power:power,
            colour:colour,
            pic:pic
        }
        const config ={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('ticket')
            }
        }
        const data = new FormData();
        data.append('picture', pic);
        data.append('name', name1);
        data.append('model', model);
        data.append('capacity', capacity);
        data.append('power', power);
        data.append('colour', colour);




        axios.post('http://localhost:90/product/add', data, config)
        .then(response=>{
            console.log(response)
            setMessage(response?.data?.message)
        })
        .catch(e=>{console.log(e)})
    }
    return(
        <div>
            <div>
            <DefaultLayoutAdmin ></DefaultLayoutAdmin>
            </div>
            
        
        <div className="container center flex flex-col bg-white rounded-lg shadow dark:bg-gray-800 w-6 mt-4 mb-4 p-5">
        <div className=" center" id="add" >
        <div className="col-md-4" >
            <div>
            <h2>Add a Car</h2>
            <p>{message}</p>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={(e) =>setProductname(e.target.value) }/>
            </div>
            <div className="form-group">
                <label>Model</label>
                <input type="text" className="form-control" onChange={(e) =>setDescription(e.target.value) }/>
            </div>
            <div className="form-group">
                <label>Capacity</label>
                <input type="text" className="form-control" onChange={(e) =>setQuantity(e.target.value) }/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text" className="form-control" onChange={(e) =>setCategory(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Colour</label>
                <input type="text" className="form-control" onChange={(e) =>setPrice(e.target.value)}/>
            </div>
            <div className="form-group img-circle mt-2">
                            <label>Add Picture</label>
                            <input type="file" className="form-control"
                            // onChange={onFileSubmit}
                             onChange={
                                //  (e)=>setPic(e.target.files[0])
                                (e) =>setPic(e.target.value)
                                }/>
                        </div>
            <button type="submit" className="btn btn-primary mt-3 pt-4 w-100" id="button" onClick={addProduct}> Add</button>
        </form>
            </div>
            
            
        </div>
        <div >
            <img src="/images/carousel1.jpg" alt="car" id="img"></img>
        </div>
     
        </div>

    
    </div>
    
    </div>

    );
}
export default AddProduct;