import React from 'react';
import '../common/form.css';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function DevICO() {

    const navigate = useNavigate();
    const [coinDetails, setCoinDetails] = useState({
        token_name: '', about: '', ico_start_date: '', ico_end_date: '',
        total_tokens_available: '',  platform: '', category: '', min_token_qty: '',
        status: 'Active', whitepaper: '', dev_id: '62fbba9e2df5a047a1a961b1'
    })

    const [priceRange,setPriceRange ]   = useState({min:null,max:null})
    const [err, setErr] = useState({price:'', date:''})

    const onSubmit = (e) => {
        console.log("submit", coinDetails)
        e.preventDefault()
        axios.post("http://localhost:8080/developers", {  ...coinDetails , price_range:{...priceRange}})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        navigate('/developer')
    }
    const onChangePrice = (e,type) => {
        if(type === "min" && priceRange.max!=null && e.target.value >= priceRange.max){
            setErr((prevState) => ({ ...prevState, price: "Max price should be greater than Min price of your ICO!" }))
        }
        else if (type === "max" && e.target.value <= priceRange.min)
            setErr((prevState) => ({ ...prevState, price: "Max price should be greater than Min price of your ICO!" }))
        else {
            setErr((prevState) => ({ ...prevState, price: "" }))
            console.log(e.target.value)
        }
    }
    const onChangeDate = (e) => {
        if (e.target.value <= coinDetails.ico_start_date)
            setErr((prevState) => ({ ...prevState, date: "Start date must be before than end date" }))
        else {
            setErr((prevState) => ({ ...prevState, date: "" }))
            console.log(e.target.value)
        }
    }

    return (
        <div className>
            <h3>List an ICO</h3>
            <center>

                <form className='Auth-form'>
                    <div className="form-content">
                        <div className="form-group mt-3">
                            <label for="coinname">Name of your coin</label>
                            <input
                                className="form-control mt-1"
                                type="text"
                                id="coinname"
                                name="coinname"
                                placeholder='Name'
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, token_name: e.target.value }))} />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="platform">Platform of coin</label><br/>
                            <select class="form-control mt-1" onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, platform: e.target.value }))}>
                                <option value="value" selected hidden>Click to select</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>SOL</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="category">Category of coin</label>
                            <select class="form-control mt-1" onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, category: e.target.value }))}>
                                <option value="value" selected hidden>Click to select</option>
                                <option>Blockchain</option>
                                <option>De-fi</option>
                                <option>Gaming</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="aboutcoin">About the Coin</label>
                            <input
                                className="form-control mt-1"
                                type="textarea"
                                id="aboutcoin"
                                name="aboutcoin"
                                placeholder="About"
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState, about: e.target.value })) }}
                            />
                        </div>
                        <br />

                        <div className="form-group mt-3">
                            <label for="startdate">Start date of your ICO</label>
                            <input
                                type="date"
                                className="form-control mt-1"
                                id="startdate"
                                name="startdate"
                                placeholder=""
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState, ico_start_date: e.target.value })) }} />
                        </div>
                        <br />

                        <div className="form-group mt-3">
                            <label for="enddate">End date of your ICO</label>
                            <input
                                type="date"
                                className="form-control mt-1"
                                id="enddate"
                                name="enddate"
                                placeholder="" onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState, ico_end_date: e.target.value })); onChangeDate(e) }} />
                        </div>
                        <p><span style={{ color: 'red' }}>{err.aadhaar}</span></p>
                        <br />

                        <div className="form-group mt-3">
                            <label for="token_avail">Number of Tokens available:</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="token_avail"
                                name="token_avail"
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState,  total_tokens_available: e.target.value})); onChangePrice(e)}}
                                placeholder="Tokens available" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="minprice">Minimum bid price of your ICO (in $)</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="minprice"
                                name="minprice"
                                onChange={(e) => { setPriceRange((prevState) => ({ ...prevState,  min: e.target.value})); onChangePrice(e, "min")}}
                                placeholder="Minimum price" />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="maxprice">Maximum bid price of your ICO (in $)</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="maxprice"
                                name="maxprice" placeholder="Maximum price"
                                onChange={(e) => { setPriceRange((prevState) => ({ ...prevState,  max: e.target.value})); onChangePrice(e, "max") }} />
                        </div>
                        <p><span style={{ color: 'red'}}>{err.price}</span></p>
                        <br />
                        <div className="form-group mt-3">
                            <label for="min_token_quantity">Minimum token qunatity of an ICO lot</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="min_token_quantity"
                                name="min_token_quantity" placeholder="Minimum token quantity"
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, min_token_qty: e.target.value }))} />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="whitepaper">Upload your white paper</label>
                            <input
                                className="form-control mt-1"
                                type="" id="whitepaper"
                                name="whitepaper" placeholder=""
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, whitepaper: e.target.value }))} />
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                </form>

            </center>
            <br />
            <br />
            <br />
        </div>
    );
}

export default DevICO;
