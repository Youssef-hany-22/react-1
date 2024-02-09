import React from 'react'
import style from './Home.module.css'
import avatar from '../../Assest/Images/avataaars.svg'

export default function Home() {
  return <>
    <div className={`${style.home} d-flex justify-content-center align-items-end pb-5`}>
      <div className={`${style.innerLayer} text-center`}>
        <img src={avatar} className={`${style.homeAvatar}`} alt="avatar" />
        <h2 className={`pt-5 ${style.homeHeading}`}>START FRAMEWORK</h2>
        <div className={`${style.decoration} d-flex justify-content-center align-items-center mb-2`}>
          <div className={`${style.leftLine} me-3`}></div>
          <div className={`${style.Star} text-white`}><i class="fa-solid fa-star"></i></div>
          <div className={`${style.rightLine} ms-3`}></div>
        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </div>
  
  </>
}
