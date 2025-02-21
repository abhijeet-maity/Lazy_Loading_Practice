import React, { useState, useCallback } from 'react';
const Home = () => {
  const [inputData, setInputData] = useState("");

  const fetchData = () => {
    console.log("Fetching data...");
  }

  const Debouncing = (fn, delay) => {
    let timerId;
    return (...args) => {
      if(timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...args);
      },delay)
    }
  }

  const BetterFunction = useCallback(Debouncing(fetchData, 1000),[]);

  const handleChange = (e) => {
    setInputData(e.target.value);
    BetterFunction(e.target.value);
  };

  //!!!!!! Throttling !!!!!
  const handleClick = () => {
    console.log("Button clicked");
  }

  const Throttling = (fn, delay) => {
    let run = false;
    return (...args) => {
      if(!run){
        fn(...args);
        run = true;
        setTimeout(() => {
          run = false;
        }, delay);
      }
    }
  }

  const BetterThrottler = useCallback(Throttling(handleClick, 1500), []);

  return (
    <div>
      <h1>Welcome to Home</h1>
      <div>
        <h3>Debouncing</h3>
        <input type="text" value={inputData} placeholder='Enter something' onChange={handleChange}/>
      </div>
      <div>
        <h3>Throttling</h3>
        <button onClick={BetterThrottler}>Click</button>
      </div>
    </div>
  )
}

export default Home