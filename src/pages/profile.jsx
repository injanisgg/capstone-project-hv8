import React, { useEffect, useState } from 'react'
import HeadProfile from '../img/header-profile.png'
import Zee from '../img/zee.jpeg'
import Loading from '../img/loading.gif'
import axios from 'axios'

function Profile() {

  //state profile
  const [ profile, setProfile ] = useState(null)

  //fetching profile no 10
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users/10')
        setProfile(response.data)

      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }

    fetchProfile();
  }, [])

  // menampilkan loading jika profile masih null
  if (!profile) {
    return <div className='flex justify-center'>
              <img src={Loading} alt="Loading..." className='text-main-army my-48' />
          </div>;
  }

  // Fungsi untuk mengubah huruf pertama menjadi uppercase
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  //fungsi logout remove token localStorage
  const handleLogout = () => {
    localStorage.removeItem("authToken");
  }

  return (
    <>
    {/*header*/}
    <header>
      <img src={HeadProfile} alt="img" className='w-full h-12'/>
      <div className='flex justify-between mx-20 my-5 items-center'>
        <div className="flex gap-5 items-center">
          <div className="shadow-md rounded-full overflow-hidden">
            <div className="relative">
                <img src={Zee} alt='zee' className="w-32 h-32 object-cover" />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-main-army font-bold text-xl'>{capitalize(profile.name.firstname)} {capitalize(profile.name.lastname)}</span>
            <span className='text-gray-500'>{profile.email}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg w-24 bg-main-yellow h-10 font-semibold">Edit</button>
          <button className="rounded-lg w-24 bg-red-500 h-10 font-semibold" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
    {/*end of header*/}

    {/*form profile*/}
    <form action="" className='flex justify-center gap-12'>
      <div className="flex flex-col gap-7">
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Full Name</label>
          <input type="text" name="" id="" placeholder='Your full name' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Email</label>
          <input type="email" name="" id="" placeholder='Your email' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Gender</label>
          <input type="text" name="" id="" placeholder='Your Gender' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
      </div>
      <div className="flex flex-col gap-7">
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Phone</label>
          <input type="text" name="" id="" placeholder='Your Phone Number' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Username</label>
          <input type="text" name="" id="" placeholder='Your username' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
        <span className='flex flex-col'>
          <label htmlFor="" className='text-main-army font-bold'>Password</label>
          <input type="password" name="" id="" placeholder='Your password' className='form-input w-[30rem] bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-500 placeholder-gray-500 border border-gray-400'/>
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className='text-main-army font-bold'>Address</label>
        <textarea 
          className="top-0 left-0 w-96 h-64 bg-gray-100 rounded-lg p-5 text-gray-700 placeholder-gray-500 border border-gray-400 resize-none" 
          placeholder="Your Address"
        />
      </div>
    </form>
    {/*end of form profile*/}
    </>
  )
}

export default Profile;
