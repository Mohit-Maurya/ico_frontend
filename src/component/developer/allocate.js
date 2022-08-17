import React from 'react';
import axios from "axios"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

function Allocate() {

    const navigate = useNavigate();
    const [details, setDetails] = useState({})
    const [price, setPrice] = useState({ min: "", max: "" })
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
    }, [])
    return (
        <>
            <h1>HI</h1>
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
                        ALLOCATE
                    </button>

                </div>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ARE YOU SURE?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                You are about to make (total tokens sold in this ico) public!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yes!</button>
                                <button type="button" className="btn btn-primary">No:(</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Allocate;
