import React from 'react';
import InfoCard from '../common/infoCard';
import Introduction from '../Introduction';

function Home() {
  const cardStyles = {
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      margin: "5px",
  }

  return (
    <div>
      <Introduction />
      <h1 style={{marginTop: "100px", marginBottom: "20px"}} >Our Brokerages for ICOs</h1>
      <div className='inline-block' style={cardStyles}>
        <InfoCard icoName='Polygon' Price='Rs 100' icoStatus='Active'/>
        <InfoCard icoName='Samast' Price='Rs 90' icoStatus='Closed'/>
        <InfoCard icoName='DeFi ICO' Price='Rs 30' icoStatus='Active'/>
        <InfoCard icoName='Pro Gaming ICO' Price='Rs 40' icoStatus='Upcoming'/>
      </div>
    </div>
  )
}

export default Home
