import React, { useEffect, useState } from 'react';
import './App.css';
import IntroMessage from './component/IntroMessage';
import HomePage from './component/HomePage';

function App() {
  // Hook managing state - allowing manipulation of intro message 
  const [displayHome, showIntro] = useState(true);

  // Hook for managing side effects - like timers
  useEffect(() => {
    setTimeout(() => {
      showIntro(false);
    }, 1500)  
    // empty dependency array as second argument ensures this effect only occurs on initial render
  }, [])

  return (
    <>
      {displayHome ? <IntroMessage/> : <HomePage/>}
    </>
  )
}

export default App;

