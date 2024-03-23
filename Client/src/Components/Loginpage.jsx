import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header';
import '../Styles/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { EnvelopeAt, Key } from 'react-bootstrap-icons';


const Loginpage = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [validateUser, setValidateUser] = useState([]);
  const [validateOwner, setValidateOwner] = useState([]);


  const userLoginDetails = {
    username: '',
    password: '',
    passkey:''
  }
  const [createUserLogin, setCreateUserLogin] = useState(userLoginDetails)



  // FUNCTION FOR VALIDATE OWNER GET ALL DATA FROM DATABASE (OWNER TABLE)
  async function handleRecoverOwnerData() {
    try {
      const response = await axios.get('http://localhost:3000/wedding-Hall.com/owners', {
        method: "GET"
      })
      setValidateOwner(response.data.owners);
    } catch (error) {
      console.log(error);
    }
  }

  // FUNCTION FOR VALIDATE USER GET ALL DATA FROM DATABASE (USER TABLE)
  async function handleRecoverUserData() {
    try {
      const response = await axios.get('http://localhost:3000/wedding-Hall.com/users', {
        method: "GET"
      })
      setValidateUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }


  // RENDER USER DATA FROM SCREEN
  useEffect(() => {
    const fetchData = async () => {
      await handleRecoverOwnerData();
      await handleRecoverUserData();
    }
    fetchData();
  }, []);

  // STORE USER LOGIN VALUES FROM INPUT FIELDS
  const handleChangeUserLogin = ({ target }) => {
    const { name, value } = target;
    setCreateUserLogin({
      ...createUserLogin,
      [name]: value
    });
  };


  // FUNCTION FOR  USER LOGIN
  async function handleUserLogin() {
    const user = validateUser.find((u) => u.u_email === createUserLogin.username && u.password === createUserLogin.password && u.isuser === createUserLogin.passkey);
    if (user) {
      try {
        navigate('/search', {
          state: {
            shareUserName: {
              loginUserName: user.u_name
            }
          }
        });
        setCreateUserLogin(userLoginDetails);
        return; // Stop execution if user login is successful
      } catch (error) {
        console.log(error);
      }
      
    }
    
      try {
        const response = await axios.post('/login', userLoginDetails);
        const { token, refreshToken } = response.data;
  
        // Store the tokens in localStorage or secure cookie for later use
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
  
        // Redirect or perform other actions upon successful login
      } catch (error) {
        // Handle login error
      }


    const owner = validateOwner.find((o) => o.o_email === createUserLogin.username && o.password === createUserLogin.password && o.isowner === createUserLogin.passkey);

    if (owner) {
      try {
        navigate('/createHall');
        setCreateUserLogin(userLoginDetails);
        return; // Stop execution if owner login is successful
      } catch (error) {
        console.log(error);
      }
    }

    // If neither user nor owner login is successful
    const errorMsg = "Incorrect Username or Password";
    setCreateUserLogin(userLoginDetails);
    setErrorMessage(errorMsg);

    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }

  return (
    <div>
      <Header />
      <div className='loginpage' >
      <h3>Login</h3>
        <form className='loginForm' onSubmit={(event) => {
          event.preventDefault();
          handleUserLogin();
        }}>
          <p style={{ color: 'red', fontSize: '16px', }}>{errorMessage}</p>
          <div className="login-input">
            {/* <label>Username</label> */}
            <EnvelopeAt className='login-icon' size={24}/>
            <input type="text" placeholder='Email Address' name="username" id='username' value={createUserLogin.username} onChange={handleChangeUserLogin} />
          </div>
          <div className="login-input">
            {/* <label>Password</label> */}
            <Key className='login-icon' size={24}/>
            <input type="password" placeholder='Password' name="password" id="password" value={createUserLogin.password} onChange={handleChangeUserLogin} />
          </div>
          <div className="radio-input" onChange={handleChangeUserLogin}>
            <input type="radio" value="user" name="passkey" /> User
            <input type="radio" value="owner" name="passkey" /> Owner
          </div>
          <div className="login-input" id='loginBtn'>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Loginpage