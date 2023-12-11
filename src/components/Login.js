import React, { useState , useRef} from 'react'
import Header from './Header'
import {Validation} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_IMG } from '../utils/constant';

const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const [errMsg, setErrMsg] = useState(null)
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setSignIn(!signIn)
  }
  const handleValidate = (e) => {
    e.preventDefault();
    
   const message =  Validation(email.current.value,password.current.value)
   setErrMsg(message);
    if (message) return;

    if (!signIn) {
      // sign up logic 
     
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("create user", user)
    updateProfile(user, {
      displayName: name.current.value, photoURL: AVATAR_IMG
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL}))
      // Profile updated!
      // ... 
    }).catch((error) => {
      // An error occurred
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode + "-" + errorMessage)
    console.log(errMsg)
  });
    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Logged In",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode + "-" + errorMessage)
  });
    }
    // console.log(email.current.value);
    // console.log(password.current.value);
     
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute w-full h-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <form className='absolute bg-black md:w-80 p-12 my-32 mx-auto left-0 right-0 rounded-lg' >
        <h1 className='text-4xl text-white'>{signIn ? "Sign In" : "Sign Up"}</h1>

       {(!signIn) &&  <input ref={name} type='text' placeholder='full name' className='text-white rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full' />}

        <input ref={email} type='text' placeholder='email or phone number' className='text-white rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full'/>
        
        <input ref={password} type='text' placeholder='password' className='text-white rounded-lg mx-auto p-2 m-4 bg-gray-800 w-full'/>

        <p className='text-red-400 '>{errMsg}</p>
        <button onClick={handleValidate} className='rounded-lg mx-auto w-full p-2 m-4 bg-red-600 text-white'>{signIn ? "Sign In": "Sign Up"}</button>

        <p onClick={toggleSignInForm} className='cursor-pointer text-white'>{signIn ? "New to Netflix? Sign Up now" : "Already a member? Sign In now"} </p>
      </form>
      </div>
  )
}

export default Login