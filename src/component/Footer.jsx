import React from 'react'
import './footer.css';
import symbol from '../images/logo.svg'
export default function Footer() {
  return (

    <footer>
      <div >

        <hr />
        <div className="footer-wrapper">

          <div className="first-one">
            <img className='footer-logo' src={symbol} alt="" />
          </div>


          <div className="second-one">
            <ul className="footer-link">
              <li>Resources</li>
              <li className='footer-col'>Download Desktop App</li>
              <li className='footer-col'>Security</li>
              <li className='footer-col'>Terms of Service</li>
              <li className='footer-col'>Privacy Policy</li>
            </ul>
          </div>


          <div className="third-one">
            <ul className="footer-link">
              <li >Company</li>
              <li className='footer-col'>Careers</li>
              <li className='footer-col'>Contact Us</li>
              <li className='footer-col'>Blog</li>
            </ul>
          </div>


          <div className="fourth-one">
            <ul className="footer-link">
              <li className='footer-col'>Find Us</li>
              <li className='footer-col'>Linkedin</li>
              <li className='footer-col'>Twitter</li>
              <li className='footer-col'>Discord</li>
            </ul>
          </div>
        </div>
        <h1 className='footer-col mt-0'>Made by Abhishek Sharma </h1>
      </div>

      
    </footer>

  )
}
