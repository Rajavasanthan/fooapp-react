import React from 'react'
import FoodCard from './FoodCard'
import Header from './Header'

function HomePage() {
    return (
        <div class="foodie">
      <Header />
      <div class="container">
        <div class="content-page">
          <div class="row foodview" >
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomePage
