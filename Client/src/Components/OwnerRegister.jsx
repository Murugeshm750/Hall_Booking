import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../Styles/OwnerRegister.css';
import axios from 'axios';
import { Person, EnvelopeAt, PersonRolodex, GeoAlt, BuildingLock } from 'react-bootstrap-icons';


const OwnerRegister = () => {
  const [validatepasskey, setValidatepasskey] = useState([]);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const ownerTableData = {
    Ownername: '',
    email: '',
    contact: '',
    address: '',
    isowner: 'owner',
    password: '',
  };

  // FUNCTION FOR GET ALL DATA FROM DATABASE (PASSKEY TABLE)
  async function handleRecoverPasskeyData() {
    try {
      const response = await axios.get('http://localhost:3000/wedding-Hall.com/passkey', {
        method: 'GET',
      });
      setValidatepasskey(response.data.passkey);
    } catch (error) {
      console.log(error);
    }
  }

  // RENDER USER DATA FROM SCREEN
  useEffect(() => {
    const fetchData = async () => {
      await handleRecoverPasskeyData();
    };
    fetchData();
  }, []);

  const [ownerFormData, setOwnerFormData] = useState(ownerTableData);
  const handleChangeOwner = (e) => {
    setOwnerFormData({
      ...ownerFormData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmitOwner() {
    if (!ownerFormData.Ownername || !ownerFormData.email || !ownerFormData.password) {
      const errorMsg = 'Please fill all fields';
      setMessage(errorMsg);
      setColor('red');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    } else {
      const successMsg = 'Successfully Registered !';
      setColor('green');
      setMessage(successMsg);
      setTimeout(() => {
        setMessage('');
      }, 3000);
      try {
        const response = await axios.post('http://localhost:3000/wedding-Hall.com/createOwner', ownerFormData);
        setOwnerFormData(ownerTableData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <Header />
      <div className='ownerregister'>
        <h3>Owner Register Form</h3>
        {validatepasskey.map((data) => (
          <form
            className='ownerform'
            key={data.isowner}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmitOwner();
            }}
          >
            <p className='msg' style={{ color: color, fontSize: '16px' }}>{message} </p>
            <div className='owner-input'>
              {/* <label>Name</label> */}
              <Person size={24} className='reg-icon'/>
              <input type='text' placeholder='Name' name='Ownername' id='Ownername' value={ownerFormData.Ownername} onChange={handleChangeOwner} />
            </div>
            <div className='owner-input'>
              {/* <label>Email</label> */}
              <EnvelopeAt size={24} className='reg-icon'/>
              <input type='email' placeholder='Email' name='email' id='email' value={ownerFormData.email} onChange={handleChangeOwner} />
            </div>
            <div className='owner-input'>
              {/* <label>Contact</label> */}
              <PersonRolodex size={24} className='reg-icon'/>
              <input type='tel' placeholder='Contact' name='contact' id='contact' value={ownerFormData.contact} onChange={handleChangeOwner} />
            </div>
            <div className='owner-input'>
              {/* <label>Address</label> */}
              <GeoAlt size={24} className='reg-icon'/>
              <input type='text' placeholder='Address' name='address' id='address' value={ownerFormData.address} onChange={handleChangeOwner} />
            </div>
            <div className='owner-input'>
              {/* <label>Password</label> */}
              <BuildingLock size={24} className='reg-icon'/>
              <input type='password' placeholder='Password' name='password' id='password' value={ownerFormData.password} onChange={handleChangeOwner} />
            </div>
            <div className='owner-input'>
              <button type='submit'>Register</button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default OwnerRegister;
