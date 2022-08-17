import React,{useState, useEffect} from 'react';
import axios from "axios";
import './registrationDeveloper.css'

  function RegistrationDeveloper() {
    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$');
    const validPhoneNumber = new RegExp('^(?=.*\d)\[0-9\d]{10}$');
    const validAadhaar = new RegExp('^(?=.*\d)[\d]{12}$');

    const [password, setPassword] = useState('');
    const [passErr, setpassErr] = useState(false);
    const [phone_number, setPhoneNumber] = useState('');
    const [phoneNumberErr, setPhoneNumberErr] = useState(false);
    const [aadhaar, setAadhaar] = useState('');
    const [aadhaarErr, setAadhaarErr] = useState(false);
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

  const validatePassword = () => {
    if (!validPassword.test(password)) {
        console.log(password);
       setpassErr(true);
    }
 };

 const validatePhoneNumber = () => {
  if (!(validPhoneNumber.test(phone_number))) {
      console.log(phone_number)
      return true

    //  setPhoneNumberErr(true);
  }
};

const validateAadhaar = () => {
  if (!validAadhaar.test(aadhaar)) {
     setAadhaarErr(true);
  }
};

    const [developerDetails,setDeveloperDetails ] = useState({name:'',pan:'',email:'',password:'',
                                                                 aadhaar:'',phone_number:'',crypto_wallet_link:''})
    const [bank,setBank ]   = useState({bank_acc_num:'',ifsc:'',acc_holder_name:''})

    const [err, setErr] = useState({phone_number:"",aadhaar:"",pan:""})

    const onSignUp =(e)=>{
      console.log("submit",developerDetails,bank)
      e.preventDefault()
      axios.post("http://localhost:8080/developers",{developerDetails:{...developerDetails},bank:{...bank}})
                      .then((res)=>console.log(res))
                      .catch((err)=>console.log(err))
    }
    const onChangePhoneNumber =async (e)=>{
      // console.log(e.target.value.length)
      
      if(e.target.value.length !==10 )
        setErr((prevState)=>({...prevState, phone_number:"Phone number should be of 10 digits"}))
      else if( !validPhoneNumber.test(e.target.value)){ 
        //console.log((/^[0-9]*/.test(e.target.value)))
        //console.log(typeof JSON.stringify(validPhoneNumber))
        setErr((prevState)=>({...prevState, phone_number:"Phone number should only have numeric characters"}))}
      else{
        setErr((prevState)=>({...prevState,phone_number:""}))
        console.log(e.target.value)
    }
  }
    const onChangeAadhaar =(e)=>{
      if(e.target.value.length !=12 )
      setErr((prevState)=>({...prevState, aadhaar:"Aadhaar number should be of 12 digits"}))
      else if(aadhaarErr)
      setErr((prevState)=>({...prevState, aadhaar:"Aadhaar number should only have numeric characters"}))
      else{
      setErr((prevState)=>({...prevState, aadhaar:""}))
      console.log(e.target.value)
    }
  }

  const onChangePan =(e)=>{
    if(e.target.value.length !=9 )
    setErr((prevState)=>({...prevState, pan:"PAN number should be of 9 characters"}))
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
            <label>Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e)=>setDeveloperDetails((prevState) => ({ ...prevState, name: e.target.value }))}
            />
            </div>
          <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" id="email"
          onChange={(e)=>setDeveloperDetails((prevState) => ({ ...prevState, email: e.target.value }))}
          />
          </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            onChange={(e)=>{setDeveloperDetails((prevState) => ({ ...prevState, phone_number: e.target.value }));validatePhoneNumber(); onChangePhoneNumber(e); setPhoneNumber(e.target.value)}}
          />
           <p><span style={{ color: 'red' }}>{err.phone_number}</span></p>
        </div>
        <div className="mb-3">
          <label>PAN Number</label>
          <input
            type="text"
            className="form-control"
            id="pan"
            onChange={(e)=>{setDeveloperDetails((prevState) => ({ ...prevState, pan: e.target.value }));onChangePan(e)}}

          />
          <p><span style={{ color: 'red' }}>{err.pan}</span></p>

        </div>
        <div className="mb-3">
          <label>Aadhaar Number</label>
          <input
            type="text"
            className="form-control"
            id="aadhaar"
            onChange={(e)=>{setDeveloperDetails((prevState) => ({ ...prevState, aadhaar: e.target.value }));validateAadhaar(); onChangeAadhaar(e);setAadhaar(e.target.value)}}

          />
          <p><span style={{ color: 'red' }}>{err.aadhaar}</span></p>

        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e)=>{setDeveloperDetails((prevState) => ({ ...prevState, password: e.target.value }));validatePassword();setPassword(e.target.value);}}

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
        {passErr && <p><span style={{ color: 'red' }}>Password should have atleast 1 uppercase and 1 lowercase letters, 1 number and 1 special character and minimum length 8</span></p>}
        {showErrorMessage && isCPasswordDirty ? <p><span style={{ color: 'red' }}>Enter password before confirm password</span></p>: ''}
        
        <div className="mb-3">
          <label>Crypto Wallet Link</label>
          <input
            type="text"
            className="form-control"
            id="crypto_wallet_link"
            onChange={(e)=>setDeveloperDetails((prevState) => ({ ...prevState, crypto_wallet_link: e.target.value }))}

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
  export default RegistrationDeveloper;