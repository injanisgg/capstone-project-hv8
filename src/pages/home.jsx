import React from 'react'
import LandingPage from '../components/Landing';
import DressStyle from '../components/DressStyle';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import Category from '../components/Category';

function Home() {

  return (
    <div>
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
