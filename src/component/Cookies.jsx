import React from 'react'
import './cookies.css'
import {useEffect,useState} from 'react'
import cookies from './cookies.png'
export default function Cookies() {

    const [update ,setupdate] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setupdate(true)
        }, 3000);

    },[])

    useEffect(()=>{
        setTimeout(() => {
            setupdate(false)
        }, 20000);

    },[])
  return (
    <div >
      <div id = "con" className={update?"cookies-container":"cookies-d-none"}>
        <div>
        <i class="bi bi-x-lg c-pointer"  onClick = {()=>{
            let values = document.getElementById('con');
            values.classList.add('cookies-d-none');
        }}></i>
        </div>
        <div className="cook-flex">
        <img className="cookies-resize animation" src={cookies} alt="" />

        <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <button className="btn-accept">Accept Cookies</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}
