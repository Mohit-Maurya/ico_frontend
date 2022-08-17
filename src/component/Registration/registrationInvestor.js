import React,{useState} from 'react';
import axios from "axios";
import './registrationInvestor.css'

function RegistrationInvestor() {
    const [investorDetails,setInvestorDetails ] = useState({name:'',pan:'',email:'',password:'',
                                                                 aadhaar:'',phone_number:''})
    const [bank,setBank ]   = useState({bank_acc_num:'',ifsc:'',acc_holder_name:''})        
    
    const onSignUp =(e)=>{
        console.log("submit",investorDetails,bank)
        e.preventDefault()
        axios.post("http://localhost:8080/investors",{investorDetails:{...investorDetails},bank:{...bank}})
                        .then((res)=>console.log(res))
                        .catch((err)=>console.log(err))

    }
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, name: e.target.value }))}
        />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" id="email" 
          onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, email: e.target.value }))}
        />  
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, phone_number: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>PAN Number</label>
          <input
            type="text"
            className="form-control"
            id="pan"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, pan: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>Aadhaar Number</label>
          <input
            type="text"
            className="form-control"
            id="aadhaar"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, aadhaar: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, password: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Bank Account Number</label>
          <input
            type="text"
            className="form-control"
            id="bank_acc_num"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, bank_acc_num: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>IFSC Code</label>
          <input
            type="text"
            className="form-control"
            id="ifsc"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, ifsc: e.target.value }))}

          />
        </div>
        <div className="mb-3">
          <label>Account Holder Name</label>
          <input
            type="text"
            className="form-control"
            id="acc_holder_name"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, acc_holder_name: e.target.value }))}

          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={onSignUp}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }

  export default RegistrationInvestor;
