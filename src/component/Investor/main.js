import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"

function InvestorMain() {
  const [activeIcos, setActiveIcos] = useState([])
  const [investedIcos, setInvestedIcos] = useState([])
  const user = useSelector((state) => state.user.value)
  console.log(user, " user ")

  let listActiveIcos = activeIcos.map((active, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}}>
        <div className='card-body' key={i}>
        <div style={{fontWeight: "bold"}}>{active.coin_name}</div>
        <div>Bidding Price: {active.bidding_price}</div>
        <div>Min Token Quantity: {active.token_qty}</div>
        <div>Status: <span style={{color: "blueviolet", marginBottom: "0px", fontWeight: "bold"}} >{active.status}</span></div>
      </div>
        </div>
        <br />
      </>
    )
  })

  let listInvestedIcos = investedIcos.map((invest, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }}>
          <div className='card-body' key={i}>
            <div style={{fontWeight: "bold"}}>{invest.coin_name}</div>
            <div className="container" style={{float: "left"}}>
              <div >Bidding Price: {invest.bidding_price}</div>
              <div>Min Token Quantity: {invest.token_qty}</div>
              <div>Status: <span style={{color: 'green', marginBottom: "0px", fontWeight: "bold"}} >{invest.status}</span></div>
            </div>
            </div>
        </div>
        <br />
      </>
    )
  })

  function fetchActiveIcos(){
    axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Active`)
    .then((res) => {
      setActiveIcos([...res.data])
      console.log("Active....",res.data, [...res.data])
    })
   .catch((err) => console.log(err))
  }

  useEffect(() => {
    // axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Active`)
    //   .then((res) => {
    //     setActiveIcos([...res.data])
    //     console.log("Active....",res.data, [...res.data])
    //   })
    //  .catch((err) => console.log(err))
    fetchActiveIcos()
    setInterval(function(){
      console.log("intervallll ----- ")
      fetchActiveIcos()
    //   axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Active`)
    //   .then((res) => {
    //     setActiveIcos([...res.data])
    //     console.log("Active....",res.data, [...res.data])
    //   })
    //  .catch((err) => console.log(err))
    }
    ,3000)
    axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Accepted`)
      .then((res) => {
        setInvestedIcos([...res.data])
        console.log(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className='row mt-5'>
      <div className='col-6'>
        <div className='card mx-auto' style={{height:"85vh"}}>
          <div className='card-header'>
            Active ICOs
          </div>
          <div className='card-body' style={{ backgroundColor: "e9ecef", overflowY:"scroll" }}>
            {listActiveIcos}
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card mx-auto' style={{height:"85vh"}}>
          <div className='card-header'>
            Invested ICOs
          </div>
          <div className='card-body' style={{ backgroundColor: "e9ecef", overflowY:"scroll" }}>
            {listInvestedIcos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorMain
