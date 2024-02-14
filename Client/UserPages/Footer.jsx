import React from 'react'
import {Search,Bag,Person,Heart } from 'react-bootstrap-icons';
import '../Styles/Footer.css'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();


    async function search() {
        navigate('/search')
    }
    async function saved() {
        navigate('/saved')
    }
    async function booking() {
        navigate('/booking')
    }
    async function signin() {
        navigate('/signin')
    }
    return (
        <footer>
            <Search className='foo-icon' size={28} onClick={() => search()} />
            <Heart className='foo-icon' size={28} onClick={() => saved()} />
            <Bag className='foo-icon' size={28} onClick={() => booking()} />
            <Person className='foo-icon'  size={28} onClick={() => signin()} />
        </footer>
    )
}

export default Footer