import React, { useEffect, useState } from 'react'
import axios from "axios"
import InvestorHeader from '../Header/investorHeader'

function InvestorMain() {
  const [activeIcos, setActiveIcos] = useState([])
  const [investedIcos, setInvestedIcos] = useState([])

  let listActiveIcos = activeIcos.map((active,i)=>{
    return (
      <>
      <InvestorHeader />
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}}>
            <div className='card-body' key={i}>
                  {active.status}
            </div>
        </div>
        <br />
      </>
    )
  })

  let listInvestedIcos =  investedIcos.map((invest,i)=>{
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}}>
            <div className='card-body' key={i}>
                  {invest.status}
            </div>
        </div>
        <br />
      </>
    )
  })

  useEffect(()=>{
      axios.get("http://localhost:8080/bids-per-status/62fbb8be6f57130f817c8852/Active")
          .then((res)=>{
            setActiveIcos([...res.data])
            console.log(res.data,[...res.data])
          })
          .catch((err)=>console.log(err))
      axios.get("http://localhost:8080/bids-per-status/62fbb8be6f57130f817c8852/Accepted")
          .then((res)=>{
            setInvestedIcos([...res.data])
            console.log(res.data)
          })
          .catch((err)=>console.log(err))    

  },[])

  return (
    <div>
      <div className='card'>
        <div className='card-header'>
            Active ICOs
        </div>
        <div className='card-body' style={{backgroundColor:"e9ecef"}}>
          {listActiveIcos}
        </div>
      </div>
      <br/>
      <br/>
      <div className='card'>
      <div className='card-header'>
            Invested ICOs
      </div>
        <div className='card-body'>
          {listInvestedIcos}
        </div>
      </div>
    </div>
  )
}

export default InvestorMain
