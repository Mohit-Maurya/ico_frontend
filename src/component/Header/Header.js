import { useState } from 'react';
import React from 'react'
import logoImg from '../images/logo-ico.png';
import { useNavigate } from 'react-router-dom';
import { log_out } from '../../features/user';
import { useSelector,useDispatch } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const HandleSignUp = () => {
    navigate('/registrationOption')
  }
  const HandleButton = () => {
    navigate('/login');
  }
  const [navClose, navOpen] = useState({
    Transform: 'scale(1, 0)'
  })

  const SignOut = (e) =>{
    e.preventDefault()
    dispatch(log_out())
    navigate('/')
  }

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
      {
        !user.role ?
          <div className='header'>
            <img className='logo-head' src={logoImg} alt="logo" />
            <nav style={navClose}>
              <ul className='flex'>
                <li>Home</li>
                <li>All Coins</li>
              </ul>
              <button className='btn' onClick={HandleButton} > Sign In </button>
            </nav>
          </div> : <>
            {
              user.role === "investor" ?
                <div className='header'>
                  <img className='logo-head' src={logoImg} alt="logo" />
                  <nav style={navClose}>
                    <ul className='flex'>
                      <li>Investor</li>
                      <li>All Coins</li>
                    </ul>
                    <button className='btn btn-danger' onClick={SignOut} > Sign Out </button>
                  </nav>
                </div> :
                <div className='header'>
                  <img className='logo-head' src={logoImg} alt="logo" />
                  <nav style={navClose}>
                    <ul className='flex'>
                      <li>Developer</li>
                      <li>All Coins</li>
                    </ul>
                    <button className='btn btn-danger' onClick={SignOut} > Sign Out </button>
                  </nav>
                </div>
            }
          </>
      }
    </>
  )
}

export default Header;