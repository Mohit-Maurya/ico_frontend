import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import InvestorMain from './main';
import axios from 'axios';

function Profile() {

  const [investedIcos, setInvestedIcos] = useState([])
  const user = useSelector((state) => state.user.value)
  const [data, setData] = useState({})
  useEffect(() => {
    console.log(user)
    axios.get(`http://localhost:8080/get-investor-by-id/${user.userid}`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))

    axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Accepted`)
      .then((res) => {
        setInvestedIcos([...res.data])
        console.log(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  let listInvestedIcos = investedIcos.map((invest, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }}>
          <div className='card-body' key={i}>
            <div style={{ fontWeight: "bold" }}>{invest.coin_name}</div>
            <div className="container" style={{ float: "left" }}>
              <div >Bidding Price: {invest.bidding_price}</div>
              <div>Min Token Quantity: {invest.token_qty}</div>
              <div>Status: <span style={{ color: 'green', marginBottom: "0px", fontWeight: "bold" }} >{invest.status}</span></div>
            </div>
          </div>
        </div>
        <br />
      </>
    )
  })

  return (
    <div className>
      <center>
        <br />
        <br />
        <h1 > YOUR PROFILE</h1>
        <div className='card' style={{ margin: "50px", width: "70%" }}>
          <div className='card-body'>
            <h3 class="card-title">Hi {`${data.name}`} !</h3>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8"><b>Email</b></div>
                <div class="col-sm-4">{`${data.email}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8"><b>Phone number</b></div>
                <div class="col-sm-4">{`${data.phone_number}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8"><b>PAN Card</b></div>
                <div class="col-sm-4">{`${data.pan}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8"><b>Aadhaar number</b></div>
                <div class="col-sm-4">{`${data.aadhaar}`}</div>
              </div>
            </center>

            {/* <button >Edit your Profile</button> */}
          </div>

        </div>
        <div className='card' style={{ margin: "50px", width: "70%" }}>
          <div className='card-body'>
            <h5 class="card-title">My Investments</h5>

            <div className='card-body' style={{ backgroundColor: "e9ecef", overflowY: "scroll" }}>
              {listInvestedIcos}
            </div>

          </div>

        </div>
      </center>

    </div>
  )
}

export default Profile
