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

            </center>
        </div>
    );
}

export default DevICO;
