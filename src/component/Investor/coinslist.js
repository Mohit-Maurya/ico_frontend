import React, { useState, useEffect } from 'react'
import './coinList.css'

function Coinslist() {

  const [status, setStatus] = useState("Active")
  const [icos, setIcos] = useState(["active 0","active 1", "active 2", "active 3", "active 4"])

  useEffect(() => {
    //  axios.("")
  }, [])

  const changeStatus = (e, status) => {
    setStatus(status)
    setIcos(icos.map((e,i)=>(status+" "+i)))
    //  axios.("")
  }

  let icosList = icos.map((a, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}}>
            <div className='card-body' key={i}>
                  {a}
            </div>
        </div>
        <br />
      </>
    )
  })

  return (
    <div>
      <>
        <button onClick={(e) => changeStatus(e, "Active")}>Active</button>
        <button onClick={(e) => changeStatus(e, "Upcoming")}>Upcoming</button>
        <button onClick={(e) => changeStatus(e, "Closed")}>Closed</button>
      </>
      <br />
      <div className='card'>
        <div className='card-body'>
          {icosList}
        </div>
      </div>
    </div>
  )
}

export default Coinslist
