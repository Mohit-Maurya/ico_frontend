import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Introduction() {
    let navigate = useNavigate();
    const HandleButton = () => {
      navigate('/registrationOption');
    }
    return (
        <>
            <div className='intro'>
                <div className='intro-main'>
                    <h1>Next generation ICO</h1>
                    <p>Take your financial life online. Your ICO Coin account will be a one-stop-shop
                        for listing, investing and bidding in the coins.</p>
                    <button className='btn' onClick={HandleButton} > Register with us!</button>
                </div>
               
            </div>
        </>
    )
}
