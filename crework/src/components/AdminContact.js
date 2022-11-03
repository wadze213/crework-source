//MUI TABLE DISPLAYS FNAME LNAME EMAIL AND MESSAGE WITH ACTIONS TO DELETE MESSAGE OR REPLY(MAILTO:)
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './component-styles/styles.css'
import { sampleContact } from './SampleContent';




const AdminContact = () => {

  let [ContactData, setContactData] = useState(localStorage.getItem("clients") ? JSON.parse(localStorage.getItem("clients")) : sampleContact)


 

  let handleRemove = (e) =>{
    let num = parseInt(e.target.id);
    
    const remove = [...ContactData].filter((item) => {
        return item.id !== num;
    })
    setContactData(remove)
  }
  


  useEffect(() => {
    localStorage.setItem("clients",JSON.stringify(ContactData))//chores-dependency
  
  },[ContactData])
  
  return (
    <div className='cardMessage'>
    <TableContainer component={Paper} >
    <h2>Messages recieved</h2>
    <p>Check inquiries recieved on the website and respond to project opportunities.</p>
      <Table  stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
         
            <TableCell sx={{ fontWeight: 'bold' }}>First name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Last name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Message</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email Address</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ContactData.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{data.fName}</TableCell>
              <TableCell >{data.lName}</TableCell>
              <TableCell >{data.message}</TableCell>
              <TableCell >{data.email}</TableCell>
              <TableCell ><Button variant="contained" color="success" onClick={() => window.location = `mailto:${data.email}`}>Message</Button></TableCell>
              <TableCell ><Button variant="outlined" startIcon={<DeleteIcon />} color={"warning"} id={data.id} onClick={handleRemove}> Delete</Button></TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>

    
  )
}

export default AdminContact