import { useState } from 'react';
import React from 'react'
import logoImg from '../images/logo-ico.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  let navigate = useNavigate();
  const HandleSignUp = () => {
    navigate('/registrationOption')
  }
  const HandleButton = () => {
    navigate('/login');
  }
  const [navClose, navOpen] = useState({
    Transform: 'scale(1, 0)'
  }
  )
  const navClick = () => {
    if (navClose.transform === 'scale(1,0)') {
      navOpen({
        transform: 'scale(1,1)'
      })
    } else {
      navOpen({
        transform: 'scale(1,0)'
      })
    }
  }

  return (
    <>
      <div className='header'>
        <img className='logo-head' src={logoImg} alt="logo" />
        <nav style={navClose}>
          <ul className='flex'>
            <li>About us</li>
            <li>All Coins</li>
          </ul>
          <button className='btn' onClick={HandleButton} > Sign In </button>
        </nav>
      </div>
    </>
  )
}

