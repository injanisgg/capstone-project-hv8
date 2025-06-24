import React from 'react'
import FormIn from '../components/FormIn'
import ImgLeft from '../img/left-sec.png'

function SignUp() {
  return (
    <div className='flex flex-col lg:flex-row justify-around pt-5 items-center'>
      <div>
        <h1 className="text-main-army text-4xl font-bold lg:pr-32 lg:ml-60 lg:absolute lg:top-8 1xl:left-18 xl:left-14 z-10">MON.CHÉRIE</h1>
        <img id='jkt' src={ImgLeft} alt="JKT48 Greshan Family" className='hidden lg:block 1xl:w-[40rem] xl:w-[32rem] relative z-0'/>
      </div>
      <FormIn welcomeText={"Nice to see you!"} buttonText={"Sign in"} questOne={"Already have an account?"} actionOne={"Login"} redirectTo={"/login"}/>
    </div>
  )
}

export default SignUp
