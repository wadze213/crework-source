//TABLE WITH TALENT DATA WITH ACTIONS TO DELETE OR ACCEPT TALENT
//IF TALENT ACCEPTED ADD TO LOCALSTORAGE FOR TALENTS AND ADD A AVAILABILITY PROPERTY
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
import { sampleJoin } from './SampleContent';

const AdminJoin = () => {

  let [JoinData, setJoinData] = useState(localStorage.getItem("joinForm") ? JSON.parse(localStorage.getItem("joinForm")) : sampleJoin)
  let [TalentData, setTalentData] = useState(localStorage.getItem("talentList") ? JSON.parse(localStorage.getItem("talentList")) : sampleTalent)

  let handleRemove = (e) =>{
    let num = parseInt(e.target.id);
    
    const remove = [...JoinData].filter((item) => {
        return item.id !== num;
    })
    setJoinData(remove)
  }

  let handleAccept = (e) => {
    let num = parseInt(e.target.id);
    [...JoinData].filter((item) => {
      if(item.id === num){
        let newTalent = item;
        newTalent.availability = true
        setTalentData([...TalentData, newTalent])
        handleRemove(e)
      }
    })
  }

  useEffect(() => {
    localStorage.setItem("joinForm",JSON.stringify(JoinData))
    localStorage.setItem("talentList",JSON.stringify(TalentData))
  },[JoinData, TalentData])


  return (
    <div className='cardMessage'>
      
    <TableContainer component={Paper} >
    <h2>Talent Applications</h2>
        <p>Check talent applications and eventually add them the to the talent pool</p>
      <Table  stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
         
            <TableCell sx={{ fontWeight: 'bold' }}>First name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Last name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Portfolio link</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email Address</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {JoinData.map((data) => (
            <TableRow key={data.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell >{data.firstName}</TableCell>
              <TableCell >{data.lastName}</TableCell>
              <TableCell >{data.portfolio}</TableCell>
              <TableCell >{data.email}</TableCell>
              <TableCell ><Button variant="contained" color="success" onClick={handleAccept} id={data.id}>Accept</Button></TableCell>
              <TableCell ><Button variant="outlined" startIcon={<DeleteIcon />} color={"warning"} id={data.id} onClick={handleRemove}> Delete</Button></TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AdminJoin