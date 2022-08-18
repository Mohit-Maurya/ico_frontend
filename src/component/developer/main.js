import React,{useState,useEffect} from 'react';
import{useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function DevMain() {

  let navigate = useNavigate()
  const user  = useSelector((state)=>state.user.value)
  const [activeIcos, setActiveIcos] = useState([])
  const [upcomingIcos, setUpcomingIcos] = useState([])
  const [closedIcos, setClosedIcos] = useState([])
  
  console.log(user)
  useEffect(() => {
    axios.get("http://localhost:8080/coin/developer/"+user.userid)
      .then((res) => {
        setActiveIcos(res.data["Active"])
        setClosedIcos(res.data["Closed"])
        setUpcomingIcos(res.data["Upcoming"])

        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const toAllocate = (e, id,status) => {
    e.preventDefault();
    console.log(id, " onClick")
    navigate("/developer/allocate", { state: { coinId: id  , status:status} })
  }

  let upcomingIcosList = upcomingIcos.map((a, i) => {
    return (
      <>
        <div className="card card-ico-coin mx-auto" key={i} style={{width:"70%"}} onClick={(e)=>toAllocate(e,a._id,"Upcoming")}>
            <div className='card-body' key={i}>
            <div className='row'>
              <div className='col-9 float-start'>
                <h4>{a.token_name}</h4>
              </div>
              <div className='col-3 float-end'>
                <p><span style={{ color: "orange", fontWeight: "bold" }}> Upcoming </span></p>
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
        <div className="card card-ico-coin mx-auto" key={i} style={{ width: "70%" }} onClick={(e) => toAllocate(e, a._id,"Closed")}>
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
        <div className="card card-ico-coin mx-auto" key={i} onClick={(e) => toAllocate(e, a._id,"Active")} style={{ width: "70%"}}>
          <div className='card-body' key={i} >
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
    <div >
      <h3>MY UPCOMING ICO:</h3>
      <div className='card'>
        <div className='card-body'  style={{ backgroundColor: "e9ecef", overflowY:"scroll" , height:"30vh"}}>
          {upcomingIcosList}
        </div>
      </div>

      <h3>MY ACTIVE ICOs</h3>
      <div className='card'>
        <div className='card-body'  style={{ backgroundColor: "e9ecef", overflowY:"scroll" , height:"30vh"}}>
          {activeIcosList}
        </div>
      </div>

      <h3>MY CLOSED ICOs</h3>
      <div className='card'>
        <div className='card-body'  style={{ backgroundColor: "e9ecef", overflowY:"scroll" , height:"30vh"}}>
          {closedIcosList}
        </div>
      </div>

      
    </div>

    
  );
}

export default DevMain;
