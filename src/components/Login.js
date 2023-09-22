import React, { useState } from 'react'
import Header from './Header'
import {Validation} from '../utils/validate'

const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const toggleSignInForm = () => {
    setSignIn(!signIn)
  }
  const handleValidate = (e) => {
    e.preventDefault();
    Validation(email,password)
     
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <form className='absolute bg-black w-3/12 p-12 my-32 mx-auto left-0 right-0 rounded-lg' >
        <h1 className='text-4xl text-white'>{signIn ? "Sign In" : "Sign Up"}</h1>
       {(!signIn) &&  <input type='text' placeholder='full name' className='rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full' />}
        <input type='text' placeholder='email or phone number' className='rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full'/>
        <input type='text' placeholder='password' className='rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full'/>
        <button onClick={handleValidate} className='rounded-lg mx-auto w-full p-2 m-4 bg-red-600 text-white'>{signIn ? "Sign In": "Sign Up"}</button>
        <p onClick={toggleSignInForm} className='cursor-pointer text-white'>{signIn ? "New to Netflix? Sign Up now" : "Already a member? Sign In now"} </p>
      </form>
      </div>
  )
}

export default Login