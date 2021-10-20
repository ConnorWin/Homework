import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [time, setTime] = useState(2000);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.currentTarget.value))
  }
  const handleClick = () => {
    setTime(inputValue)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(!isHidden)
    }, time)
  }, [isHidden]);

  return (
    <div className="App">
      <div>
        <div>current interval time: {time}</div>
        <input onChange={handleInputChange}></input> <button onClick={handleClick}>set interval time</button>
      </div>
      {!isHidden && <img src={logo} className="App-logo" alt="logo" />}
    </div>
  );
}

export default App;
