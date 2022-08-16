import React from 'react'
import BankIMG from './/images/icon-online.svg'
import BudgetIMG from './/images/icon-budgeting.svg'
import FastIMG from './/images/icon-onboarding.svg'
import APIIMG from './/images/icon-api.svg' 

export default function Services() {
    return (
        <>
            <div className='services'>
                <div className='services-intro'>
                    <h1> Why choose ICO Hub?</h1>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control
                        your finances like never before.</p>
                </div>
                <div className='service-box'>
                    <div className='box1'>
                        <img src={BankIMG} alt='services' />
                        <h1>Online Banking</h1>
                        <p>Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.</p>
                    </div>

                    <div className='box2'>
                        <img src={BudgetIMG} alt='services' />
                        <h1>Simple budgeting</h1>
                        <p>See exactly where your money goes each month. Receive notifications when you’re
                            close to hitting your limits.</p>
                    </div>

                    <div className='box3'>
                        <img src={FastIMG} alt='services' />
                        <h1>Fast Onboarding</h1>
                        <p>We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.</p>
                    </div>

                    <div className='box4'>
                        <img src={APIIMG} alt='services' />
                        <h1>Open API</h1>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.</p>
                    </div>

                </div>

            </div>
        </>
    )
}
