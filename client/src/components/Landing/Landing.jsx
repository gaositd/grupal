import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategories, getProducts, login, logout, signUp } from '../../redux/actions';

import bgimage from "./bg_landing.jpg";
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function Landing() {
  const dispatch = useDispatch();

  const [ sign, setSign ] = useState('')

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
  }

  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout())
    localStorage.removeItem("user")
  }

  function showLogin() {
    setSign('login')
  }

  function showSignup() {
    setSign('signup')
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-screen">
      <div className="col-start-1 col-end-2 relative">
        <div className="col-span-2">
          <h1 className="font-bold text-3xl p-6">CodeCamp</h1>
        </div>
        <div className="p-16 grid justify-items-center" >
          {/* Login form */}
          <div>
            {sign === '' &&
            <div className='flex justify-center gap-10 bg-slate-500'>
              <button onClick={showLogin} className='box-border w-40 bg-amber-700 text-white p-2 rounded-xl'>Login</button>
              <button onClick={showSignup} className='box-border w-40 bg-amber-700 text-white p-2 rounded-xl'>Sign Up</button>
            </div>
            }
            {sign === 'login' &&
              <div>
                <Login/>
                {/* <button onClick={emptyLogin} className='box-border w-40 bg-amber-700 text-white p-2 rounded-xl'>Login</button> */}
              </div>
            }
            {sign === 'signup' &&
              <Signup/>
            }
            {/* {!localStorage.getItem("user")?
            <Login/>
            :<button className="box-border w-40 bg-amber-500 text-white p-2 rounded-xl" onClick={handleLogout}>
              Logout
            </button>
            } */}
          </div>
          <br />

          {/* SignUp Form */}
          {/* <Signup/> */}
          <br />
          <NavLink to='/home'>
            <div className="box-border w-40 bg-amber-900 text-white p-2 rounded-xl">
              Enter as guest
            </div>
          </NavLink>
          <br />
          <br />
          <NavLink to='/home' className="border-2 w-40 border-red-900 rounded-xl">
              Admin site
          </NavLink>
        </div>
        <br />
        <br />
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