import React from 'react';
import LoginFrom from './components/LoginForm'
import RegisterFrom from './components/RegisterForm'
import './App.css'
import Movies from './components/Movies'
import { ToastContainer} from 'react-toastify';
import { Route,Routes } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import MovieForm from './components/MovieForm'
import Home from './components/Home';
import jwtDecode from 'jwt-decode';
import Logout from './components/Logout';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
const App = () => {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    try{
   const token= localStorage.getItem('token')
   const user=jwtDecode(token)
   setUser(user)
    }catch(ex){

    }
  },[])
  return (
    <div className='container'>
      <ToastContainer/>
      <div className='row'>
        <div className='col-12'>
          <Navbar user={user}/>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          {/* <ComponentA/>
          <ComponentB/> */}
        
          <Routes>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:new' element={<MovieForm/>}/>
          <Route path='/register' element={<RegisterFrom/>}/>
          <Route path='/login' element={<LoginFrom/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;