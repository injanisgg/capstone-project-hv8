import React from 'react'
import FormIn from '../components/FormIn'
import ImgLeft from '../img/left-sec.png'

function LoginPage() {
  return (
    <div className='flex justify-around items-center'>
      <div>
        <h1 className="text-main-army text-4xl font-bold pr-32 ml-60 absolute top-8 left-18 z-10">MON.CHÉRIE</h1>
        <img id='jkt' src={ImgLeft} alt="JKT48 Greshan Family" className='w-[40rem] relative z-0'/>
      </div>
      <FormIn welcomeText={"Nice to see you again!"} buttonText={"Login"} questOne={"Don't have an account?"} actionOne={'Get Started'} redirectTo={"/signin"}/>
    </div>
  )
}

export default LoginPage
