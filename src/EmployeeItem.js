
import React from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const EmployeeItem = ({item}) => {
  
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


  return (
    
    <Div>
      
        <Card style={{width:"50%"}}>
       <h3>Name of the employee :{item.employee_name}</h3>
        <h3>Salary :{item.employee_salary}</h3>
        <h3>Age :{item.employee_age}</h3>
        </Card>
    </Div>
  )
}

export default EmployeeItem

