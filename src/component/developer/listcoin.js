import React from 'react';
import '../common/form.css';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function DevICO() {

    let navigate = useNavigate();

    const onSubmit = (event) => {
        
    }

    return (
        <div className>
<<<<<<< Updated upstream
            <h3>List an ICO</h3>
            <center>

                <form className='Auth-form'>
                    <div className="form-content">
                        <div className="form-group mt-3">
                            <label for="coinname">Name of your coin</label>
                            <input className="form-control mt-1" type="text" id="coinname" name="coinname" placeholder='Name' />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="aboutcoin">About the Coin</label>
                            <input className="form-control mt-1" type="textarea" id="aboutcoin" name="aboutcoin" placeholder="About" />
                        </div>
                        <br />

                        <div className="form-group mt-3">
                            <label for="startdate">Start date of your ICO</label>
                            <input className="form-control mt-1" type="date" id="startdate" name="startdate" placeholder="" />
                        </div>
                        <br />

                        <div className="form-group mt-3">
                            <label for="enddate">End date of your ICO</label>
                            <input className="form-control mt-1" type="date" id="enddate" name="enddate" placeholder="" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="minprice">Minimum bid price of your ICO (in $)</label>
                            <input className="form-control mt-1" type="number" id="minprice" name="minprice" placeholder="Minimum price" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="maxprice">Maximum bid price of your ICO (in $)</label>
                            <input className="form-control mt-1" type="number" id="maxprice" name="maxprice" placeholder="Maximum price" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="min_token_quantity">Minimum token qunatity of an ICO lot</label>
                            <input className="form-control mt-1" type="number" id="min_token_quantity" name="min_token_quantity" placeholder="Minimum token quantity" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="whitepaper">Upload your white paper</label>
                            <input className="form-control mt-1" type="" id="whitepaper" name="whitepaper" placeholder="" />
                        </div>
                        <br />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>

                </form>
=======
            <h3>List an IPO</h3>
            <center>

            <form className='Auth-form'>
                <div className="form-group mt-3">
                    <label for="coinname">Name of your coin</label>
                    <input type="text" id="coinname" name="coinname" />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label for="aboutcoin">About the Coin</label>
                    <input type="textbox" id="aboutcoin" name="aboutcoin" />
                </div>
                <br/>

                <div className="form-group mt-3">
                    <label for="startdate">Start date of your ICO</label>
                    <input type="date" id="startdate" name="startdate" />
                </div>
                <br/>

                <div className="form-group mt-3">
                    <label for="enddate">End date of your ICO</label>
                    <input type="date" id="enddate" name="enddate" />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label for="minprice">Minimum bid price of your ICO</label>
                    <input type="number" id="minprice" name="minprice" />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label for="maxprice">Maximum bid price of your ICO</label>
                    <input type="number" id="maxprice" name="maxprice" />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label for="min_token_quantity">Minimum token qunatity of ICO lot</label>
                    <input type="number" id="min_token_quantity" name="min_token_quantity" />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label for="whitepaper">Upload your white paper</label>
                    <input type="" id="whitepaper" name="whitepaper" />
                </div>
                <br/>
            </form>
>>>>>>> Stashed changes

            </center>
        </div>
    );
}

export default DevICO;
