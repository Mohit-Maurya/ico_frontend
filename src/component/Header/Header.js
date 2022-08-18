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

  const DisplayCoinsList = (e) => {
    e.preventDefault()
    navigate('/investor/coinslist')
  }

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
            <a href='/'><img className='logo-head' src={logoImg} alt="logo" /></a>
            <nav style={navClose}>
              {/* <ul className='flex'>
                <li><a href='/'>Home</a></li>
                <li><a href='/coinslist'>All Coins</a></li>
              </ul> */}
              <button className='btn' onClick={HandleButton} > Sign In </button>
            </nav>
          </div> : <>
            {
              user.role === "investor" ?
                <div className='header'>
                  <a href='/investor/coinslist'><img className='logo-head' src={logoImg} alt="logo" /></a>
                  <nav style={navClose}>
                    <ul className='flex'>
                      <li><a href='/investor/coinslist'>Coins List</a></li>
                      <li><a href='/investor/history'>My Transactions</a></li>
                      <li><a href='/investor/profile'>My Profile</a></li>
                    </ul>
                    <button className='btn btn-danger' onClick={SignOut} > Sign Out </button>
                  </nav>
                </div> :
                <div className='header'>
                  <a href='/developer'><img className='logo-head' src={logoImg} alt="logo" /></a>
                  <nav style={navClose}>
                    <ul className='flex'>
                      <li><a href='/developer'>Home</a></li>
                      <li><a href='/developer/listcoin'>Start an ICO</a></li>
                      <li><a href='/developer/profile'>My Profile</a></li>
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