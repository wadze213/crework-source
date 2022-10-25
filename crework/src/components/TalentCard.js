import React from 'react'
//Sample data to work with
import SampleTalents from './sampleTalents'
import './component-styles/talentcard.css'
import './component-styles/services.css'
import { useState,useRef } from 'react'




const checkAvailable =(available)=> {
  let availBox = document.getElementById("availBox")
  if(available === true){
    return("Available to work")
  }else{
    availBox.classList.add("grey")
    availBox.classList.remove("green") 
    return("unavailbale")
    
  }
}


const TalentCard = () => {

  const checkAvailable =(available)=> {
    if(available === true){
      return(
        <div className="availability">
          <span className="box green"></span>
          <p>Available to work</p>
        </div>
      )
    }else{
      return(
        <div className="availability">
          <span className="box grey"></span>
          <p>Not available</p>
        </div>
      )
    }
  }

  let [talentList, setTalentList] = useState(SampleTalents);
  console.log(talentList)
  return (
    <div className='talent-card-container'>
      {talentList.map((talent) => {
        return(<div className="talent-card">
        <div className="card-img"></div>
        <div className="card-info">
          <h3>{talent.fName + " " + talent.lName}</h3>
          <h5>{talent.position}</h5>
          <p>{talent.bio}</p>
        </div>
        {checkAvailable(talent.avilable)}
      </div>)
      })}
    </div>
    
  )
}

export default TalentCard

