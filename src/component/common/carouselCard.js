import React from 'react';
// import './carousel.css'

function Carousel() {
  return (
<div class="container my-5">


    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">


        <div class="controls-top">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
        </div>

        <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">

                <div class="row">
                <div class="col-md-4">
                    <div class="card mb-2">
                        <h4 class="card-title">Card title 1</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title">Card title 2</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title">Card title 3</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>
                </div>

    
            <div class="carousel-item">

                <div class="row">
                <div class="col-md-4">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title">Card title 4</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title">Card title 5</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title">Card title 6</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>

                    </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="carousel-item">

            <div class="row">
            <div class="col-md-4">
                <div class="card mb-2">
                <div class="card-body">
                    <h4 class="card-title">Card title 7</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
                </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                <div class="card-body">
                    <h4 class="card-title">Card title 8</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
                </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                <div class="card-body">
                    <h4 class="card-title">Card title 9</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
                </div>
            </div>
            </div>
      </div>

    </div>
</div>
</div>
  )
}

export default Carousel
