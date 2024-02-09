import React from 'react'
import style from './Portgolio.module.css'
import port1 from '../../Assest/Images/poert1.png'
import port2 from '../../Assest/Images/port2.png'
import port3 from '../../Assest/Images/port3.png'

export default function Portfolio() {


  function displayImg(image){
    document.getElementById('outerLayer').classList.replace('d-none','d-block')
    document.getElementById('images').setAttribute('src',`${image}`)
  }

  function closeFunction(){
    document.getElementById('outerLayer').classList.replace('d-block','d-none')
  }


  return <>
    <div className={`${style.portfolio}`}>
      <h3 className={`${style.portfolioHeading}  pt-4`}>PORTFOLIO COMPONENT</h3>
      <div className={`${style.decoration} d-flex justify-content-center align-items-center mb-2`}>
          <div className={`${style.leftLine} me-3`}></div>
          <div className={`${style.Star} `}><i class="fa-solid fa-star"></i></div>
          <div className={`${style.rightLine} ms-3`}></div>
        </div>

      <div className="container mb-5 mt-3">
        <div className="row g-5 ">
          <div className="col-md-4 ">
            <div onClick={()=>{
                    displayImg(port1)
              }} className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img  src={port1} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={()=>{
                    displayImg(port2)
              }} className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img src={port2} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={()=>{
                    displayImg(port3)
              }} className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img src={port3} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div onClick={()=>{
                    displayImg(port1)
              }} className="col-md-4 ">
            <div className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img src={port1} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={()=>{
                    displayImg(port2)
              }} className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img src={port2} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div onClick={()=>{
                    displayImg(port3)
              }} className="col-md-4 ">
            <div className={`${style.innerLayer} rounded-2 position-relative overflow-hidden`}>
              <img src={port3} className='w-100 ' alt="" />
              <div className={` ${style.imgdecoration} opacity-0 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div onClick={(e)=>{
        if(e.target.id  == 'outerLayer'){
          closeFunction()
        }
        
      }} id='outerLayer' className={`${style.outerLayer} bg-primary d-none bg-opacity-25 d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0`}>
        <div className={`${style.innerImg}`}>
          <img id='images' className={`${style.images}`} src="" alt="" />
        </div>
      </div>


    </div>
  </>
}
