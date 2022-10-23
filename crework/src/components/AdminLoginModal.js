import React from 'react'
import './component-styles/adminlogin.css'
import './component-styles/styles.css'
import {useNavigate} from 'react-router-dom';
import creworkLogo from '../icons/crework-logo-inverted.svg'


const AdminLoginModal = () => {
    const navigate = useNavigate();
    
    let adminLoginCheck = (e) => {
        let username = document.getElementById("username")
        let password = document.getElementById("password")
        let alertMsg = document.getElementById("alert")

        console.log('click event detected')
        
        e.preventDefault();
        if (username.value === "admin" && password.value === "admin"){
            navigate("/admin-panel")
        }else{
            alertMsg.innerHTML = "Please select correct credentials"
            alertMsg.style.color = "red"
        }
    }

  return (
    <section>
      <div className='modal'>
        <img src={creworkLogo} alt=""></img>

        <form>
            <div className='input-wrapper'>
                <label>Username</label>
                <br></br>
                <input type="text" name="username" id='username'></input>
            </div>
            <div className='input-wrapper'>
                <label>Password</label>
                <br></br>
                <input type="password" name="password" id='password'></input>
            </div>
            <small id='alert'>Please log in</small>
            <input type="submit" name="submit-btn" value="Log in" className='submit-btn' onClick={adminLoginCheck}></input>
        </form>
        <p>If you are not supposed to be here, leave.</p>
      </div>
    </section>
  )
}

export default AdminLoginModal
