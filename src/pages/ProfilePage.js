import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
const Profile = () => {
    const [image, setImage] = useState('');
    const[userdata, setUserdata] = useState('');
    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const updateProfile=(e)=>{
        e.preventDefault();
        const profilePic = new FormData();
        profilePic.append('pic', image);
        axios.put('http://localhost:90/customer/picture/update', profilePic, config)
        .then(result=>{
            console.log(result)
            alert("Profile picture added");
            window.location.reload();
        })
        .catch(e=>{
            console.log(e)
        })
    }

    
    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard", config)
        .then(result=>{
            console.log(result);
            setUserdata(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
    }, [])
    return(
        <div>
            <DefaultLayout></DefaultLayout>
        <div className="container">
            <div className="row" id="profile">
              
                <div class="col-md-6 Col" id="profile1">
                    <div>
                    <p><img src={'http://localhost:90/'+ userdata.picture} className="img-thumbnail" id="profile2"/></p>
                    <form>
                        <div className="form-group img-circle">
                            <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark mt-3 ms-5" onClick={updateProfile}/>
                        </div>
                    </form>
                    </div>
                    <div className="mt-3 ps-3">
                        <h5>My Profile:</h5>
                    <p>Name: {userdata.fn} {userdata.ln}</p>
                    <p>Email: {userdata.email}</p>
                    <p>Phone: {userdata.phone} </p>
                    <p>Age:{userdata.age}</p>
                    <button id="update">
                    <Link to="/updateprofile" id="reg" className="mt-5" >Update Profile</Link>
                    </button>
                    
                </div>
                    
                </div>

                
            </div>
        </div>
        </div>
    )
}
export default Profile;