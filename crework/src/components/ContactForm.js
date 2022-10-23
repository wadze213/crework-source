import React, { useEffect } from 'react'
import './component-styles/styles.css'
import './component-styles/navigation.css'
import './component-styles/adminlogin.css'
import creworkLogo from '../icons/crework-logo-inverted.svg'
import {useRef,useState} from 'react'

const ContactForm = () => {
    let fNameRef = useRef("")
    let lNameRef = useRef("")
    let emailRef = useRef("")
    let messageRef = useRef("")
    let [id, setId] = useState(Date.now())

    let [ContactData, setContactData] = useState(localStorage.getItem("clients") ? JSON.parse(localStorage.getItem("clients")) : [])

    let handleSubmit = (e) => {
        e.preventDefault();
        let inquiry = {
            id: id,
            fName: fNameRef.current.value,
            lName: lNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        setContactData([...ContactData, inquiry])
    }
    useEffect(() => {
        localStorage.setItem("clients", JSON.stringify(ContactData))
    }, [ContactData])

  return (
    <div className='center-section'>
        <div className='modal'>
        <img src={creworkLogo} alt=""></img>
        <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label>First name</label>
                    <input type="text" name="fName" ref={fNameRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Last name</label>
                    <input type="text" name="lName" ref={lNameRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Email</label>
                    <input type="text" name="email" ref={emailRef} required></input>
                </div>
                <div className='input-wrapper'>
                    <label>Message</label>
                    <textarea type="text" name="message" ref={messageRef} required></textarea>
                </div>

                <input type="submit" name="submit" value="Send message" className='btn-black'></input>            

            </form>
        </div>
    </div>
  )
}

export default ContactForm
