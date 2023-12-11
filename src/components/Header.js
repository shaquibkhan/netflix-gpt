import React from 'react'
import {netflixImg} from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store=> store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL}))
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser()) 
        navigate("/")
      }
    });
    return ()=> unsubscribe();
     },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={netflixImg} alt="" />
   {
   user && 
   (<img onClick={handleSignOut} className='rounded-full w-12 h-12 mt-4 mr-8 cursor-pointer' src={user?.photoURL} alt="sign-out" />)
   } 
    </div>
  )
}

export default Header