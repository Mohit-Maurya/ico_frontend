import React from 'react';
import InfoCard from '../common/infoCard';
import Introduction from '../Introduction';

function Home() {
  const cardStyles = {
      padding: "120px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      margin: "5px"
  }
  return (
    <div>
      {/* <Header /> */}
      <Introduction />
      <div className='inline-block' style={cardStyles}>
        <InfoCard icoName='DeFi ICO' priceRange='Rs 30-40' icoStatus='Active'/>
        <InfoCard icoName='My Gaming ICO' priceRange='Rs 90-120' icoStatus='Closed'/>
        <InfoCard icoName='My New ICO' priceRange='Rs 40-49' icoStatus='Upcoming'/>
      </div>
    </div>
  )
}

export default Home
