import React, { useEffect, useState } from 'react'

import Advice from "./components/Advice"

const App = () => {

  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    // fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
    .then(res => res.json())
    .then(data => setAdvice(data))
    .catch(err => console.log(err))
  },[]);
  
  return (
   <>
    { advice && <Advice data={advice.slip} /> }
   </>
  )

}

export default App
