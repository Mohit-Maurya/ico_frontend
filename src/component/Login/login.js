import React from 'react';
import '../common/form.css';
import axios from "axios"
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom'
import {log_in} from "../../features/user"

function Login() {
  const [role, setRole] = useState("investor");
  const [login, setLogin] = useState({ email: "", password: "", error: "" });
  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch()

  let navigate = useNavigate();

  const onLogin = (event) => {
    event.preventDefault();
    console.log(login)
    axios
      .post(`http://localhost:8080/${role}s/login`, login)
      .then((res) => {
        console.log(res.data.response)
        if (res.data.response === "Authorized User")
          {
            console.log("login user: ",login.email)
            dispatch(log_in({ userid: res.data.userid,loggedin:true,role:role}))
            navigate(`/${role}/coinlist`);
          }
        if (res.data.response === "Authorized User") {
          console.log("login user: ", login.email)
          navigate(`/${role}/coinlist`);
        }
      })
      .catch((err) => {
        if (err.response.data.response === "Unauthorised User")
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
            role === "investor" ?
              <div className='role-select'>
                <button className='btn' id='developers' onClick={(e) => { e.preventDefault(); setRole("developer") }}>Are you a developer?</button>
              </div>
              :
              <div className='role-select'>

               <button className='btn' id='developers' onClick={(e)=>{e.preventDefault();setRole("investor")}}>Are you an investor?</button>
              </div>

          }

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="Enter-email"
              onChange={(e) => setLogin((prevState) => ({ ...prevState, email: e.target.value }))}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="Enter-password"
              onChange={(e) => setLogin((prevState) => ({ ...prevState, password: e.target.value }))}
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
