import React from 'react'
import { useState } from 'react'
import '../Styles/CreateHall.css'
import axios from 'axios';



const CreateHall = () => {

  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [hallData, setHallData] = useState({
    hallname: '',
    location: '',
    price: '',
    image: '', // For file uploads
    sizefrom: '',
    sizeto: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    
    // If the input is a file input, update the image in a different way
    if (name === 'image') {
      setHallData({ ...hallData, [name]: files[0] });
    } else {
      setHallData({ ...hallData, [name]: value });
    }
  };

  async function handleHallSubmit() {
    if (!hallData.hallname || !hallData.location || !hallData.price) {
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
        const response = await axios.post('http://localhost:3000/wedding-Hall.com/createHall', hallData);
        setHallData(hallData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="createHall">
      <h3>Register Your Hall</h3>
        <form className='hall-form'  onSubmit={(event) => {
              event.preventDefault();
              handleHallSubmit();
            }}>
        <p className='msg' style={{ color: color, fontSize: '16px' }}>{message} </p>
          <div className="hall-input">
            <input type="text" name="hallname" placeholder='Hall Name' onChange={handleChange} />
          </div>
          <div className="hall-input">
            <input type="text" name="location" placeholder='Location' onChange={handleChange}/>
          </div>
          <div className="hall-input">
            <input type="number" name="price" placeholder='Hall Price' onChange={handleChange}/>
          </div>
          <div className="hall-input">
            <input type="number" name="sizefrom" placeholder='Hall Size From' onChange={handleChange}/>
          </div>
          <div className="hall-input">
            <input type="number" name="sizeto" placeholder='Hall Size To' onChange={handleChange}/>
          </div>
          <div className="hall-input">
            <label>Upload Images</label>
            <input type="file" name="image" onChange={handleChange}/>
          </div>
          <div className="hall-input">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateHall