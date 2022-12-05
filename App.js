import { useState } from 'react';
import './App.css';
import Liftstate from './Liftstate';

function App() {
  const getname = (e) =>{
    console.log("in main"+e);
  }
  return (
    <div className="App">
      <Liftstate getname={getname}/>
    </div>
  );
}

export default App;
