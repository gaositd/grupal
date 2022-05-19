import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// Hooks

// Components
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'

function App() {

  const {pathname} = useLocation()
  return (
    <div className="App">
      {/* {pathname === '/'?null:<Nav/>} */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Route pathelement={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;