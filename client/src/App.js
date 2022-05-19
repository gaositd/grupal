import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// Hooks

// Components

function App() {

  console.log('Just trying something, if you see this you can delete it')

  
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

//what happens if i add this line