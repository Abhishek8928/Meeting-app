import React from 'react'
import './addmeeting.css'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Addmeeting() {
  let inputTitle = useRef(null);
  let inputImg = useRef(null);
  let inputDesc = useRef(null);
  let navigate = useNavigate();


  fetch('https://meeting-app-9cd90-default-rtdb.firebaseio.com/meeting.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <div className='addmeet-bg'>
      <div className="addmeeting-section ">
        <h1 className='heading-meet text-highlight mb-0'>Create a new Meeting</h1>
        
        <p className='meet-desc mt-0'>
Engaging webinar and event experiences made easy.</p>
        <div className="form-container">
          <div className="form-group">
          
            <input ref={inputTitle} type="text" className="form-control" placeholder='Enter the meeting title' />
          </div>

          <div className="form-group">
            <input ref={inputImg} type="text" className="form-control" placeholder='Enter the meeting title' />
          </div>

          <div className="form-group">
            <textarea ref={inputDesc} type="text" className="form-control" placeholder='Enter the description' />
          </div>
        
          <button className="btn-add-meet" onClick={() => {
            console.log("button is clicked");
            let userMeetingDetails = {
              title: inputTitle.current.value,
              img: inputImg.current.value,
              desc:inputDesc.current.value
            }
            // uploading the data to the firebase

            fetch('https://meeting-app-9cd90-default-rtdb.firebaseio.com/meeting.json', {
              method: 'post',
              body: JSON.stringify(userMeetingDetails)
            }).then(() => {
              navigate('/');
            })
          
          }}>Create New Meeting</button>

          
        </div>
        

          
      </div>
    </div>
  )
}
