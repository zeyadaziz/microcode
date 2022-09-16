
import React from 'react'
import EmployeeItem from './EmployeeItem'
const Allemployees = ({employee}) => {
  return (
    <div id="empolyeecontanier">
  <h3>{employee.status}</h3>
     <h3>{employee.message}</h3>
     <h3>{employee.data && employee.data.map((x)=>{
      return <li style={{textDecoration:"none"}} >{<EmployeeItem item={x} />}</li>
     })}</h3>

    </div>
  )
}

export default Allemployees

