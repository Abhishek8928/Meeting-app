import React from 'react'
import './home.css'
import heroimg from '../../images/assest-3.png'
export default function Home() {
  
  return (

    <div className='txt-md-center'>
    <div className="bg-img">
      <div className="hero-section">
        <div className="wrapper-container">

          <div className="first-container">
            <h1 className="heading high">
              Do you have a great idea? Let's create it  together
            </h1>
            <p className='title-desc'>Calling, meetings, messaging, and events in the cloud for teams of all sizes.</p>
            <small class='small'>Available on Mac, Windows, and web.</small>
             <div className="m-2">
            <button className="btn-signup">Request a demo</button>
                <button className="btn-add">Add Meeting</button>
                </div> 
          </div>
          <div className="second-container">
            <img width='100%' src={heroimg} alt="" />
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
