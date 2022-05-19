import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";



function App() {

  
  const {pathname} = useLocation()
  return (
    <div className="App">
      {pathname === '/'?null:<Nav/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home 
        onSearch={onSearch} handleDetails={handleDetails} 
        allPosts={meal} loading={loading} 
        />}/>
        <Route path="/create" element={<Create />}/>
        <Route path='/details' element={<Details id={id}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;