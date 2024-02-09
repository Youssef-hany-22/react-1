import React from 'react'
import style from './Contact.module.css'
export default function Contact() {

  function displayLabels(label){
    
    document.getElementById(`${label}`).classList.replace(`${style.translateYb}`,`${style.translateYa}`)
  }

  function hideLabel(label){
    document.getElementById(`${label}`).classList.replace(`${style.translateYa}`,`${style.translateYb}`)
  }


  return <>
    <div className={`${style.contact}`}>
      <h3 className={`${style.contactHeading}  pt-4`}>CONATCT SECTION</h3>
      <div className={`${style.decoration} d-flex justify-content-center align-items-center mb-2`}>
          <div className={`${style.leftLine} me-3`}></div>
          <div className={`${style.Star} `}><i class="fa-solid fa-star"></i></div>
          <div className={`${style.rightLine} ms-3`}></div>
        </div>
        </div>
    
    <div className="container py-3 px-md-5 ">
        <div action="" className='w-75 mx-auto p-md-3 px-md-5 mt-md-5'>
        <label htmlFor="userName" id='userName' className={`${style.formLabel}  ${style.translateYb}`}>userName : </label>
        <input placeholder="userName" id='userNameInput' type="text" onKeyUp={()=>{ if(document.getElementById('userNameInput').value != '') {displayLabels('userName')} else{ hideLabel('userName') }  }} className={`form-control ${style.forma}  border-0 border-bottom py-3 position-relative `} />
        
        <label htmlFor="userAge" id='userAge' className={`${style.formLabel}  ${style.translateYb}`}>userAge : </label>
        <input placeholder="userAge" id='userAgeInput' type="text" onKeyUp={()=>{ if(document.getElementById('userAgeInput').value != '') {displayLabels('userAge')} else{ hideLabel('userAge') }  }} className={`form-control ${style.forma}  border-0 border-bottom py-3 position-relative `} />





        <label htmlFor="userEmail" id='userEmail' className={`${style.formLabel}  ${style.translateYb}`}>userEmail : </label>
        <input placeholder="userEmail" id='userEmailInput' type="text" onKeyUp={()=>{ if(document.getElementById('userEmailInput').value != '') {displayLabels('userEmail')} else{ hideLabel('userEmail') }  }} className={`form-control ${style.forma}  border-0 border-bottom py-3 position-relative `} />





        <label htmlFor="userPassword" id='userPassword' className={`${style.formLabel}  ${style.translateYb}`}>userPassword : </label>
        <input placeholder="userPassword" id='userPasswordInput' type="text" onKeyUp={()=>{ if(document.getElementById('userPasswordInput').value != '') {displayLabels('userPassword')} else{ hideLabel('userPassword') }  }} className={`form-control ${style.forma}  border-0 border-bottom py-3 position-relative `} />
        
        
        <button  className={`btn mt-4  text-white ${style.submitBtn}`} > send Message </button>
        
        </div>
    </div>

  </>
}
