import React, { useEffect, useState } from 'react'
import axios from "axios"

function InvestorMain() {
  const [activeIcos, setActiveIcos] = useState(["Active 1","Active 2"])
  const [investedIcos, setInvestedIcos] = useState(["invest 1","invest 2"])

  let listActiveIcos = activeIcos.map((active,i)=>{
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}}>
            <div className='card-body' key={i}>
                  {active}
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
                  {invest}
            </div>
        </div>
        <br />
      </>
    )
  })

  useEffect(()=>{

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
