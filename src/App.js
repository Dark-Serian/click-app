import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [num , setNumber] = useState(0)
  function Clicker(){
    setNumber(num+100)
    if(num == 2000){
      setNumber(num+1000)
    }
    if(num == 10000){
      setNumber(num-100000)
    }
  }
  return (
    
    <div className="App">
      <h1 className="texx">{num}</h1>
      <button className="btn" onClick={Clicker}></button>
      <h2 className="about">اگه تونستی عددو روی 11000 نگه داری ازش اسکرین شات بگیر و به آیدی من توی تلگرام بفرست تا یک میلیون پول بگیری</h2>
      <a href="https://web.telegram.org/a/#5982979230" target="_blank">آیدی تلگرام</a> 
    </div>
  );
}

export default App;