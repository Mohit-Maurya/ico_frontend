import React from 'react'
import { useNavigate } from 'react-router-dom';


function InfoCard({icoName, priceRange, icoStatus, coinDetailRoute}) {
    let navigate = useNavigate();
    const viewDetails = () => {
        navigate(`/login`);
    }
  return (
    <div>
    <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{icoName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{priceRange}/per Token</h6>
      <span className="card-text">Status: {icoStatus}</span>
      <button className="btn" onClick={viewDetails} >View Details</button>
    </div>
  </div>
    </div>
  )
}
InfoCard.defaultProps = {
    icoName: "MyICO Listing1",
    priceRange: "Rs 15-25/per token",
    icoStatus: "Upcoming",
    coinDetailRoute: "/investor/coinlist",
};

export default InfoCard
