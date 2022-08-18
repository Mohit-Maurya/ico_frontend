import React from 'react';
import '../common/form.css';
import axios from "axios"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


function DevICO() {
    const user = useSelector((state)=>state.user.value)
    const navigate = useNavigate();
    const [coinDetails, setCoinDetails] = useState({
        token_name: '', about: '', ico_start_date: '', ico_end_date: '',
        total_tokens_available: '',  platform: '', category: '', min_token_qty: '',
        status: 'Active', whitepaper: ''
    })
    const [dateRange,setdateRange ] = useState({start:null, end:null})
    const [priceRange,setPriceRange ]   = useState({min:null,max:null})
    const [err, setErr] = useState({price:'', date:''})

    const checkFields = () => {
        if(coinDetails.token_name!==''&& coinDetails.about!==''&& coinDetails.ico_start_date!==''&& coinDetails.ico_end_date!=='' && 
        coinDetails.total_tokens_available!=='' && coinDetails.platform!=='' && coinDetails.category!=='' && coinDetails.min_token_qty!=='' &&
        coinDetails.whitepaper!=='' && priceRange.min!=='' && priceRange.max!=='')
          return true
        else
          return false
      }

    const onSubmit = (e) => {
        console.log("submit", coinDetails,priceRange)
        e.preventDefault()
        axios.post("http://localhost:8080/coins", {  ...coinDetails , price_range:{...priceRange},dev_id:user.userid})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            if(checkFields())
            {
                window.alert("You have successfully listed an ICO!")
                navigate('/developer')
            }
            else
                window.alert("Please fill all the fields before submitting!")

        
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
    const onChangeDate = (e,type) => {

        let temp1 = new Date(e.target.value)
        let temp2 = new Date(coinDetails.ico_start_date)
        console.log("Date 1 ",temp1)
        console.log("Date 2", temp2)
        console.log(temp1.getTime())
        // console.log(typeof temp)
        if(type == 'end' && coinDetails.ico_start_date!=null && temp1.getTime()>=temp2.getTime())
        {
            // console.log(temp1.getTime())
            setErr((prevState) => ({ ...prevState, date: "" }))
            console.log(e.target.value)
        }
        else if(type == 'start' && coinDetails.ico_end_date == null)
        {
            setErr((prevState) => ({ ...prevState, date: "Enter ICO end date" }))
        }
        else if(type == 'end' && coinDetails.ico_start_date!=null && temp1.getTime()<=temp2.getTime())
        {
            setErr((prevState) => ({ ...prevState, date: "ICO Start date must be before than ICO end date" }))
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
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, token_name: e.target.value }))}
                                required />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="platform">Platform of coin</label><br/>
                            <select class="form-control mt-1" onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, platform: e.target.value }))} required>
                                <option value="value" selected hidden>Click to select</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>SOL</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="category">Category of coin</label>
                            <select class="form-control mt-1" onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, category: e.target.value }))} required>
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
                                required
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
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState, ico_start_date: e.target.value })); setdateRange((prevState) => ({ ...prevState, start: e.target.value})); onChangeDate(e,"start") }} 
                                required
                            />
                        </div>
                        <br />

                        <div className="form-group mt-3">
                            <label for="enddate">End date of your ICO</label>
                            <input
                                type="date"
                                className="form-control mt-1"
                                id="enddate"
                                name="enddate"
                                placeholder="" 
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState, ico_end_date: e.target.value })); setdateRange((prevState) => ({ ...prevState, end: e.target.value})); onChangeDate(e,"end") }} 
                                required
                            />
                        </div>
                            <p><span style={{ color: 'red' }}>{err.date}</span></p>
                        <br />

                        <div className="form-group mt-3">
                            <label for="token_avail">Number of Tokens available:</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="token_avail"
                                name="token_avail"
                                onChange={(e) => { setCoinDetails((prevState) => ({ ...prevState,  total_tokens_available: e.target.value}))}}
                                placeholder="Tokens available" 
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="minprice">Minimum bid price of your ICO (in $)</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="minprice"
                                name="minprice"
                                onChange={(e) => { setPriceRange((prevState) => ({ ...prevState,  min: e.target.value})); onChangePrice(e, "min")}}
                                placeholder="Minimum price" 
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="maxprice">Maximum bid price of your ICO (in $)</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="maxprice"
                                name="maxprice" placeholder="Maximum price"
                                onChange={(e) => { setPriceRange((prevState) => ({ ...prevState,  max: e.target.value})); onChangePrice(e, "max") }} 
                                required
                            />
                        </div>
                            <p><span style={{ color: 'red'}}>{err.price}</span></p>
                        <br />
                        <div className="form-group mt-3">
                            <label for="min_token_quantity">Minimum token qunatity of an ICO lot</label>
                            <input
                                className="form-control mt-1"
                                type="number" id="min_token_quantity"
                                name="min_token_quantity" placeholder="Minimum token quantity"
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, min_token_qty: e.target.value }))} 
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group mt-3">
                            <label for="whitepaper">Upload your white paper</label>
                            <input
                                className="form-control mt-1"
                                type="" id="whitepaper"
                                name="whitepaper"
                                onChange={(e) => setCoinDetails((prevState) => ({ ...prevState, whitepaper: e.target.value }))} 
                                required
                            />
                        </div>
                        <br />
                        <p style={{color: 'red'}}> All fields are mandatory to fill</p>
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