import React from 'react';
import DeveloperHeader from '../Header/developerHeader';

function DevMain() {
  
  return (
    <div className>
    <DeveloperHeader />
      <h3>UPCOMING ICO:</h3>
      <table className="table table-striped">
        <tr>
          <th>Coin Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Price Range</th>
          <th>Tokens Offered</th>
          <th>Tokens Sold</th>
        </tr>
        <tbody>
          <tr>
            <td>dafad</td>
            <td>dafad</td>
            <td>dafad</td>
            <td>dafad</td>
            <td>dafad</td>
          </tr>
        </tbody>
      </table> 
      <div className='card'>
        <div className='card-body'>
          Upcoming
        </div>
      </div>

      <h3>MY ACTIVE ICOs</h3>
      <div className='card'>
        <div className='card-body'>
          Active
        </div>
      </div>
    </div>
  );
}

export default DevMain;
