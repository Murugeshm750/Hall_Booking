import React from 'react';
import RegisterPage from '../Components/RegisterPage';
import OwnerRegister from '../Components/OwnerRegister.jsx';
import UserRegister from '../Components/UserRegister.jsx';
import LoginPage from '../Components/Loginpage.jsx';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import SearchHall from '../UserPages/SearchHall.jsx';
import SavedHall from '../UserPages/SavedHall.jsx';
import Bookings from '../UserPages/Bookings.jsx';
import SignIn from '../UserPages/SignIn.jsx';
import CreateHall from '../OwnerPages/CreateHall.jsx';





function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='/reg-owner' element={<OwnerRegister/>} />
        <Route path='/reg-user' element={<UserRegister />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/search' element={<SearchHall/>}/>
        <Route path='/saved' element={<SavedHall/>}/>
        <Route path='/booking' element={<Bookings/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/createHall' element={<CreateHall/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App
