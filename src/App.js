import React, {useEffect, useRef} from 'react';

const App = () => {
  const timerRef = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current += 1;
      console.log(`Timer is ${timerRef.current}`)
    }, 1000)
    return () => clearInterval(interval);
  }, [])
  return (
    <div>
     <input type='text' id='inp' ></input>
    </div>
  )
}

export default App

