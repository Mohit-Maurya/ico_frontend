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
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }}>
          <div className='card-body' key={i}>
            {active.status}
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
            {invest.status}
          </div>
        </div>
        <br />
      </>
    )
  })

  useEffect(() => {
    axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Active`)
      .then((res) => {
        setActiveIcos([...res.data])
        console.log(res.data, [...res.data])
      })
        .catch((err) => console.log(err))
    axios.get(`http://localhost:8080/bids-per-status/${user.userid}/Accepted`)
      .then((res) => {
        setInvestedIcos([...res.data])
        console.log(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className='row'>
      <div className='col-6'>
        <div className='card mx-auto'>
          <div className='card-header'>
            Active ICOs
          </div>
          <div className='card-body' style={{ backgroundColor: "e9ecef" }}>
            {listActiveIcos}
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card mx-auto'>
          <div className='card-header'>
            Invested ICOs
          </div>
          <div className='card-body'>
            {listInvestedIcos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorMain
