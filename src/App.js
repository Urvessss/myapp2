import React from 'react';
import LoginFrom from './component/LoginFrom';
import RegisterFrom from './component/RegisterFrom';
import './App.css'
import Movies from './component/Movies';
import { ToastContainer} from 'react-toastify';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';

import Navbar from './component/Navbar';
import MovieForm from './component/MovieForm';


const App = () => {
  return (
    <div className='container'>
      <ToastContainer/>
      <div className='row'>
        <div className='col-12'>
          <Navbar/>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <Routes>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:new' element={<MovieForm/>}/>
          <Route path='/register' element={<RegisterFrom/>}/>
          <Route path='/login' element={<LoginFrom/>}/>
          <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
