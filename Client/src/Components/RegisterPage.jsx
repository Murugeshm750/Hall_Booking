import React from 'react'
import '../Styles/RegisterPage.css';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const navigate = useNavigate();

  // NAVIGATE TO OWNER REGISTER PAGE
  async function ownerAcc() {
    navigate('/reg-owner')
    // navigate('/header')
  }

  // NAVIGATE TO USER REGISTER PAGE
  async function userAcc() {
    navigate('/reg-user')
  }

  // NAVIGATE TO LOGIN PAGE
  async function login() {
    navigate('/login')
  }

  return (
    <div className='registerPage'>
      <div className="reg-btn">
        <button type="button" onClick={() => ownerAcc()}>
          Create an Owner Account
        </button><br />
        <button type="button"  onClick={() => userAcc()}>
          Create an User Account
        </button>
        <p>OR</p>
        <button type="button"  onClick={() => login()}>
          Log In
        </button>
      </div>
    </div>
  )
}


export default RegisterPage