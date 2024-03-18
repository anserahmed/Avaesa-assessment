import React from 'react'
import picture from "../picture.jpg"


export default function Course(props) {
  return (
    <div>
      <div class="card" style={{width:"20rem"}}>
              <img src={props.pic} class="card-img-top" style={{width:"20rem"} } alt="..."/>
              <div class="card-body">

                <h5 class="card-title">{props.coursename}</h5>

                <a href="#" class="btn btn-warning">Get now</a>
              </div>
            </div>
    </div>
  )
}
