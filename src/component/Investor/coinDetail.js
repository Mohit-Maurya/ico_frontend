import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";


function CoinDetail() {
    const [details, setDetails] = useState({})
    const user = useSelector((state) => state.user.value)
    const [exists,setExists] = useState(false)
    const [refresh,setRefresh] = useState(false)
    const [price, setPrice] = useState({ min: "", max: "" })
    const [bid,setBid] = useState({token_qty:"",bidding_price:"",bid_id:""})
    const [bidErr,setBidErr] = useState({token_qty:"",bidding_price:""})
    const { state } = useLocation()
    const { coinId,status } = state
    useEffect(() => {
        // console.log(state,coinId)
        axios.get("http://localhost:8080/coins/" + coinId)
            .then((res) => {
                setDetails({ ...res.data })
                setPrice({ ...res.data.price_range })
                // console.log(res.data)
            })
            .catch((err) => console.log(err))

        axios.get(`http://localhost:8080/get-bid-by-coin/${coinId}/${user.userid}`)
                    .then((res)=>{
                            console.log(res)
                            if(res.data.msg==='Bid exists')
                                {
                                    setExists(true)
                                    setBid({token_qty:res.data.data.token_qty,bidding_price:res.data.data.bidding_price,bid_id:res.data.data._id})
                                }
                    })  
                    .catch((err)=>console.log(err))  
    }, [refresh])

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

    const onClickSubscribe=(e)=>{
        e.preventDefault()
        console.log({coin_id:coinId,investor_id:user.userid,coin_name:details.token_name,status:"Active",token_qty:bid.token_qty,bidding_price:bid.bidding_price})
        if(!exists)
        {
            axios.post("http://localhost:8080/biddings",{coin_id:coinId,investor_id:user.userid,coin_name:details.token_name,status:"Active",token_qty:bid.token_qty,bidding_price:bid.bidding_price})
                .then((res)=>{
                    console.log(res)
                    alert("successfully subscribed")
                })
                .catch((err)=>console.log(err))
        }
       else
       {
            axios.post("http://localhost:8080/editBid/",{id:bid.bid_id,coin_id:coinId,investor_id:user.userid,coin_name:details.token_name,status:"Active",token_qty:bid.token_qty,bidding_price:bid.bidding_price})
            .then((res)=>{
                console.log(res)
                alert("successfully updated the subscription")
            })
            .catch((err)=>console.log(err))
          
       } 
    }

    return (
        <>
        <div className="card mx-auto mt-5">
        <div className="card-body">
                    <h3 className="card-title">{details.token_name}</h3>
                    <br />
                    <br />
                    <div className="row mt-2">
                        <div className="">
                        <b>Coin description: </b>{details.about}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Platform: </b>&nbsp; &nbsp; {details.platform}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Category: </b> &nbsp; &nbsp; {details.category}
                        </div>

                        <div className="col-5 mt-4">
                            <b>Total Number of Token: </b>&nbsp; &nbsp; {details.total_tokens_available}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Minimum Token Quantity: </b> &nbsp; &nbsp; {details.min_token_qty}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Minimum Price:</b>&nbsp; &nbsp; ₹{price.min}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Maximum Price:</b> &nbsp; &nbsp; ₹{price.max}
                        </div>
                        <div className="col-5 mt-4">
                            <b>Start Date: </b> &nbsp; &nbsp; {new Date(details.ico_start_date).toLocaleString("lookup").split(",")[0]}
                        </div>
                        <div className="col-5 mt-4">
                            <b>End Date: </b> &nbsp; &nbsp; {new Date(details.ico_end_date).toLocaleString("lookup").split(",")[0]}
                        </div>
                    </div>
                </div>
            <div >
                {
                    status==="Active" ?
                    <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Subscribe!
                    </button> :<></>
                }

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
                           {exists ? <p><span style={{color:"red"}}>Note:</span> Bid already exist any changes will update the existing bid</p>:<></>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e)=>{e.preventDefault();}}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={onClickSubscribe} data-bs-dismiss="modal">Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CoinDetail