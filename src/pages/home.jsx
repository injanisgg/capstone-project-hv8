import React from 'react'
import LandingPage from '../components/Landing';
import DressStyle from '../components/DressStyle';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import Category from '../components/Category';
import PopupSignin from '../components/PopupSignin';

function Home() {

  const isLoggedin = localStorage.getItem('authToken')
  const showPopupSignin = !isLoggedin

  return (
    <div>
      {showPopupSignin && <PopupSignin/>}
      <div className={`${isLoggedin ? 'mt-24' : 'mt-32'}`}></div>
      <LandingPage/>
      <Category headTitle={'NEW ARRIVALS'} categoryProduct={"men's clothing"}/>
      <Category headTitle={'TOP SELLING'} categoryProduct={"jewelery"}/>
      <DressStyle/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default Home;
