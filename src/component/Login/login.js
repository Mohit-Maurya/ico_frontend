import React from 'react';
import '../common/form.css'
// import LoginOptions from './loginOptions';
import axios from "axios"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {
  const [role, setRole] = useState("investor");
  const [login, setLogin] = useState({ email: "", password: "", error: "" });
  let navigate = useNavigate();

  const onLogin = (event) => {
    event.preventDefault();
    console.log(login)
    axios
      .post(`http://localhost:8080/${role}s/login` , login)
      .then((res) => {
        if (res.data === "Authorized User")
          {
            console.log("login user: ",login.email)
            navigate(`/${role}/coinlist`);
          }
      })
      .catch((err) => {
        if (err.response.data === "Unauthorised User")
          setLogin((prevState) => ({
            ...prevState,
            error: "Invalid credentials",
          }));
        console.log(err);
      });

      
  };


  return (
   
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">Sign In as {role} </h3>


         {
           role==="investor" ?
           <div className='role-select'>
              <button className='btn' id='developers'  onClick={(e)=>{e.preventDefault();setRole("developer")}}>Are you a developer?</button>
          </div>
              :
              <div className='role-select'>
               <button className='btn' id='developers' onClick={(e)=>{e.preventDefault();setRole("investor")}}>Are you a investor?</button>
              </div>

         }

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="Enter-email"
              onChange={(e)=>setLogin((prevState)=>({...prevState,email:e.target.value}))}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="Enter-password"
              onChange={(e)=>setLogin((prevState)=>({...prevState,password:e.target.value}))}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn" onClick={onLogin}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Login;
