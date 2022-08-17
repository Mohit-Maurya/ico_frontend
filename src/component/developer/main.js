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


      <h3>ACTIVE ICO:</h3>
      <table className="table table-striped">
        <tr>
          <th>Coin Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Final Price</th>
          <th>Tokens Sold</th>
          <th>Status(under/oversubs)</th>
        </tr>
        <tr>
          {/* {for loop} */}
        </tr>
      </table> 
    </div>
  );
}

export default DevMain;
