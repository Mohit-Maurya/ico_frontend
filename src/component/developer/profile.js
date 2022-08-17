import React from 'react';

function DevProfile() {
    function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
    return (
        <div className>
            <center>
                <div className='card' style={{margin: "50px", width: "70%"}}>
                    <div className='card-body'>
                        <h5 class="card-title">Hi! (developer name)</h5>
                        <center>
                            <div class="row" style={{margin: "18px"}}>
                                <div class="col-sm-8">Email</div>
                                <div class="col-sm-4">email</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{margin: "18px"}}>
                                <div class="col-sm-8">Phone number</div>
                                <div class="col-sm-4">sdfljsfljsdkjlfs</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{margin: "18px"}}>
                                <div class="col-sm-8">PAN Card</div>
                                <div class="col-sm-4">pan card</div>
                            </div>
                        </center>
                        <center>
                            <div class="row" style={{margin: "18px"}}>
                                <div class="col-sm-8">Aadhar card</div>
                                <div class="col-sm-4">aadhar card</div>
                            </div>
                        </center>
                        
                        <button>Edit your Profile</button>
                    </div>

                </div>
            </center>
        </div>
    );
}

export default DevProfile;
