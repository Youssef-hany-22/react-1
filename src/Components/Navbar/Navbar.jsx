import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {

  function changeNavbarColor(e){

    if(e.id == 'about'){
      document.getElementById('about').style.backgroundColor='#1abc9c'
    } else {
      document.getElementById('about').style.backgroundColor='#2c3e50'
    }


    if(e.id == 'portfolio'){
      document.getElementById('portfolio').style.backgroundColor='#1abc9c'
    } else {
      document.getElementById('portfolio').style.backgroundColor='#2c3e50'
    }
    

    
    if(e.id == 'contact'){
      document.getElementById('contact').style.backgroundColor='#1abc9c'
    } else {
      document.getElementById('contact').style.backgroundColor='#2c3e50'
    }

  }


  return <>
  <nav className={`navbar navbar-expand-lg py-4 position-fixed start-0 end-0 top-0  ${style.Navbar}`}>
  <div className="container">
    <Link  className={`navbar-brand text-uppercase text-white ${style.NavLogo}`} to="/"  onClick={(e)=>{ changeNavbarColor(e.target)}} id='home'  >Start FrameWork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link  rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="about"  onClick={(e)=>{ changeNavbarColor(e.target)}} id='about'  >About</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link  rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="protfolio"  onClick={(e)=>{ changeNavbarColor(e.target)}} id='portfolio' >Portfolio</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link  rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="contact"  onClick={(e)=>{ changeNavbarColor(e.target)}} id='contact' >Contact</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
</>
}
