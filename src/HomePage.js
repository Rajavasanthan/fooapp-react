import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import Header from './Header'
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [itemList, setItemList] = useState([])
  const [isLoading,setLoading] = useState(true)
  useEffect(async () => {
    try {
      let listData = await axios.get("http://localhost:3000/food")
      setItemList(listData.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div class="foodie">
      <Header />
     {
       isLoading ? <div>Loading</div> :  <div class="container">
       <div class="content-page">
         <div class="row foodview" >

           {
             itemList.map((item) => {
               return <FoodCard imageUrl={item.image_url} foodName={item.res_name} ratting={item.ratting} resName={item.location} id={item._id} />
              
             })
           }


          </div>
       </div>
     </div>
     }
    </div>
  )
}

export default HomePage
