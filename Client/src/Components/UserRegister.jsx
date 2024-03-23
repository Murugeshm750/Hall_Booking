import React from 'react'
import Header from './Header';
import '../Styles/OwnerRegister.css'
import { useState } from 'react';
import axios from 'axios'
import { Person, EnvelopeAt, PersonRolodex, GeoAlt, BuildingLock } from 'react-bootstrap-icons';


const UserRegister = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('')
  const userTableData = {
    Username: '',
    email: '',
    contact: '',
    address: '',
    isuser:'user',
    password: ''
  }
  const [userFormData, setUserFormData] = useState(userTableData);
  const handleChangeUser = async (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmitUser() {
    if (!userFormData.Username || !userFormData.email || !userFormData.password) {
      const errorMsg = "Please fill all fields";
      setMessage(errorMsg)
      setColor('red');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    } else {
      const successMsg = "Successfully Registered !";
      setColor('green');
      setMessage(successMsg)
      setTimeout(() => {
        setMessage('');
      }, 3000);
      try {
        const response = await axios.post('http://localhost:3000/wedding-Hall.com/createUser', userFormData);
        setUserFormData(userTableData)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="userregister">
        <h3>User Register Form</h3>
        <form className='ownerform' onSubmit={(event) => {
          event.preventDefault();
          handleSubmitUser();
        }}>
          <p className='msg' style={{ color: color, fontSize: '16px' }}>{message}</p>
          <div className="owner-input">
            {/* <label>Name</label> */}
            <Person size={24} className='reg-icon'/>
            <input type="text" placeholder='Name' name="Username" id="name" value={userFormData.Username} onChange={handleChangeUser} />
          </div>
          <div className="owner-input">
            {/* <label>Email</label> */}
            <EnvelopeAt size={24} className='reg-icon'/>
            <input type="email" placeholder='Email' name="email" id="email" value={userFormData.email} onChange={handleChangeUser} />
          </div>
          <div className="owner-input">
            {/* <label>Contact</label> */}
            <PersonRolodex size={24} className='reg-icon'/>
            <input type="text" placeholder='Contact' name="contact" id="contact" value={userFormData.contact} onChange={handleChangeUser} />
          </div>
          <div className="owner-input">
            {/* <label>Address</label> */}
            <GeoAlt size={24} className='reg-icon'/>
            <input type="text" placeholder='Address' name="address" id="address" value={userFormData.address} onChange={handleChangeUser} />
          </div>
          <div className="owner-input">
            {/* <label>Password</label> */}
            <BuildingLock size={24} className='reg-icon'/>
            <input type="password" placeholder='Password' name="password" id="password" value={userFormData.password} onChange={handleChangeUser} />
          </div>
          <div className="owner-input">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister