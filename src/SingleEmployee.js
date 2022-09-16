import React from 'react'
import {useState,useEffect} from 'react'

const SingleEmployee = () => {
    const [employee,setEmployee]= useState('')

  const getEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/3`)
    .then((response) =>(response.json()))
    .then((data) => setEmployee(data)); 
   
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div>
        <h1>Single Employee component is running {employee.status}</h1>
        <h1>{employee.message}</h1>
        <h3>{employee.data && employee.data.map((x)=>{
      return <li>{x.employee_name}</li>
     })}</h3>
    </div>
    
  )
}

export default SingleEmployee

