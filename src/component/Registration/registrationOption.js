import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../images/logo-ico.png';

function RegistrationOption() {
    const [role, setRole] = useState('Investor');
    let navigate = useNavigate();
    const styleLogo = {
        height: "60px",
        width: "100px",
        padding: "15px",
        cursor: "pointer"
    }
    const styleOptions = {
        height: "250px", 
        width:"50%",
        marginLeft: "auto",
        marginRight: "auto",
        
    }

  return (
    <div className='container' style={{marginTop: "150px"}}>
        <img className='logo' src={logoImg} alt="" style={styleLogo} />
        <div className='card' style={styleOptions}>
            <h3>Choose your role</h3>
            <div className='role-select'>
                <button className='btn' id='developers' onClick={(e)=>{e.preventDefault();setRole("Developer"); navigate(`/registrationDeveloper`)}}>Are you a developer?</button>
            </div>
            <div className='role-select'>
                <button className='btn' id='developers' onClick={(e)=>{e.preventDefault();setRole("Investor"); navigate(`/registrationInvestor`)}}>Are you an investor?</button>
            </div>
        </div>
    </div>
  )
}

export default RegistrationOption
