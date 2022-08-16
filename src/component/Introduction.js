import React from 'react'
import intoImg from './/images/image-mockups.png'


export default function Introduction() {
    return (
        <>
            <div className='intro'>
                <div className='intro-main'>
                    <h1>Next generation ICO</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                        for listing, investing and bidding in the coins.</p>
                    <button className='btn'> Register with us</button>
                </div>
                <div className='intro-hero'>
                    <img src={intoImg} alt='ico-logo ' />
                </div>
            </div>
        </>
    )
}