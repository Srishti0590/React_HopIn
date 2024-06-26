import { useEffect, useState } from "react";
import axios from 'axios';
import DefaultLayout from "../components/DefaultLayout";
const UpdateProfile = () =>{
    const [message, setMessage] = useState('');
    const[user, setUserdata] = useState('');
    const[fn, setFn] = useState('');
    const[ln, setLn] = useState('');
    const[age, setage] = useState('');
    const[email, setemail] = useState('');
    const[phone, setPhone] = useState('');

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const updateProfile=(e)=>{
        e.preventDefault();
        const data={
            fn:fn,
            ln:ln,
            email:email,
            phone: phone,
            age:age,
        }
        axios.put("http://localhost:90/customer/update", data, config)
        .then(result=>{
            console.log(result);
            setMessage(result?.data?.message)
        })
        .catch(e=>{
            console.log(e);
            // setMessage(result?.data?.message);
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard", config)
        .then(result=>{
            console.log(result);
            setMessage(result.data.message);
            setUserdata(result.data.data);
            setFn(result.data.data.fn);
            setLn(result.data.data.ln);
            setage(result.data.data.age);
            setemail(result.data.data.email);
            setPhone(result.data.data.phone);

            
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
                <h2>Update Profile</h2>
                <p>{message}</p>
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" value={fn} onChange={(e) =>{setFn(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" value={ln} onChange={(e) =>{setLn(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={age} onChange={(e) =>{setage(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) =>{setemail(e.target.value)}}/>
                </div>  
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>             
                <button type="submit" className="btn btn-primary mt-3" onClick={updateProfile}> Update</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default UpdateProfile;