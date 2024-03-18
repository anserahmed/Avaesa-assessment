import React from 'react'
import online from "../online.jpg"
import skills from "../skills.jpg"
import certi from "../certi.jpg"

export default function Product() {
  return (

    <div>
      <section id="product">
        <div class="container">
          <h2>Our Course Offerings</h2>
          <p>Our course includes:</p>

          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner mx-6">
              <div class="carousel-item active">
                <img src={online} class="d-block w-100" alt="..." />

                <div class="carousel-caption d-none d-md-block mx-6 text-warning">
                  <h5>Interactive Online Sessions</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src={skills} class="d-block w-100" alt="..." />



                <div class="carousel-caption d-none d-md-block text-warning">
                  <h5>Access to Exclusive Resources</h5>
                </div>
              </div>
             
              <div class="carousel-item">
                <img src={certi} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block text-warning">
                  
                  <h5>Certificate of Completion</h5>
                </div>

              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          <p>Enroll now to unlock your potential in journalism!</p>
        </div>
      </section>
    </div>

  )
}
