import React from 'react'
import style from './About.module.css'
export default function About() {
  return <>
    <div className={`${style.About} d-flex justify-content-center align-items-center`}>
      <div className={`${style.innerLayer}`}>
        <h3 className={`${style.aboutHeading} text-center`}>ABOUT COMPONENT</h3>
        <div className={`${style.decoration} d-flex justify-content-center align-items-center mb-2`}>
          <div className={`${style.leftLine} me-3`}></div>
          <div className={`${style.Star} text-white`}><i class="fa-solid fa-star"></i></div>
          <div className={`${style.rightLine} ms-3`}></div>
        </div>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6 ps-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

            <div className="col-md-6 pe-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
}
