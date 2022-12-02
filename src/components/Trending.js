import React, { useEffect, useState } from 'react'
import trendlogo from './trend.png'
import Axios from "axios";
const Trending = () => {
    const [trend, setTrend] = useState([])
    useEffect(_ => {
        (async _ => {
            const response = await Axios.get(
              `https://api.giphy.com/v1/gifs/trending?api_key=NJ1oCEZHbFkjRgOsxRTyGJx3LzNXZjEw&limit=25&rating=g`,
            )
            const data = response.data;
            setTrend(data.data)
            })();
    },[])
  return (
    <div className='trendingSec'>
      <div>
        <p className='trendlogo'><img src={trendlogo} alt="trend"/>Trending</p>
        <div className='trendGif'>
        {
            trend.map((gif,idx) =>{
                return(
                    <img key={idx} src={gif.images.downsized.url} alt='gif'/>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Trending
