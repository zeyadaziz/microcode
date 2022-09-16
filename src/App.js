

import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselRb from './Components/CarouselRb'
import NavbarRb from './Components/NavbarRb'
import Home from './Components/Home'

import {Routes,Route} from 'react-router-dom'
import Allemployees from './Allemployees'
import Contact from './Components/Contact'
function App(){
  const [employee,setEmployee]= useState('')

  const getEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employees`)
    .then((response) =>(response.json()))
    .then((data) => setEmployee(data)); 
   
  };

  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <div className="App">
      <NavbarRb />
      <CarouselRb />
      {/* <Home/> */}
      
  <Routes>
    <Route exact path='/home' element={<Home />} />
    <Route  path='/allemployees' element={<Allemployees employee={employee} />} />
    <Route exact path='/home' element={<Home />} />
    <Route exact path='/Contact' element={<Contact />} />
    </Routes>
   
    
      <h1>services</h1>
      <h5>IT Consulting</h5>
      <h5>Web Development</h5>
      <h5>Website</h5>
      <h5>Website</h5>
    
        </div>



        
  )
}

export default App;


