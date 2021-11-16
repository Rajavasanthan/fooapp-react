import React from 'react'

function Dish() {
    return (
        <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <div class="row">
                                <div class="col">
                                    <img src="https://st2.depositphotos.com/3147737/5188/i/600/depositphotos_51888195-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg" class="list-image rounded float-left" alt="list image" />
                                </div>
                                <div class="col">
                                    <h5>Chiken Biriyani</h5>
                                    <p><i class="fa fa-star" ></i><i class="fa fa-star"></i><i class="fa fa-star" ></i><i class="fa fa-star" style={{ color: "gold" }}></i><i class="fa fa-star"></i></p>
                                    <p>₹ 120</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-outline-danger">Add <i class="fa fa-plus"></i></button>
                        </div>
                    </li>
    )
}

export default Dish
