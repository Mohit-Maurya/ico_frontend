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
            {invest.status}
          </div>
        </div>
        <br />
      </>
    )
  })

  return (
    <div className>
      <center>
        <div className='card' style={{ margin: "50px", width: "70%" }}>
          <div className='card-body'>
            <h5 class="card-title">Hi! {`${data.name}`}</h5>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8">Email</div>
                <div class="col-sm-4">{`${data.email}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8">Phone number</div>
                <div class="col-sm-4">{`${data.phone_number}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8">PAN Card</div>
                <div class="col-sm-4">{`${data.pan}`}</div>
              </div>
            </center>
            <center>
              <div class="row" style={{ margin: "18px" }}>
                <div class="col-sm-8">Aadhar card</div>
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
