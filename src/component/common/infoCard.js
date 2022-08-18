import React from 'react'
import { useNavigate } from 'react-router-dom';


function InfoCard({icoName, Price, icoStatus, coinDetailRoute}) {
    let navigate = useNavigate();
    const viewDetails = () => {
        navigate(`/login`);
    }
    
    const setColor = (status) => {
      let statusColor = 'green';
      if(status === 'Closed') statusColor='red';
      else if(status === 'Upcoming') statusColor='purple';
      return statusColor;
    }
  return (
    <div>
    <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{icoName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{Price} per order</h6>
      <button className="btn" onClick={viewDetails} >View Details</button>
    </div>
  </div>
    </div>
  )
}
InfoCard.defaultProps = {
    icoName: "MyICO Listing1",
    Price: "Rs 15-25",
    icoStatus: "Upcoming",
    coinDetailRoute: "/login",
};

export default InfoCard
