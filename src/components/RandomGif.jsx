import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../components/Randomgif.css'



const API_KEY =  'yUlEM138GYtYP3I0ROarjBsNf2Z9zyIJ' ;
export default function RandomGif() {
    const [GIF , SETGIF]=useState('Loading...');
     

     async function getgif(){
        const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const output = await axios.get(Url)
        const imggif =output.data.data.images.downsized_large.url;
        console.log(imggif);
        SETGIF(imggif);
     }
     useEffect(()=>{
        getgif();
     },[]);

    const clickhandler = ()=>{
        getgif();
    }
  return (
    <div className='total-1'>
     <h2 className='heading-2'>A RANDOM GIF</h2>
     <div className="gif">
        <img src= {GIF} alt="" />
     </div>
     <div className="btn-1">
        <button onClick={clickhandler}>RANDOM</button>
     </div>

    </div>
  )
}
