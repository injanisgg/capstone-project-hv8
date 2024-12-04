import React from 'react'
import LandingPage from '../components/Landing';
import DressStyle from '../components/DressStyle';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';

function Home() {
  return (
    <div>
      <LandingPage/>
      <DressStyle/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default Home;
