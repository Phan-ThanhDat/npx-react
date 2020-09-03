import React from 'react';
import logo from './logo.svg';
import './App.css';

const a = (b) => {
  console.log(b);
};
function App() {
  return (
    <div className='App'>
      <button onClick={() => a('123')}>click here</button>
    </div>
  );
}

export default App;
