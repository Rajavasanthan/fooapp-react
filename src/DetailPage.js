import React, { useEffect, useState } from 'react'
import Dish from './Dish'
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';

function DetailPage(props) {
    const params = useParams()
    console.log(params)
    const [detail,setDetail] = useState(undefined)
    const [isLoading,setLoading] = useState(true)

    useEffect(async () => {
        try {
          let listData = await axios.get(`http://localhost:3000/food/res/${params.id}`)
          setDetail(listData.data)
          setLoading(false)
          //   setItemList(listData.data)
        } catch (error) {
          console.log(error)
        }
      }, [])
    return (
      <>
      {
          isLoading ? <div>Loading</div> :   <div class="container">
          <div class="showcase">
              <img src="/coverimage.jpg" class="hero-image img-fluid" alt="Responsive image" />
          </div>
          <div class="titlecase">
              <h1>{detail?.res_name}</h1>
              <h5>{detail?.location}</h5>
              <h6>{detail?.ratting}</h6>
              <a href="./index.html" class="btn btn-danger"><i class="fa fa-home"></i> Home</a>
              <button class="btn btn-outline-danger"><i class="fa fa-comments"></i> Add Review</button>
              <button class="btn btn-outline-danger"><i class="fa fa-map-marker"></i> Direction</button>
              <button class="btn btn-outline-danger"><i class="fa fa-bookmark"></i> Add Bookmark</button>
              <button class="btn btn-outline-danger"><i class="fa fa-share"></i> share</button>
          </div>
          <div class="contentcase">
              <ul class="list-group">
                  {
                      detail?.dishes.map((dish) => {
                              return <Dish data={dish}/>
                      })
                  }
              </ul>
          </div>
      </div>
      }
      </>
    )
}

export default DetailPage
