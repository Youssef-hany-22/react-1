import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>
  <div >
  <div className={`${style.upperdiv} p-4  `}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-5">
            <div className={`${style.innerLayer} text-center text-white`}>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4 p-5">
            <div className={`${style.innerLayer} text-center text-white`}>
            <h3>AROUND THE WEB</h3>
            <div className={`icons`}>
              <i className={`fa-brands fa-facebook mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-twitter mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-linkedin-in mx-1 ${style.icon}`}></i>
              <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-5 px-2">
            <div className={`${style.innerLayer} text-center text-white`}>
            <h3>ABOUT FREELANCER</h3>
            <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`${style.lowerdiv} d-flex justify-content-center align-items-center`}>
      <h2>Copyright © Your Website 2021</h2>
    </div>
  </div>
    
  </>
}
