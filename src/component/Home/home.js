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
        <InfoCard icoName='Blockchain' Price='$ 10'/>
        <InfoCard icoName='De-fi' Price='$15'/>
        <InfoCard icoName='Gaming' Price='$20'/>
      </div>
    </div>
  )
}

export default Home
