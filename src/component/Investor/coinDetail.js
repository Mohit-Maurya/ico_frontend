import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function CoinDetail(){
    const [details,setDetails] = useState({})
    const {state} = useLocation()
    const {coinId} = state
    useEffect(()=>{
        console.log(state,coinId)
        axios.get("http://localhost:8080/coin/"+coinId)
            .then((res)=>{
                setDetails({...res.data})
                console.log(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
return(
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
                    <b>Start Date </b> &nbsp; &nbsp; {new Date(details.ico_start_date).toLocaleString("lookup").split(",")[0]}      
                </div>
                <div className="col-3">
                    <b>End Date </b> &nbsp; &nbsp; {new Date(details.ico_end_date).toLocaleString("lookup").split(",")[0]}
                </div>
            </div>
        </div>
        <div >
            <button className="btn btn-primary float-end" id="subscribe">Subscribe</button>
        </div>
    </div>
)
}
export default CoinDetail