import React from 'react'
import '../Styles/SearchHall.css'
import { GeoAlt, HeartFill, PersonCircle } from 'react-bootstrap-icons';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';



const SearchHall = () => {
  const location = useLocation();
  // const buslist = location.state ? location.state.shareBusList : [];
  const { loginUserName } = location.state ? location.state.shareUserName : {};



  return (
    <div>
        <div className='searchHall'>
        <div className="loginUser" >
            <PersonCircle size={24} style={{ display: loginUserName ? 'block' : 'none' }}/>
          <h4 style={{ display: loginUserName ? 'block' : 'none' }}>Welcome <HeartFill size={12}/> <span style={{ color: '#fccb06dd'}}>{loginUserName}</span></h4>
          </div>
        <form className='searchForm'>
            <h3>Find Your Hall</h3>
            <div className="serach-input">
                <GeoAlt size={24} color='#fccb06dd'/>
                <input type="text" name="location" placeholder='Enter location'/>
            </div>
            <div className="serach-input">
                <button type="submit">Search</button>
            </div>
        </form>
    </div>
    <Footer loginUserName ={loginUserName}/>
    </div>
  )
}

export default SearchHall