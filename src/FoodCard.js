import React from 'react'

function FoodCard(props) {
    return (
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
        <a href="./home.html" class="card-link">
            <div class="card">
                <img class="card-img-top"
                    src={props.imageUrl}
                    alt="Card image cap"/>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h4 class="dish-name">{props.foodName}</h4>
                        </div>
                        <div class="col">
                            <p class="rating">{props.ratting} <i class="fa fa-star" ></i></p>
                        </div>
                    </div>
                    <div>
                        <p class="dish-details">{props.resName}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    )
}

export default FoodCard
