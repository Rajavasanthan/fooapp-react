import React from 'react'
import Dish from './Dish'

function DetailPage() {
    return (
        <div class="container">
            <div class="showcase">
                <img src="./coverimage.jpg" class="hero-image img-fluid" alt="Responsive image" />
            </div>
            <div class="titlecase">
                <h1>Biriyani</h1>
                <h5>Dindugal Thalapakatti Biriyani</h5>
                <h6>Chennai 10AM - 10PM</h6>
                <a href="./index.html" class="btn btn-danger"><i class="fa fa-home"></i> Home</a>
                <button class="btn btn-outline-danger"><i class="fa fa-comments"></i> Add Review</button>
                <button class="btn btn-outline-danger"><i class="fa fa-map-marker"></i> Direction</button>
                <button class="btn btn-outline-danger"><i class="fa fa-bookmark"></i> Add Bookmark</button>
                <button class="btn btn-outline-danger"><i class="fa fa-share"></i> share</button>
            </div>
            <div class="contentcase">
                <ul class="list-group">
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                </ul>
            </div>
        </div>
    )
}

export default DetailPage
