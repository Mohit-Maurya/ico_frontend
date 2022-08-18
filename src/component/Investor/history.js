import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './coinList.css'

function InvestorHistory() {

  const [status, setStatus] = useState()
  const [investorBids, setInvestorBids] = useState([])

  const user = useSelector((state) => state.user.value)
  console.log(user, " user ")


  useEffect(() => {
    axios.get(`http://localhost:8080/get-bid-by-investor/${user.userid}`)
      .then((res) => {
        setInvestorBids(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const renderList = () => {
    return investorBidsList;
  }

  let investorBidsList = investorBids.map((investorBid, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }}>
          <div className='card-body' key={i}>
            <div style={{ fontWeight: "bold" }}>{investorBid.coin_name}</div>
            <div className="container" style={{ float: "left" }}>
              <div >Bidding Price: {investorBid.bidding_price}</div>
              <div>Min Token Quantity: {investorBid.token_qty}</div>
              <div>Status: <span style={{ color: 'green', marginBottom: "0px", fontWeight: "bold" }} >{investorBid.status}</span></div>
            </div>
          </div>
        </div>
        <br />
      </>
    )
  })

  return (
    <div>
      <br />
      <div className='card'>
        <div className='card-body'>
          {renderList()}
        </div>
      </div>
    </div>
  )
}

export default InvestorHistory
