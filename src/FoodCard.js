import React from 'react'

function FoodCard() {
    return (
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
        <a href="./home.html" class="card-link">
            <div class="card">
                <img class="card-img-top"
                    src="https://st2.depositphotos.com/3147737/5188/i/600/depositphotos_51888195-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
                    alt="Card image cap"/>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h4 class="dish-name">Biriyani</h4>
                        </div>
                        <div class="col">
                            <p class="rating">5 <i class="fa fa-star" ></i></p>
                        </div>
                    </div>
                    <div>
                        <p class="dish-details">Thinduakal Thalapakatti Rs.350</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    )
}

export default FoodCard
