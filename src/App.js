import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';
import React,{ useState } from 'react';
function App() {
const [mode , setMode] =  useState('light');

const toggleMode = () =>{
  // console.log(mode)
   if(mode === 'light'){
      console.log(mode)
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
  }
    else{
      console.log("else",mode)
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
  <Navbar title ="textutils" mode ={mode} toggleMode={toggleMode}/>
  <div className='container my-3'>
  <Form heading="Enter  the  text  to analyze-" mode ={mode}/>
  </div>
  </>   
  );
}

export default App;
