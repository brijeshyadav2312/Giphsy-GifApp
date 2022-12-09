import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Card from './Card';
import Trending from './Trending';
import { slice } from 'lodash';
//images
import logo from './200w.webp';
import down from './down.png';
import search from './searching.png';

const Main = () => {
 const [value, setValue] = useState('india');
 const [gif, setGif] = useState([]);
 const [load,setLoad] = useState(16);
 const [isCompleted, setIsCompleted] = useState(false);
 const initialPosts = slice(gif, 0, load)
  useEffect (_ => {
    try{
      (async _ => {
        const response = await Axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=NJ1oCEZHbFkjRgGJx3LzNXZjEw&q=${value}&limit=100&offset=0&rating=g&lang=en`,
        )
        const data = response.data;
        console.log(data)
        setGif(data.data);
      })();
    }
    catch{
      alert("NOT Matched");
    }
    if(value.length===0){
      setValue('india')
     }
  },[value]);

  const loadMore = () => {
    setLoad(load + 15)
    console.log(load)

    if (load >= gif.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  
  return (
    <div className='parent'>
      <div className='navbaar'>
        <span><img src={logo} alt=''/>GIPHSY</span>
        <span><input type='text' placeholder='Search All Gif' onKeyUp={(e) =>setValue(e.target.value)}/><img src={search} alt=''/></span>
      </div>
      <div className='gifSection'>
          <Trending/>
          <Card gifdata = {initialPosts} />

          {isCompleted ? (
          <p onClick={loadMore} className="loadMore">That's It</p>
        ) : (
          <p onClick={loadMore} className="loadMore"><img  src={down} alt="load"/>Load More</p>
        )}


      </div>
    </div>
  );
}

export default Main;
