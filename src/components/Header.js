import React from 'react';
import Logo from './Logo';
import { auth } from "../utils/firebase";
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error')
    });
  }
  return ( 
    <div className={'flex justify-between items-center px-14 h-20  bg-gradient-to-b from-black z-10 w-full ' + (!user ? 'absolute': 'bg-black') }>
        <div className="w-56 ml-[2%]">
          <Logo />
        </div>
           {user && <button onClick={handleSignOut} className="text-white">
            signOut
          </button>}
    </div>
  )
}

export default Header
