import { useState } from 'react';
import React from 'react'
import logoImg from '../images/logo-ico.png';
import { useNavigate } from 'react-router-dom';

export default function DeveloperHeader() {
  let navigate = useNavigate();

  const viewProfile = () => {
    navigate("/developer/profile")
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
            <li>
            <a className="nav-link active" aria-current="page" href="/developer/listcoin">
              List a Coin
            </a>
            </li>

            <li>
            <a className="nav-link active" aria-current="page" href="/developer">
              Home
            </a>
            </li>

          </ul>
          <button className='btn' onClick={viewProfile} > View Profile </button>
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

