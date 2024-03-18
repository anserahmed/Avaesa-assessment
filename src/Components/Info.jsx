import React from 'react'
import Course from "./Course"
import picture from "../picture.jpg"
import story from "../story.jpg"
import interview from "../interview'.jpg"
import media from "../media.jpg"
import writing from "../writing.jpg"
import digital from "../digital.jpg"

export default function Info() {
  return (
    <div>
      <section id="info">
        <div class="container">
          <h2>Course Information</h2>
          <p>Our course covers a wide range of topics including:</p>
          <div className='course'>
            <Course pic={picture} coursename="Investigative Journalism" />
            <Course pic={story} coursename="Storytelling Techniques" />
            <Course pic={interview} coursename="Interviewing Skills" />
          </div>

          <div className='course'>
          <Course pic={media} coursename="Media Ethics" />
          <Course pic={writing} coursename="News Writing" />
          <Course pic={digital} coursename="Digital Journalism" />
        </div>



        <p id='cont'>For more details about the course structure and schedule, please <a href="#contact">contact us</a></p>
    </div>
      </section >
    </div >
  )
}
