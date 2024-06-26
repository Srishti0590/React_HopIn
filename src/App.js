import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookCar';
import React, {Component} from 'react';
import Profile from './pages/ProfilePage';
import UpdateProfile from './pages/updateProfile';
import DisplayProduct from './pages/displayProduct';  
import UpdateProduct from './pages/UpdateProducts';
import PrivateRoute from './pages/ProtectedRoute';
import AddProduct from './pages/AddVehicle';
import SingleProduct from './pages/singleProduct';
import PrivateRouteAdmin from './pages/ProtectedRouteAdmin';
import Forgot from './pages/forgotPassword';
import ViewMessages from './pages/ViewMessages';
import AdminPannel from './pages/AdminDashboard';



function App() {
  return(
    <div className='App'>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgotpassword' element={<Forgot/>}></Route>
      <Route path='/bookcar' element={<BookingCar/>} />
      <Route path='/addvehicle' element={<PrivateRouteAdmin><AddProduct/></PrivateRouteAdmin>} />
      <Route path='/myprofile' element={<Profile/>} />
      <Route path='/updateprofile' element={<UpdateProfile/>} />
      <Route path='/displayproducts' element={<DisplayProduct/>} />
      <Route path='/adminpannel' element={<PrivateRouteAdmin><AdminPannel/></PrivateRouteAdmin>} />
      <Route path='/product/display/:id' element={<SingleProduct/>} />
      <Route path='/updateproduct/:pid' element={<UpdateProduct/>} />
      <Route path='/admin' element={<PrivateRouteAdmin><abc/></PrivateRouteAdmin>} />
      <Route path='/displaymessages' element={<PrivateRouteAdmin><ViewMessages/></PrivateRouteAdmin>} />

      



    </Routes>
    </BrowserRouter>
    </div>
  
  )
}

export default App;
