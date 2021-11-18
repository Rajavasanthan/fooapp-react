import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import Header from './Header'
import axios from 'axios';

function HomePage() {
  const [itemList, setItemList] = useState([])

  useEffect(async () => {
    try {
      let listData = await axios.get("http://localhost:3000/food")
      setItemList(listData.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div class="foodie">
      <Header />
      <div class="container">
        <div class="content-page">
          <div class="row foodview" >

            {
              itemList.map((item) => {
                return <FoodCard imageUrl={item.image_url} foodName={item.res_name} ratting={item.ratting} resName={item.location} />
              })
            }


            {/* <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt" foodName="Food 1" ratting="5" resName="New Restraunt 1"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 2" foodName="Food 2" ratting="3" resName="New Restraunt 2"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 3" foodName="Food 3" ratting="4.5" resName="New Restraunt 3"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 4" foodName="Food 4" ratting="5" resName="New Restraunt 4"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 5" foodName="Food 5" ratting="2" resName="New Restraunt 5"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 6" foodName="Food 6" ratting="1" resName="New Restraunt 6"/>
            <FoodCard imageUrl="http://placehold.it/500x500?text=New Restraunt 7" foodName="Food 7" ratting="3" resName="New Restraunt 7"/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
