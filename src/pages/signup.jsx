import React from 'react'
import FormIn from '../components/FormIn'
import ImgLeft from '../img/left-sec.png'

function SignUp() {
  return (
    <div className='flex justify-around items-center'>
      <div>
        <h1 className="text-main-army text-4xl font-bold pr-32 ml-60 absolute top-8 left-18 md:left-14 z-10">MON.CHÉRIE</h1>
        <img id='jkt' src={ImgLeft} alt="JKT48 Greshan Family" className='w-[40rem] md:w-[30rem] relative z-0'/>
      </div>
      <FormIn welcomeText={"Nice to see you!"} buttonText={"Sign in"} questOne={"Already have an account?"} actionOne={"Login"} redirectTo={"/login"}/>
    </div>
  )
}

export default SignUp
