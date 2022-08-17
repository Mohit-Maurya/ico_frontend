import { useState } from 'react';
import React from 'react'
import logoImg from './/images/logo-ico.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  let navigate = useNavigate();
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
        <img className='logo-head' src={logoImg} alt="" />
        <nav style={navClose}>
          <ul className='flex'>
            <li>Home</li>
            <li>About us</li>
            <li>Coins</li>
            <li>Sign Up</li>
          </ul>
          <button className='btn' onClick={HandleButton} > Sign In </button>
        </nav>
        <div onClick={navClick} className='menu-toggle'>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </>
  )
}

