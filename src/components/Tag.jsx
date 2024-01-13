import '../components/Tag.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =  'yUlEM138GYtYP3I0ROarjBsNf2Z9zyIJ' ;
export default function Tag() {
    const [GIF , SETGIF]=useState('Loading...');
    const [input ,setinput] =  useState('');
     

     async function getgif(){
        const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${input}`
        const output = await axios.get(Url)
        const imggif =output.data.data.images.downsized_large.url;
        console.log(imggif);
        SETGIF(imggif);
     }
     useEffect(()=>{
        getgif();
     },[]);
     const handle = (e)=>{
      setinput(e.target.value) ;
     }
     const newbhai = ()=>{
        getgif();
     }
  return (
    <div className='total-2'>
    <div className='heading-3'>
     <h1>RANDOM GIF BY YOU</h1>
    </div>
    <div className="gif-2">
        <img src= {GIF} />
    </div>

    <div className="inputsearch">
       ENTER YOUR GIF:-<input type="text" placeholder='ENTER YOUR GIF TYPE' value={input}  onChange={handle}/>
    </div>
    <div className="btn-2">
        <button onClick={newbhai}>SEARCH</button>
    </div>

    </div>

  )
}
