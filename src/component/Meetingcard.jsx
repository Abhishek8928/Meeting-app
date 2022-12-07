import React from 'react'
import './meetingcard.css'
export default function Meetingcard(props) {
  return (
    <div>
      <div className="card">
        <h2 className='txt-whi mb-0'>{props.title}</h2>
        <p className='txt-whi mt-0 meeting-desc'>{props.desc}</p>
        <button className="btn-join">Join Meeting</button>
      </div>
    </div>
  )
}
