//DISPLAY ACCEPTE DTALENT DATA WITH ACTION TO CHANGE AVAILABILITY OR DELETE OR UPDATE
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
import { sampleTalent } from './SampleContent';

const AdminTalent = () => {
  let [TalentData, setTalentData] = useState(localStorage.getItem("talentList") ? JSON.parse(localStorage.getItem("talentList")) : sampleTalent)

  let handleRemove = (e) =>{
    let num = parseInt(e.target.id);
    
    const remove = [...TalentData].filter((item) => {
        return item.id !== num;
    })
    setTalentData(remove)
  }

  
  let handleAvailability = (e) => {
    let num = parseInt(e.target.id);
    const toggle = [...TalentData].map((item) => {
      if(item.id === num){
        console.log("Does this run")
        item.availability = !item.availability
      }
      return item
    })
    setTalentData(toggle)
  }
  let availabilityDisplay = (data) => {
    if(data.availability === true){
      return("Available")
    }else{
      return("Unavailable")
    }
  }
  useEffect(() => {
    localStorage.setItem("talentList", JSON.stringify(TalentData))
  }, [TalentData])

  return (
    <div className='cardMessage'>
    <TableContainer component={Paper} >
    <h2>Talent Pool</h2>
        <p>List of the talents in talent pool and possibility to change availability status</p>
      <Table  stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
         
            <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Position</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Availability</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email Address</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          TalentData.map((data) => (
            <TableRow key={data.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell >{data.lastName}</TableCell>
              <TableCell >{data.position}</TableCell>
              <TableCell >{availabilityDisplay(data)}</TableCell>
              <TableCell >{data.email}</TableCell>
              <TableCell ><Button variant="contained" color="success" onClick={handleAvailability} id={data.id}>Toggle availability</Button></TableCell>
              <TableCell ><Button variant="outlined" startIcon={<DeleteIcon />} color={"warning"} id={data.id} onClick={handleRemove}> Delete</Button></TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AdminTalent