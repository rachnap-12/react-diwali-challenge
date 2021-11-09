import React, { useEffect, useState } from 'react'
import "./App.scss"

import Advice from "./components/Advice"

const App = () => {

  const [advice, setAdvice] = useState(null);

  const [changeAdvice, setChangeAdvice] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data))
    .catch(err => console.log(err))
  },[changeAdvice]);
  
  return (
   <>
    <button onClick={()=> setChangeAdvice(!changeAdvice)}>Get Advice</button>
    { advice && <Advice data={advice.slip} /> }
   </>
  )

}

export default App
