import React from 'react'
import './component-styles/styles.css'
import './component-styles/navigation.css'
import './component-styles/adminlogin.css'
import creworkLogo from '../icons/crework-logo-inverted.svg'
import {useRef,useState,useEffect} from 'react'
import { sampleJoin } from './SampleContent'

const Form  = () => {

  let firstNameRef = useRef("")
  let lastNameRef = useRef("")
  let emailRef = useRef("")
  let positionRef = useRef("")
  let positionTypeRef = useRef("")
  let portfolioRef = useRef("")
  let bioRef = useRef("")
  let [id, setId] = useState(Date.now())
  const [focused,setFocused]= useState(false);
  
  let [FormData, setFormData] = useState(localStorage.getItem("joinForm") ? JSON.parse(localStorage.getItem("joinForm")) : sampleJoin)

  let handleSubmit = (e) => {
      e.preventDefault();
      let inquiry = {
          id: id,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          position: positionRef.current.value,
          positionType:positionTypeRef.current.value,
          portfolio: portfolioRef.current.value,
          bio:bioRef.current.value
      }
      setFormData([...FormData, inquiry])
      setId(Date.now())
      firstNameRef.current.value = ""
      lastNameRef.current.value = ""
      emailRef.current.value = ""
      positionRef.current.value = ""
      positionTypeRef.current.value = ""
      portfolioRef.current.value = ""
      bioRef.current.value = ""
  }
  useEffect(() => {
      localStorage.setItem("joinForm", JSON.stringify(FormData))
  }, [FormData])


  return (
    <div>
       <div className='center-section'>
        <div className='modal'>
        <img src={creworkLogo} alt=""></img>
        <h3>Join Crew</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label>First name</label>
                    <input type="text" name="fName" ref={firstNameRef} required focused={focused.toString()}></input>
                </div>
                <div className='input-wrapper'>
                    <label>Last name</label>
                    <input type="text" name="lName" ref={lastNameRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Email</label>
                    <input type="text" name="email" ref={emailRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label for="positionType">Position Type</label><br></br>
                    <select name="positionType" ref={positionTypeRef}>
                        <option value="">--Please choose an option--</option>
                        <option value="Design">Branding & Design</option>
                        <option value="Dev">Web Development</option>
                        <option value="Marketing">Marketing & Promotion</option>  
                    </select>
                </div>
                <div className='input-wrapper'>
                    <label>Position</label>
                    <input type="text" name="lName" ref={positionRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Portoflio</label>
                    <input type="text" name="portofolio" ref={portfolioRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Bio</label>
                    <textarea type="text" name="message" ref={bioRef} required></textarea>
                </div>

                <input type="submit" name="submit" value="Join Now" className='btn-black'></input>            

            </form>
        </div>
    </div>
    </div>
  )
}

export default Form 