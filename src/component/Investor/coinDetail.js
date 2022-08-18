import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";
import InvestorHeader from "../Header/investorHeader";

function CoinDetail() {
    const [details, setDetails] = useState({})
    const user = useSelector((state) => state.user.value)
    const [price, setPrice] = useState({ min: "", max: "" })
    const [bid,setBid] = useState({token_qty:"",bidding_price:""})
    const [bidErr,setBidErr] = useState({token_qty:"",bidding_price:""})
    const { state } = useLocation()
    const { coinId } = state
    useEffect(() => {
        // console.log(state,coinId)
        axios.get("http://localhost:8080/coin/" + coinId)
            .then((res) => {
                setDetails({ ...res.data })
                setPrice({ ...res.data.price_range })
                // console.log(res.data)
            })
            .catch((err) => console.log(err))

        axios.get(`http://localhost:8080/get-bid-by-coin/${coinId}/${user.userid}`)
                    .then((res)=>{
                            console.log(res)
                    })  
                    .catch((err)=>console.log(err))  
    }, [])

    const changeTokenQuantity=(e)=>{
        e.preventDefault();
        if(parseInt(e.target.value)<details.min_token_qty)
          setBidErr((prevState)=>({...prevState,token_qty:"Minimum token quantity required "+details.min_token_qty}))
        else
            setBidErr((prevState)=>({...prevState,token_qty:""}))   
        setBid((prevState)=>({...prevState,token_qty:parseInt(e.target.value)}))
    }

    const changeBiddingPrice=(e)=>{
        if(parseInt(e.target.value)<price.min || parseInt(e.target.value)>price.max)
          setBidErr((prevState)=>({...prevState,bidding_price:"Bidding price must be in "+price.min+" - "+price.max+" range"}))
        else
            setBidErr((prevState)=>({...prevState,bidding_price:""}))   
        setBid((prevState)=>({...prevState,bidding_price:parseInt(e.target.value)}))
    }

    return (
        <>
        <InvestorHeader />
        <div className="card mx-auto mt-5">
            <div className="card-body">
                <h3 className="float-start mb-5">{details.token_name}</h3>
                <div className="mt-5">
                    {details.about}
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <b>Platform </b>&nbsp; &nbsp; {details.platform}
                    </div>
                    <div className="col-3">
                        <b>Category </b> &nbsp; &nbsp; {details.category}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <b>Total Number of Token </b>&nbsp; &nbsp; {details.total_tokens_available}
                    </div>
                    <div className="col-3">
                        <b>Minimum Token Quantity </b> &nbsp; &nbsp; {details.min_token_qty}
                    </div>
                </div>
                <div className="row mt-2">
                    {/* <p>Price Range</p> */}
                    <div className="col-3">
                        <b>Minimum Price</b>&nbsp; &nbsp; ₹{price.min}
                    </div>
                    <div className="col-3">
                        <b>Maximum Price</b> &nbsp; &nbsp; ₹{price.max}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <b>Start Date </b> &nbsp; &nbsp; {new Date(details.ico_start_date).toLocaleString("lookup").split(",")[0]}
                    </div>
                    <div className="col-3">
                        <b>End Date </b> &nbsp; &nbsp; {new Date(details.ico_end_date).toLocaleString("lookup").split(",")[0]}
                    </div>
                </div>
            </div>
            <div >
                <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Subscribe!
                </button>

            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Subscribe to ICO! {details.total_tokens_available}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label className="mb-3">Token Quantity &nbsp; &nbsp;</label>
                            <input id="token_qty" defaultValue={bid.token_qty} type="number" onChange={changeTokenQuantity} />                                                      
                               <p><span style={{color:"red"}}>{bidErr.token_qty}</span></p>                            
                            
                            <label className="mb-3">Bidding Price &nbsp; &nbsp;</label>
                            <input id="bidding_price" defaultValue={bid.bidding_price} type="number" onChange={changeBiddingPrice}/>
                            <p><span style={{color:"red"}}>{bidErr.bidding_price}</span></p>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CoinDetail