import React from 'react';
import { NavLink } from 'react-router-dom';

// import styles from './Landing.module.css';
import bgimage from "./bg_landing.jpg";

function Landing() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
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
          <p>
            <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none " type="text" placeholder='User' />
          </p>
          <br />
          <p className="text-xs">Password</p>
          <p>
            <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center" type="text" placeholder='Password' />
          </p>
          <br />
          <NavLink to='/home'>
            <div className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl">
              Enter the app
            </div>
          </NavLink>
          <NavLink to='/admin'>
            <div className="border-2 w-40 border-red-900 rounded-xl mt-20">
              Access as admin
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