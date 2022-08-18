import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './registrationInvestor.css'

function RegistrationInvestor() {
    let navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === cPassword) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [cPassword])

    const [investorDetails,setInvestorDetails ] = useState({name:'',pan:'',email:'',password:'',
                                                                 aadhaar:'',phone_number:''})
    const [bank,setBank ]   = useState({bank_acc_num:'',ifsc:'',acc_holder_name:''})    

    const [err, setErr] = useState({phone_number:"",aadhaar:"",pan:""})
  
    
    const onSignUp =(e)=>{
        console.log("submit",investorDetails,bank)
        e.preventDefault()
        axios.post("http://localhost:8080/investors",{investorDetails:{...investorDetails},bank:{...bank}})
                        .then((res)=>{
                          console.log(res)
                          navigate("/")
                        })
                        .catch((err)=>console.log(err))

    }
    const onChangePhoneNumber =(e)=>{
        // console.log(e.target.value.length)
        if(e.target.value.length !=10 )
          setErr((prevState)=>({...prevState, phone_number:"Phone number should be of 10 digits"}))
        else{
          setErr((prevState)=>({...prevState,phone_number:""}))
          console.log(e.target.value)
      }
    }
      const onChangeAadhaar =(e)=>{
        if(e.target.value.length !=12 )
        setErr((prevState)=>({...prevState, aadhaar:"Aadhaar number should be of 12 digits"}))
        else{
        setErr((prevState)=>({...prevState, aadhaar:""}))
        console.log(e.target.value)
      }
    }
  
    const onChangePan =(e)=>{
      if(e.target.value.length !=9 )
      setErr((prevState)=>({...prevState, pan:"PAN number should be of 9 digits"}))
      else{
      setErr((prevState)=>({...prevState, pan:""}))
      console.log(e.target.value)
    }
  }
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}

    return (
      <form>
        <h3>Sign Up</h3>
        <div className="card mx-auto" style={{width:"70%"}}>
         <div className='card-body mx-auto' style={{width:"70%"}}>
          <div>
          <label> Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, name: e.target.value }))}
        />
        </div>
        <div className="mb-1">
          <label>Email</label>
          <input type="email" className="form-control" id="email" 
          onChange={(e)=>setInvestorDetails((prevState) => ({ ...prevState, email: e.target.value }))}
        />  
        </div>
        <div className="mb-1">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            onChange={(e)=>{setInvestorDetails((prevState) => ({ ...prevState, phone_number: e.target.value }));onChangePhoneNumber(e)}}

          />
            <p><span style={{ color: 'red' }}>{err.phone_number}</span></p>

        </div>
        <div className="mb-1">
          <label>PAN Number</label>
          <input
            type="text"
            className="form-control"
            id="pan"
            onChange={(e)=>{setInvestorDetails((prevState) => ({ ...prevState, pan: e.target.value }));onChangePan(e)}}

          />
            <p><span style={{ color: 'red' }}>{err.pan}</span></p>

        </div>
        <div className="mb-1">
          <label>Aadhaar Number</label>
          <input
            type="text"
            className="form-control"
            id="aadhaar"
            onChange={(e)=>{setInvestorDetails((prevState) => ({ ...prevState, aadhaar: e.target.value }));onChangeAadhaar(e)}}

          />
            <p><span style={{ color: 'red' }}>{err.aadhaar}</span></p>

        </div>
        <div className="mb-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e)=>{setInvestorDetails((prevState) => ({ ...prevState, password: e.target.value }));setPassword(e.target.value)}}

          />
        </div>
        <div className="mb-1">
          <label>Confirm Password</label>
          <input
            type="password"
            className={cPasswordClass}
            id="confirm_password"
            onChange={handleCPassword}
          />
        </div>
        {showErrorMessage && isCPasswordDirty ? <p><span style={{ color: 'red' }}>Enter password before confirm password</span></p>: ''}


        <div className="mb-1">
          <label>Bank Account Number</label>
          <input
            type="text"
            className="form-control"
            id="bank_acc_num"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, bank_acc_num: e.target.value }))}

          />
        </div>
        <div className="mb-1">
          <label>IFSC Code</label>
          <input
            type="text"
            className="form-control"
            id="ifsc"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, ifsc: e.target.value }))}

          />
        </div>
        <div className="mb-1">
          <label>Account Holder Name</label>
          <input
            type="text"
            className="form-control"
            id="acc_holder_name"
            onChange={(e)=>setBank((prevState) => ({ ...prevState, acc_holder_name: e.target.value }))}

          />
        </div>
        </div>

        <div className="container">
          <button type="submit" className="btn btn-primary float-end" onClick={onSignUp} style={{width:"15%"}}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
    </div>
      </form>
    )
  }

  export default RegistrationInvestor;
