import React from 'react'
//Sample data to work with
import SampleTalents from './sampleTalents'
import './component-styles/talentcard.css'
import './component-styles/services.css'
import { useState } from 'react'






const TalentCard = () => {

  let [talentList, setTalentList] = useState(SampleTalents);



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



const PositionColor =(item)=> {
  if(item.positionType === "Design"){
    return(
      <div className="positionColor">
         <span className="bluetext"> {item.position} </span>
      </div>
    )
  }else if (item.positionType === "Dev"){
    return(
      <div className="positionColor">
        <span className="orangetext">{item.position} </span>
      </div>
    )
  }else{
    return(
      <div className="positionColor">
        <span className="pinktext">{item.position} </span>
      </div>
    )
  }
}

const borderColor =(item) =>{
  if(item.positionType === "Design"){
    return(
      `talent-card blueBorder`
    )
  }else if (item.positionType === "Dev"){
    return(
      `talent-card orangeBorder`
    )
  }else{
    return(
      `talent-card pinkBorder`
    )
  }
}


const borderImgColor =(item) =>{
  if(item.positionType === "Design"){
    return(
      `card-img blueimgBorder`
    )
  }else if (item.positionType === "Dev"){
    return(
      `card-img orangeimgBorder`
    )
  }else{
    return(
      `card-img pinkimgBorder`
    )
  }
}



 
  console.log(talentList)
  return (
    <div className='talent-card-container'>
      {talentList.map((talent) => {
        return(<div className={borderColor(talent)}>
       
        <div className={borderImgColor(talent)}></div>
        <div className="card-info">
          <h3>{talent.fName + " " + talent.lName}</h3>
          {PositionColor(talent)}
          <p>{talent.bio}</p>
        </div>
        {checkAvailable(talent.avilable)}
      </div>)
      })}
    </div>
    
  )
}

export default TalentCard

