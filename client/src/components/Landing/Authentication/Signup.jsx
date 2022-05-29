import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../../redux/actions';


export default function Signup() {
  const dispatch = useDispatch();

  const [userSignup, setUserSignup] = useState({email: '', password: ''})

  function signUpChange(e) {
    setUserSignup({...userSignup, [e.target.name]:e.target.value})
  }

  function handleSignUp(e) {
    e.preventDefault()
    dispatch(signUp(userSignup))
    setUserSignup({email: '', password: ''})
  }

  return (

    <div className='border-solid border-2 border-sky-500 p-2'>
      <p>
        <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
          type="text" placeholder='User'
          onChange={signUpChange} name='email' value={userSignup.email}/>
      </p>
      <br />
      <p>
        <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
          type="password" placeholder='Password'
          onChange={signUpChange} name='password' value={userSignup.password}/>
      </p>
      <br />
      <button className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};