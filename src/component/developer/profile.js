import React, { useState, useEffect } from 'react';
import {useSelector} from "react-redux"
import axios from 'axios';

function DevProfile() {

    const user = useSelector((state)=>state.user.value)
    const [data,setData] = useState({})
    useEffect(() => {
        console.log(user)
        axios.get(`http://localhost:8080/get-developer-by-id/${user.userid}`)
            .then((res) => {
                    setData(res.data)
                    console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className>
            <center>
            <br />
        <br />
        <h1 > YOUR PROFILE</h1>
                <div className='card' style={{ margin: "50px", width: "70%" }}>
                    <div className='card-body'>
                        <h3 class="card-title">Hi {`${data.name}`}!</h3>
                        <center>
                            <div class="row" style={{ margin: "18px" }}>
                                <div class="col-sm-8"><b>Email</b></div>
                                <div class="col-sm-4">{`${data.email}`}</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{ margin: "18px" }}>
                                <div class="col-sm-8"><b>Phone number</b></div>
                                <div class="col-sm-4">{`${data.phone_number}`}</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{ margin: "18px" }}>
                                <div class="col-sm-8"><b>PAN number</b></div>
                                <div class="col-sm-4">{`${data.pan}`}</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{ margin: "18px" }}>
                                <div class="col-sm-8"><b>Aadhar Card number</b></div>
                                <div class="col-sm-4">{`${data.aadhaar}`}</div>
                            </div>
                        </center>

                        {/* <button >Edit your Profile</button> */}
                    </div>

                </div>
            </center>
        </div>
    );
}

export default DevProfile;
