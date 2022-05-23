import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// Hooks

// Components
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Details from './components/Details/Details';
import CreateCategory from './components/CreateCategory/CreateCategory';

function App() {

  /* To integrate with Catalogo 
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState() // For Details

  function handleDetails(id) {
    setLoading(true)
    setId(id)
    setLoading(false)
  } 
  */

  const {pathname} = useLocation()
  return (
    <div className="App">
      {/* {pathname === '/'?null:<Nav/>} */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/admin' element={<CreateCategory/>}/>
        {/* <Route pathelement={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;