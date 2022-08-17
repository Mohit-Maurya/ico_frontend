import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './coinList.css'

function Coinslist() {

  const [status, setStatus] = useState("Active")
  const [icos, setIcos] = useState(["active 0", "active 1", "active 2", "active 3", "active 4"])
  const [activeIcos, setActiveIcos] = useState([])
  const [upcomingIcos, setUpcomingIcos] = useState([])
  const [closedIcos, setClosedIcos] = useState([])

  let navigate = useNavigate()
  const user = useSelector((state) => state.user.value)
  console.log(user, " user ")


  useEffect(() => {
    axios.get("http://localhost:8080/coins")
      .then((res) => {
        setActiveIcos(res.data["Active"])
        setClosedIcos(res.data["Closed"])
        setUpcomingIcos(res.data["Upcoming"])

        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const changeStatus = (e, status) => {
    setStatus(status)
    e.preventDefault();
    setIcos(icos.map((e, i) => (status + " " + i)))
    //  axios.("")
  }

  const renderList = () => {
    switch (status) {

      case "Active": return activeIcosList;
      case "Upcoming": return upcomingIcosList;
      case "Closed": return closedIcosList;
      // case "four":  return <ComponentD />;

      default: return closedIcosList;
    }
  }

  const coinDetail = (e, id) => {
    e.preventDefault();
    console.log(id, " onClick")
    navigate("/investor/coindetails", { state: { coinId: id } })
  }

  let upcomingIcosList = upcomingIcos.map((a, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }} onClick={(e) => coinDetail(e, a._id)}>
          <div className='card-body' key={i}>
            <div className='row'>
              <div className='col-9 float-start'>
                <h4>{a.token_name}</h4>
              </div>
              <div className='col-3 float-end'>
                <p><span style={{ color: "orange", fontWeight: "bold" }}> Upcoming</span></p>
              </div>
              <pre>Start Date {new Date(a.ico_start_date).toLocaleString("lookup").split(",")[0]} &nbsp; &nbsp;
                End Date {new Date(a.ico_end_date).toLocaleString("lookup").split(",")[0]}
              </pre>
            </div>
          </div>
        </div>
        <br />
      </>
    )
  })

  let closedIcosList = closedIcos.map((a, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }} onClick={(e) => coinDetail(e, a._id)}>
          <div className='card-body' key={i}>
            <div className='row'>
              <div className='col-9 float-start'>
                <h4>{a.token_name}</h4>
              </div>
              <div className='col-3 float-end'>
                <p><span style={{ color: "red", fontWeight: "bold" }}> Closed </span></p>
              </div>
              <pre>Start Date {new Date(a.ico_start_date).toLocaleString("lookup").split(",")[0]} &nbsp; &nbsp;
                End Date {new Date(a.ico_end_date).toLocaleString("lookup").split(",")[0]}
              </pre>
            </div>
          </div>
        </div>
        <br />
      </>
    )
  })

  let activeIcosList = activeIcos.map((a, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }} onClick={(e) => coinDetail(e, a._id)}>
          <div className='card-body' key={i}>
            <div className='row'>
              <div className='col-9 float-start'>
                <h4>{a.token_name}</h4>
              </div>
              <div className='col-3 float-end'>
                <p><span style={{ color: "green", fontWeight: "bold" }}> Active </span></p>
              </div>
              <pre>Start Date {new Date(a.ico_start_date).toLocaleString("lookup").split(",")[0]} &nbsp; &nbsp;
                End Date {new Date(a.ico_end_date).toLocaleString("lookup").split(",")[0]}
              </pre>
            </div>
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
          {renderList()}
        </div>
      </div>
    </div>
  )
}

export default Coinslist
