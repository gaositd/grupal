import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { getCategories, getProducts, login, logout, signUp } from '../../redux/actions';

import bgimage from "./bg_landing.jpg";

function Landing() {
  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState({email: '', password: ''})
  const [userSignup, setUserSignup] = useState({email: '', password: ''})
  const loggedUser = useSelector(state => state.loggedUser)

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
  }

  function loginChange(e) {
    setUserLogin({...userLogin, [e.target.name]:e.target.value})
  }
  function signUpChange(e) {
    setUserSignup({...userSignup, [e.target.name]:e.target.value})
  }

  function handleLogin(e) {
    e.preventDefault()
    dispatch(login(userLogin))
    setUserLogin({email: '', password: ''})
  }

  function handleSignUp(e) {
    e.preventDefault()
    dispatch(signUp(userSignup))
    setUserSignup({email: '', password: ''})
  }

  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-screen">
      <div className="col-start-1 col-end-2 relative">
        <div className="col-span-2">
          <h1 className="font-bold text-3xl p-6">CodeCamp</h1>
        </div>
        <div className="p-16 grid justify-items-center" >
          <p className="font-bold text-lg">Sign In</p>
          <br />
          <p className="text-xs">User Name</p>

          {/* Login form */}
          {!Object.keys(loggedUser).length?
          <div>
            <p>
              <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
                focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
                type="text" placeholder='User'
                onChange={loginChange} name='email' value={userLogin.email}/>
            </p>
            <br />
            <p className="text-xs">Password</p>
            <p>
              <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
                focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
                type="password" placeholder='Password'
                onChange={loginChange} name='password' value={userLogin.password}/>
            </p>
            <br />
            <button className="box-border w-40 bg-amber-500 text-white p-2 rounded-xl" onClick={handleLogin}>
              Login
            </button>
          </div>
          :<button className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl" onClick={handleLogout}>
            Logout
          </button>
          }
          <br />

          {/* SignUp Form */}

          <p>
            <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
              type="text" placeholder='User'
              onChange={signUpChange} name='email' value={userSignup.email}/>
          </p>
          <br />
          <p className="text-xs">Password</p>
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

          <br />
          <NavLink to='/home'>
            <div className="box-border w-40 bg-amber-900 text-white p-2 rounded-xl">
              Enter as guest
            </div>
          </NavLink>
          <br />
          <br />
          <NavLink to='/admin'>
            <div className="border-2 w-40 border-red-900 rounded-xl">
              Admin site
            </div>
          </NavLink>
        </div>
        <div className="p-16 text-xs absolute inset-x-0 bottom-0">
          <p>
            © 2022 Henry Part Time 04. Copyrights belongs to humanity...
          </p>
        </div>
      </div>
      <div className="col-start-2 col-span-2 " style={backgroundImageStyle} >
      </div>
    </div>
  );
};

export default Landing;