import React, { useEffect, useState } from 'react'
import "./App.scss"

import Advice from "./components/Advice"

const App = () => {

  const [advice, setAdvice] = useState(null);

  const [changeAdvice, setChangeAdvice] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    // fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
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
