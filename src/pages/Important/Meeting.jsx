import React from 'react'
import './meeting.css'
import Meetingcard from '../../component/Meetingcard'
import { useState, useEffect } from 'react'



export default function Meeting() {
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    fetch('https://meeting-app-9cd90-default-rtdb.firebaseio.com/meeting.json').then(response => response.json()).then(data => {
      const meetings = [];
      for (const key in data) {
        const meeting = {
          ...data[key]
        }
        console.log(data[key])
        meetings.push(meeting)
      }
      setMeetings(meetings)
    })
  }, [])





  return (
    <>
      <div>




        <div className="meeting-section">
          <h1 className='txt-whi heading-meet text-highlight'>Meeting that are avaialable</h1>

          <div class={meetings.length == 0 ? "bg-img-meetings" : "container-meeting-show"}>
            {
              meetings.map(x => {
                return <Meetingcard title={x.title} desc={x.desc} img={x.img} />

              })
            }
          </div>
        </div>
      </div>
    </>
  )
}