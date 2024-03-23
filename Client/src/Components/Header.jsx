import React from 'react'
import { ArrowLeft,ReplyAll } from 'react-bootstrap-icons';
import '../Styles/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
const navigate = useNavigate();

async function back() {
    navigate('/')
}

  return (
    <header>
    <ReplyAll className='arrowLeft' size={24} onClick={() => back()}/>
    </header>
  )
}

export default Header